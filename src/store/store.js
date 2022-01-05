import { createStore } from 'redux'

const myReducer =(state={counter:0},action)=>{
  if (action.type==="inc") {
    console.log(action.payload)
    return{
      counter:state.counter+1
    }
  }

  if (action.type==="dec") {
    return{
      counter:state.counter-1
    }
  }

  return state

}
const store = createStore(myReducer);
export default store