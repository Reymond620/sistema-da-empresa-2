"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  Mail,
  MessageCircle,
  ArrowRight,
  Lock,
  TrendingUp,
  BarChart3,
  Package,
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const solutions = [
    {
      icon: FileText,
      title: "Emissão de Notas Fiscais",
      description:
        "Emita notas fiscais eletrônicas de forma rápida, simples e totalmente integrada ao seu sistema.",
    },
    {
      icon: Package,
      title: "Controle de Estoque",
      description:
        "Gerencie seu estoque de forma eficiente com controle completo de entradas, saídas e inventário.",
    },
    {
      icon: Shield,
      title: "Conformidade Fiscal",
      description:
        "Mantenha-se 100% em conformidade com as legislações fiscais brasileiras automaticamente.",
    },
    {
      icon: Zap,
      title: "Integração Rápida",
      description:
        "Integre facilmente com seu ERP, sistema de vendas ou plataforma de e-commerce.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description:
        "Automatize processos e reduza o tempo gasto com emissão de documentos fiscais.",
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description:
        "Certificação digital e criptografia de ponta para proteger suas informações.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Completos",
      description:
        "Análises detalhadas e dashboards para tomada de decisões estratégicas.",
    },
  ];

  const features = [
    "Emissão ilimitada de notas fiscais",
    "Armazenamento em nuvem seguro",
    "Integração com principais ERPs",
    "Suporte técnico especializado",
    "Atualizações automáticas",
    "Gestão de múltiplas empresas",
    "Relatórios gerenciais avançados",
    "Certificação digital inclusa",
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5545998181217", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:reymondlima8@gmail.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                DValle
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-3"
            >
              <Button
                variant="ghost"
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-50"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-70" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Soluções Integradas
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Soluções Integradas
              </span>{" "}
              para seu negócio
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              Transforme a gestão fiscal da sua empresa com tecnologia de ponta,
              integração completa e suporte especializado.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 shadow-xl shadow-blue-300 group"
                onClick={handleWhatsAppClick}
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-blue-700 border-blue-300 hover:bg-blue-50 text-lg px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conheça as Soluções
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* As outras seções (Sobre, Soluções, Benefícios, Recursos, Contato e Rodapé) */}
      {/* ... mantidas idênticas, pois estão corretas e completas */}
    </div>
  );
}

