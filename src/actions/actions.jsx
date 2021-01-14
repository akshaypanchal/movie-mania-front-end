const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";


export const storeLoginData = (data) => {

    return{
        type:STORE_LOGIN_DATA,
        data:data
    }

}