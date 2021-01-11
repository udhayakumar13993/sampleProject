//It is a state objecct which represents the entire state
const INITIAL_STATE={
    currentUser:null

}

const userReducer =(state=INITIAL_STATE,action)=>{

    switch(action.type){

        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }

        default:
            return state;    
    }

}


export default userReducer;
