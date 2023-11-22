import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, food) => total + food.price, 0).toFixed(2);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/carts/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Food has been deleted.",
                                    icon: "success"
                                });

                            }
                        })
                    //   
                }
            });
    }
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-3xl">Total Orders: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
                <button className="btn btn-square bg-[#D1A054]">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        ${item.price}
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;