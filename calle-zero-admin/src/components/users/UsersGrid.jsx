import React from "react";
import UserCard from "./UserCard";

const UsersGrid = ({ users, onViewUser }) => {
    return (
        <section className="mt-7 grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {users.map((user) => (
                <UserCard key={user.email} user={user} onViewUser={onViewUser} />
            ))}
        </section>
    );
};

export default UsersGrid;