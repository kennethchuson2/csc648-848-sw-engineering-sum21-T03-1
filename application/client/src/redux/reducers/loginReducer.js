const INITIAL_LOGIN_STATE = {
    username: '',
    password: '',
    loggedIn: false
};

const loginReducer = (state = INITIAL_LOGIN_STATE, action) => {

    switch(action.type) {
        case 'USER_SET_USERNAME':
            return {
                ...state,
                username: action.username,
            };
        
        case 'USER_SET_PASSWORD':
            return {
                ...state,
                password: action.password,
            };

        case 'USER_IS_LOGGEDIN':
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        
        default:
            return state;
    }
};

export default loginReducer;