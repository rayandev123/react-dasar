import React from 'react' 
class Counter extends React.Component{

	constructor(props){
		super(props)
		this.state={
			count:1,
			msg:1
		}
		console.log('constructor()')
	}

	componentDidMount(){
		// this.setState({count:10})
		console.log('componentDidMount()')
	}

	componentDidUpdate(prevProps,prevState){
		if(this.state.count===10){
			this.setState({count:5})
		}
		console.log('prevProps',prevProps)
		console.log('prevState',prevState)
		console.log('componentDidUpdate()')
	}

	render(){
		console.log('render()')
		return (
		<div className="flex items-center">
			<h1 className="mr-5">{this.state.count}</h1>
			<button className='bg-black text-white p-2 cursor-pointer' onClick={()=>{
				this.setState({count:this.state.count+1,msg:this.state.msg+1})
			}}>+</button>
		</div>
		)
	}
}

export default Counter