import { NextRequest, NextResponse } from 'next/server';

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET;
const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;

interface ProductData {
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants?: Array<{
    price: string;
    inventory_quantity: number;
  }>;
}

interface ShopifyProduct {
  product: ProductData;
}

// POST - Sync product to Shopify
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, productData } = body;

    if (!SHOPIFY_API_KEY || !SHOPIFY_API_SECRET || !SHOPIFY_STORE_URL) {
      return NextResponse.json(
        { error: 'Shopify credentials not configured' },
        { status: 500 }
      );
    }

    const shopifyApiUrl = `${SHOPIFY_STORE_URL}/admin/api/2024-01`;
    const credentials = Buffer.from(`${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET}`).toString('base64');

    switch (action) {
      case 'sync_product': {
        const response = await fetch(`${shopifyApiUrl}/products.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
          },
          body: JSON.stringify({ product: productData } as ShopifyProduct),
        });

        if (!response.ok) {
          const errorText = await response.text();
          return NextResponse.json(
            { error: 'Failed to sync product', details: errorText },
            { status: response.status }
          );
        }

        const data = await response.json();
        return NextResponse.json({ success: true, product: data.product });
      }

      case 'get_products': {
        const response = await fetch(`${shopifyApiUrl}/products.json?limit=250`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          return NextResponse.json(
            { error: 'Failed to fetch products', details: errorText },
            { status: response.status }
          );
        }

        const data = await response.json();
        return NextResponse.json({ success: true, products: data.products });
      }

      case 'sync_collection': {
        const { collectionName, products } = productData;
        
        // First create a custom collection
        const collectionResponse = await fetch(`${shopifyApiUrl}/custom_collections.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
          },
          body: JSON.stringify({
            custom_collection: {
              title: collectionName,
              body_html: `<p>Balanced Elementals Collection - ${collectionName}</p>`,
            },
          }),
        });

        if (!collectionResponse.ok) {
          const errorText = await collectionResponse.text();
          return NextResponse.json(
            { error: 'Failed to create collection', details: errorText },
            { status: collectionResponse.status }
          );
        }

        const collectionData = await collectionResponse.json();
        return NextResponse.json({ success: true, collection: collectionData.custom_collection });
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Shopify API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}

// GET - Health check and fetch products
export async function GET() {
  try {
    if (!SHOPIFY_API_KEY || !SHOPIFY_API_SECRET || !SHOPIFY_STORE_URL) {
      return NextResponse.json(
        { status: 'unconfigured', message: 'Shopify credentials not set' },
        { status: 200 }
      );
    }

    const shopifyApiUrl = `${SHOPIFY_STORE_URL}/admin/api/2024-01`;
    const credentials = Buffer.from(`${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET}`).toString('base64');

    const response = await fetch(`${shopifyApiUrl}/shop.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: 'Failed to connect to Shopify' },
        { status: 200 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ 
      status: 'connected', 
      shop: data.shop?.name || 'Musiq Matrix',
      domain: data.shop?.domain 
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: String(error) },
      { status: 500 }
    );
  }
}
