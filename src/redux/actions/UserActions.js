import UserTypes from '../types/UserTypes';

export const sendActiveAccountCodeAction = (email) => {
    return {
        type: UserTypes.sendActiveAccountCode,
        email,
    };
};

export const activeAccountAction = () => {
    return {
        type: UserTypes.activeAccount,
    };
};

export const loginAction = (result) => {
    return {
        type: UserTypes.login,
        result,
    };
};

export const logoutAction = () => {
    return {
        type: UserTypes.logout,
    };
};

export const completeUserProfileAction = (first_name, last_name) => {
    return {
        type: UserTypes.completeUserProfile,
        first_name,
        last_name,
    };
};