import ProductItem from "./ProductItem";

export default function ({ products, filter }) {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {products.length === 0
                    ? '<h1 className="text-2xl">No products found...</h1>'
                    : null}
                {products.map((p) => (
                    <ProductItem product={p} />
                ))}
            </div>
        </div>
    );
}
