import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { DarkMode } from '../../context/DarkMode'

const AuthLayout = (props)=>{
	const {children,title,type} = props
  const [isDarkMode,setIsDarkMode] = useContext(DarkMode)
  console.log(isDarkMode)
	return (
    <div className={`flex justify-center  min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-full max-w-xs">
          <button
          onClick={()=>setIsDarkMode(!isDarkMode)} 
          className="absolute right-2 top-2 p-2 cursor-pointer bg-blue-600 text-white rounded">
              {isDarkMode?"Light":"Dark"}
          </button>
           <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
           <p className="font-medium text-slate-500" >
            Welcome, Please enter your details
           </p>

            {children}
            <Navigation type={type} />
        </div>
    </div>
	)
}

const Navigation = ({type})=>{
  if(type === 'login'){
    return (
    <p className="mt-5 text-center">
      don't have an account?
      <Link className="font-bold text-blue-600" to="/register"> register</Link>
    </p>
    )
  } else {
  return (
     <p className="mt-5 text-center">
      Already have an account?
      <Link className="font-bold text-blue-600" to="/login"> Login</Link>
    </p> 
    )
  }
}

export default AuthLayout