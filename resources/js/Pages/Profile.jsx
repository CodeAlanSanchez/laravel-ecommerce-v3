import Authenticated from "@/Layouts/Authenticated";

export default function (props) {
    const auth = props.auth;

    return (
        <Authenticated auth={auth}>
            <div className="py-12 sm:px-24 px-4 max-w-7xl mx-auto">
                <h1 className="text-3xl mb-4">Profile</h1>
                <div className="bg-white p-4 shadow grid md:grid-cols-2 gap-4">
                    <div>
                        <h1 className="text-xl">Email</h1>
                        <p className="text-stone-600">{auth.user.email}</p>
                    </div>
                    <div>
                        <h1 className="text-xl">Name</h1>
                        <p className="text-stone-600">{auth.user.name}</p>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
