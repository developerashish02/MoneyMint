
const BankCard = ({ balance, details }) => {
    console.log(details, "Details")
    return (
        <div className="bg-white p-4 shadow-md rounded-md sm:w-64">
            <h2 className="text-2xl font-bold  mb-2 text-center"> {balance}</h2>
            <p className="text-gray-500 mb-4 text-center"> {details} </p>
        </div>
    );
};

export default BankCard;
