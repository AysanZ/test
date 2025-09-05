import { useApiQuery } from "../queryHooks";
import { API_ROUTES } from "../routes/apiRoutes";
import { RandomUserApiResponse } from "./types";


export const useLogin = () => {
    return useApiQuery<RandomUserApiResponse>(API_ROUTES.AUTH.LOGIN, {
        enabled: false, // خودکار اجرا نشه
        retry: false,
})
};

