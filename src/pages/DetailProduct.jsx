import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../services/product.service"

const DetailProductPage = ()=>{
    const {id} = useParams()
    const [product,setProduct]=useState()
    useEffect(()=>{
        getDetailProduct((data)=>{
            console.log(data)
            setProduct(data)
        },id)
    },[id])
    if(!product){
        return <div>loading...</div>
    }
    return (
        <div className="flex items-center flex-col text-center mt-20">
            <div>id : {id}</div>
            <div>name: {product.title}</div>
            <div>
                image <br />
                <br />
                <img src={product.image} className="w-[100px] h-[150px]" alt="" />
            </div>
            <div>price : {product.price.toLocaleString()}</div>
            <div>
                <div>description</div>
                <div>{product.description}</div>
            </div>
        </div>
    )
}

export default DetailProductPage