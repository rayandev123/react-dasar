import Button from "../Elements/Button"
import {useLogin} from '../../hooks/useLogin'
import { useEffect, useState, useContext } from "react"
import { useSelector } from "react-redux"
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice } from "../../context/TotalPriceContext"

const Navbar = ()=>{
    const [totalCart,setTotalCart]=useState(0)
    const [isDarkMode,setIsDarkMode] = useContext(DarkMode)
    const cart= useSelector((state)=>state.cart.data)
    const {total} = useTotalPrice()

    useEffect(()=>{
        const sum = cart.reduce((acc,item)=>{
            return acc + item.qty
        },0)
        setTotalCart(sum)
    },[cart])

    const handleLogout = ()=>{
		localStorage.removeItem('token')
		// localStorage.removeItem('password')
		window.location.href="/login"
	}

    const username = useLogin()
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
			{username}
			<Button className="ml-5 bg-black" onClick={handleLogout}>logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                item: {totalCart} | price $ {total}
            </div>

            <Button
          onClick={()=>setIsDarkMode(!isDarkMode)} 
          className="right-2 top-2 p-2 cursor-pointer bg-slate-800 ml-5 text-white rounded">
              {isDarkMode?"Light":"Dark"}
          </Button>
		</div>
    )
}

export default Navbar