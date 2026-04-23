const Button = ({ text, onClick, type = "button", disabled = false }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`w-full mt-6 py-2 rounded-lg font-montserrat font-semibold transition duration-200
            ${disabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]"
                }`}
        >
            {text}
        </button>
    );
};

export default Button;