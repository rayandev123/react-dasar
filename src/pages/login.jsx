import AuthLayout from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import {Link} from 'react-router-dom'


const LoginPage=(props)=>{
	return (
		<AuthLayout title='Login' type="login">
			<FormLogin />
			
		</AuthLayout>
	)
}

export default LoginPage