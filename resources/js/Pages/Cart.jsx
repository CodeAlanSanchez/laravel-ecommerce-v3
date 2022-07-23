import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function (props) {
    const auth = props.auth;

    return (
        <Authenticated auth={auth}>
            <Head title="Cart" />

            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-3xl mb-4">Cart</h1>
                <div className="bg-white p-4 shadow grid md:grid-cols-2 gap-4">
                    <h4 className="text-lg">Your Items</h4>
                </div>
            </div>
        </Authenticated>
    );
}
