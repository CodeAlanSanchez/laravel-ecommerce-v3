import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

const Products = (props) => {
    return (
        <Authenticated auth={props.auth}>
            <Head title="Products" />

            <div>
                <h1>Products</h1>
            </div>
        </Authenticated>
    );
};

export default Products;
