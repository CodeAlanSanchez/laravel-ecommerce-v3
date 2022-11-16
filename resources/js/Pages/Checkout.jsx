import Authenticated from "@/Layouts/Authenticated";
import axios from "axios";

export default function (props) {
    const auth = props.auth;
    const cartItems = props.cart_items;
    const cartId = props.cart_id;
    const totalPrice = cartItems.reduce(
        (acc, i) => acc + i.product.price * i.amount,
        0
    );

    return (
        <Authenticated auth={auth}>
            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <h1 className="my-4 text-3xl">Checkout</h1>
                <div className="flex flex-col md:flex-row justify gap-4 md:gap-12">
                    <Options />
                    <Summary totalPrice={totalPrice} cartId={cartId} />
                </div>
            </div>
        </Authenticated>
    );
}

function Options() {
    return (
        <div>
            <h2 className="my-4 text-xl text-gray-700">Payment Options</h2>
            <div className="shadow border-blue-400 border-2 bg-white rounded p-4 flex flew-row hover:cursor-pointer">
                <div className="text-blue-400 text-2xl">•</div>
                <div className="ml-4 text-xl">Default Credit Card</div>
            </div>
            <div className="shadow bg-white mt-4 rounded p-4 flex flew-row hover:cursor-not-allowed">
                <div className="text-gray-400 text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6 p-auto fill-gray-400"
                    >
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                    </svg>
                </div>
                <div className="ml-4 text-xl text-gray-400">
                    Add New Payment Info
                </div>
            </div>
            <h2 className="mb-4 mt-8 text-xl text-gray-700">Address</h2>
            <div className="shadow border-blue-400 border-2 bg-white rounded p-4 flex flew-row hover:cursor-pointer">
                <div className="text-blue-400 text-2xl">•</div>
                <div className="ml-4 text-xl">Default Address</div>
            </div>
            <div className="shadow bg-white mt-4 rounded p-4 flex flew-row hover:cursor-not-allowed">
                <div className="text-gray-400 text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6 p-auto fill-gray-400"
                    >
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
                    </svg>
                </div>
                <div className="ml-4 text-xl text-gray-400">
                    Add New Address
                </div>
            </div>
        </div>
    );
}

function Summary({ totalPrice, cartId }) {
    const handleClick = () => {
        axios.post("/orders", { cart_id: cartId });
    };

    return (
        <div>
            <h2 className="my-4 text-xl text-gray-700">Total</h2>
            <div className="bg-white rounded p-4 md:p-8 md:text-lg shadow flex flex-col text-gray-700">
                <Detail k={"Subtotal"} value={`$${totalPrice / 100}`} />
                <Detail k={"Shipping"} value={"$5"} />
                <Detail k={"Taxes"} value={"$7.99"} />
                <hr className="border-2 border-t-0 border-gray-200 my-2 mb-4" />
                <Detail k={"Total"} value={`$${totalPrice / 100 + 5 + 7.99}`} />
            </div>
            <button
                type="button"
                onClick={() => handleClick()}
                className="text-lg p-2 px-4 mt-6 w-fit shadow rounded bg-blue-500 text-white hover:bg-blue-400"
            >
                Order
            </button>
        </div>
    );
}

function Detail({ k, value }) {
    return (
        <p className="mb-2 last:mb-0">
            {k}: <span className="text-red-700">{value}</span>
        </p>
    );
}
