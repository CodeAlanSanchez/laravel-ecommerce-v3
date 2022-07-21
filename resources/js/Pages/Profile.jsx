import Authenticated from "@/Layouts/Authenticated";

export default function (props) {
    const auth = props.auth;

    return (
        <Authenticated auth={auth}>
            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <div className="bg-white p-4">
                    <h1 className="text-xl">Profile</h1>
                </div>
            </div>
        </Authenticated>
    );
}
