const Buckets = ({ data }) => {
    return (
        <table className="min-w-full bg-white border border-black px-4 rounded-xl my-8 ">
            <thead>
                <tr>
                    <th colSpan="4" className="py-2 px-4 text-md text-left font-semibold">
                        Buckets You Own
                    </th>
                </tr>
                <tr>
                    <th className="border-b-2  border-gray-300 py-2 px-4 font-normal text-left">Name</th>
                    <th className="border-b-2 border-gray-300 py-2 px-4 font-normal text-left">Budget</th>
                    <th className="border-b-2 border-gray-300 py-2 px-4 font-normal text-left">Spend</th>
                    <th className="border-b-2 border-gray-300 py-2 px-4 font-normal text-left">Forecast</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={index}>
                        <td className=" py-2 px-4">{item.name}</td>
                        <td className=" py-2 px-4">{item.budget}</td>
                        <td className=" py-2 px-4">{item.spend}</td>
                        <td className=" py-2 px-4">{item.forecast}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Buckets;
