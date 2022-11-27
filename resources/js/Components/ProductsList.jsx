import ProductItem from "@/Components/ProductItem";

export default ({ title, products }) => {
    return (
        <div>
            <h1 className="text-4xl font-medium my-8">{title}</h1>
            <div className="grid text-2xl sm:grid-cols-2 lg:grid-cols-6 lg:text-xl gap-4">
                {products.length === 0 ? (
                    <p className="text-lg text-gray-600 font-light">
                        No products found...
                    </p>
                ) : null}

                {products.map((p) => (
                    <ProductItem key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};
