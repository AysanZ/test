import { QueryObserverResult, RefetchOptions } from "react-query";

export interface LoginProps {
    loading: boolean;
    onLogin: () => {}
}

export type StoredUser = {
    name: string;
    email: string;
    picture: string;
};
