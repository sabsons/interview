import { FaArrowLeft } from "react-icons/fa";
import { CartSvg } from '../assets/svgs'
import { GoPlus } from "react-icons/go";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const ItemNav = () => {
    const [products, setProducts] = useState([])

    // const dispatch = useDispatch()
    const [cart, setCart] = useState([])


    const addToCart = (prod) => {
        // console.log(prod)
        let preCart = cart
        preCart.push(prod)
        setCart(preCart)
        console.log(cart)
        // console.log(preCart)
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            setProducts(res.data)
        })
    }, [])



    return (
        <>
            <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm py-4">
                <nav class="w-full mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div id="navbar-collapse-basic" class="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div data-hs-scrollspy="#scrollspy-1" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1" class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 [--scrollspy-offset:220] md:[--scrollspy-offset:70] !justify-start">
                            <a class="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500 active" href="#first">First</a>
                            <a class="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500" href="#second">Second</a>
                            <a class="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500" href="#second">Second</a>
                            <a class="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500" href="#second">Second</a>
                            <a class="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500" href="#second">Second</a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="flex justify-between mt-3">
                <div className="w-[60%]">
                    <div className="flex items-center gap-x-2">
                        <FaArrowLeft />
                        <input type="text" className="border w-full rounded bg-[#e2e2e2] p-[0.4rem] pl-1" placeholder="Search for item by title..." />
                    </div>
                    <div id="scrollspy-1" class="mt-3 space-y-4">
                        <div className="flex flex-wrap gap-5 justify-center">
                            {
                                products?.map((val, index) => {
                                    return (
                                        <div key={index} id="first" className="flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[520px]">
                                            <div className="w-[30%] p-4"><img src={val?.image} className="h-48" alt="" /></div>
                                            <div className="w-[70%] flex flex-col justify-between border min-h-full p-2 pt-4">
                                                <h1 className="font-semibold">{val?.title}</h1>
                                                <p>Any 4 Beef Sliders with 1 gourmet Fries From Mayo Garlic OR Wild Fries and 2 soft Drinks</p>
                                                <div>
                                                    <button className="block bg-black text-white p-1">Rs. {val?.price}</button>
                                                    <button className="float-right bg-yellow-500 w-6 h-6 flex justify-center items-center rounded"><GoPlus className="text-[20px]" onClick={() => addToCart(val)} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="w-[30%] sticky h-[60vh] flex justify-center items-center top-[93px]">
                    <div className="text-center">
                        <div className="w-fit m-auto">
                            <CartSvg />
                        </div>
                        <p className="text-yellow-500">Your cart is empty</p>
                        <p>Add items to get started</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemNav