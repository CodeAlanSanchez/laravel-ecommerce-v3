import { Link } from "@inertiajs/inertia-react";

const Subtotal = ({ totalCount, totalPrice }) => {
    return (
        <div className="mt-4">
            <p className="text-xl text-red-700 ml-auto w-min">
                <span className="text-gray-700 mr-4">
                    Subtotal&nbsp;({totalCount}):
                </span>
                ${totalPrice / 100}
            </p>
            <div className="ml-auto w-min">
                <Link
                    href="/checkout"
                    className="block rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-indigo-200 shadow"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Subtotal;
