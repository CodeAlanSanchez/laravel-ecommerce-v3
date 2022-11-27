import Input from "@/Components/Input";
import { Icon } from "@iconify/react";
import { useForm } from "@inertiajs/inertia-react";

export default (props) => {
    const { data, setData, get } = useForm({ query: "" });

    function onHandleChange(event) {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    }

    function handleSubmit(e) {
        e.preventDefault();

        get("/search");
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex content-center w-[50rem]"
        >
            <Input
                name="query"
                type="text"
                value={data.name}
                placeholder="Search for keywords, brands, or apparel..."
                className="block w-full after:text-red-400 text-black rounded-r-none"
                autoComplete="query"
                handleChange={onHandleChange}
            />
            <button type="submit" className="bg-gray-300 px-2 rounded-r">
                <Icon
                    icon="material-symbols:search-rounded"
                    color="black"
                    width={30}
                />
            </button>
        </form>
    );
};
