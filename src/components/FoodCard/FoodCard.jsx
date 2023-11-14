
const FoodCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="absolute right-0 mr-4 mt-4 p-3 bg-slate-900/80 rounded-lg text-white">${price}</p>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-600 hover:border-yellow-600 bg-gray-300 text-yellow-600 hover:text-yellow-600 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;