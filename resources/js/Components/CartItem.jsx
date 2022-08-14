import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ({ item }) {
    const [amountOptions, setAmountOptions] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    const [amount, setAmount] = useState(item.amount);

    const handleAmountChange = (e) => {
        e.preventDefault();

        setAmount(e.target.value);

        Inertia.put(`/cart/${item.id}/amount`, { amount: e.target.value });
    };

    const handleDelete = () => {
        Inertia.delete("/cart", { cartProductId: item.id });
    };

    return (
        <div className="flex gap-4 flex-initial border-x-0 border-t-0 border-b-2 last:border-none border-gray-200 py-4 w-full">
            <img
                className="aspect-square w-48 object-cover"
                src={`/storage/${item.product.image_url}`}
                alt=""
            />
            <div className="w-full">
                <h3 className="text-xl">{item.product.name}</h3>
                <h3 className="text-lg text-gray-500">
                    {item.product.description}
                </h3>
                <div>
                    <h3 className="text-lg mt-2">Amount</h3>
                    <input
                        className="w-16
                         border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded"
                        onChange={(e) => handleAmountChange(e)}
                        type="text"
                        name="amount"
                        value={amount}
                        list="amountOptions"
                    />
                    <datalist id="amountOptions">
                        {amountOptions.map((i) => (
                            <option key={i} value={i} />
                        ))}
                    </datalist>
                    <button
                        className="ml-4 text-blue-500 hover:text-black"
                        onClick={() => handleDelete()}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="float-right">
                <h3 className="text-lg text-red-700">
                    ${item.product.price / 100}
                </h3>
            </div>
        </div>
    );
}
