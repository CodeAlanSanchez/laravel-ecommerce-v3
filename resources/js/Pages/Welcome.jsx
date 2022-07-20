import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "../Layouts/Authenticated";
import ProductList from "../Components/ProductList";

export default function Welcome(props) {
    const products = props.products;

    return (
        <Authenticated auth={props.auth}>
            <Head title="Welcome" />
            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <div className="pb-12 h-72">
                    <img src="" alt="promotional advertisement" />
                </div>
                <div>
                    <h1 className="text-3xl">Products</h1>
                    <p className="text-xl font-light text-gray-600 mb-6">Men</p>
                </div>
                <ProductList products={products} />
            </div>
        </Authenticated>
    );
}
