"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo, quickLinks } from '@/lib/company';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{companyInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{companyInfo.email}</span>
            </div>
          </div>
          <div className="text-gray-500">
            {companyInfo.workingHours.weekdays}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">BP</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                {companyInfo.name}
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 hidden sm:block">
                Industrial Supply Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {quickLinks.slice(0, 5).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-6 shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">BP</span>
                      </div>
                      <span className="font-semibold text-gray-900">CV BAIQ PUTRIA</span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6">
                    <div className="space-y-4">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={handleNavClick}
                          className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Contact Info */}
                    <div className="mt-8 pt-6 border-t space-y-4">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="w-5 h-5" />
                        <span>{companyInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail className="w-5 h-5" />
                        <span>{companyInfo.email}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>{companyInfo.workingHours.weekdays}</p>
                        <p>{companyInfo.workingHours.saturday}</p>
                      </div>
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="py-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white"
                    >
                      <Link href="/contact" onClick={handleNavClick}>
                        Hubungi Kami
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}