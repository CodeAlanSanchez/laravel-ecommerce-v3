import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import Label from "@/Components/Label";
import ProductAnalytics from "@/Components/ProductAnalytics";
import Input from "@/Components/Input";

export default function Product(props) {
    const auth = props.auth;
    const product = props.product;
    const [amount, setAmount] = useState(1);
    const { data, setData, put, errors } = useForm(product);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        let arr = data;
        Object.keys(data).map((key) => {
            if (arr[key] === null) arr[key] = "";
        });
        setData({
            ...arr,
        });
    }, []);

    const onCart = (e) => {
        e.preventDefault();

        Inertia.post("/cart", { product_id: product.id, amount });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setEdit((prev) => !prev);

        put(`/products/${product.id}`);
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Product" />
            <div>
                <div className="md:mx-auto shadow flex flex-col md:flex-row mt-16 bg-white">
                    <div className="flex-1">
                        <img
                            src={`/storage/${product.image_url}`}
                            alt={product.name}
                        />
                    </div>
                    <div className="p-8 border-x-0 border-b-0 md:border-y-0 md:border-0 md:border-l-2 border-t-gray-100 border-2 flex-1">
                        <button
                            onClick={() => setEdit((prev) => !prev)}
                            className="text-blue-500 text-lg hover:underline"
                        >
                            {edit ? "Stop editing" : "Edit"}
                        </button>
                        {edit ? (
                            <EditForm
                                product={product}
                                handleSubmit={handleSubmit}
                                errors={errors}
                                data={data}
                                setData={setData}
                            />
                        ) : (
                            <ProductInfo product={product} onCart={onCart} />
                        )}
                        <ProductAnalytics
                            analytics={product.product_analytics}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

const ProductInfo = ({ product, onCart }) => {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
            {product.discounted_price ? (
                <>
                    <h1 className="text-xl mb-2 text-stone-700 line-through">
                        ${product.price / 100}
                    </h1>
                    <h1 className="text-xl mb-2 text-red-600 line-through">
                        ${product.discounted_price / 100}
                    </h1>
                </>
            ) : (
                <h1 className="text-2xl mb-4 text-red-600">
                    ${product.price / 100}
                </h1>
            )}
            <h1 className="text-2xl mb-6">{product.description}</h1>
            <button
                onClick={(e) => onCart(e)}
                className="text-2xl py-2 px-4 w-fit shadow rounded bg-blue-500 text-white hover:bg-blue-400"
            >
                Add To Cart
            </button>
        </>
    );
};

const EditForm = ({ handleSubmit, data, setData, errors }) => {
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    return (
        <>
            <h1 className="text-2xl mb-4">Edit Product</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                {errors.name && (
                    <div className="text-red-400">{errors.name}</div>
                )}
                <Label
                    forInput="name"
                    value="Name"
                    className="required after:text-red-400"
                />
                <Input
                    name="name"
                    type="text"
                    value={data.name}
                    className="mb-4 mt-2 block w-full after:text-red-400l"
                    autoComplete="name"
                    handleChange={onHandleChange}
                    isFocused={true}
                />
                {errors.description && (
                    <div className="text-red-400">{errors.description}</div>
                )}
                <Label
                    forInput="description"
                    value="Description"
                    className="required after:text-red-400"
                />
                <Input
                    name="description"
                    type="text"
                    value={data.description}
                    className="mb-4 mt-2 block w-full"
                    autoComplete="description"
                    handleChange={onHandleChange}
                />
                {errors.price && (
                    <div className="text-red-400">{errors.price}</div>
                )}
                <Label
                    forInput="price"
                    value="Price (In Cents)"
                    className="required after:text-red-400"
                />
                <Input
                    name="price"
                    type="text"
                    value={data.price}
                    className="mb-4 mt-2 block w-full"
                    autoComplete="price"
                    handleChange={onHandleChange}
                />
                {errors.discount_price && (
                    <div className="text-red-400">{errors.discount_price}</div>
                )}
                <Label forInput="discount_price" value="Discount (Optional)" />
                <Input
                    name="discount_price"
                    type="text"
                    value={data.discount_price}
                    className="mb-4 mt-2 block w-full"
                    autoComplete="discount_price"
                    handleChange={onHandleChange}
                />
                {errors.gender && (
                    <div className="text-red-400">{errors.gender}</div>
                )}
                <Label forInput="gender" value="Gender" />
                <select
                    name="gender"
                    id="gender"
                    onChange={onHandleChange}
                    autoComplete="gender"
                    className="mb-4 mt-2 block w-full rounded border-gray-300 focus:ring focus:ring-indigo-200"
                    value={data.gender}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="">None</option>
                </select>
                {errors.image && (
                    <div className="text-red-400">{errors.image}</div>
                )}
                <Label
                    forInput="image"
                    value="Product Image"
                    className="required after:text-red-400"
                />
                <input
                    type="file"
                    name="image"
                    className="mb-4 mt-2 w-full border-gray-200 border-4 p-4 border-dashed focus:outline-none hover:cursor-pointer hover:border-indigo-200"
                    onChange={(e) => setData("image", e.target.files[0])}
                />
                <button
                    type="submit"
                    className="rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-indigo-200 shadow"
                >
                    Update Product
                </button>
            </form>
        </>
    );
};
