const initState ={
    access_token:localStorage.getItem("access_token"),
    refresh_token:localStorage.getItem("refresh_token"),
    isAuthenticated:false,
    socialMediaAvatar:'',
    user:null,
} 

const authReducer = (state=initState,action) =>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("access_token",action.payload.access_token);
            localStorage.setItem("refresh_token",action.payload.refresh_token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                socialMediaAvatar:action.payload.avatar
            }
        case "SET_TOKEN":
            localStorage.setItem("access_token",action.payload);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
            }
        case "LOAD_USER":
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        default:
            return state
    }
};

export default authReducer;