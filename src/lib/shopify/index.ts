const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "";

export const mockProducts = [
  {
    id: "prod-1",
    handle: "dbit-tech-shirt",
    title: "Dbit Inc. Cyber Tech T-Shirt",
    description: "Playera técnica de edición limitada confeccionada en algodón orgánico de alto gramaje con estampado reflectivo cyberpunk y logo minimalista de Dbit Inc.",
    category: "Apparel",
    priceRange: { minVariantPrice: { amount: "35.00", currencyCode: "USD" } },
    featuredImage: { url: "/assets/media/1.jpg", altText: "Dbit Cyber Tech T-Shirt" },
    tags: ["Merch", "Apparel", "Cyberpunk"],
  },
  {
    id: "prod-2",
    handle: "dbit-games-cybermex-hoodie",
    title: "Dbit Games CyberMex 2099 Hoodie",
    description: "Sudadera oficial de Dbit Games Studio inspirada en CyberMex: 2099. Interior térmico ultra suave, capucha ergonómica y bolsillo con cremallera oculta.",
    category: "Gaming Merch",
    priceRange: { minVariantPrice: { amount: "65.00", currencyCode: "USD" } },
    featuredImage: { url: "/assets/media/hero-1.jpg", altText: "Dbit Games CyberMex 2099 Hoodie" },
    tags: ["Dbit Games", "Hoodie", "Exclusive"],
  },
  {
    id: "prod-3",
    handle: "dbit-quantum-mousepad",
    title: "Dbit Quantum Drift XL Deskmat",
    description: "Alfombrilla gaming de microfibra de baja fricción y superficie impermeable. Diseñada para máxima precisión en torneos competitivos de Quantum Drift.",
    category: "Hardware & Gear",
    priceRange: { minVariantPrice: { amount: "29.99", currencyCode: "USD" } },
    featuredImage: { url: "/assets/media/1.jpg", altText: "Dbit Quantum Drift XL Deskmat" },
    tags: ["Gear", "Dbit Games", "Esports"],
  },
  {
    id: "prod-4",
    handle: "dbit-cloud-pass",
    title: "Dbit Cloud Developer Season Pass",
    description: "Acceso anual prioritario a herramientas de desarrollo en la nube de Dbit Inc, créditos de procesamiento y acceso anticipado a betas de Dbit Games.",
    category: "Digital & Subscriptions",
    priceRange: { minVariantPrice: { amount: "120.00", currencyCode: "USD" } },
    featuredImage: { url: "/assets/media/hero-1.jpg", altText: "Dbit Cloud Developer Pass" },
    tags: ["Software", "Subscription", "VIP"],
  },
];

export async function shopifyFetch({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) {
  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    return {
      status: 200,
      body: {
        data: {
          products: {
            edges: mockProducts.map((p) => ({ node: p })),
          },
        },
      },
    };
  }

  try {
    const result = await fetch(
      `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        next: { revalidate: 60 },
      }
    );

    const json = await result.json();

    if (json.errors || !json.data?.products) {
      return {
        status: 200,
        body: {
          data: {
            products: {
              edges: mockProducts.map((p) => ({ node: p })),
            },
          },
        },
      };
    }

    return {
      status: result.status,
      body: json,
    };
  } catch (e) {
    console.error("Shopify fetch fallback used:", e);
    return {
      status: 200,
      body: {
        data: {
          products: {
            edges: mockProducts.map((p) => ({ node: p })),
          },
        },
      },
    };
  }
}

export const getProductsQuery = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;
