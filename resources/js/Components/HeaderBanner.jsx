import { Icon } from "@iconify/react";

export default () => {
    return (
        <div className="bg-gray-200 border-b-[1px] border-slate-900 py-8">
            <div className="flex justify-between sm:px-24 px-4 max-w-[120rem] mx-auto text-primary">
                <div className="flex flex-row items-center w-max">
                    <Icon
                        icon="material-symbols:local-shipping-outline-rounded"
                        width={60}
                        className="mr-4"
                    />
                    <div>
                        <p className="text-xl font-semibold uppercase">
                            free shipping and returns
                        </p>
                        <p className="font-light">
                            Free shipping on all orders over $35
                        </p>
                    </div>
                </div>
                <div className=" border-r-[1px] border-slate-900" />
                <div className="flex flex-row items-center w-max">
                    <Icon
                        icon="material-symbols:support-agent-rounded"
                        width={60}
                        className="mr-4"
                    />
                    <div>
                        <p className="text-xl font-semibold uppercase">
                            online support 24/7
                        </p>
                        <p className="font-light">Call 1800-555-0134</p>
                    </div>
                </div>
                <div className=" border-r-[1px] border-slate-900" />
                <div className="flex flex-row items-center w-max">
                    <Icon
                        icon="ri:money-dollar-circle-line"
                        width={60}
                        className="mr-4"
                    />
                    <div>
                        <p className="text-xl font-semibold uppercase">
                            use code holidays
                        </p>
                        <p className="font-light">
                            Up to 70% off this winter season
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
