import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CartList from "../Components/CartList";

export default function (props) {
    const auth = props.auth;

    return (
        <Authenticated auth={auth}>
            <Head title="Cart" />

            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-3xl mb-4">Cart</h1>
                <div className="bg-white p-4 shadow">
                    <h4 className="text-xl pb-2 border-b-2">Your Items</h4>
                    <CartList cartItems={[]} />
                </div>
            </div>
        </Authenticated>
    );
}
