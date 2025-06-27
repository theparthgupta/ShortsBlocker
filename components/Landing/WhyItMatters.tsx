"use client";
import { motion } from "framer-motion";
import { Clock, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Clock,
    title: "Hours Lost Daily",
    description: "Average person spends 2.5+ hours daily on short-form content",
    color: "text-red-400",
    gradient: "from-red-900/40 to-red-800/40",
    border: "border-red-500/30",
    bgGlow: "bg-red-500/5",
  },
  {
    icon: Brain,
    title: "Dopamine Fatigue",
    description: "Constant stimulation reduces your ability to focus on important tasks",
    color: "text-yellow-400",
    gradient: "from-yellow-900/40 to-orange-900/40",
    border: "border-yellow-500/30",
    bgGlow: "bg-yellow-500/5",
  },
  {
    icon: Target,
    title: "Productivity Killer",
    description: "Short videos fragment attention and destroy deep work sessions",
    color: "text-blue-400",
    gradient: "from-blue-900/40 to-cyan-900/40",
    border: "border-blue-500/30",
    bgGlow: "bg-blue-500/5",
  },
];

export default function WhyItMatters() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Every swipe chips away your time. Shorts Blocker helps you take it back.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br ${item.gradient} ${item.bgGlow} border ${item.border} p-8 h-full backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-${item.color.split("-")[1]}-500/20`}
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-16 h-16 ${item.color} mx-auto mb-6 relative`}>
                    <div
                      className={`absolute inset-0 ${item.color.replace("text-", "bg-").replace("-400", "-500/20")} rounded-full blur-xl`}
                    ></div>
                    <item.icon className={`w-16 h-16 ${item.color} relative z-10`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 