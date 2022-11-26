import { useState } from "react";
import ProductItem from "./ProductItem";

export default function ({ products, filter, trending }) {
    const [trenders, _] = useState(
        trending
            .sort((a, b) => {
                if (a.product.views < b.product.views) {
                    return 1;
                } else if (a.product.views === b.product.views) {
                    return 0;
                }
                return -1;
            })
            .map((i) => i.product)
    );
    return (
        <div>
            <h1 className="text-4xl font-medium my-8">Trending</h1>
            <div className="grid text-2xl sm:grid-cols-2 lg:grid-cols-6 lg:txt-xl gap-4 mb-12">
                {trending?.length === 0 ? (
                    <p className="text-sm text-gray-600 font-light">
                        No products found...
                    </p>
                ) : (
                    trenders.map((t) => <ProductItem key={t.id} product={t} />)
                )}
            </div>
            <h1 className="text-4xl font-medium my-8">Products</h1>
            <div className="grid text-2xl sm:grid-cols-2 lg:grid-cols-6 lg:text-xl gap-4">
                {products.length === 0 ? (
                    <p className="text-sm text-gray-600 font-light">
                        No products found...
                    </p>
                ) : null}

                {products.map((p) => (
                    <ProductItem key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
