import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="p-4 bg-white shadow">
                <div className="max-w-7xl mx-auto">
                    <Link className="hover:text-sky-700 text-lg mr-12" href="/">
                        Home
                    </Link>
                    <Link
                        className="hover:text-sky-700 text-lg"
                        href="/products"
                    >
                        Products
                    </Link>
                    <div className="hidden sm:flex sm:items-center align-middle float-right">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center border border-transparent text-lg rounded-md text-black hover:text-sky-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {auth.user.name}
                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <div className="p-4">
                                    <div className="hover:text-sky-700 text-lg">
                                        <Dropdown.Link>Profile</Dropdown.Link>
                                    </div>
                                    <div className="hover:text-sky-700 text-lg">
                                        <Dropdown.Link>Logout</Dropdown.Link>
                                    </div>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
