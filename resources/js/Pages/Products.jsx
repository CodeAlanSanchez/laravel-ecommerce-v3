import { Head, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import ProductList from "../Components/ProductList";

const Products = (props) => {
    const products = props.products;

    return (
        <Authenticated auth={props.auth}>
            <Head title="Products" />

            <div className="mx-auto max-w-7xl py-16">
                <h1 className="text-3xl mb-4 inline-block mr-2">Products</h1>{" "}
                <span className="text-blue-400 hover:underline">
                    <Link href="/products/create">Create</Link>
                </span>
                <ProductList products={products} />
            </div>
        </Authenticated>
    );
};

export default Products;
