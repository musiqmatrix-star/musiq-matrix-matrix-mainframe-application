"use client";
import { motion } from "framer-motion";
import { Leaf, Droplets, Flame, Wind, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface ElementData {
  id: string;
  name: string;
  title: string;
  series: string;
  description: string;
  color: string;
  borderColor: string;
  bgGradient: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const elements: ElementData[] = [
  {
    id: "earth",
    name: "EARTH",
    title: "Terra Firma",
    series: "Terra Firma",
    description: "Ground yourself with the Terra Firma series. Featuring organic textures and deep emerald hues inspired by the core.",
    color: "#7CB342",
    borderColor: "#7CB342",
    bgGradient: "linear-gradient(135deg, #8BC34A 0%, #558B2F 50%, #33691E 100%)",
    textColor: "#7CB342",
    icon: Leaf,
    image: "/images/elementals/earth-element.png"
  },
  {
    id: "water",
    name: "WATER",
    title: "Aqua",
    series: "Aqua",
    description: "Flow with the Aqua series. Bioluminescent blues and fluid designs that adapt to your every move.",
    color: "#00BCD4",
    borderColor: "#00BCD4",
    bgGradient: "linear-gradient(135deg, #4DD0E1 0%, #00ACC1 50%, #006064 100%)",
    textColor: "#00BCD4",
    icon: Droplets,
    image: "/images/elementals/water-element.png"
  },
  {
    id: "fire",
    name: "FIRE",
    title: "Inferno",
    series: "Inferno",
    description: "Ignite your passion with the Inferno series. Intense crimsons and dynamic patterns for the bold.",
    color: "#F44336",
    borderColor: "#F44336",
    bgGradient: "linear-gradient(135deg, #FF5722 0%, #E53935 50%, #B71C1C 100%)",
    textColor: "#F44336",
    icon: Flame,
    image: "/images/elementals/fire-element.png"
  },
  {
    id: "air",
    name: "AIR",
    title: "Aether",
    series: "Aether",
    description: "Ascend with the Aether series. Lightweight materials and ethereal whites for ultimate freedom.",
    color: "#FFD700",
    borderColor: "#FFD700",
    bgGradient: "linear-gradient(135deg, #FFF176 0%, #FFD54F 50%, #F9A825 100%)",
    textColor: "#FFD700",
    icon: Wind,
    image: "/images/elementals/air-element.png"
  }
];

export default function MatrxMerchPage() {
  const [shopifyStatus, setShopifyStatus] = useState<string>("checking");
  const [syncingElement, setSyncingElement] = useState<string | null>(null);

  useEffect(() => {
    checkShopifyConnection();
  }, []);

  const checkShopifyConnection = async () => {
    try {
      const response = await fetch('/api/shopify');
      const data = await response.json();
      setShopifyStatus(data.status);
    } catch {
      setShopifyStatus("error");
    }
  };

  const syncToShopify = async (element: ElementData) => {
    setSyncingElement(element.id);
    try {
      const response = await fetch('/api/shopify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sync_collection',
          productData: {
            collectionName: `Balanced Elementals - ${element.name}`,
            element: element.id
          }
        })
      });
      
      const data = await response.json();
      if (data.success) {
        toast.success(`${element.name} collection synced to Shopify!`);
      } else {
        toast.error(`Failed to sync: ${data.error}`);
      }
    } catch {
      toast.error('Connection error. Please try again.');
    }
    setSyncingElement(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Phoenix Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <img 
              src="/images/phoenix-logo.png" 
              alt=""
              className="w-[600px] h-auto"
            />
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 
                  className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-2"
                  style={{ fontFamily: "'Syncopate', sans-serif" }}
                >
                  <span className="text-white">BALANCED</span>
                  <br />
                  <span className="text-gradient-gold">ELEMENTALS</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-right mt-6 md:mt-0"
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl tracking-wider text-white mb-2">
                  BY MUSIQ MATRIX
                </h2>
                <p className="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">
                  Exclusive Merchandise Collection
                </p>
                
                {/* Shopify Status Indicator */}
                <div className="flex items-center justify-end gap-2 mt-4">
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      shopifyStatus === 'connected' ? 'bg-green-500' : 
                      shopifyStatus === 'checking' ? 'bg-yellow-500 animate-pulse' : 
                      'bg-red-500'
                    }`}
                  />
                  <span className="font-mono text-xs text-white/40">
                    Shopify {shopifyStatus === 'connected' ? 'Connected' : shopifyStatus === 'checking' ? 'Checking...' : 'Disconnected'}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Element Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {elements.map((element, index) => (
                <motion.div
                  key={element.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative"
                >
                  <div 
                    className="relative bg-[#0d0d12] rounded-lg overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02]"
                    style={{ borderColor: element.borderColor }}
                  >
                    {/* Card Background Gradient */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ background: element.bgGradient }}
                    />
                    
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden">
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: element.bgGradient }}
                      >
                        {/* Element Symbol Frame */}
                        <div 
                          className="relative w-4/5 h-4/5 border-4 flex items-center justify-center"
                          style={{ 
                            borderColor: 'rgba(255,255,255,0.3)',
                            background: 'rgba(0,0,0,0.2)'
                          }}
                        >
                          <div 
                            className="w-3/4 h-3/4 border-2 flex items-center justify-center"
                            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
                          >
                            <element.icon 
                              className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <h3 
                        className="font-display font-bold text-2xl tracking-wider mb-4 text-center"
                        style={{ color: element.textColor }}
                      >
                        {element.name}
                      </h3>
                      
                      <p className="text-white/70 text-sm text-center leading-relaxed mb-6 min-h-[80px]">
                        {element.description}
                      </p>
                      
                      <div className="flex flex-col gap-3">
                        <Link href={`/matrx-merch/${element.id}`}>
                          <Button
                            data-testid={`view-collection-${element.id}`}
                            className="w-full font-display text-xs tracking-widest rounded-none py-5 transition-all duration-300"
                            style={{ 
                              backgroundColor: 'transparent',
                              borderWidth: '1px',
                              borderStyle: 'solid',
                              borderColor: element.borderColor,
                              color: element.textColor
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = element.color;
                              e.currentTarget.style.color = '#000';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = element.textColor;
                            }}
                          >
                            VIEW COLLECTION <ArrowRight className="ml-2 w-4 h-4 inline" />
                          </Button>
                        </Link>
                        
                        <Button
                          data-testid={`sync-shopify-${element.id}`}
                          onClick={() => syncToShopify(element)}
                          disabled={syncingElement === element.id || shopifyStatus !== 'connected'}
                          className="w-full font-mono text-xs tracking-wide rounded-none py-3 bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          {syncingElement === element.id ? (
                            <>
                              <Sparkles className="mr-2 w-3 h-3 animate-spin" />
                              SYNCING...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 w-3 h-3" />
                              SYNC TO SHOPIFY
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
