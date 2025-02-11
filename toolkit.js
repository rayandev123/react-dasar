import {configureStore,createAction,createReducer} from '@reduxjs/toolkit'

// const {configureStore,createAction,createReducer} = toolkit

const addToCart=createAction('ADD_TO_CART')

const initalState={cart:[]}

const cartReducer = createReducer([],(builder)=>{
    builder.addCase(addToCart,(state,action)=>{
        state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION")

const loginReducer = createReducer({status:false},(builder)=>{
    builder.addCase(login,(state,action)=>{
        // console.log("state",state)
        state.status = true
    })
})


const store= configureStore({
    reducer:{
        login:loginReducer,
        cart:cartReducer
    }
})

console.log("STORE CREATED",store.getState())

store.subscribe(()=>{
    console.log("STORE CHANGE",store.getState())
})

const action1= addToCart({id:1,qty:20})
store.dispatch(action1)

store.dispatch(login())