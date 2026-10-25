import { shopifyFetch, mockProducts } from "@/lib/shopify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ShoppingCart, ShieldCheck, Truck, RotateCcw, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const mock = mockProducts.find((p) => p.handle === handle);
  const title = mock ? mock.title : "Producto Oficial Dbit";

  return {
    title: `${title} | Dbit Store`,
    description: mock ? mock.description : "Detalle del producto en la tienda oficial de Dbit, Inc.",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const getProductQuery = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        onlineStoreUrl
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
  `;

  const response = await shopifyFetch({
    query: getProductQuery,
    variables: { handle },
  });

  const matchedMock = mockProducts.find((p) => p.handle === handle);

  const product = response.body?.data?.product || matchedMock || {
    title: "Dbit Inc. Producto Oficial",
    description: "Producto diseñado con materiales de alto rendimiento e ingeniería de vanguardia para la comunidad de Dbit, Inc. y Dbit Games.",
    priceRange: { minVariantPrice: { amount: "49.00", currencyCode: "USD" } },
    featuredImage: { url: "/assets/media/1.jpg" },
  };

  const price = product.priceRange?.minVariantPrice?.amount || "49.00";
  const currency = product.priceRange?.minVariantPrice?.currencyCode || "USD";
  const imageUrl = product.featuredImage?.url || "/assets/media/1.jpg";

  return (
    <div className="min-h-screen text-[#121316] selection:bg-navy-700/15">
      <Header />

      <main className="pt-20 pb-24 container mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-bold text-black/50 hover:text-black uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Volver a la Tienda</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-zinc-100 border border-black/10 shadow-xl shadow-black/5">
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-700/10 border border-navy-700/30 text-navy-700 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={13} />
                <span>Artículo Oficial Dbit Inc.</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight leading-tight text-[#121316]">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-black text-[#121316]">
                  ${price} {currency}
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600">
                  En Stock &bull; Listo para envío
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-black/70 leading-relaxed">
              {product.description}
            </p>

            {/* Features Checkpoints */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-black/80">
                <CheckCircle2 size={16} className="text-navy-700" />
                <span>Autenticidad garantizada con número de serie único Dbit.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-black/80">
                <CheckCircle2 size={16} className="text-navy-700" />
                <span>Empaque premium protector con sello holográfico.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-black/80">
                <CheckCircle2 size={16} className="text-navy-700" />
                <span>Soporte prioritario post-venta 24/7.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-6 border-t border-black/10">
              <a
                href={product.onlineStoreUrl || "#"}
                target={product.onlineStoreUrl ? "_blank" : undefined}
                rel={product.onlineStoreUrl ? "noopener noreferrer" : undefined}
                className="w-full py-5 bg-navy-700 hover:bg-navy-600 text-white font-black uppercase tracking-[0.15em] text-xs rounded-2xl transition-colors flex items-center justify-center gap-3"
              >
                <ShoppingCart size={18} />
                <span>Proceder a la Compra</span>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                  <ShieldCheck className="text-navy-700 flex-shrink-0" size={22} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">Garantía Global Dbit</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#f5f5f7] rounded-2xl border border-black/5">
                  <Truck className="text-navy-700 flex-shrink-0" size={22} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">Envío Prioritario</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-black/40 uppercase tracking-wider">
              <RotateCcw size={15} />
              <span>30 días de garantía de satisfacción total</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
