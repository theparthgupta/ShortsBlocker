"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Chrome, ArrowRight, Play, CheckCircle, Heart, MessageCircle, Share, Cpu, Shield, Wifi } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [showFocusMessage, setShowFocusMessage] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sequence = async () => {
      setIsVideoPlaying(true);
      setVideoProgress(0);
      const progressInterval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 4;
        });
      }, 100);
      setTimeout(() => {
        setIsVideoPlaying(false);
        setIsBlocked(true);
        clearInterval(progressInterval);
        setTimeout(() => {
          setShowFocusMessage(true);
        }, 300);
      }, 2500);
      setTimeout(() => {
        setIsBlocked(false);
        setShowFocusMessage(false);
        setVideoProgress(0);
      }, 7000);
    };
    sequence();
    const interval = setInterval(sequence, 10000);
    return () => clearInterval(interval);
  }, []);

  const chromeStoreUrl = "https://chromewebstore.google.com/detail/Shorts%20Blocker/fpocknlahcfpbcgkdnlpaodnoljofdkg";

  return (
    <section className="relative min-h-screen flex items-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-300">AI-Powered Focus Enhancement</span>
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Stop Wasting
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Time on Shorts
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Block short-form content under 120 seconds.
                <span className="text-blue-300"> Reclaim your focus</span> instantly.
              </p>
              <div className="flex flex-wrap items-center gap-4 py-4">
                <span className="text-sm text-gray-400">Works on:</span>
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 text-xs font-medium">
                    YouTube
                  </div>
                  <div className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-300 text-xs font-medium">
                    TikTok
                  </div>
                  <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-medium">
                    Instagram
                  </div>
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium">
                    +More
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
                >
                  <Link href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative flex items-center">
                      <Chrome className="w-6 h-6 mr-3" />
                      Add to Chrome
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-500 bg-gray-800/50 text-gray-200 hover:bg-gray-700 hover:text-white hover:border-gray-400 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm"
                >
                  <Link href="https://www.youtube.com/watch?v=RPBkGbccLFw" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  5/5 ★ Rating
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No Signup Required
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right Side - Laptop Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Laptop Mockup */}
            <div className="relative">
              {/* Laptop Base */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-3xl p-8 border border-gray-700 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-black rounded-2xl p-4 relative overflow-hidden">
                  {/* Futuristic UI Elements */}
                  <div className="absolute top-2 left-2 flex space-x-1 z-20">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  {/* Browser Bar */}
                  <div className="bg-gray-800 rounded-lg p-2 mb-4 mt-6 relative z-20">
                    <div className="bg-gray-700 rounded px-3 py-1 text-xs text-gray-400 flex items-center">
                      <Wifi className="w-3 h-3 mr-2" />
                      youtube.com/shorts
                    </div>
                  </div>
                  {/* Video Content Area */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-900 to-black rounded-xl relative overflow-hidden border border-gray-700">
                    {/* Real Video Content */}
                    <AnimatePresence mode="wait">
                      {isVideoPlaying && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-black"
                        >
                          {/* Video Element */}
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            crossOrigin="anonymous"
                          >
                            <source src="/videos/chocolate-strawberries.mp4" type="video/mp4" />
                          </video>
                          {/* Video Overlay UI */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20">
                            {/* Top UI */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
                              <div className="text-sm font-medium">@foodie_london</div>
                              <div className="text-xs bg-black/50 px-2 py-1 rounded">0:29</div>
                            </div>
                            {/* Bottom UI */}
                            <div className="absolute bottom-4 left-4 right-16 text-white z-10">
                              <div className="text-sm font-medium mb-2">
                                London's Viral Chocolate Strawberries At Home 🍓😍
                              </div>
                              <div className="text-xs text-gray-300 mb-2">
                                #chocolate #strawberries #recipe #viral
                              </div>
                            </div>
                            {/* Right Side Actions */}
                            <div className="absolute bottom-4 right-4 flex flex-col space-y-4 text-white z-10">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                              >
                                <Heart className="w-5 h-5" />
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                              >
                                <MessageCircle className="w-5 h-5" />
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                              >
                                <Share className="w-5 h-5" />
                              </motion.div>
                            </div>
                            {/* Progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${videoProgress}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                                className="h-full bg-white"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Block Overlay */}
                    <AnimatePresence>
                      {isBlocked && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                          exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-black/95 to-purple-900/95 flex flex-col items-center justify-center backdrop-blur-sm z-30"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                          >
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50" />
                            <Shield className="w-20 h-20 text-red-400 relative z-10" />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-center mt-6"
                          >
                            <div className="text-2xl font-bold text-red-400 mb-2">SHORTS BLOCKED</div>
                            <div className="text-gray-300 text-sm">Content under 120 seconds</div>
                            <div className="text-xs text-gray-400 mt-2">Duration: 0:29</div>
                          </motion.div>
                          {/* Futuristic scan lines */}
                          <motion.div
                            animate={{ y: [-100, 400] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-4"
                          />
                          {/* Glitch effect */}
                          <motion.div
                            animate={{
                              opacity: [0, 1, 0],
                              x: [-2, 2, -2, 0],
                            }}
                            transition={{
                              duration: 0.2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 3,
                            }}
                            className="absolute inset-0 bg-red-500/10"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Default State */}
                    {!isVideoPlaying && !isBlocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Cpu className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <div className="text-sm">Monitoring for short content...</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Laptop Keyboard */}
                <div className="mt-4 h-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-b-2xl"></div>
              </div>
              {/* Laptop Stand */}
              <div className="h-8 w-32 bg-gradient-to-b from-gray-700 to-gray-800 mx-auto rounded-b-lg"></div>
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 