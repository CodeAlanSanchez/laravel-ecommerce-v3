import Authenticated from "@/Layouts/Authenticated";

const Order = (props) => {
    const auth = props.auth;
    const order = props.order;
    const date = new Date(order.created_at);

    return (
        <Authenticated auth={auth}>
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-24">
                <h1 className="text-3xl mb-4">Order</h1>
                <div className="bg-white shadow p-4 mb-8">
                    <div>
                        <h2 className="text-2xl mb-4 text-slate-900">
                            Summary
                        </h2>
                        <hr className="mb-4" />
                        <div className="grid grid-flow-row grid-cols-2 gap-4">
                            <div>
                                <div>Order Placed</div>
                                <div className="w-full text-gray-600">
                                    {`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
                                </div>
                            </div>
                            <div>
                                <div>Total Price</div>
                                <div className="text-red-700">
                                    ${order.price / 100}
                                </div>
                                <div>{order.createdAt}</div>
                            </div>
                            <div>
                                <div>Payment</div>
                                <div className="text-gray-600">Default</div>
                            </div>
                            <div>
                                <div>Address</div>
                                <div className="text-gray-600">Default</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl mb-4">Products</h2>
                {order.order_items.map(({ product }) => {
                    let amount = product.amount;
                    product = product.product;
                    return (
                        <div
                            key={product.id}
                            className="bg-white p-4 shadow mb-8 flex md:flex-row flex-col gap-4"
                        >
                            <img
                                src={`/storage/${product.image_url}`}
                                alt={product.name}
                                className="h-auto"
                            />
                            <div>
                                <>{console.log(product)}</>
                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="text-xl leading-5 bottom">
                                        {product.name}
                                    </div>
                                    <div className="text-red-700 leading-5 bottom">
                                        ${(product.price * 2) / 100}
                                    </div>
                                    <div className="leading-5 bottom">
                                        <span className="mr-2">Amount:</span>
                                        <span className="text-gray-600">
                                            {amount}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Authenticated>
    );
};

export default Order;
