import { Link } from 'react-router-dom';
import Button from '../../components/Elements/Button';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/slices/cartSlice'

const CardProduct = ({children})=>{
	return (
		<div className="w-[270px] max-w-sm font-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
			{children}
		</div>
	)
}

const Header = (props)=>{
	const {image,id}=props
	return (
		<Link to={'/product/'+id}>
			<img src={image} className="p-8 rounded-t-lg h-60 w-full object-cover" />
		</Link>
	)
}

const Body = ({children,name}) => {
	return (
		<div className="px-5 pb-5 h-full">
			<a href="">
				<h5 className="text-xl font-semibold tracking-light text-white">{name.substring(0,20)}...</h5>
			</a>
			<p className="text-s text-white">
				 {children.substring(0,100)}...
			</p>
		</div>		
	)
}

const Footer = (props)=>{
	const {price,id} = props
	const dispatch = useDispatch()
	return (
		<div className="flex items-center justify-between px-5 pb-5">
			<span className="text-sm font-bold text-white">Rp {price.toLocaleString('id-ID',{styles:{
				currency:"IDR"
			}})}</span>
			<Button className="bg-blue-600 text-sm" onClick={()=>dispatch(addToCart({id,qty:1}))}>Add To Cart</Button>
		</div>
	)
}

CardProduct.Header=Header
CardProduct.Body=Body
CardProduct.Footer=Footer

export default CardProduct