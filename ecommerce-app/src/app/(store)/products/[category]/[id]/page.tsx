import { productsList, categories } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  const product = productsList.find(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      Number(p.id) === Number(id)
  );

  const categoryInfo = categories.find(
    (cat) => cat.slug.toLowerCase() === category.toLowerCase()
  );

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        <Link
          href={`/products/${category}`}
          className="text-blue-600 underline mt-4 block"
        >
          Back to {categoryInfo?.name || "Category"}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain max-h-[400px]"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-[#003d5b] mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p
            className="text-2xl font-bold mb-6"
            style={{ color: categoryInfo?.color }}
          >
            ${product.price.toLocaleString()}
          </p>

          <div className="flex gap-4">
            <button
              className="px-6 py-3 rounded-full text-white font-medium"
              style={{ backgroundColor: categoryInfo?.color }}
            >
              Add to Cart
            </button>
            <Link
              href={`/products/${category}`}
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Back to {categoryInfo?.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
