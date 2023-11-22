import 'animate.css';
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const FoodCard = ({ item }) => {

  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      //send cart item to the database
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Food added to cart!",
              showClass: {
                popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
              },
              hideClass: {
                popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
              }
            });
            //refetch cart to update the cart items count
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Food" /></figure>
      <p className="absolute right-0 mr-4 mt-4 p-3 bg-slate-900/80 rounded-lg text-white">${price}</p>
      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 border-yellow-600 hover:border-yellow-600 bg-gray-300 text-yellow-600 hover:text-yellow-600 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;