import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

export default function (props) {
    const auth = props.auth;

    return (
        <Authenticated auth={auth}>
            <div>
                <h1 className="text-2xl mb-2">Admin Panel</h1>
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-lg mb-2">Images</h2>
                    <ImageSubmit
                        label="Placeholder Image (Products)"
                        name={"placeholder"}
                    />
                    <ImageSubmit label="Men Filter Image" name={"men"} />
                    <ImageSubmit label="Women Filter Image" name={"women"} />
                </div>
            </div>
        </Authenticated>
    );
}

function ImageSubmit({ label, name }) {
    const { setData, post } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();

        post(`/admin/${name}`);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
            <label
                htmlFor={name}
                placeholder=""
                className="text-sm text-gray-700"
            >
                {label}
            </label>
            <input
                type="file"
                id={name}
                name={name}
                className="border-gray-200 border-4 p-4 border-dashed focus:outline-none hover:cursor-pointer hover:border-indigo-200 w-full block mt-2 mb-2"
                onChange={(e) => setData("image", e.target.files[0])}
            />
            <button
                type="submit"
                className="rounded text-sm mt-2 px-2 py-1 bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-indigo-200 shadow"
            >
                Update Image
            </button>
        </form>
    );
}
