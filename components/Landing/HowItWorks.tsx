"use client";
import { motion } from "framer-motion";
import { Focus, Shield, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Monitors Duration",
    description: "Automatically detects video length across all major platforms",
    icon: Focus,
    color: "blue",
  },
  {
    step: "02",
    title: "Blocks Short Content",
    description: "Hides or blocks any video content under 120 seconds",
    icon: Shield,
    color: "purple",
  },
  {
    step: "03",
    title: "Saves Your Time",
    description: "Works on YouTube, TikTok, Instagram Reels, and more",
    icon: CheckCircle,
    color: "green",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, automatic, and effective. Install once and let it work in the background.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`rounded-2xl p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-${step.color}-500/20 shadow-lg hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-${step.color}-500 to-${step.color}-700 mr-4`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 