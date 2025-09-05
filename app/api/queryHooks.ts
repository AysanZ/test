import { useMutation, useQueryClient, UseMutationOptions, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import axiosInstance from './axiosConfig';

type ApiResponse<T> = {
    data: T;
    message?: string;
};

type ApiError = {
    message: string;
    status?: number;
};

const generateQueryKey = (key: string, method: string) => [`${method}:${key}`];

type CustomMutationOptions<T> = UseMutationOptions<ApiResponse<T>, ApiError, any, unknown> & {
    invalidateQueriesOnSuccess?: string[];
};

export const useApiQuery = <T>(url: string, options?: any) => {
    return useQuery<T>({
        queryKey: generateQueryKey(url, 'get'),
        queryFn: async () => {
            const { data } = await axiosInstance.get<T>(url);
            return data;
        },
        onSettled: (data: ApiResponse<T>, error: any) => {
            if (error) {
                toast.error((error as ApiError).message || 'An error occurred');
            } else if (data) {
                toast.success(data.message || 'Request successful');
            }
        },
        ...options,
    });
};

export const useApiMutation = <T>(
    method: 'post' | 'put' | 'patch' | 'delete',
    url: string,
    options?: CustomMutationOptions<T>
) => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponse<T>, ApiError, any, unknown>({
        mutationFn: async (bodyData) => {
            const { data } = await axiosInstance[method]<ApiResponse<T>>(url, bodyData);
            return data;
        },
        onMutate: () => {
            toast.loading('Processing...', { id: 'loading' });
        },
        onSuccess: (data, variables, context) => {
            toast.success(data.message || 'Request successful', { id: 'loading' }); // Dismiss loading and show success

            if (options?.invalidateQueriesOnSuccess) {
                options.invalidateQueriesOnSuccess.forEach((queryKey) => {
                    queryClient.invalidateQueries({ queryKey: [queryKey] });
                });
            }

            if (options?.onSuccess) {
                options.onSuccess(data, variables, context);
            }
        },
        onError: (error, variables, context) => {
            toast.error((error as ApiError).message || 'An error occurred', { id: 'loading' }); // Dismiss loading and show error

            if (options?.onError) {
                options.onError(error, variables, context);
            }
        },
        onSettled: (data, error, variables, context) => {
            // This will dismiss the loading toast even if it hasn't already been handled
            toast.dismiss('loading');

            if (options?.invalidateQueriesOnSuccess) {
                options.invalidateQueriesOnSuccess.forEach((queryKey) => {
                    queryClient.invalidateQueries({ queryKey: [queryKey] });
                });
            }

            if (options?.onSettled) {
                options.onSettled(data, error, variables, context);
            }
        },
        ...options,
    });
};
