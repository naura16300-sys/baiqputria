"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  Calendar,
  MapPin,
  Building,
  Filter,
  Search,
  Eye,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { 
  companyInfo, 
  portfolioProjects,
  businessScope
} from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(portfolioProjects.map(project => project.category)))];

  // Filter projects based on category and search term
  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: Building,
      value: portfolioProjects.length,
      label: "Proyek Selesai",
      description: "Berhasil diselesaikan dengan kualitas terbaik"
    },
    {
      icon: Users,
      value: "50+",
      label: "Klien Puas",
      description: "Dari berbagai sektor industri"
    },
    {
      icon: Award,
      value: "15+",
      label: "Penghargaan",
      description: "Pengakuan atas kualitas layanan"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Tingkat Kepuasan",
      description: "Klien yang merekomendasikan kami"
    }
  ];

  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Portfolio Kami</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Proyek-Proyek
              </span>
              <br />
              <span className="text-white">Terbaik Kami</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Lihat berbagai proyek yang telah kami selesaikan dengan kualitas terbaik 
              dan kepuasan pelanggan yang tinggi di berbagai sektor industri
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Diskusikan Proyek Anda
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                asChild
              >
                <Link href="/services">
                  Lihat Layanan Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Proyek
              <span className="text-blue-900"> Unggulan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek terbaik yang telah kami selesaikan dengan hasil memuaskan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-blue-900/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {project.client}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Semua
              <span className="text-blue-900"> Proyek</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jelajahi semua proyek yang telah kami kerjakan
            </p>
          </div>

          {/* Filter and Search */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari proyek..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`${
                        selectedCategory === category
                          ? "bg-blue-900 text-white hover:bg-blue-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category === 'all' ? 'Semua' : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="w-16 h-16 text-blue-900/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {project.client}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Detail
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada proyek yang ditemukan dengan kriteria tersebut.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Kisah
              <span className="text-blue-900"> Sukses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah puas dengan layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proyek Tepat Waktu</h3>
                <p className="text-gray-600">
                  95% proyek selesai tepat waktu dengan kualitas terbaik
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Efisiensi Biaya</h3>
                <p className="text-gray-600">
                  Hemat hingga 30% dengan solusi optimal dari kami
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kepuasan Pelanggan</h3>
                <p className="text-gray-600">
                  Rating 4.9/5 dari ratusan klien yang puas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ingin Menjadi
            <span className="text-yellow-400"> Klien Berikutnya?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan proyek Anda dan dapatkan solusi terbaik dari tim profesional kami
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Mulai Konsultasi
              </Link>
            </Button>
            
            <div className="flex items-center space-x-6 text-white/80">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>{companyInfo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}