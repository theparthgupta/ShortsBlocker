"use client";
import { motion } from "framer-motion";
import { Clock, Brain, Zap, Shield, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Reclaim Hours Weekly",
    description: "Get back 10+ hours per week previously lost to mindless scrolling",
    gradient: "from-blue-900/40 to-cyan-900/40",
    border: "border-blue-500/30",
    bgGlow: "bg-blue-500/5",
  },
  {
    icon: Brain,
    title: "Better Focus",
    description: "Reduce dopamine fatigue and improve your ability to concentrate",
    gradient: "from-purple-900/40 to-pink-900/40",
    border: "border-purple-500/30",
    bgGlow: "bg-purple-500/5",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Works immediately after installation with zero configuration",
    gradient: "from-yellow-900/40 to-orange-900/40",
    border: "border-yellow-500/30",
    bgGlow: "bg-yellow-500/5",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No data collection, no tracking, just pure functionality",
    gradient: "from-green-900/40 to-teal-900/40",
    border: "border-green-500/30",
    bgGlow: "bg-green-500/5",
  },
  {
    icon: Target,
    title: "Deep Work Mode",
    description: "Eliminate distractions and enter flow state more easily",
    gradient: "from-red-900/40 to-pink-900/40",
    border: "border-red-500/30",
    bgGlow: "bg-red-500/5",
  },
  {
    icon: CheckCircle,
    title: "Cross-Platform",
    description: "Works across YouTube, TikTok, Instagram, and more",
    gradient: "from-indigo-900/40 to-purple-900/40",
    border: "border-indigo-500/30",
    bgGlow: "bg-indigo-500/5",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Benefits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for students, professionals, creators — anyone who values their time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br ${benefit.gradient} ${benefit.bgGlow} border ${benefit.border} p-6 h-full backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-0">
                  <benefit.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 