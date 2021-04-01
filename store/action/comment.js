import * as actionType from './actionType'

export const sendComment=(input)=>{
    return{
        type:actionType.SEND_MESSAGE,
        input:input
    }
}

export const post=(input,url)=>{
    return{
        type:actionType.POST,
        input:input,
        url:url
    }
}