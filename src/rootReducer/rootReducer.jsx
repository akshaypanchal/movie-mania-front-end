const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";
const REMOVE_USER_DATA_FROM_STORE = "REMOVE_USER_DATA_FROM_STORE";
const BUY_THIS_MOVIE = "BUY_THIS_MOVIE";

const defaultState = {
    user: {},
    selectedMovie:"",
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


        default:
            return newState;

    }

}


export default rootReducer;