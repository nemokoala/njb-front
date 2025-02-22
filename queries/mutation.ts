import { useMutation } from '@tanstack/react-query';
import { FetchUtil } from '@/lib/Fetch.util';
import { AUTH_CONSTANTS } from '@/constants/auth.constants';

export const useSignUpMutation = (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  return useMutation({
    mutationFn: (data: { email: string; password: string; nickname: string }) =>
      FetchUtil.post(AUTH_CONSTANTS.SIGNUP, { email: data.email, password: data.password, nickname: data.nickname }),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};

export const useLoginMutation = (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => FetchUtil.post(AUTH_CONSTANTS.LOGIN, data),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};
