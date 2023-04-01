const initialState={
    count:0
}

const countReducer=(state=initialState,action)=>{
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    else if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    else{
        return {...state,count:0}
    }
    return state
}

export default countReducer;