import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

export default function ({ cartItems, counter, totalPrice }) {
    return (
        <div>
            <div className="">
                {cartItems.length > 0 ? (
                    ""
                ) : (
                    <h1 className="text-xl pt-4">Your cart is empty...</h1>
                )}
                {cartItems.map((i) => (
                    <CartItem key={i.id} item={i}/>
                ))}
                <Subtotal totalAmount={counter} price={totalPrice}/>
            </div>
        </div>
    );
}
