import ProductItem from "./ProductItem";

export default function ({ products, filter }) {
    return (
        <div>
            <div className="grid text-2xl sm:grid-cols-2 lg:grid-cols-4 lg:text-xl gap-4">
                {products.length === 0 ? (
                    <p className="text-md text-gray-600 font-light">
                        No products found...
                    </p>
                ) : null}
                {products.map((p) => (
                    <ProductItem product={p} />
                ))}
            </div>
        </div>
    );
}
