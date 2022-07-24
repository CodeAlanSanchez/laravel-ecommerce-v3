import CartItem from "./CartItem";

export default function ({ cartItems }) {
    return (
        <div>
            <div className="">
                {cartItems.map((i) => (
                    <CartItem key={i.id} item={i} />
                ))}
            </div>
        </div>
    );
}
