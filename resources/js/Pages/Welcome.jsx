import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import ProductList from "@/Components/ProductList";
import FilterDot from "@/Components/FilterDot";

export default function Welcome(props) {
    const products = props.products;
    const filters = [
        { url: "/storage/image/men", name: "male" },
        { url: "/storage/image/women", name: "female" },
    ];

    return (
        <Authenticated auth={props.auth}>
            <Head title="Welcome"/>

            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <div
                    className="pb-12 flex justify-center sm:justify-around align-middle flex-col sm:flex-row w-full">
                    {filters.map(i =>
                        <FilterDot key={i.name} url={`gender/${i.name}`} image={i.url} name={i.name}/>
                    )}
                </div>
                <div>
                    <h1 className="text-3xl mb-4">Products</h1>
                </div>
                <ProductList products={products}/>
            </div>
        </Authenticated>
    );
}
