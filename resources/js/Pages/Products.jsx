import { Head, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import ProductList from "@/Components/ProductList";

const Products = (props) => {
    const products = props.products;
    const trending = props.trending;
    const gender = props.gender;

    return (
        <Authenticated auth={props.auth}>
            <Head title="Products" />

            <div>
                {gender ? (
                    <p className="text-xl font-light text-gray-600 mb-6 capitalize">
                        {gender}
                    </p>
                ) : (
                    <div className="mb-4" />
                )}
                <ProductList trending={trending} products={products} />
            </div>
        </Authenticated>
    );
};

export default Products;
