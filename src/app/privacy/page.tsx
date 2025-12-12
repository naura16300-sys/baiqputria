"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Database,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Globe,
  Cookie,
  Mail
} from 'lucide-react';
import { companyInfo, legalPages } from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  const privacyData = legalPages.privacy;

  const principles = [
    {
      icon: Shield,
      title: "Keamanan Data",
      description: "Kami menggunakan langkah-langkah keamanan terbaik untuk melindungi informasi pribadi Anda"
    },
    {
      icon: Eye,
      title: "Transparansi",
      description: "Kami jelas tentang data apa yang kami kumpulkan dan bagaimana menggunakannya"
    },
    {
      icon: Users,
      title: "Kontrol Pengguna",
      description: "Anda memiliki kontrol penuh atas data pribadi Anda"
    },
    {
      icon: Lock,
      title: "Minimalisasi Data",
      description: "Kami hanya mengumpulkan data yang benar-benar diperlukan"
    }
  ];

  const dataTypes = [
    {
      category: "Data yang Anda Berikan",
      items: [
        "Nama dan informasi kontak (email, telepon)",
        "Informasi perusahaan dan jabatan",
        "Pesan dan komunikasi dengan kami",
        "Data formulir kontak dan permintaan"
      ]
    },
    {
      category: "Data yang Dikumpulkan Otomatis",
      items: [
        "Alamat IP dan informasi lokasi",
        "Jenis browser dan perangkat",
        "Data penggunaan website (halaman yang dikunjungi, waktu yang dihabiskan)",
        "Cookie dan data pelacakan"
      ]
    },
    {
      category: "Data dari Pihak Ketiga",
      items: [
        "Informasi dari mitra bisnis kami",
        "Data verifikasi dari layanan eksternal",
        "Informasi publik dari profil profesional"
      ]
    }
  ];

  const userRights = [
    {
      title: "Hak Akses",
      description: "Anda berhak mengetahui data pribadi apa yang kami simpan tentang Anda"
    },
    {
      title: "Hak Koreksi",
      description: "Anda dapat memperbarui atau memperbaiki data pribadi yang tidak akurat"
    },
    {
      title: "Hak Penghapusan",
      description: "Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu"
    },
    {
      title: "Hak Pembatasan",
      description: "Anda dapat membatasi pemrosesan data pribadi Anda"
    },
    {
      title: "Hak Portabilitas",
      description: "Anda dapat meminta transfer data pribadi Anda dalam format yang terstruktur"
    },
    {
      title: "Hak Penolakan",
      description: "Anda dapat menolak pemrosesan data pribadi Anda"
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
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Kebijakan Privasi</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Perlindungan Data
              </span>
              <br />
              <span className="text-white">Privasi Anda</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Kami berkomitmen untuk melindungi privasi dan data pribadi Anda sesuai 
              dengan standar internasional GDPR dan peraturan yang berlaku
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
                <Link href="/terms">
                  Lihat Syarat & Ketentuan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-blue-900">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Terakhir diperbarui: {privacyData.lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kebijatan Privasi
                <span className="text-blue-900"> {companyInfo.name}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Di {companyInfo.name}, kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan 
                privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
                melindungi informasi pribadi Anda.
              </p>
            </div>

            {/* Privacy Principles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Prinsip Privasi
                <span className="text-blue-900"> Kami</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                        <principle.icon className="w-8 h-8 text-blue-900" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {principle.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Data Collection */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Data yang Kami
                <span className="text-blue-900"> Kumpulkan</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dataTypes.map((dataType, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {dataType.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {dataType.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Privacy Policy Sections */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Detail Kebijakan
                <span className="text-blue-900"> Privasi</span>
              </h3>
              
              {privacyData.sections.map((section, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <FileText className="w-5 h-5 text-blue-900 mr-2" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* User Rights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Hak
                <span className="text-blue-900"> Anda</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userRights.map((right, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                          <p className="text-gray-600 text-sm">{right.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cookie Policy */}
            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Cookie className="w-5 h-5 text-yellow-600 mr-2" />
                  Kebijakan Cookie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis traffic. 
                  Cookie adalah file teks kecil yang disimpan di browser Anda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Jenis Cookie yang Kami Gunakan:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Cookie Esensial (wajib untuk fungsi website)</li>
                      <li>• Cookie Analitik (untuk memahami penggunaan)</li>
                      <li>• Cookie Fungsional (untuk mengingat preferensi)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mengelola Cookie:</h4>
                    <p className="text-sm text-gray-600">
                      Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. 
                      Menonaktifkan cookie tertentu dapat memengaruhi fungsi website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <AlertCircle className="w-5 h-5 text-blue-900 mr-2" />
                  Pertanyaan tentang Privasi?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  menjalankan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-900" />
                    <span className="text-gray-700">{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-900" />
                    <span className="text-gray-700">{companyInfo.website}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GDPR Compliance */}
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Kepatuhan GDPR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Kami mematuhi General Data Protection Regulation (GDPR) dan melindungi 
                  data pengguna sesuai standar internasional. Ini termasuk:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Memproses data secara legal dan transparan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meminimalkan pengumpulan data yang tidak perlu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Menyediakan kontrol kepada pengguna atas data mereka</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Melindungi data dengan langkah-langkah keamanan yang tepat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Perlindungan Data Anda adalah
            <span className="text-yellow-400"> Prioritas Kami</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Kami terus berkomitmen untuk menjaga kepercayaan Anda dengan melindungi 
            data pribadi sesuai standar tertinggi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <Link href="/terms">
                Lihat Syarat & Ketentuan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}