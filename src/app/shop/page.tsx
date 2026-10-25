import { shopifyFetch, getProductsQuery, mockProducts } from "@/lib/shopify";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { ShoppingBag, Sparkles, ShieldCheck, Truck, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Dbit Store Oficial | Merch, Hardware & Dbit Games Gear",
  description: "Tienda oficial de Dbit, Inc. Colecciones oficiales, indumentaria técnica, periféricos gaming y pases de desarrollador.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await searchParams;

  const response = await shopifyFetch({
    query: getProductsQuery,
    variables: { first: 20 },
  });

  const products = response.body?.data?.products?.edges || mockProducts.map((p) => ({ node: p }));

  return (
    <div className="min-h-screen text-[#121316] selection:bg-navy-700/15">
      <Header />

      <main className="pt-20 pb-24 container mx-auto px-4 sm:px-6">
        {/* Hero Banner in Store */}
        <section className="py-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/10 border border-navy-700/30 text-navy-700 text-xs font-bold uppercase tracking-widest">
            <ShoppingBag size={15} />
            <span>Tienda Oficial &middot; Dbit Store</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-semibold tracking-tight text-[#121316]">
            Dbit <span className="text-navy-700">Store</span>
          </h1>

          <p className="text-base sm:text-lg text-black/60">
            Descubre ropa técnica, accesorios gaming oficiales de Dbit Games, licencias y productos exclusivos con envío global.
          </p>
        </section>

        {/* Benefits Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
            <ShieldCheck size={24} className="text-navy-700" />
            <div className="text-xs font-semibold text-black/70">Garantía Oficial Dbit Inc.</div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
            <Truck size={24} className="text-navy-700" />
            <div className="text-xs font-semibold text-black/70">Envíos Rápidos & Seguros</div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#f5f5f7] border border-black/5">
            <Tag size={24} className="text-navy-700" />
            <div className="text-xs font-semibold text-black/70">Ediciones Exclusivas & Limitadas</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(({ node: product }: any) => {
            const price = product.priceRange?.minVariantPrice?.amount || "35.00";
            const currency = product.priceRange?.minVariantPrice?.currencyCode || "USD";
            const imageUrl = product.featuredImage?.url || "/assets/media/1.jpg";

            return (
              <Link
                key={product.id || product.handle}
                href={`/product/${product.handle}`}
                className="group rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-navy-700/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <Image
                    src={imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold text-navy-700 border border-black/10">
                      ${price} {currency}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#121316] group-hover:text-navy-700 transition-colors tracking-tight line-clamp-2">
                      {product.title}
                    </h2>
                    <p className="text-xs text-black/50 line-clamp-2 leading-relaxed">
                      {product.description || "Producto oficial de la línea de tecnología y gaming de Dbit Inc."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-navy-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Ver Detalles &rarr;
                    </span>
                    <span className="text-[10px] text-black/40 font-mono uppercase">En Stock</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
