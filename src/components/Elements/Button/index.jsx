const Button=(props)=>{
    const {children,classname='bg-black',onClick=()=>{},type="button"} =props;
    return (
         <button type={type} className={`h-10 px-6 font-semibold rounded-md ${classname} text-white cursor-pointer`} 
         	onClick={onClick}
         >
            {children}
          </button>
      )
}

export default Button