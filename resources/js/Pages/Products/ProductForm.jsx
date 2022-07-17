import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

export default function (props) {
    const { data, setData, post, errors } = useForm({
        name: "",
        description: "",
        price: "",
        discount_price: "",
        gender: "",
        image: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/products");
    }

    function onHandleChange(event) {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    }

    return (
        <Authenticated auth={props.auth}>
            <div className="p-8">
                <Head title="Products" />

                <Link href="/">
                    <ApplicationLogo className="w-16 h-16 mb-6 mx-auto fill-current text-gray-500" />
                </Link>

                <div className="rounded p-6 shadow bg-white w-72 sm:min-w-max mx-auto">
                    <h1 className="text-2xl mb-4 text-center">Product Form</h1>

                    {/* <ValidationErrors errors={errors} /> */}

                    <form onSubmit={submit} className="">
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
                            <div className="text-red-400">
                                {errors.description}
                            </div>
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
                            <div className="text-red-400">
                                {errors.discount_price}
                            </div>
                        )}
                        <Label
                            forInput="discount_price"
                            value="Discount (Optional)"
                        />
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
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        <button
                            type="submit"
                            className="rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-indigo-200 shadow"
                        >
                            Create Product
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
