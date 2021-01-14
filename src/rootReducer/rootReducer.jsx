const STORE_LOGIN_DATA = "STORE_LOGIN_DATA";

const defaultState = {
    user: {}
}

const rootReducer = (state = defaultState, action) => {

    let newState = { ...state };

    switch (action.type) {

        case STORE_LOGIN_DATA:


            const userData = {
                "firstName": action.data.firstName,
                "lastName":action.data.lastName
            }

            console.log("reducer called", userData);

            return {
                user: newState
            }

        default:
            return newState;

    }

}


export default rootReducer;