# MUSIQ MATRIX - Balanced Elementals PRD

## Original Problem Statement
Add a product collection page titled "Balanced Elementals by Musiq Matrix" attached to the MATRX MERCH Menu Item. This will become its own headless React module that communicates with the backend to send webhook API calls to Shopify to sync with the Shopify sync account. Each of the four element modules (Earth, Water, Fire, Air) will get their own subpage.

## User Personas
- **Merchandise Shoppers**: Fans of Musiq Matrix looking to purchase elemental-themed merchandise
- **Admins**: Store managers who need to sync products to Shopify

## Core Requirements (Static)
1. ✅ Product collection page at `/matrx-merch`
2. ✅ Navigation integration with "MATRX MERCH" menu item
3. ✅ Four element cards: Earth, Water, Fire, Air
4. ✅ Element subpages at `/matrx-merch/[element]`
5. ✅ Shopify API integration for product sync
6. ✅ "SYNC TO SHOPIFY" functionality on cards

## What's Been Implemented (2026-02-20)
- **Main Collection Page** (`/app/app/matrx-merch/page.tsx`)
  - "BALANCED ELEMENTALS" hero section with "BY MUSIQ MATRIX" branding
  - Four element cards with unique colors, icons, and descriptions
  - "VIEW COLLECTION" navigation buttons
  - "SYNC TO SHOPIFY" buttons (disabled when disconnected)
  - Shopify connection status indicator

- **Element Subpages** (`/app/app/matrx-merch/[element]/page.tsx`)
  - Dynamic routing for Earth, Water, Fire, Air
  - Detailed element descriptions
  - Product listings (T-shirts, Hoodies, Caps, Posters)
  - Individual product sync to Shopify
  - ADD TO CART functionality (placeholder)

- **Shopify API Route** (`/app/app/api/shopify/route.ts`)
  - GET: Health check and shop info
  - POST: Product sync, collection creation, product fetching

- **Navigation Update** (`/app/components/Navigation.tsx`)
  - Added MATRX MERCH menu item with all menu items from original design

## Architecture
- **Tech Stack**: Next.js 15.1.0, React 19, TypeScript, Tailwind CSS
- **API**: Next.js API Routes for Shopify integration
- **Styling**: Dark theme with element-specific color palettes

## Shopify Credentials
- API Key: 988b142f578ae924076fb2616a955199
- Store URL: https://musiq-matrix.myshopify.com

## Prioritized Backlog

### P0 (Critical)
- ✅ Balanced Elementals main page
- ✅ Element subpages (Earth, Water, Fire, Air)
- ✅ Shopify API integration

### P1 (High Priority)
- Configure Shopify Access Token for production sync
- Add actual product images for merchandise
- Implement shopping cart functionality

### P2 (Medium Priority)
- Add inventory management display
- Implement order tracking
- Add product variants (sizes, colors)

### Future Enhancements
- Real-time inventory sync via webhooks
- Customer authentication for orders
- Payment integration
