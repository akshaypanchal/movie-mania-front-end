const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";
const REMOVE_USER_DATA_FROM_STORE = "REMOVE_USER_DATA_FROM_STORE";
const BUY_THIS_MOVIE = "BUY_THIS_MOVIE";
const FETCH_BOOKED_MOVIE_DATA = "FETCH_BOOKED_MOVIE_DATA";
const REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT = "REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT";

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

export const buyThisMovie = (data) => {
    return{
        type: BUY_THIS_MOVIE,
        data:data
    }
}


export const fetchBookedMovieRecords = (data) => {
    return{
        type: FETCH_BOOKED_MOVIE_DATA,
        data:data
    }
}

export const removeBookedMovieDataAfterUserLogout = () =>{
    return{
        type:REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT
    }
}