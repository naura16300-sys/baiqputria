import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create welcome email content using AI
    const emailContent = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Anda adalah asisten AI untuk CV BAIQ PUTRIA, perusahaan yang bergerak di bidang Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis. Buat email selamat datang untuk pelanggan yang berlangganan newsletter kami.

Informasi Perusahaan:
- Nama: CV BAIQ PUTRIA
- Bidang: Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis
- Deskripsi: Perusahaan yang berkomitmen menghadirkan solusi industrial yang inovatif, berkualitas, dan berstandar internasional
- Website: www.cvbaiqputria.com
- Telepon: 085353887447
- Email: info@cvbaiqputria.com

Format email:
1. Subject line yang menarik
2. Salam hangat
3. Ucapan terima kasih untuk berlangganan
4. Informasi tentang apa yang akan mereka dapatkan
5. Penawaran khusus untuk subscriber
6. Informasi kontak
7. Link unsubscribe

Tone: Profesional, hangat, dan informatif.`
        },
        {
          role: 'user',
          content: `Buat email selamat datang untuk pelanggan baru dengan email: ${email}

Email harus dalam bahasa Indonesia yang profesional namun tetap hangat.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const generatedEmail = emailContent.choices[0]?.message?.content;

    if (!generatedEmail) {
      throw new Error('Failed to generate welcome email');
    }

    // Here you would normally:
    // 1. Save the email to newsletter database
    // 2. Send welcome email to the subscriber
    // 3. Add them to email marketing service (Mailchimp, SendGrid, etc.)
    // 4. Log the subscription

    // Simulate saving to database
    const subscriptionData = {
      email,
      timestamp: new Date().toISOString(),
      status: 'active',
      source: 'website_footer'
    };

    // Log the subscription data (in production, save to database)
    console.log('Newsletter subscription:', subscriptionData);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Terima kasih telah berlangganan newsletter kami!',
      data: {
        id: Date.now(), // In production, use database ID
        ...subscriptionData
      },
      welcomeEmail: generatedEmail
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'Terjadi kesalahan saat berlangganan newsletter. Silakan coba lagi.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Newsletter API endpoint - Use POST method to subscribe',
    usage: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: 'string (required)'
      }
    }
  });
}