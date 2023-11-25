import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaCarSide, FaProductHunt, FaUsers, FaWallet } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth();
    // console.log(user);
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })


    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome Back </span>
                {
                    user?.displayName ?
                        <span className="text-[#D1A054]">{user.displayName}</span>
                        :
                        <span className="text-[#D1A054]">Admin</span>
                }
            </h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaWallet className="text-3xl"></FaWallet>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-3xl"></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCarSide className="text-3xl"></FaCarSide>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;