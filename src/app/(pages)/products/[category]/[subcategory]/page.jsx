"use client";
import { use, useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";
import { GET_PRODUCT_BY_SLUG } from "../../../../../lib/queries/getProduct";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL);

export default function ProductPage({ params }) {
  const { slug } = use(params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await client.request(GET_PRODUCT_BY_SLUG, { slug });
        setProduct(data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchProduct();
  }, [slug]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  // helper function to render each section
  const renderSection = (title, fields) => {
    if (!fields?.length) return null;
    return (
      <div className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {fields.map((f, i) => (
            <div key={i} className="flex justify-between border-b py-1">
              <span className="font-medium">{f.label}</span>
              <span className="text-gray-700">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

      {/* Short Description */}
      <div
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: product.shortDescription }}
      />

      {/* Price */}
      <p
        className="text-2xl font-semibold mb-6"
        dangerouslySetInnerHTML={{ __html: product.price }}
      />

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-3 mb-10">
        <label htmlFor="qty" className="font-medium">Qty:</label>
        <input
          id="qty"
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-3 py-1 w-20"
        />
        <button
          onClick={() => alert(`Added ${quantity} × ${product.name} to cart (placeholder)`)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Add to Cart
        </button>
      </div>

      {/* Attribute Groups */}
      {renderSection("Package", product.packageFields)}
      {renderSection("Description", product.descriptionFields)}
      {renderSection("Dimensions", product.dimensionsFields)}
      {renderSection("Features", product.featuresFields)}
      {renderSection("Materials", product.materialsFields)}
      {renderSection("Unpacking & Assembly", product.unpackingFields)}
      {renderSection("Care & Warranties", product.careFields)}
      {renderSection("Packaging", product.packagingFields)}

      {/* Full HTML Description */}
      <div className="prose max-w-none mt-10">
        <h2 className="text-xl font-semibold mb-3">Full Description</h2>
        <div
          className="text-gray-800"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  );
}
