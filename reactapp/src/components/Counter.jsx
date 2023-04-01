import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log("props in Counter",props)
    function inc(){
        props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }
    function reset(){
        props.dispatch({type:'RESET'})
    }
  return (
    <div className='border border-2 border-success mx-2 mb-2'>
        <h1>Counter:{props.counter.count}</h1>
        <button className='mx-2 mb-2' onClick={inc}>Increment</button>
        <button className='mx-2 mb-2' onClick={dec}>Decrement</button>
        <button className='mx-2 mb-2' onClick={reset}>Reset</button>
    </div>
  ) 
}

export default connect(function(store){return store})(Counter)