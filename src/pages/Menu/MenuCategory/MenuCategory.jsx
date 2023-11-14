import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ img, coverTitle, coverDescription, items, btnText }) => {
    return (
        <div className="pt-12">
            {coverTitle &&
                <Cover
                    img={img}
                    title={coverTitle}
                    description={coverDescription}>
                </Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to={`/order/${coverTitle}`}>
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-600 hover:border-yellow-600 bg-gray-300 text-yellow-600 hover:text-yellow-600 mt-4">{btnText}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;