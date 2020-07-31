const initState ={
    token:localStorage.getItem("authenticationToken"),
    refreshToken:localStorage.getItem("authenticationRefreshToken"),
    isAuthenicated:false,
    socialMediaAvatar:'',
    user:null,
} 

const authReducer = (state=initState,action) =>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("authenticationToken",action.payload.access_token);
            localStorage.setItem("authenticationRefreshToken",action.payload.refresh_token);
            console.log(action.payload)
            return{
                ...state,
                isAuthenicated:true,
                socialMediaAvatar:action.payload.avatar
            }
        case "SET_TOKEN":
            localStorage.setItem("authenticationToken",action.payload);
            return{
                ...state,
                isAuthenicated:true,
            }
        case "LOAD_USER":
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
};

export default authReducer;