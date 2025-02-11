import { useState,useEffect, useRef, useContext } from "react"
import { useSelector } from "react-redux"
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext"

const TableCart = (props)=>{
    const {products}=props
    const cart = useSelector((state)=>state.cart.data)
   
    const [isDarkMode,setIsDarkMode] = useContext(DarkMode)
    const dispatch = useTotalPriceDispatch()
    const {total} = useTotalPrice()

    useEffect(()=>{
		console.log("set product total price")
		if(products.length > 0 && cart.length > 0) {
			const sum = cart.reduce((acc,item)=>{
				const product = products.find((product)=> product.id === item.id)
				return acc + product.price* item.qty
			},0)
			dispatch({
                type:"UPDATE",
                payload:{
                    total:sum
                }
            })
			localStorage.setItem('cart',JSON.stringify(cart))
		}
	},[cart,products])

    const totalPriceRef=useRef()

    useEffect(()=>{
		if(cart.length > 0 ){
			totalPriceRef.current.style.display='table-row'
		}else{
			totalPriceRef.current.style.display='none'
		}
	},[cart])

    return (
    <table className={`text-left text-sm table-auto border-separate border-spacing-x-5 md-2 ${isDarkMode && 'text-white'}`} >
        <thead>
            <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
            </tr>
        </thead>

        <tbody>
            {products.length > 0 && cart.map(item=>{
                const product= products.find((product)=>product.id === item.id)
                return (
                    <tr key={item.id}>
                        <td>{product.title.substring(0,10)}...</td>
                        <td>Rp {product.price.toLocaleString('id-ID',{styles:{currency:'IDR'}})}</td>
                        <td>{item.qty}</td>
                        <td>Rp {(item.qty * product.price).toLocaleString('id-ID',{styles:{currency:"IDR"}})}</td>
                    </tr>
                )
            })}
            <tr ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                    <p>
                        Rp {total.toLocaleString('id-ID',{
                            styles:"currency",
                            currency:"IDR"
                        })}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default TableCart