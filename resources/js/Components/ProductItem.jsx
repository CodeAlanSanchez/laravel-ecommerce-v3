import axios from "axios";
import { useState } from "react";

export default function ProductItem({ product }) {
    const [isFavorite, setIsFavorite] = useState(product?.favorite?.length > 0);

    return (
        <div>
            <Heart
                favorite={isFavorite}
                setFavorite={setIsFavorite}
                id={product.id}
            />
            <a
                href={`/products/${product.id}`}
                className="p-2 border-slate-400 border-[1px] h-80 bg-white hover:cursor-pointer flex flex-col justify-between"
            >
                <img
                    src={`/storage/${product.image_url}`}
                    alt={product.name}
                    className="object-contain max-h-56 pb-4 border-b-[1px] border-slate-400"
                />
                <div>
                    <h4 className="text-black text-lg">{product.name}</h4>
                    <p className="text-red-700 text-lg">
                        ${product.price / 100}
                    </p>
                </div>
            </a>
        </div>
    );
}

function Heart({ id, favorite = false, setFavorite }) {
    const handleFavorite = (e) => {
        axios
            .put(`/products/${id}/favorite`, {
                favorite: favorite ? -1 : 1,
            })
            .then((r) =>
                r.data.favorite ? setFavorite(true) : setFavorite(false)
            );
    };

    return (
        <button
            className="mt-2 ml-2 absolute z-10"
            onClick={(e) => handleFavorite(e)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                viewBox="0 0 512 512"
            >
                <path
                    className={`stroke-[20px] stroke-black hover:stroke-red-500 fill-transparent hover:fill-red-500
                        ${favorite && "fill-red-500 stroke-red-500"}
                    `}
                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                />
            </svg>
        </button>
    );
}
