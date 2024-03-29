import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth}>
            <Head title="Dashboard" />

            <div>
                <div className="sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
