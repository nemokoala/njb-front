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
    mutationFn: ({
      refrigeratorId,
      isUpdate,
      ...data
    }: { refrigeratorId: string; isUpdate?: boolean } & ItemFormData) => {
      if (isUpdate) {
        const { ingredientId, ...rest } = data;
        return FetchUtil.put(
          `${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients/${ingredientId}`,
          rest,
        );
      } else {
        return FetchUtil.post(`${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients`, [data]);
      }
    },
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};

export const useItemDeleteMutation = (
  onSuccess: (response: CommonResponse) => void,
  onError: (error: Error) => void,
) => {
  return useMutation({
    mutationFn: ({ refrigeratorId, ingredientId }: { refrigeratorId: string; ingredientId: number[] }) =>
      FetchUtil.delete(`${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients`, [...ingredientId]),
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};

// export function useItemUpdateMutation(onSuccess: () => void, onError: (error: Error) => void, isUpdate = false) {
//   return useMutation({
//     mutationFn: async (data: ItemFormData & { refrigeratorId: string; id?: number }) => {
//       if (isUpdate && data.id) {
//         // 수정 API 호출
//         const response = await fetch(`/api/items/${data.id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//           throw new Error('아이템 수정에 실패했습니다');
//         }

//         return response.json();
//       } else {
//         // 생성 API 호출 (기존 코드)
//         const response = await fetch('/api/items', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//           throw new Error('아이템 생성에 실패했습니다');
//         }

//         return response.json();
//       }
//     },
//     onSuccess,
//     onError,
//   });
// }
