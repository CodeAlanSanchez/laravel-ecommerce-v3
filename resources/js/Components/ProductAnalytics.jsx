export default ({ analytics }) => {
    return (
        <div>
            <hr className="mt-8 border-slate-400" />
            <h2 className="text-2xl mt-8 inline-block mr-4">Analytics</h2>
            <span className="text-gray-500">Only visible to you</span>
            <div className="flex flex-row w-full md:w-3/6 justify-between mt-8">
                <div>
                    <h4 className="text-2xl font-medium">Views</h4>
                    <p className="text-xl">{analytics.views}</p>
                </div>
                <div>
                    <h4 className="text-2xl font-medium">Likes</h4>
                    <p className="text-xl">{analytics.favorites}</p>
                </div>
                <div>
                    <h4 className="text-2xl font-medium">Carts</h4>
                    <p className="text-xl">{analytics?.cart_adds}</p>
                </div>
            </div>
        </div>
    );
};
