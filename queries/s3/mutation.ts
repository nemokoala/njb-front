import { useMutation } from '@tanstack/react-query';
import { CommonResponse } from '@/interfaces/response.interface';

export const useS3UploadMutation = (onSuccess: (response: Response) => void, onError: (error: Error) => void) => {
  return useMutation({
    mutationFn: async (data: { file: File; presignedUrl: string }) => {
      return fetch(data.presignedUrl, {
        method: 'PUT',
        body: data.file,
        headers: { 'Content-Type': data.file.type },
      });
    },
    onSuccess: (data) => onSuccess(data),
    onError: (error) => onError(error),
  });
};
