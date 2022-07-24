import CartItem from "./CartItem";

export default function ({ cartItems }) {
    return (
        <div>
            <div className="">
                {cartItems.lenght > 0 ? (
                    ""
                ) : (
                    <h1 className="text-xl pt-4">Your cart is empty...</h1>
                )}
                {cartItems.map((i) => (
                    <CartItem key={i.id} item={i} />
                ))}
            </div>
        </div>
    );
}
