const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img
        className="rounded-xl object-cover h-48 w-full mb-4"
        src={product.image}
        alt={product.name}
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h2>
          <p className="text-xl font-bold text-gray-900 mb-3">
            ${product.price.toFixed(2)}
          </p>

          <label className="text-sm text-gray-600 mb-1 block">Variant:</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300">
            {product.variants.map((variant) => (
              <option key={variant}>{variant}</option>
            ))}
          </select>
        </div>

        <button
          className={`w-full mt-auto px-4 py-2 text-white font-medium rounded-lg ${
            product.inStock
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
