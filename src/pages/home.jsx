import { FaPhone } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "../components/carousel";
import ItemNav from "../components/item-nav";

const HomePage = () => {
    return (
        <div>
            <div className="bg-yellow-500 text-center py-2">
                <h1 className="text-[18px] font-semibold text-white">Supporting our local beverage, Pakola now available</h1>
            </div>
            <div className="flex h-16 justify-between items-center px-3 py-1 bg-black">
                <button className="flex items-center gap-x-2 bg-yellow-500 text-white p-2 rounded-lg">
                    <FaPhone></FaPhone>
                    <span className="tracking-tighter font-semibold">
                    021111432532
                    </span>
                </button>
                <img className="relative top-6 w-[110px] h-[110px] z-10" src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fconsole.indolj.io%2Fupload%2F1666705959-LOGO-min.png&w=128&q=75" alt="" />
                <div>
                <FaShoppingCart className="text-yellow-500 text-[20px]"></FaShoppingCart>
                </div>
            </div>
            <div>
                <Slider/>
            </div>
            <div>
                <ItemNav/>
            </div>
        </div>
    )
}

export default HomePage