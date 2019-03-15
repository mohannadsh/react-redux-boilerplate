import $ from "jquery";

export const UPDATE_USER = 'users:updateUser';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function getUser() {
    return dispatch => {
        $.ajax({
            'url': 'https://jsonplaceholder.typicode.com/users',
            success: (data) => {
                var action = updateUser(data[0].name);
                dispatch(action);
            }
        })
    }
}