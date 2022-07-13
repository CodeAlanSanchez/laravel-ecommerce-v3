import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function (props) {
    return (
        <Authenticated auth={props.auth}>
            <Head title="Products" />
            <h1 className="text-lg">Product Form</h1>
            <form action="submit"></form>
        </Authenticated>
    );
}
