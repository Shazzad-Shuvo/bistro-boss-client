import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-cover text-white my-20">
            <SectionTitle subHeading='Check it out' heading='From Our Menu'></SectionTitle>
            <div className="md:flex justify-center items-center  py-20 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10">
                    <p>November 19, 2023</p>
                    <p className="uppercase">Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nulla. Id velit laudantium ad? Reiciendis nostrum dolor, placeat vel animi, adipisci rem earum quidem voluptatibus, omnis quaerat non facere pariatur inventore molestias officia iste. Molestiae sit nostrum deleniti quod impedit voluptatibus quasi pariatur, dicta cumque est illum similique ad nihil.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white bg-black/60 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;