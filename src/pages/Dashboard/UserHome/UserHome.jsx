import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome Back </span>
                {
                    user?.displayName ?
                        <span className="text-[#D1A054]">{user.displayName}</span>
                        :
                        <span className="text-[#D1A054]">User</span>
                }

            </h2>
        </div>
    );
};

export default UserHome;