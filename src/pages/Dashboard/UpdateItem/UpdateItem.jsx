import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const { _id, name, recipe, category, price } = useLoaderData();
    console.log(name);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get a url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with image url
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success message in popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name}'s info is updated!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };



    return (
        <div>
            <SectionTitle heading="Update Item" subHeading="Update Info"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Food Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register('name')}
                            placeholder="Food Name"
                            className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6 my-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("category")}
                                defaultValue={category}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register('price')}
                                defaultValue={price}
                                type="number"
                                step='0.01'
                                min='0'
                                placeholder="Food Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe')}
                            defaultValue={recipe}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input
                            {...register('image')}
                            type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn">
                        Update Menu Item
                    </button>
                </form>
            </div>
        </div>

    );
};

export default UpdateItem;