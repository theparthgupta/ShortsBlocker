"use client";
import { Shield, Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
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
  );
} 