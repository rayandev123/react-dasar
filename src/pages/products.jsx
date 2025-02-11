import CardProduct from '../components/Fragments/CardProduct';
import {Fragment,useContext,useEffect,useState} from 'react'
import {getProducts} from '../services/product.service'
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';
import { DarkMode } from '../context/DarkMode'

const productsPage=()=>{
	const [products,setProducts]=useState([])
	const [isDarkMode,setIsDarkMode] = useContext(DarkMode)

	useEffect(()=>{
		getProducts((data)=>{
			setProducts(data)
		})
	},[])
	

	console.log("render")
	return (
		<Fragment>
		<Navbar/>

		<div className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}>
			<div className="w-4/6 flex flex-wrap">
			    {products.length > 0 &&
				products.map((product)=>{
					return (
						<CardProduct key={product.id}>
							<CardProduct.Header image={product.image} id={product.id} />
							<CardProduct.Body name={product.title}>
								{product.description}
							</CardProduct.Body>
							<CardProduct.Footer id={product.id} price={product.price}/>
						</CardProduct>
					)
				})}
			</div>

			<div className="w-2/6">
				<h1 className='text-3xl font-bold text-blue-800'>cart</h1>
				<TableCart products={products}/>
			</div>
		</div>

		{/* <div className="flex w-100 m-auto my-5 justify-center">
			<Counter msg={2}/>
		</div> */}
		</Fragment>
	)
}

export default productsPage