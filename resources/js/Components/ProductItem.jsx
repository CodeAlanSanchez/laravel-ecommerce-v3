export default function ProductItem({ product }) {
    return (
        <a
            href={`/products/${product.id}`}
            className="p-2 shadow h-80 bg-white hover:cursor-pointer flex flex-col justify-between"
        >
            <img
                src={`/storage/${product.image_url}`}
                alt={product.name}
                className="object-contain max-h-56"
            />
            <div>
                <h4 className="text-black text-lg">{product.name}</h4>
                <p className="text-red-700 text-lg">${product.price / 100}</p>
            </div>
        </a>
    );
}
