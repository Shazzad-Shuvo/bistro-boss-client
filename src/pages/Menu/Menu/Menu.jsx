import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* Main cover */}
            <Cover
                img={menuImg}
                title='Our Menu'
                description='Would you like to try a dish?'></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>

            {/* offered menu items */}
            <MenuCategory
                items={offered}
                btnText='ORDER YOUR FAVOURITE FOOD'>
            </MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
                items={desserts}
                coverTitle="desserts"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={dessertImg}
                btnText='ORDER YOUR FAVOURITE FOOD'>
            </MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizzas}
                coverTitle="pizza"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={pizzaImg}
                btnText='ORDER YOUR FAVOURITE FOOD'>
            </MenuCategory>

            {/* salad menu items */}
            <MenuCategory
                items={salad}
                coverTitle="salads"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={saladImg}
                btnText='ORDER YOUR FAVOURITE FOOD'>
            </MenuCategory>

            {/* soup menu items */}
            <MenuCategory
                items={soup}
                coverTitle="soups"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                img={soupImg}
                btnText='ORDER YOUR FAVOURITE FOOD'>
            </MenuCategory>

        </div>
    );
};

export default Menu;