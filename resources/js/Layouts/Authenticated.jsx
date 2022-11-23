import React from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/inertia-react";
import { Icon } from "@iconify/react";
import Search from "@/Components/Search";

export default function Authenticated({ auth, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-primary">
                <div className="sm:px-24 px-4 max-w-[120rem] mx-auto h-36 text-white flex items-center">
                    <nav className="flex w-full">
                        <div className="basis-[35rem] flex justify-between items-center pr-16">
                            <Link
                                className="hover:fill-gray-400 text-2xl h-min block"
                                href="/new"
                            >
                                NEW
                            </Link>
                            <Link
                                className="hover:fill-gray-400 text-2xl h-min block"
                                href="/featured"
                            >
                                FEATURED
                            </Link>
                            <Link
                                className="hover:fill-gray-400 text-2xl h-min block"
                                href="/products"
                            >
                                SHOP
                            </Link>
                        </div>
                        <div className="basis-[50rem]">
                            <Search />
                        </div>
                        <div className="basis-[35rem] flex justify-around items-center">
                            <Link
                                className="hover:fill-gray-400 text-lg float-right ml-8"
                                href="/cart"
                            >
                                <Icon
                                    icon="material-symbols:shopping-cart-outline-rounded"
                                    color="white"
                                    width={36}
                                    className="hover:fill-white"
                                />
                            </Link>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="uppercase text-white inline-flex items-center border border-transparent text-lg rounded-md hover:fill-gray-400 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}
                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4 fill-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
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
                                        <div className="hover:text-sky-700">
                                            <Link
                                                className="block w-full px-4 py-2 text-left text-xl leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                                href="/profile"
                                            >
                                                Profile
                                            </Link>
                                        </div>
                                        <div className="hover:text-sky-700 text-xl">
                                            <Dropdown.Link href="/logout">
                                                Logout
                                            </Dropdown.Link>
                                        </div>
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </nav>
                </div>
            </div>
            <main className="sm:px-24 py-12 px-4 max-w-[120rem] mx-auto">
                {children}
            </main>
        </div>
    );
}
