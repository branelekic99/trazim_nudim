const initState = {
    testVal:null,
    text:'test'
}

const testReducer  = (state=initState,action) =>{
    switch(action.type){
        case "TEST_CASE":
            return{
                ...state,
                text:"noviteks"
            }
        default:
            return state
    }
};

export default testReducer;