import React from "react";
import Dropdown from "@/Components/Dropdown";
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
                        className="hover:text-sky-700 text-lg mr-12"
                        href="/products"
                    >
                        Products
                    </Link>
                    <Link
                        className="hover:fill-sky-700 text-lg float-right ml-8"
                        href="/cart"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="h-8 w-8"
                        >
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
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
                                        <Link
                                            className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                            href="/profile"
                                        >
                                            Profile
                                        </Link>
                                    </div>
                                    <div className="hover:text-sky-700 text-lg">
                                        <Dropdown.Link href="/logout">
                                            Logout
                                        </Dropdown.Link>
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
