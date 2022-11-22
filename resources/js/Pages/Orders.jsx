import Authenticated from "@/Layouts/Authenticated";

const Orders = (props) => {
    const auth = props.auth;
    const orders = props.orders.length ? props.orders : [];
    return (
        <Authenticated auth={auth}>
            <div>
                <h1 className="text-3xl mb-4">Orders</h1>
                <div className="bg-white shadow p-8">
                    <div>
                        {orders?.length ? "" : "No orders found..."}
                        {orders?.map((order) => {
                            let date = new Date(order.created_at);

                            return (
                                <a key={order.id} href={`/orders/${order.id}`}>
                                    <div className="bg-white shadow mb-4 p-4 grid grid-flow-row grid-cols-2 gap-4">
                                        <div className="w-fit">
                                            <div className="">Order Date</div>
                                            <div className="w-full text-gray-600">
                                                {`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
                                            </div>
                                        </div>
                                        <div className="w-fit">
                                            <div>Price</div>
                                            <div className="text-red-700">
                                                ${order.price / 100}
                                            </div>
                                        </div>
                                        <div className="w-fit">
                                            <div>Address</div>
                                            <div className="text-gray-600">
                                                Default
                                            </div>
                                        </div>
                                        <div className="w-fit">
                                            <div>Payment</div>
                                            <div className="text-gray-600">
                                                Default
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Orders;
