"use client";
import { motion } from "framer-motion";
import { Leaf, Droplets, Flame, Wind, ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface ElementConfig {
  name: string;
  title: string;
  series: string;
  description: string;
  longDescription: string;
  color: string;
  borderColor: string;
  bgGradient: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
  products: Array<{
    id: string;
    name: string;
    price: string;
    type: string;
  }>;
}

const elementConfigs: Record<string, ElementConfig> = {
  earth: {
    name: "EARTH",
    title: "Terra Firma",
    series: "Terra Firma Series",
    description: "Ground yourself with the Terra Firma series.",
    longDescription: "Rooted in strength and stability, the Terra Firma collection draws inspiration from the deep emerald forests and crystalline mineral formations of the earth. Each piece is designed to ground your energy and connect you to the primal forces that shape our world. Featuring organic textures, earth-tone palettes, and sustainable materials that honor the element from which they're born.",
    color: "#7CB342",
    borderColor: "#7CB342",
    bgGradient: "linear-gradient(135deg, #8BC34A 0%, #558B2F 50%, #33691E 100%)",
    textColor: "#7CB342",
    icon: Leaf,
    products: [
      { id: "earth-tee-1", name: "Terra Foundation Tee", price: "$45", type: "T-Shirt" },
      { id: "earth-hoodie-1", name: "Root System Hoodie", price: "$85", type: "Hoodie" },
      { id: "earth-cap-1", name: "Emerald Grove Cap", price: "$35", type: "Cap" },
      { id: "earth-poster-1", name: "Crystalline Earth Poster", price: "$25", type: "Poster" },
    ]
  },
  water: {
    name: "WATER",
    title: "Aqua",
    series: "Aqua Series",
    description: "Flow with the Aqua series.",
    longDescription: "Fluid, adaptive, and infinitely powerful, the Aqua collection captures the essence of water in all its forms. From the bioluminescent depths of the ocean to the serene surface of a still lake, these designs embrace the transformative nature of water. Each piece features flowing patterns, oceanic blues, and materials that move with you like currents in a stream.",
    color: "#00BCD4",
    borderColor: "#00BCD4",
    bgGradient: "linear-gradient(135deg, #4DD0E1 0%, #00ACC1 50%, #006064 100%)",
    textColor: "#00BCD4",
    icon: Droplets,
    products: [
      { id: "water-tee-1", name: "Tidal Wave Tee", price: "$45", type: "T-Shirt" },
      { id: "water-hoodie-1", name: "Deep Current Hoodie", price: "$85", type: "Hoodie" },
      { id: "water-cap-1", name: "Ocean Depths Cap", price: "$35", type: "Cap" },
      { id: "water-poster-1", name: "Bioluminescent Poster", price: "$25", type: "Poster" },
    ]
  },
  fire: {
    name: "FIRE",
    title: "Inferno",
    series: "Inferno Series",
    description: "Ignite your passion with the Inferno series.",
    longDescription: "Bold, passionate, and unstoppable, the Inferno collection embodies the raw power of fire. These pieces are designed for those who burn bright and refuse to be contained. Featuring intense crimsons, dynamic flame patterns, and designs that radiate energy. Each garment is a statement of power, transformation, and the eternal dance of light and heat.",
    color: "#F44336",
    borderColor: "#F44336",
    bgGradient: "linear-gradient(135deg, #FF5722 0%, #E53935 50%, #B71C1C 100%)",
    textColor: "#F44336",
    icon: Flame,
    products: [
      { id: "fire-tee-1", name: "Phoenix Flame Tee", price: "$45", type: "T-Shirt" },
      { id: "fire-hoodie-1", name: "Inferno Core Hoodie", price: "$85", type: "Hoodie" },
      { id: "fire-cap-1", name: "Ember Crown Cap", price: "$35", type: "Cap" },
      { id: "fire-poster-1", name: "Solar Flare Poster", price: "$25", type: "Poster" },
    ]
  },
  air: {
    name: "AIR",
    title: "Aether",
    series: "Aether Series",
    description: "Ascend with the Aether series.",
    longDescription: "Ethereal, free, and boundless, the Aether collection captures the invisible force that surrounds us all. Designed for those who seek to rise above, these pieces feature lightweight materials, flowing silhouettes, and designs inspired by wind patterns and celestial bodies. Each item offers ultimate freedom of movement and a connection to the infinite sky above.",
    color: "#FFD700",
    borderColor: "#FFD700",
    bgGradient: "linear-gradient(135deg, #FFF176 0%, #FFD54F 50%, #F9A825 100%)",
    textColor: "#FFD700",
    icon: Wind,
    products: [
      { id: "air-tee-1", name: "Zephyr Wind Tee", price: "$45", type: "T-Shirt" },
      { id: "air-hoodie-1", name: "Stratosphere Hoodie", price: "$85", type: "Hoodie" },
      { id: "air-cap-1", name: "Cloud Walker Cap", price: "$35", type: "Cap" },
      { id: "air-poster-1", name: "Celestial Drift Poster", price: "$25", type: "Poster" },
    ]
  }
};

export default function ElementPage() {
  const params = useParams();
  const elementId = params.element as string;
  const element = elementConfigs[elementId];
  const [syncingProduct, setSyncingProduct] = useState<string | null>(null);

  if (!element) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Element Not Found</h1>
          <Link href="/matrx-merch">
            <Button className="bg-[#FFB800] text-black">Return to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = element.icon;

  const syncProductToShopify = async (product: { id: string; name: string; price: string; type: string }) => {
    setSyncingProduct(product.id);
    try {
      const response = await fetch('/api/shopify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sync_product',
          productData: {
            title: product.name,
            body_html: `<p>${element.series} - ${product.type}</p><p>${element.description}</p>`,
            vendor: 'Musiq Matrix',
            product_type: product.type,
            tags: ['Balanced Elementals', element.name, element.series],
            variants: [{
              price: product.price.replace('$', ''),
              inventory_quantity: 100
            }]
          }
        })
      });
      
      const data = await response.json();
      if (data.success) {
        toast.success(`${product.name} synced to Shopify!`);
      } else {
        toast.error(`Sync failed: ${data.error || 'Unknown error'}`);
      }
    } catch {
      toast.error('Connection error. Please try again.');
    }
    setSyncingProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Background Gradient */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ background: element.bgGradient }}
          />
          
          <div className="container relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/matrx-merch">
                <Button
                  data-testid="back-to-collection"
                  variant="ghost"
                  className="font-mono text-xs tracking-wider text-white/60 hover:text-white"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  BACK TO BALANCED ELEMENTALS
                </Button>
              </Link>
            </motion.div>

            {/* Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: element.color }}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <span 
                    className="font-mono text-sm tracking-[0.3em] uppercase"
                    style={{ color: element.color }}
                  >
                    {element.series}
                  </span>
                </div>
                
                <h1 
                  className="font-display font-bold text-6xl md:text-8xl tracking-tight mb-6"
                  style={{ color: element.textColor }}
                >
                  {element.name}
                </h1>
                
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                  {element.longDescription}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div 
                  className="relative w-80 h-80 rounded-lg overflow-hidden border-4"
                  style={{ 
                    borderColor: element.borderColor,
                    background: element.bgGradient
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent 
                      className="w-40 h-40 text-white/80"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 
                className="font-display text-3xl tracking-wider mb-8"
                style={{ color: element.textColor }}
              >
                COLLECTION ITEMS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {element.products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group hover:border-opacity-50 transition-all duration-300"
                    style={{ 
                      '--hover-border': element.borderColor 
                    } as React.CSSProperties}
                  >
                    {/* Product Image Placeholder */}
                    <div 
                      className="aspect-square flex items-center justify-center"
                      style={{ background: `${element.bgGradient}` }}
                    >
                      <IconComponent className="w-16 h-16 text-white/60" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4">
                      <p className="font-mono text-xs text-white/40 uppercase mb-1">{product.type}</p>
                      <h3 className="font-display text-lg text-white mb-2">{product.name}</h3>
                      <p 
                        className="font-display text-xl font-bold mb-4"
                        style={{ color: element.textColor }}
                      >
                        {product.price}
                      </p>
                      
                      <div className="flex flex-col gap-2">
                        <Button
                          data-testid={`add-to-cart-${product.id}`}
                          className="w-full font-mono text-xs rounded-none"
                          style={{ 
                            backgroundColor: element.color,
                            color: '#000'
                          }}
                          onClick={() => toast.info('Cart functionality coming soon!')}
                        >
                          <ShoppingCart className="mr-2 w-3 h-3" />
                          ADD TO CART
                        </Button>
                        
                        <Button
                          data-testid={`sync-product-${product.id}`}
                          variant="outline"
                          className="w-full font-mono text-xs rounded-none bg-transparent border-white/20 text-white/60 hover:bg-white/5"
                          onClick={() => syncProductToShopify(product)}
                          disabled={syncingProduct === product.id}
                        >
                          {syncingProduct === product.id ? (
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
