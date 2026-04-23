const Input = ({
    type = "text",
    placeholder,
    label,
    name,
    value,
    onChange,
}) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-gray-400 text-sm font-opensans">
                    {label}
                </label>
            )}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder || label}
                className="bg-transparent border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition font-opensans"
            />
        </div>
    );
};

export default Input;