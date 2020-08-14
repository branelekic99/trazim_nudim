const initState = {
    routes:null,

}

const routeReducer = (state=initState,action)=>{
    switch(action.type){
        case "ROUTE_LIST":
            return{
                ...state,
                routes:action.payload
            }

        default:
            return state
    }
};

export default routeReducer;