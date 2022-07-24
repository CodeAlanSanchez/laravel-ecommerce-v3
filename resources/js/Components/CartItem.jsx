export default function ({ item }) {
    return (
        <div className="flex gap-4 flex-initial border-x-0 border-t-0 border-b-2 last:border-none border-gray-200 py-4 w-full">
            <img className="aspect-square w-48 object-cover" src="" alt="" />
            <div className="w-full">
                {/* <h2 className="text-lg">Name</h2> */}
                <h3 className="text-xl">{item.name}</h3>
                {/* <h2 className="text-lg">Description</h2> */}
                <h3 className="text-lg">{item.description}</h3>
            </div>
            <div className="float-right">
                {/* <h2 className="text-lg">Price</h2> */}
                <h3 className="text-lg text-red-700">${item.price / 100}</h3>
            </div>
        </div>
    );
}
