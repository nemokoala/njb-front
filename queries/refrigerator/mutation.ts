import { useMutation } from '@tanstack/react-query';
import { RefrigeratorFormData, ItemFormData } from '@/lib/schema';
import { FetchUtil } from '@/lib/Fetch.util';
import { REFRIGERATOR_CONSTANTS } from '@/constants/refrigerator.contants';
import { CommonResponse } from '@/interfaces/response.interface';

export const useRefrigeratorMutation = (
  onSuccess: (response: CommonResponse) => void,
  onError: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: (data: RefrigeratorFormData) => FetchUtil.post(REFRIGERATOR_CONSTANTS.REFRIGERATORS, data),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};

export const useItemMutation = (onSuccess: (response: CommonResponse) => void, onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: (data: ItemFormData) => FetchUtil.post(`${REFRIGERATOR_CONSTANTS.ITEMS}/${data.refrigeratorId}`, data),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};
