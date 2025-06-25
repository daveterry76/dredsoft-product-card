import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        const transformedProduct = {
          name: data.title,
          price: data.price,
          image: data.image,
          variants: ["Small", "Medium", "Large"],
          inStock: data.rating.count < 0,
        };

        setTimeout(() => {
          setProduct(transformedProduct);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to fetch product:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p className="text-gray-700">Loading product...</p>
      )}
    </div>
  );
}
