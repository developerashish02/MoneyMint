import BankCard from "./BankCard";
import { users, data } from "../constants";
import Buckets from "./Buckets";
const MainBody = () => {
    return (
        <>
            <div className="my-8 flex space-x-8  justify-center rounded-lg">
                {users.map((user) => (
                    <BankCard
                        key={user?.id}
                        balance={user?.balance}
                        details={user?.details}
                    />
                ))}
            </div>

            <div className="mx-12 px-4">
                {data.map((data, index) => {
                    return <Buckets data={data} key={index} />;
                })}
            </div>
        </>
    );
};

export default MainBody;
