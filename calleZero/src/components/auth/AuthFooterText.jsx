import React from "react";

const AuthFooterText = ({ text, actionText, onClick }) => {
    return (
        <p className="mt-4 text-center text-sm text-gray-400">
            {text}{" "}
            <span onClick={onClick} className="cursor-pointer text-purple-500">
                {actionText}
            </span>
        </p>
    );
};

export default AuthFooterText;