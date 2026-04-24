import React from "react";

const ContactInfoCard = ({ icon: Icon, title, text }) => {
    return (
        <div className="flex gap-3">
            <div className="flex h-10 min-w-[40px] items-center justify-center rounded-full bg-purple-500/20">
                <Icon size={18} />
            </div>

            <div>
                <p className="font-semibold">{title}</p>
                <p className="break-all text-gray-400">{text}</p>
            </div>
        </div>
    );
};

export default ContactInfoCard;