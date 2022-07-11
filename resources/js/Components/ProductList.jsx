export default function (props) {
    return (
        <div>
            <div>
                <h1 className="text-3xl">Products</h1>
                <p className="text-xl font-light text-gray-600 mb-6">Men</p>
            </div>
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
