import Authenticated from "@/Layouts/Authenticated";

const Orders = (props) => {
    const auth = props.auth;
    const orders = props.orders.length ? props.orders : [];
    return (
        <Authenticated auth={auth}>
            <div className="max-w-7xl py-12 px-4 sm:px-24 mx-auto">
                <div className="bg-white shadow p-8">
                    <h1>Orders</h1>
                    <>{console.log(orders)}</>
                    <div>
                        {orders?.map((order) => (
                            <div>{order.id}</div>
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Orders;
