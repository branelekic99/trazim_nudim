const initState ={
    token:localStorage.getItem("authenticationToken"),
    refreshToken:localStorage.getItem("authenticationRefreshToken"),
    isAuthenicated:false,
} 

const authReducer = (state=initState,action) =>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isAuthenicated:true
            }
        default:
            return state
    }
};

export default authReducer;