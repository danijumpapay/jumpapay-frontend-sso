import { useAuthLoginWithUserMutation, useSignupWithUserMutation } from "@/plugins/redux/rtk/auth";

import { useAppSelector } from "@/plugins/redux/reducers/hooks";
const useAuth = () => {
    const authState = useAppSelector(state => state.userReducer);

    const [authLoginWithUser, {
        isLoading: isLoadingAuthLoginWithUser
    }] = useAuthLoginWithUserMutation();

    const [signupWithUser, {
        isLoading: isLoadingSignupWithUser
    }] = useSignupWithUserMutation();

    return {
        authState,

        // Login With User
        authLoginWithUser,
        isLoadingAuthLoginWithUser,

        // Signup With User
        signupWithUser,
        isLoadingSignupWithUser
    }
}

export default useAuth; 