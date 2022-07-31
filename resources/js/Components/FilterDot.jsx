import React from 'react';
import { Link } from "@inertiajs/inertia-react";

const FilterDot = ({ name, image, url }) => {
    return (
        <div className="w-min hover:text-blue-500">
            <Link href={`/products/${url}`}>
                <div className="aspect-square h-48 md:h-64">
                    <img className="rounded-full shadow object-scale-down w-full h-full bg-white hover:no-underline"
                         src={`${image}.png`}
                         alt={name}/>
                </div>
                <p className="text-2xl mt-4 text-gray-700 text-inherit font-light capitalize mx-auto w-min">
                    {name}
                </p>
            </Link>
        </div>
    );
};

export default FilterDot;
