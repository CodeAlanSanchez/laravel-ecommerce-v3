export default function ProductItem({ product }) {
    return (
        <a
            href={`/product/${product.id}`}
            className="p-4 shadow h-80 bg-white hover:cursor-pointer flex flex-col justify-between"
        >
            <img src={product.image_url} alt={product.name} className="h-max" />
            <div>
                <h4 className="text-black text-lg font-semibold">
                    {product.name}
                </h4>
                <p className="text-red-700 text-lg font-semibold">
                    ${product.price / 100}
                </p>
            </div>
        </a>
    );
}
