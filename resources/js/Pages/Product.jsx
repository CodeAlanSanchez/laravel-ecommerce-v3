import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Product(props) {
    const auth = props.auth;
    const product = props.product;

    return (
        <Authenticated auth={auth}>
            <Head title="Product"></Head>
            <div className="mx-auto max-w-7xl shadow flex mt-16">
                <div>
                    <img
                        src={`/storage/${product.image_url}`}
                        alt={product.name}
                    />
                </div>
                <div className="p-8">
                    <h1>{product.name}</h1>
                    <h1>{product.description}</h1>
                    <h1>${product.price}</h1>
                </div>
            </div>
        </Authenticated>
    );
}
