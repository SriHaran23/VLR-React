const initialState={
    todos:[
        'clear bills',
        'book resort'
    ]
}

const todoReducer=(state=initialState,action)=>{
    if(action.type==='ADD'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='EDIT'){
        var temp=[...state.todos]
        

    }
    if(action.type==='DEL'){
        var temp=[...state.todos]
        temp.splice(action.payload,1)
        return {...state,todos:[...temp]}
    } 
    return state
}

export default todoReducer;