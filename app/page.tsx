"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  Shield,
  Clock,
  Brain,
  Target,
  Chrome,
  Github,
  Mail,
  CheckCircle,
  Zap,
  Focus,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Cpu,
  Wifi,
  Heart,
  MessageCircle,
  Share,
} from "lucide-react"
import Link from "next/link"

export default function ShortsBlockerLanding() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const [showFocusMessage, setShowFocusMessage] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const sequence = async () => {
      // Start video
      setIsVideoPlaying(true)
      setVideoProgress(0)

      // Simulate video progress
      const progressInterval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 4 // 25 steps for 2.5 seconds
        })
      }, 100)

      // After 2.5 seconds, block it
      setTimeout(() => {
        setIsVideoPlaying(false)
        setIsBlocked(true)
        clearInterval(progressInterval)

        // Show focus message after block animation
        setTimeout(() => {
          setShowFocusMessage(true)
        }, 300)
      }, 2500)

      // Reset after 5 seconds
      setTimeout(() => {
        setIsBlocked(false)
        setShowFocusMessage(false)
        setVideoProgress(0)
      }, 7000)
    }

    sequence()
    const interval = setInterval(sequence, 10000)
    return () => clearInterval(interval)
  }, [])

  const chromeStoreUrl = "https://chromewebstore.google.com/detail/Shorts%20Blocker/fpocknlahcfpbcgkdnlpaodnoljofdkg"

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Futuristic Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]" />
      <div className="fixed inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.05)_60deg,transparent_120deg)]" />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Shorts Blocker
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                Benefits
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Link href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Chrome className="w-4 h-4 mr-2" />
                  Add to Chrome
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800/50 bg-black/90 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-4">
                <Link href="#features" className="block text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link href="#benefits" className="block text-gray-300 hover:text-white transition-colors">
                  Benefits
                </Link>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Chrome className="w-4 h-4 mr-2" />
                    Add to Chrome
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
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
                  Block short-form content under 30 seconds.
                  <span className="text-blue-300"> Reclaim your focus</span> instantly.
                </p>

                {/* Platform Compatibility */}
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
                              <div className="text-gray-300 text-sm">Content under 30 seconds</div>
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

      {/* Platform Compatibility Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Works Across All Major Platforms
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              One extension to block short-form content everywhere you browse
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {
                name: "YouTube",
                color: "red",
                gradient: "from-red-500 to-red-600",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                name: "TikTok",
                color: "pink",
                gradient: "from-pink-500 to-pink-600",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                ),
              },
              {
                name: "Instagram",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                color: "blue",
                gradient: "from-blue-500 to-blue-600",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                name: "X",
                color: "gray",
                gradient: "from-gray-800 to-black",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                ),
              },
              {
                name: "Snapchat",
                color: "yellow",
                gradient: "from-yellow-400 to-yellow-500",
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
                  </svg>
                ),
              },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${platform.gradient}/10 border border-${platform.color === "gray" ? "gray" : platform.color}-500/20 hover:border-${platform.color === "gray" ? "gray" : platform.color}-500/40 transition-all duration-300 hover:scale-105`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}
                  >
                    {platform.icon}
                  </div>
                  <div className="text-white font-medium text-sm">{platform.name}</div>
                  <div className="text-xs text-gray-400 mt-1">Shorts Blocked</div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient}/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-gray-300">Automatically detects and blocks content under 30 seconds</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
            {[
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
            ].map((item, index) => (
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

      {/* How It Works Section */}
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
            {[
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
                description: "Hides or blocks any video content under 30 seconds",
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group z-10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-${item.color}-500/25 relative z-20`}
                    >
                      {item.step}
                    </div>
                    <div
                      className={`absolute inset-0 bg-${item.color}-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity z-10`}
                    ></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <item.icon className={`w-6 h-6 text-${item.color}-400 mr-2`} />
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}


          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            {[
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
            ].map((benefit, index) => (
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

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Stop Scrolling
              <br />
              and Start Focusing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of users who have already reclaimed their time and improved their focus.
            </p>

            {/* Product Hunt Badge */}
            <div className="flex justify-center mb-8">
              <a
                href="https://www.producthunt.com/products/shorts-blocker?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-shorts&#0045;blocker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=984577&theme=light&t=1751011874986"
                  alt="Shorts Blocker - Remove Shorts from your device. Save your Time | Product Hunt"
                  style={{ width: '250px', height: '54px' }}
                  width={250}
                  height={54}
                />
              </a>
            </div>

            <div className="space-y-6">
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
              >
                <Link href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative flex items-center">
                    <Chrome className="w-6 h-6 mr-3" />
                    Add to Chrome
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Button>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">{"★".repeat(5)}</div>
                  5/5 stars
                </div>
                <div>•</div>
                <div>No signup required</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Shorts Blocker
                </h3>
              </div>
              <p className="text-gray-400">Kill the scroll. Reclaim your time.</p>
            </div>

            <div className="flex space-x-6">
              <Link
                href="mailto:parth.gupt07@gmail.com"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/theparthgupta/ShortsBlocker"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shorts Blocker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
