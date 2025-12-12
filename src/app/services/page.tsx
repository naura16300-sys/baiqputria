"use client";

import {
  ArrowRight,
  CheckCircle,
  Settings,
  Wrench,
  Hammer,
  Package,
  Users,
  Truck,
  Shield,
  Cpu,
  Factory,
  Construction,
  Zap,
  Gauge,
  Cog,
  Phone,
  Quote,
  Star,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      name: "Industrial Maintenance",
      description:
        "Perawatan mesin industri, perbaikan komponen, dan optimasi proses produksi untuk menjaga efisiensi maksimal.",
      icon: Cog,
    },
    {
      name: "Workshop & Tools",
      description:
        "Workshop profesional dengan berbagai peralatan teknis untuk kebutuhan permesinan dan fabrikasi.",
      icon: Wrench,
    },
    {
      name: "Equipment Installation",
      description:
        "Pemasangan peralatan industri, kalibrasi, dan integrasi sistem untuk memastikan operasional berjalan lancar.",
      icon: Hammer,
    },
    {
      name: "Logistic Support",
      description:
        "Layanan pengiriman, transportasi peralatan, dan distribusi supply chain dalam skala industri.",
      icon: Truck,
    },
    {
      name: "Safety & Compliance",
      description:
        "Standarisasi K3, alat keselamatan kerja, dan audit compliance sesuai regulasi industri.",
      icon: Shield,
    },
    {
      name: "Automation System",
      description:
        "Integrasi sistem otomasi, sensor, hingga perangkat IoT untuk modernisasi fasilitas industri.",
      icon: Cpu,
    },
  ];

  const industries = [
    {
      name: "Manufacturing",
      description:
        "Dukungan teknis penuh untuk industri manufaktur, produksi massal, dan pabrikasi komponen.",
      icon: Factory,
    },
    {
      name: "Construction",
      description:
        "Mendukung kebutuhan alat, permesinan, dan layanan teknis untuk sektor konstruksi modern.",
      icon: Construction,
    },
    {
      name: "Energy & Power",
      description:
        "Sistem kelistrikan, panel, dan perangkat pendukung untuk sektor energi dan utilitas.",
      icon: Zap,
    },
    {
      name: "Transport & Logistic",
      description:
        "Peralatan pendukung logistik, kendaraan operasional, dan fasilitas transportasi.",
      icon: Truck,
    },
    {
      name: "Public Services",
      description:
        "Peralatan dan instalasi untuk fasilitas umum, pemerintahan, infrastruktur, dan layanan publik.",
      icon: Users,
    },
    {
      name: "Workshop",
      description:
        "Peralatan bengkel, maintenance tools, dan perlengkapan kerja profesional.",
      icon: Wrench,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h1>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* INDUSTRIES */}
        <h2 className="text-3xl font-bold text-center mt-20 mb-12 text-gray-900">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
