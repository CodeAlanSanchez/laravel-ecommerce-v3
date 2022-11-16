import Authenticated from "@/Layouts/Authenticated";

const Orders = (props) => {
    const auth = props.auth;
    const orders = props.orders.length ? props.orders : [];
    return (
        <Authenticated auth={auth}>
            <div className="max-w-7xl py-12 px-4 sm:px-24 mx-auto">
                <h1 className="text-3xl mb-4">Orders</h1>
                <div className="bg-white shadow p-8">
                    <div>
                        {orders?.map((order) => {
                            let date = new Date(order.created_at);

                            return (
                                <a key={order.id} href={`/orders/${order.id}`}>
                                    <div className="bg-white shadow mb-4 p-4 flex flex-row">
                                        <div className="w-fit mr-4">
                                            <div className="">Order Date</div>
                                            <div className="w-full text-slate-500">
                                                {`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
                                            </div>
                                        </div>
                                        <div className="w-fit">
                                            <div>Price</div>
                                            <div>{order.price}</div>
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
