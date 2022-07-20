import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Product(props) {
    const auth = props.auth;
    const product = props.product;

    return (
        <Authenticated auth={auth}>
            <Head title="Product"></Head>
            <div className="p-4">
                <div className="md:mx-auto max-w-7xl shadow flex flex-col md:flex-row mt-16 bg-white">
                    <div className="flex-1">
                        <img
                            src={`/storage/${product.image_url}`}
                            alt={product.name}
                        />
                    </div>
                    <div className="p-8 border-x-0 border-b-0 md:border-y-0 md:border-0 md:border-l-2 border-t-gray-100 border-2 flex-1">
                        <h1 className="text-2xl mb-1">{product.name}</h1>
                        {product.discounted_price ? (
                            <>
                                <h1 className="text-xl mb-2 text-stone-700 line-through">
                                    ${product.price / 100}
                                </h1>
                                <h1 className="text-xl mb-2 text-red-600 line-through">
                                    ${product.discounted_price / 100}
                                </h1>
                            </>
                        ) : (
                            <h1 className="text-xl mb-2 text-red-600">
                                ${product.price / 100}
                            </h1>
                        )}
                        <h1 className="text-xl mb-4 text-stone-700">
                            {product.description}
                        </h1>
                        <button className="text-xl py-2 px-4 shadow rounded bg-blue-500 text-white hover:bg-blue-400">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
