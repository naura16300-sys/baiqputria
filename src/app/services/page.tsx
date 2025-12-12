"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings,
  Wrench,
  Package,
  Users,
  Truck,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  Quote,
  Cpu,
  Factory,
  Construction,
  Zap,
  Tool,
  Gauge,
  Cog,
  Hammer
} from 'lucide-react';
import { 
  companyInfo, 
  services, 
  businessScope, 
  testimonials
} from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const processSteps = [
    {
      step: "01",
      title: "Analisis Kebutuhan",
      description: "Tim kami akan menganalisis kebutuhan spesifik industri Anda",
      icon: Users
    },
    {
      step: "02", 
      title: "Rekomendasi Produk",
      description: "Kami menyediakan solusi terbaik dengan harga kompetitif",
      icon: Package
    },
    {
      step: "03",
      title: "Instalasi & Setup",
      description: "Proses instalasi profesional oleh teknisi bersertifikasi",
      icon: Settings
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Pelatihan pengoperasian dan layanan purna jual",
      icon: Wrench
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Jasa pengiriman dan instalasi ke seluruh Indonesia"
    },
    {
      icon: Shield,
      title: "Warranty & Maintenance",
      description: "Garansi resmi dan layanan maintenance berkala"
    },
    {
      icon: Cpu,
      title: "Technical Support",
      description: "Support teknis 24/7 untuk troubleshooting"
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      description: "Uji kinerja dan kalibrasi peralatan"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Peralatan produksi dan mesin manufaktur"
    },
    {
      name: "Construction",
      icon: Construction,
      description: "Mesin konstruksi dan alat berat"
    },
    {
      name: "Agriculture",
      icon: Hammer,
      description: "Mesin pertanian dan pengolahan hasil"
    },
    {
      name: "Automotive",
      icon: Cog,
      description: "Peralatan bengkel dan automotive workshop"
    },
    {
      name: "Energy",
      icon: Zap,
      description: "Generator dan sistem tenaga industri"
    },
    {
      name: "Workshop",
      icon: Tool,
      description: "Tools dan peralatan workshop lengkap"
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
              <Settings className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Layanan Kami</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Solusi Lengkap
              </span>
              <br />
              <span className="text-white">Kebutuhan Industrial Anda</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Dengan jaringan distribusi yang luas dan dukungan tenaga ahli berpengalaman, 
              perusahaan kami mampu menyediakan mesin-mesin unggulan, peralatan kerja presisi, 
              sparepart berkualitas, hingga perlengkapan teknis yang memenuhi kebutuhan operasional pelanggan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                asChild
              >
                <Link href="/portfolio">
                  Lihat Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Layanan
              <span className="text-blue-900"> Utama Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk mendukung operasional dan produktivitas industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedService === index 
                    ? 'ring-2 ring-blue-900 shadow-2xl' 
                    : 'hover:shadow-xl border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-blue-900" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                {selectedService === index && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Fitur Layanan:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white"
                        >
                          <Link href="/contact">
                            Diskusikan Kebutuhan Anda
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Scope Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Lingkup
              <span className="text-blue-900"> Bisnis</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berbagai macam mesin dan peralatan untuk mendukung operasional industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessScope.map((scope, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
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

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industri yang
              <span className="text-blue-900"> Kami Layani</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pengalaman luas dalam melayani berbagai sektor industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{industry.description}</p>
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
              Proses
              <span className="text-blue-900"> Kerja Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Langkah-langkah sistematis untuk memastikan kepuasan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
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

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Layanan
              <span className="text-blue-900"> Tambahan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dukungan lengkap untuk memaksimalkan investasi peralatan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Apa Kata
              <span className="text-blue-900"> Klien Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah bukti kualitas layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-900 mr-2" />
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
              <Link href="/contact">
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