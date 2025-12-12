"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building,
  Users,
  CheckCircle,
  Navigation
} from 'lucide-react';
import { 
  companyInfo, 
  contactInfo,
  businessScope
} from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      value: companyInfo.phone,
      description: "Hubungi kami langsung untuk konsultasi cepat",
      action: `tel:${companyInfo.phone}`
    },
    {
      icon: Mail,
      title: "Email",
      value: companyInfo.email,
      description: "Kirim email untuk pertanyaan detail",
      action: `mailto:${companyInfo.email}`
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Kolaka, Sulawesi Tenggara",
      description: "Kunjungi kantor kami untuk diskusi langsung",
      action: "#"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Sabtu",
      description: `${companyInfo.workingHours.weekdays}, ${companyInfo.workingHours.saturday}`,
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara memesan produk?",
      answer: "Anda dapat menghubungi kami melalui telepon, email, atau mengisi form kontak. Tim kami akan segera merespons dan membantu proses pemesanan."
    },
    {
      question: "Apakah ada garansi untuk produk?",
      answer: "Ya, semua produk yang kami jual dilengkapi dengan garansi resmi dari produsen. Kami juga menyediakan layanan purna jual yang komprehensif."
    },
    {
      question: "Berapa lama pengiriman produk?",
      answer: "Waktu pengiriman bervariasi tergantung lokasi dan jenis produk. Untuk wilayah Sulawesi Tenggara biasanya 1-3 hari, luar pulau 3-7 hari."
    },
    {
      question: "Apakah menyediakan instalasi?",
      answer: "Ya, kami menyediakan layanan instalasi dan setup oleh teknisi berpengalaman untuk produk tertentu."
    }
  ];

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
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Hubungi Kami</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Mari Berkolaborasi
              </span>
              <br />
              <span className="text-white">Untuk Kesuksesan Anda</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik 
              untuk kebutuhan mesin dan peralatan teknik industri Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Link href="#contact-form">
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan Sekarang
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                asChild
              >
                <Link href="tel:+6285353887447">
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Langsung
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Cara
              <span className="text-blue-900"> Menghubungi Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih cara yang paling nyaman untuk Anda. Kami siap membantu 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900 font-semibold mb-2">{method.value}</p>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  {method.action !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                    >
                      <Link href={method.action}>
                        Hubungi
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kirim Pesan
                  <span className="text-blue-900"> kepada Kami</span>
                </h2>
                <p className="text-gray-600">
                  Isi form di bawah ini dan tim kami akan segera menghubungi Anda
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="PT. Example"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Konsultasi Produk"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                    placeholder="Jelaskan kebutuhan Anda..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold px-8 py-4 shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Office Location Card */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Building className="w-5 h-5 text-blue-900 mr-2" />
                    Kantor Pusat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Alamat</p>
                      <p className="text-gray-600 text-sm">{contactInfo.mainOffice.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Telepon</p>
                      <a href={`tel:${companyInfo.phone}`} className="text-blue-900 hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-blue-900 hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Jam Operasional</p>
                      <p className="text-gray-600 text-sm">{companyInfo.workingHours.weekdays}</p>
                      <p className="text-gray-600 text-sm">{companyInfo.workingHours.saturday}</p>
                      <p className="text-gray-600 text-sm">{companyInfo.workingHours.sunday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="w-16 h-16 text-blue-900/50 mx-auto mb-4" />
                      <p className="text-blue-900 font-semibold">Peta Lokasi</p>
                      <p className="text-blue-900/70 text-sm">Kolaka, Sulawesi Tenggara</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button
                      size="sm"
                      className="bg-blue-900 text-white hover:bg-blue-800"
                      asChild
                    >
                      <Link href="https://maps.google.com" target="_blank">
                        Buka di Google Maps
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Respons Cepat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tim kami siap merespons pertanyaan Anda dalam waktu 24 jam
                  </p>
                  <Button
                    asChild
                    className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                  >
                    <Link href="tel:+6285353887447">
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi Sekarang
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pertanyaan yang
              <span className="text-blue-900"> Sering Diajukan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Memulai
            <span className="text-yellow-400"> Proyek Anda?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim profesional siap membantu menemukan solusi terbaik untuk kebutuhan industri Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact-form">
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan Sekarang
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
      </section>

      <Footer />
    </div>
  );
}