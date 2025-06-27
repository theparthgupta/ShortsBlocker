"use client";
import { motion } from "framer-motion";
import { Chrome, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const chromeStoreUrl = "https://chromewebstore.google.com/detail/Shorts%20Blocker/fpocknlahcfpbcgkdnlpaodnoljofdkg";
  return (
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
  );
} 