import axios from 'axios';

export const setUsername = (username) => ({
    type: 'USER_SET_USERNAME',
    username
});

export const setPassword = (password) => ({
    type: 'USER_SET_PASSWORD',
    password
});

export const setConfirmPassword = (confirmPassword) => ({
    type: 'USER_SET_CONFIRM_PASSWORD',
    confirmPassword
});

export const setTOS = (TOS) => ({
    type: 'USER_SET_TOS',
    TOS
});

export const createUser = () => {
    return (dispatch, getState) => {
        const userData = {
            username: getState().registerReducer.username,
            password: getState().registerReducer.password,
            confirmPassword: getState().registerReducer.confirmPassword
        };

        console.log(userData);

        axios.post('/api/register', userData)
            .then((res) => {
                console.log(res);
                if(res.status === 201) {
                    dispatch(redirectUser(true));
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };
};  

export const redirectUser = (registered) => ({
    type: "USER_IS_REGISTERED",
    registered
});