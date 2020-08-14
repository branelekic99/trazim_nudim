import axios from 'axios'

export const getToken =()=>{
    return function(dispatch,getState){
        const refreshToken = getState().auth.refresh_token;
        const obj={
            'refresh':refreshToken
        }
        axios.post('/api/refresh',obj)
        .then(result=>{
            const obj={
                access_token:result.data.access
            }
            dispatch({
                type:"SET_TOKEN",
                payload:obj
            })
        })
        .catch(err=>console.log("ERROR KOD GET_TOKEN"));
    }
};

export const loadUser =()=>{
    return function(dispatch,getState){
        const token = getState().auth.access_token;
        const header = "Bearer "+token;
        axios.get("/get-profile/",{
            headers:{
                "Content-Type":"aplication/json",
                "Authorization":header
            }
        })
        .then(result=>{
            dispatch({
                type:"LOAD_USER",
                payload:result.data
            })
        })
        .catch(err=>console.log("ERROR KOD LOAD_USER"))
    }
};

export const fblogin=(data)=>{
   return function(dispatch){
       const obj ={
           "access_token":data.accessToken
       }
        axios.post("/login/fb/",obj)
        .then(result=>{
            const responseObj = {
                'access_token':result.data.access_token,
                'refresh_token':result.data.refresh_token,
                'avatar':data.profilePic
            }
            dispatch({
                type:"LOGIN",
                payload:responseObj
            })
        })
        .catch(err=>console.log("ERROR KOD FB LOGIN"))
   }
};

export const googleLogin=(data)=>{
    return function(dispatch){
        const obj ={
            "access_token":data.accessToken
        };
        axios.post("/login/google/",obj)
        .then(result=>{
            const responseObj = {
                'access_token':result.data.access_token,
                'refresh_token':result.data.refresh_token,
                'avatar':data.profilePic
            }
            dispatch({
                type:"LOGIN",
                payload:responseObj
            })
        })
        .catch(err=>console.log("ERROR KOD GOOGLE LOGIN"))
    }
};

export const createRoute=(object)=>{
    return function(dispatch,getState){

        const token = getState().auth.access_token;
        const header = "Bearer "+token;

        axios.post("/route-create/",object,{
            headers:{
                "Authorization":header
            }
        })
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    }
};

export const getDetailOfRoute=(id)=>{
    return function(dispatch,getState){
        
        axios.get('/url/')
        .then(result=>{
            dispatch({
                type:"",
                payload:""
            })
        })
    }
};

export const getListOfRouts=()=>{
    return function(dispatch){
        axios.get("/route-list/")
        .then(result=>{
            console.log(result);
            dispatch({
                type:"ROUTE_LIST",
                payload:result.data
            })
        })
        .catch(err=>console.log(err));
    }
};