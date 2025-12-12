import { NextRequest, NextResponse } from 'next/server';
import { portfolioProjects } from '@/lib/company';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Filter projects based on category and search
    let filteredProjects = portfolioProjects;

    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProjects = filteredProjects.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower)
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    // Get unique categories
    const categories = Array.from(new Set(portfolioProjects.map(project => project.category)));

    return NextResponse.json({
      success: true,
      data: {
        projects: paginatedProjects,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredProjects.length / limit),
          totalProjects: filteredProjects.length,
          hasNextPage: endIndex < filteredProjects.length,
          hasPreviousPage: page > 1
        },
        filters: {
          categories: ['all', ...categories],
          currentCategory: category || 'all',
          currentSearch: search || ''
        }
      }
    });

  } catch (error) {
    console.error('Portfolio API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch portfolio data',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Get single project by ID
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    const project = portfolioProjects.find(p => p.id === parseInt(id));

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Get related projects (same category, excluding current project)
    const relatedProjects = portfolioProjects
      .filter(p => p.category === project.category && p.id !== project.id)
      .slice(0, 3);

    return NextResponse.json({
      success: true,
      data: {
        project,
        relatedProjects
      }
    });

  } catch (error) {
    console.error('Single project API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch project details',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}