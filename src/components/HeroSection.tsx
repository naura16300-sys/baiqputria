"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Play, 
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Package
} from 'lucide-react';
import { companyInfo } from '@/lib/company';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const heroSlides = [
    {
      title: "Solusi Industrial Terpercaya",
      subtitle: "Mesin dan Peralatan Teknis Berkualitas Internasional",
      description: "CV BAIQ PUTRIA menyediakan berbagai mesin industri, peralatan teknik, dan sparepart berkualitas untuk mendukung kesuksesan bisnis Anda.",
      cta: "Hubungi Kami",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Distributor Resmi Produk Internasional",
      subtitle: "Kualitas Terjamin, Harga Kompetitif",
      description: "Kami adalah distributor resmi untuk berbagai merek ternama dunia dengan jaminan kualitas dan layanan purna jual terbaik.",
      cta: "Lihat Produk",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Solusi Lengkap untuk Industri Anda",
      subtitle: "Dari Mesin Hingga Peralatan Teknis",
      description: "One-stop solution untuk semua kebutuhan industrial supply Anda dengan pengalaman lebih dari 10 tahun.",
      cta: "Portfolio Kami",
      image: "/api/placeholder/1920/1080"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Proyek Selesai",
      description: "Berhasil menyelesaikan ratusan proyek industrial supply"
    },
    {
      icon: Users,
      value: "200+",
      label: "Pelanggan Puas",
      description: "Klien dari berbagai industri di seluruh Indonesia"
    },
    {
      icon: Award,
      value: "15+",
      label: "Tahun Pengalaman",
      description: "Dedikasi dan keahlian dalam industrial supply"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Kualitas Terjamin",
      description: "Produk dengan standar internasional dan sertifikasi"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">
                Distributor Resmi & Terpercaya
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-yellow-400 font-medium">
                {heroSlides[currentSlide].subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25"
              >
                <Link href="/contact" className="flex items-center">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 transform transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/portfolio">
                  Lihat Portfolio
                </Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telepon</p>
                  <p className="font-medium">{companyInfo.phone}</p>
                </div>
              </a>
              
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{companyInfo.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Package className="w-12 h-12 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Industrial Supply Solutions
                    </h3>
                    <p className="text-gray-200 max-w-md mx-auto">
                      Solusi lengkap untuk kebutuhan mesin dan peralatan teknik industri Anda
                    </p>
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-blue-900 font-bold text-lg">10+</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Award className="w-10 h-10 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-yellow-400/30 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-yellow-400 font-medium">{stat.label}</p>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 bg-yellow-400'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}