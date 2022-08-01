import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CartList from "../Components/CartList";
import Subtotal from "../Components/Subtotal";
import { useEffect, useRef } from 'react';

export default function (props) {
    const auth = props.auth;
    const cartItems = props.cart_items;
    let totalPrice = useRef(0);
    let counter = useRef(0);

    useEffect(() => {
        cartItems.reduce((acc, i) => {
            counter.current = counter.current + 1 * i.amount;
            return acc + i.product.price * i.amount;
        }, 0)
    }, [cartItems]);

    return (
        <Authenticated auth={auth}>
            <Head title="Cart"/>

            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-3xl mb-4">Cart</h1>
                <div className="bg-white p-4 shadow">
                    <h4 className="text-xl pb-2 border-b-2">Your Items</h4>
                    <CartList totalPrice={totalPrice.current} counter={counter.current} cartItems={cartItems}/>
                </div>
            </div>
        </Authenticated>
    );
}
