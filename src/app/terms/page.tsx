"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight,
  FileText,
  Shield,
  Gavel,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  Lock,
  Eye,
  Ban,
  Scale
} from 'lucide-react';
import { companyInfo, legalPages } from '@/lib/company';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const termsData = legalPages.terms;

  const keyPoints = [
    {
      icon: CheckCircle,
      title: "Penggunaan yang Sah",
      description: "Website ini hanya boleh digunakan untuk tujuan yang sah dan legal"
    },
    {
      icon: Shield,
      title: "Perlindungan Konten",
      description: "Semua konten dilindungi oleh hak kekayaan intelektual"
    },
    {
      icon: Users,
      title: "Tanggung Jawab Pengguna",
      description: "Pengguna bertanggung jawab atas aktivitas mereka di website"
    },
    {
      icon: Lock,
      title: "Keamanan Data",
      description: "Kami melindungi data pribadi sesuai kebijakan privasi"
    }
  ];

  const userObligations = [
    {
      title: "Informasi Akurat",
      description: "Memberikan informasi yang benar dan terkini"
    },
    {
      title: "Penggunaan Etis",
      description: "Menggunakan website dengan cara yang etis dan bertanggung jawab"
    },
    {
      title: "Kepatuhan Hukum",
      description: "Mematuhi semua hukum dan peraturan yang berlaku"
    },
    {
      title: "Tidak Melanggar Hak",
      description: "Tidak melanggar hak pihak ketiga atau hak kekayaan intelektual"
    }
  ];

  const companyRights = [
    {
      title: "Hak Kekayaan Intelektual",
      description: "Semua konten, desain, dan fungsi website adalah milik perusahaan"
    },
    {
      title: "Modifikasi Layanan",
      description: "Berhak mengubah atau menghentikan layanan kapan saja"
    },
    {
      title: "Pembatasan Akses",
      description: "Berhak membatasi atau menolak akses pengguna yang melanggar syarat"
    },
    {
      title: "Pembaruan Syarat",
      description: "Berhak memperbarui syarat dan ketentuan dari waktu ke waktu"
    }
  ];

  const prohibitedUses = [
    "Menggunakan website untuk aktivitas ilegal atau tidak sah",
    "Mencoba merusak atau mengganggu fungsi website",
    "Mengumpulkan data pengguna lain tanpa izin",
    "Mengirimkan konten yang tidak pantas atau melanggar hukum",
    "Menggunakan website untuk penipuan atau aktivitas curang",
    "Mencoba mendapatkan akses tidak sah ke sistem kami",
    "Menggunakan otomasi atau scraping tanpa izin tertulis",
    "Melanggar hak kekayaan intelektual pihak ketiga"
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
              <Gavel className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Syarat & Ketentuan</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Syarat & Ketentuan
              </span>
              <br />
              <span className="text-white">Penggunaan Website</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Syarat dan ketentuan ini mengatur penggunaan website {companyInfo.name} 
              dan layanan yang tersedia melalui platform kami
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
                <Link href="/privacy">
                  Lihat Kebijakan Privasi
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
            <span className="font-medium">Terakhir diperbarui: {termsData.lastUpdated}</span>
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
                Syarat & Ketentuan
                <span className="text-blue-900"> {companyInfo.name}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Selamat datang di website {companyInfo.name}. Dengan mengakses dan menggunakan 
                website ini, Anda setuju untuk terikat oleh syarat dan ketentuan berikut. 
                Jika Anda tidak setuju dengan syarat ini, harap tidak menggunakan website kami.
              </p>
            </div>

            {/* Key Points */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Poin Penting
                <span className="text-blue-900"> Syarat & Ketentuan</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyPoints.map((point, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                        <point.icon className="w-8 h-8 text-blue-900" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {point.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Terms & Conditions Sections */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Detail Syarat
                <span className="text-blue-900"> & Ketentuan</span>
              </h3>
              
              {termsData.sections.map((section, index) => (
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

            {/* User Obligations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Kewajiban
                <span className="text-blue-900"> Pengguna</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userObligations.map((obligation, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{obligation.title}</h4>
                          <p className="text-gray-600 text-sm">{obligation.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Company Rights */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Hak
                <span className="text-blue-900"> Perusahaan</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companyRights.map((right, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="w-5 h-5 text-blue-900" />
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

            {/* Prohibited Uses */}
            <Card className="bg-gradient-to-br from-red-50 to-white border-red-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Ban className="w-5 h-5 text-red-600 mr-2" />
                  Penggunaan yang Dilarang
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pengguna dilarang keras untuk melakukan hal-hal berikut saat menggunakan website kami:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {prohibitedUses.map((prohibited, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-600">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      {prohibited}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Sejauh diizinkan oleh hukum, {companyInfo.name} tidak bertanggung jawab atas:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kerugian langsung, tidak langsung, insidental, atau konsekuensial</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kehilangan data, keuntungan, atau peluang bisnis</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kerusakan yang disebabkan oleh gangguan atau downtime website</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Konten dari pihak ketiga yang terhubung ke website kami</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Scale className="w-5 h-5 text-blue-900 mr-2" />
                  Hukum yang Berlaku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                  Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan 
                  syarat dan ketentuan ini akan diselesaikan melalui perundingan baik-baik.
                </p>
                <p className="text-gray-700">
                  Jika perundingan tidak berhasil, sengketa akan diselesaikan melalui 
                  pengadilan yang berwenang di wilayah hukum Republik Indonesia.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-green-600 mr-2" />
                  Pertanyaan tentang Syarat & Ketentuan?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, 
                  silakan hubungi kami:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-900" />
                    <span className="text-gray-700">{companyInfo.website}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-blue-900" />
                    <span className="text-gray-700">Lihat halaman Kontak</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white border-2 border-blue-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dengan Menggunakan Website Ini
              </h3>
              <p className="text-gray-700 mb-6">
                Anda mengakui bahwa telah membaca, memahami, dan setuju untuk terikat 
                oleh syarat dan ketentuan yang berlaku. Penggunaan berkelanjutan 
                website ini constitutes penerimaan Anda terhadap syarat ini.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-900">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Terima kasih atas kepercayaan Anda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Butuh Bantuan atau
            <span className="text-yellow-400"> Pertanyaan?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan Anda tentang syarat dan ketentuan penggunaan website
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
              <Link href="/privacy">
                Lihat Kebijakan Privasi
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}