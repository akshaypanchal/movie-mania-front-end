const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";
const REMOVE_USER_DATA_FROM_STORE = "REMOVE_USER_DATA_FROM_STORE";
const BUY_THIS_MOVIE = "BUY_THIS_MOVIE";
const FETCH_BOOKED_MOVIE_DATA = "FETCH_BOOKED_MOVIE_DATA";
const REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT = "REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT";

const defaultState = {
    user: {},
    selectedMovie:"",
    bookedMovieRecords: []
}

const rootReducer = (state = defaultState, action) => {

    let newState = { ...state };

    switch (action.type) {

        case STORE_LOGIN_DATA:

            const userData = {
                "firstName": action.data.firstName,
                "lastName": action.data.lastName
            }

            return {
                ...newState,
                user: userData
            }

        case REMOVE_USER_DATA_FROM_STORE:
            const removeUserData = {};
            return {
                ...newState,
                user: removeUserData
            }
        
        case BUY_THIS_MOVIE:
        const userSelectedMovie = action.data;
        return{
            ...newState,
            selectedMovie: userSelectedMovie
        }

        case FETCH_BOOKED_MOVIE_DATA:
            let newArray = [...newState.bookedMovieRecords, action.data];
            console.log("newArray");
            return{
                ...newState,
                bookedMovieRecords: newArray
            }
        
        case REMOVE_BOOKED_MOVIE_DATA_AFTER_LOGOUT:
            
            const emptyArray = [];
            console.log("return state called!!!!");
            return{
                ...newState,
                bookedMovieRecords:emptyArray
            }

        default:
            return newState;

    }

}


export default rootReducer;