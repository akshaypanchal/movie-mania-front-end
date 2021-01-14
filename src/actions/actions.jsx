const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";
const REMOVE_USER_DATA_FROM_STORE = "REMOVE_USER_DATA_FROM_STORE";

export const storeLoginData = (data) => {

    return{
        type:STORE_LOGIN_DATA,
        data:data
    }

}


export const removeUserDataFromStore = () => {
    return {
        type: REMOVE_USER_DATA_FROM_STORE
    }
}