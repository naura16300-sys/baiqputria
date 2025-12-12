"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  Package,
  Settings,
  Wrench,
  Users
} from 'lucide-react';
import { companyInfo, contactInfo, quickLinks, services } from '@/lib/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">BP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-yellow-400 text-sm">Industrial Supply Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200"
                asChild
              >
                <Link href={companyInfo.social.facebook} target="_blank">
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200"
                asChild
              >
                <Link href={companyInfo.social.instagram} target="_blank">
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200"
                asChild
              >
                <Link href={companyInfo.social.linkedin} target="_blank">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200"
                asChild
              >
                <Link href={companyInfo.social.youtube} target="_blank">
                  <Youtube className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center group"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {contactInfo.mainOffice.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>{companyInfo.workingHours.weekdays}</p>
                  <p>{companyInfo.workingHours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">
              Subscribe Newsletter
            </h4>
            <p className="text-gray-300 mb-6">
              Dapatkan informasi terbaru tentang produk dan penawaran khusus dari kami
            </p>
            <form 
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-6 shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Powered by</span>
                <span className="text-yellow-400 font-semibold">CV BAIQ PUTRIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}