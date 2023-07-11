import { menuItems } from "../constants";

const SideBar = () => {


    return (
        <div className="bg-gray-800 text-white h-full">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">MoneyMint</h2>
                <ul className="space-y-4">
                    {menuItems?.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className={item.icon}></span>
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar