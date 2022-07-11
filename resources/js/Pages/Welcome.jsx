import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Authenticated from "../Layouts/Authenticated";
import { useState } from "react";
import ProductItem from "../Components/ProductItem";

export default function Welcome(props) {
    const products = props.products;

    return (
        <Authenticated auth={props.auth}>
            <Head title="Welcome" />
            <div className="py-12 px-24 max-w-7xl mx-auto">
                <div className="pb-12 h-72">
                    <img src="" alt="promotional advertisement" />
                </div>
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
        </Authenticated>
    );
}
