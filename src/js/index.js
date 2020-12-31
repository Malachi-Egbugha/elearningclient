import {GENERALAPI, GENERALAPIFIRSTCA, GENERALAPISECONDCA, GENERALAPIGRADE } from "../config";
export const checkexams =async (result) =>{
    console.log(result);
    return fetch(`${GENERALAPI}/readexam`,{
        method:"POST",
        headers:{
            Accept: '*/*',
            "Content-Length": "<calculated when request is sent>",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};

export const checkfirstca =async (result) =>{
    console.log(result);
    return fetch(`${GENERALAPIFIRSTCA }/readfirstca`,{
        method:"POST",
        headers:{
            Accept: '*/*',
            "Content-Length": "<calculated when request is sent>",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};

export const checksecondca =async (result) =>{
    console.log(result);
    return fetch(`${GENERALAPISECONDCA}/readsecondca`,{
        method:"POST",
        headers:{
            Accept: '*/*',
            "Content-Length": "<calculated when request is sent>",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};

export const checkgrade =async () =>{
    return fetch(`${GENERALAPIGRADE}/read?page=1`,{
        method:"POST",
        headers:{
            Accept: '*/*',
            "Content-Length": "<calculated when request is sent>",
            "Content-Type": "application/json",
        }
        
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};








