"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB800]/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#00F0FF]/5 blur-[100px] rounded-full" />
        
        <div className="max-w-2xl w-full text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <h1 className="font-display font-black text-[120px] md:text-[180px] leading-none text-white/5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display font-bold text-4xl md:text-6xl tracking-tighter text-white">
                LOST IN THE <span className="text-gradient-gold">MATRIX</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-white/60 mb-12 max-w-md mx-auto leading-relaxed">
            The frequency you're looking for has been de-synced or moved to a different sector of the mainframe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/">
              <Button className="h-14 px-8 bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-display font-bold tracking-wider rounded-none group">
                <Home className="mr-2 w-5 h-5" />
                RETURN TO BASE
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="h-14 px-8 border-white/10 hover:bg-white/5 text-white font-display font-bold tracking-wider rounded-none"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              PREVIOUS SECTOR
            </Button>
          </div>
          
          {/* Matrix-style decorative lines */}
          <div className="mt-20 grid grid-cols-3 gap-4 opacity-20">
            <div className="h-px bg-gradient-to-r from-transparent via-[#FFB800] to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#FF00AA] to-transparent" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
