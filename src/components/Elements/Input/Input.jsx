import { forwardRef } from "react"

const Input= forwardRef((props,ref)=>{
	const {type,placeholder,name}=props
	return (
		  <input id={name} type={type} 
				  className="opacity-50 text-sm border rounded w-full py-2 px-2 text-slate-700" placeholder={placeholder} name={name}
				ref={ref}
				
			/>
	)
}) 

export default Input