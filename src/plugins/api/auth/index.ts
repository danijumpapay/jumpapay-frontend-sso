import useAxiosInstance from "@/plugins/axios";

export const useAuth = () => {

    const axios = useAxiosInstance();

    const loginWithAccount = (formData: AuthLoginWithUserForm) => {
        const response = axios.post(`/login/account`, formData)
        return response;
    }

    return {loginWithAccount}
}