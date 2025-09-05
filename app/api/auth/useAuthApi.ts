import { useApiMutation } from "../queryHooks";
import { API_ROUTES } from "../routes/apiRoutes";


export const useLogin = () => {
    return useApiMutation('post', API_ROUTES.AUTH.LOGIN);
};

