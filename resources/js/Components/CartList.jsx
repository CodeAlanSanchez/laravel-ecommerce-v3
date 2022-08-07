import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

export default function ({ cartItems }) {
    const totalPrice = cartItems.reduce(
        (acc, i) => acc + i.product.price * i.amount,
        0
    );
    const totalCount = cartItems.reduce((acc, i) => acc + 1 * i.amount, 0);

    return (
        <div>
            <div className="">
                {cartItems.length > 0 ? (
                    ""
                ) : (
                    <h1 className="text-xl pt-4">Your cart is empty...</h1>
                )}
                {cartItems.map((i) => (
                    <CartItem key={i.id} item={i} />
                ))}
                <Subtotal totalCount={totalCount} totalPrice={totalPrice} />
            </div>
        </div>
    );
}
