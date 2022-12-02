import Authenticated from "@/Layouts/Authenticated";

const Order = (props) => {
    const auth = props.auth;
    const order = props.order;
    const date = new Date(order.created_at);

    return (
        <Authenticated auth={auth}>
            <div>
                <h1 className="text-3xl mb-4">Order</h1>
                <div className="bg-white border-slate-400 border-[1px] p-4 mb-8">
                    <div>
                        <h2 className="text-2xl mb-4 text-slate-900">
                            Summary
                        </h2>
                        <hr className="mb-4 border-slate-400" />
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
                {order.order_items.map((item) => {
                    const { id, name, description, price, image_url } =
                        item.product;
                    const amount = item.amount;
                    return (
                        <a
                            key={id}
                            className="bg-white p-4 border-slate-400 border-[1px] mb-8 flex md:flex-row flex-col gap-4"
                            href={`/products/${id}`}
                        >
                            <img
                                src={`/storage/${image_url}`}
                                alt={name}
                                className="w-56"
                            />
                            <div>
                                <div className="flex flex-row gap-4 mb-2">
                                    <div className="text-xl leading-5 bottom">
                                        {name}
                                    </div>
                                    <div className="text-red-700 leading-5 bottom">
                                        ${(price * 2) / 100}
                                    </div>
                                    <div className="leading-5 bottom">
                                        <span className="mr-2">Amount:</span>
                                        <span className="text-gray-600">
                                            {amount}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    {description}
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </Authenticated>
    );
};

export default Order;
