"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  Building,
  Globe,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { 
  companyInfo, 
  companyVision, 
  companyMission, 
  companyValues,
  certifications,
  achievements,
  teamMembers,
  contactInfo
} from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const timeline = [
    {
      year: "2019",
      title: "Didirikan",
      description: "CV BAIQ PUTRIA didirikan dengan fokus pada perdagangan mesin dan peralatan teknik"
    },
    {
      year: "2020",
      title: "Ekspansi Produk",
      description: "Menambah berbagai macam mesin industri dan peralatan teknik"
    },
    {
      year: "2021",
      title: "Partnership Global",
      description: "Menjalin kemitraan dengan produsen internasional ternama"
    },
    {
      year: "2022",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001:2015 untuk sistem manajemen mutu"
    },
    {
      year: "2023",
      title: "Ekspansi Regional",
      description: "Memperluas jaringan distribusi ke 5 provinsi di Indonesia Timur"
    },
    {
      year: "2024",
      title: "Inovasi Digital",
      description: "Meluncurkan platform digital untuk kemudahan akses pelanggan"
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
              <Building className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Tentang Perusahaan</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Mengenal Lebih Dekat
              </span>
              <br />
              <span className="text-white">CV BAIQ PUTRIA</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Perusahaan yang bergerak di bidang Perdagangan Besar Mesin, Peralatan, dan Perlengkapan Teknis 
              yang berkomitmen menghadirkan solusi industrial yang inovatif, berkualitas, dan berstandar internasional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Hubungi Kami
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

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Mengapa Memilih
                  <span className="text-blue-900"> CV BAIQ PUTRIA?</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sebagai mitra terpercaya dalam industri mesin dan peralatan teknik, kami berkomitmen 
                  untuk memberikan solusi terbaik yang mendukung kesuksesan bisnis Anda.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-6 h-6 text-blue-900" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-900" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Pelanggan Puas</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-blue-900" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Sertifikasi</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-blue-900" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Komitmen</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="w-5 h-5 text-blue-900 mr-2" />
                    Lokasi Strategis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Berlokasi di Kab. Kolaka, Sulawesi Tenggara, kami memiliki akses strategis 
                    untuk melayani pelanggan di seluruh Indonesia, khususnya di wilayah Indonesia Timur.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                    Jaminan Kualitas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Semua produk yang kami sediakan telah melalui proses quality control yang ketat 
                    dan memiliki sertifikasi standar internasional.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    Pertumbuhan Berkelanjutan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Kami terus berinovasi dan mengembangkan jaringan untuk memberikan layanan 
                    yang lebih baik dan produk yang lebih lengkap.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Visi & Misi
              <span className="text-blue-900"> Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Panduan kami dalam memberikan layanan terbaik untuk kemajuan industri Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-900" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  {companyVision.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {companyVision.content}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-yellow-700">
                  {companyMission.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {companyMission.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nilai-Nilai
              <span className="text-blue-900"> Perusahaan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Perjalanan
              <span className="text-blue-900"> Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam sejarah CV BAIQ PUTRIA
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-5 h-5 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="ml-16 flex-1">
                      <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Calendar className="w-5 h-5 text-blue-900" />
                            <span className="font-bold text-blue-900 text-lg">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Sertifikasi & 
              <span className="text-blue-900"> Legalitas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bukudukungan komitmen kami pada standar kualitas dan kepatuhan hukum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-blue-900 font-medium mb-2">{cert.description}</p>
                      <p className="text-sm text-gray-600">Diterbitkan oleh: {cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tim
              <span className="text-blue-900"> Profesional</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Didukung oleh tenaga ahli berpengalaman dalam industri mesin dan teknik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-blue-900" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {member.position}
                  </CardTitle>
                  <p className="text-sm text-blue-900 font-medium">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
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
            Bergabunglah dengan Ratusan
            <span className="text-yellow-400"> Pelanggan Puas</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri kualitas layanan dan produk terbaik dari CV BAIQ PUTRIA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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