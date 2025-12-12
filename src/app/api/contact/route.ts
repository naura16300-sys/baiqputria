import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Validate phone format (basic Indonesian phone number validation)
    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
    if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create email content using AI
    const emailContent = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Anda adalah asisten AI untuk CV BAIQ PUTRIA, perusahaan yang bergerak di bidang Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis. Buat email balasan profesional untuk klien yang menghubungi kami melalui form kontak website.

Informasi Perusahaan:
- Nama: CV BAIQ PUTRIA
- Bidang: Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis
- Deskripsi: Perusahaan yang berkomitmen menghadirkan solusi industrial yang inovatif, berkualitas, dan berstandar internasional
- Telepon: 085353887447
- Email: info@cvbaiqputria.com
- Alamat: Jalan Durian Nomor 140, Kel. Sakuli, Kec. Latambaga, Kab. Kolaka, Provinsi Sulawesi Tenggara

Format email:
1. Subject line yang informatif
2. Salam profesional
3. Ucapan terima kasih
4. Konfirmasi penerimaan pesan
5. Informasi waktu respons
6. Penawaran bantuan
7. Penutup profesional
8. Informasi kontak

Tone: Profesional, ramah, dan responsif.`
        },
        {
          role: 'user',
          content: `Buat email balasan untuk klien dengan detail berikut:
- Nama: ${name}
- Email: ${email}
- Telepon: ${phone}
- Perusahaan: ${company || 'Tidak disebutkan'}
- Subjek: ${subject}
- Pesan: ${message}

Email harus dalam bahasa Indonesia yang profesional dan formal.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const generatedEmail = emailContent.choices[0]?.message?.content;

    if (!generatedEmail) {
      throw new Error('Failed to generate email content');
    }

    // Here you would normally:
    // 1. Save the contact form data to database
    // 2. Send email to the company
    // 3. Send auto-reply to the customer
    // 4. Log the contact attempt

    // For now, we'll just return success with the generated email content
    // In a real implementation, you would use a service like SendGrid, Nodemailer, etc.

    // Simulate saving to database
    const contactData = {
      name,
      email,
      phone,
      company: company || null,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: 'received'
    };

    // Log the contact data (in production, save to database)
    console.log('Contact form submission:', contactData);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim successfully! Kami akan segera menghubungi Anda.',
      data: {
        id: Date.now(), // In production, use database ID
        ...contactData
      },
      autoReply: generatedEmail
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint - Use POST method to submit contact form',
    usage: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: 'string (required)',
        email: 'string (required)',
        phone: 'string (required)',
        company: 'string (optional)',
        subject: 'string (required)',
        message: 'string (required)'
      }
    }
  });
}