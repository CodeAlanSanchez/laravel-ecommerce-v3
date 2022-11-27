import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import ProductsList from "@/Components/ProductsList";

const Products = (props) => {
    const products = props.products;
    const title = props.title;
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
                {props.trending?.length > 0 ? (
                    <ProductsList
                        title={"Trending"}
                        products={props.trending.map((t) => t.product)}
                    />
                ) : (
                    ""
                )}
                <ProductsList title={title} products={products} />
            </div>
        </Authenticated>
    );
};

export default Products;
