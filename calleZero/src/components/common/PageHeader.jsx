import React from "react";

const PageHeader = ({
    breadcrumb,
    eyebrow,
    title,
    description,
    rightContent,
    dark = false,
}) => {
    return (
        <section
            className={`px-5 py-10 sm:px-6 md:px-16 ${dark ? "bg-[#111]" : "bg-black"
                }`}
        >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                    {breadcrumb ? (
                        <p className="mb-4 font-[Open_Sans] text-xs text-gray-500">
                            {breadcrumb}
                        </p>
                    ) : null}

                    {eyebrow ? (
                        <p className="mb-2 font-[Montserrat] text-sm tracking-wide text-purple-500">
                            {eyebrow}
                        </p>
                    ) : null}

                    <h1 className="font-[Montserrat] text-4xl font-black text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>

                    {description ? (
                        <p className="mt-4 font-[Open_Sans] text-sm text-gray-400 md:text-base">
                            {description}
                        </p>
                    ) : null}
                </div>

                {rightContent ? <div>{rightContent}</div> : null}
            </div>
        </section>
    );
};

export default PageHeader;