import { useMutation } from '@tanstack/react-query';
import { FetchUtil } from '@/lib/Fetch.util';
import { AUTH_CONSTANTS } from '@/constants/auth.constants';
import { CommonResponse } from '@/interfaces/response.interface';
import { LoginResponse } from '@/interfaces/user.interface';
export const useSignUpMutation = (onSuccess: (response: CommonResponse) => void, onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: (data: { email: string; password: string; nickname: string }) =>
      FetchUtil.post(AUTH_CONSTANTS.SIGNUP, { email: data.email, password: data.password, nickname: data.nickname }),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};

export const useLoginMutation = (onSuccess: (response: LoginResponse) => void, onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      FetchUtil.post(AUTH_CONSTANTS.LOGIN, data, { credentials: 'include' }),
    onSuccess: (data) => onSuccess(data.data as LoginResponse),
    onError: (error) => onError(error),
  });
};
