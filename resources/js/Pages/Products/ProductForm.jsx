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
            <div className="mx-auto w-min pt-8">
                <Head title="Products" />

                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 my-8 mx-auto fill-current text-gray-500" />
                </Link>

                <div className="rounded p-4 shadow bg-white w-72 sm:min-w-max">
                    <h1 className="text-2xl mb-4 text-center">Product Form</h1>

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit} className="">
                        <Label forInput="email" value="Email" />
                        <Input
                            name="name"
                            type="text"
                            value={data.name}
                            className="mb-4 mt-2 block w-full"
                            autoComplete="name"
                            handleChange={onHandleChange}
                            isFocused={true}
                        />
                        {errors.name && <div>{errors.name}</div>}
                        <Label forInput="description" value="Description" />
                        <Input
                            name="description"
                            type="text"
                            value={data.description}
                            className="mb-4 mt-2 block w-full"
                            autoComplete="description"
                            handleChange={onHandleChange}
                        />
                        {errors.description && <div>{errors.description}</div>}
                        <Label forInput="price" value="Price (In Cents)" />
                        <Input
                            name="price"
                            type="text"
                            value={data.price}
                            className="mb-4 mt-2 block w-full"
                            autoComplete="price"
                            handleChange={onHandleChange}
                        />
                        {errors.price && <div>{errors.price}</div>}
                        <Label forInput="image" value="Product Image" />
                        <Input
                            name="image"
                            type="file"
                            value={data.image}
                            className="mb-4 mt-2 w-full border-gray-200 border-4 p-4 border-dashed"
                            autoComplete="price"
                            handleChange={onHandleChange}
                        />
                        {errors.image && <div>{errors.image}</div>}
                        <button
                            type="submit"
                            className="rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 shadow"
                        >
                            Create Product
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
