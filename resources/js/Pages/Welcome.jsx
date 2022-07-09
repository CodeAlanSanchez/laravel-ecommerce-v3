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
            <div className="py-12 px-24">
                <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
                    <h1 className="text-2xl">
                        {products.length === 0 ? "No products found..." : ""}
                    </h1>
                    {products.map((p) => (
                        <ProductItem product={p} />
                    ))}
                </div>
            </div>
    </Authenticated>
    );
}
