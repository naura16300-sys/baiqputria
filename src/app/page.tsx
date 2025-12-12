"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award,
  Settings,
  Wrench,
  Package,
  Truck,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { 
  companyInfo, 
  services, 
  businessScope, 
  achievements, 
  testimonials,
  contactInfo
} from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Kualitas Terjamin",
      description: "Semua produk kami memiliki standar internasional dan sertifikasi resmi"
    },
    {
      icon: Truck,
      title: "Pengiriman Cepat",
      description: "Jaringan distribusi luas memastikan pengiriman tepat waktu ke seluruh Indonesia"
    },
    {
      icon: Users,
      title: "Tim Ahli",
      description: "Didukung oleh tenaga ahli berpengalaman dalam industri mesin dan teknik"
    },
    {
      icon: Clock,
      title: "Layanan 24/7",
      description: "Support teknis tersedia kapan saja untuk kebutuhan mendesak Anda"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi",
      description: "Tim kami akan menganalisis kebutuhan spesifik industri Anda",
      icon: Users
    },
    {
      step: "02", 
      title: "Penawaran",
      description: "Kami menyediakan solusi terbaik dengan harga kompetitif",
      icon: Package
    },
    {
      step: "03",
      title: "Instalasi",
      description: "Proses instalasi profesional oleh teknisi bersertifikasi",
      icon: Settings
    },
    {
      step: "04",
      title: "Support",
      description: "Layanan purna jual dan maintenance berkelanjutan",
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-900 rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Tentang CV BAIQ PUTRIA</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Mitra Terpercaya untuk
                <span className="text-blue-900"> Solusi Industrial</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                CV BAIQ PUTRIA adalah perusahaan yang bergerak di bidang Perdagangan Besar Mesin, 
                Peralatan, dan Perlengkapan Teknis yang berkomitmen menghadirkan solusi industrial 
                yang inovatif, berkualitas, dan berstandar internasional.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button
                asChild
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-3"
              >
                <Link href="/about" className="flex items-center">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{achievement.year}</p>
                      <p className="text-sm font-medium text-gray-900 mb-2">{achievement.title}</p>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-900 rounded-full px-4 py-2 mb-6">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Layanan Kami</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Solusi Lengkap untuk
              <span className="text-blue-900"> Kebutuhan Industrial</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengan jaringan distribusi yang luas dan dukungan tenaga ahli berpengalaman, 
              perusahaan kami mampu menyediakan mesin-mesin unggulan, peralatan kerja presisi, 
              sparepart berkualitas, hingga perlengkapan teknis yang memenuhi kebutuhan operasional pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3"
            >
              <Link href="/services">
                Lihat Semua Layanan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Scope Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Lingkup Bisnis
              <span className="text-blue-900"> Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai macam mesin dan peralatan untuk mendukung operasional industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessScope.map((scope, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {scope.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scope.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Proses Kerja
              <span className="text-blue-900"> Profesional</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami mengikuti proses yang terstruktur untuk memastikan kepuasan pelanggan dan hasil terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-blue-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Apa Kata
              <span className="text-blue-900"> Klien Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-xs text-blue-900">{testimonial.company}</p>
                    </div>
                  </div>
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
            Siap Meningkatkan Efisiensi
            <span className="text-yellow-400"> Industri Anda?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk kebutuhan industrial Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami Sekarang
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
              asChild
            >
              <Link href="/portfolio">
                Lihat Portfolio Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}