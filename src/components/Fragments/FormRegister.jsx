import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

const FormRegister = ()=>{
	return (

       <form action="" >
       	  <InputForm name="fullname" label="Fullname" type="text" placeholder="Insert your name here..." />
          <InputForm name="email" label="Email" type="email" placeholder="example@mail.com" />
          <InputForm name="password" label="Password" type="password" placeholder="***" />
           <InputForm name="confirmPassword" label="Confirm Password" type="password" placeholder="***" />

          <Button classname="bg-blue-600 w-full">Register</Button>
       </form>

    	
	)
}

export default FormRegister