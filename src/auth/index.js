import {API} from "../config";
export const signin =async (user) =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};

export const authenticate = (data, next)=> {
    if(typeof window !== 'undefined'){
        localStorage.setItem('usersign', JSON.stringify(data));
        next();

    }

};

export const isAuthenticated= () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('usersign'))
    {
        return JSON.parse(localStorage.getItem('usersign'))
    }
    else{
        return false;
    }
};


export const isActive = (history, path) =>{
    if(history.location.pathname === path)
    {
      return true; 
    }
    else{
      return false
    }
  
  };
  export const signout = (next) =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem("usersign");
        next();
        return fetch(`${API}/signout`,{
            method: "GET"

        })
        .then(response => {
            console.log('signout', response)
        })
        .catch(err => console.log(err));
    }
  }
