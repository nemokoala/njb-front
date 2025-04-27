import { S3_CONSTANTS } from '@/constants/s3.constants';
import { CommonResponse } from '@/interfaces/response.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';

export const useS3Upload = ({
  isEnabled = false,
  folder,
  fileName,
}: {
  isEnabled?: boolean;
  folder: string;
  fileName: string;
}) => {
  return useQuery({
    queryKey: ['s3-upload', folder, fileName],
    queryFn: async () => {
      const response = (await FetchUtil.get(
        S3_CONSTANTS.UPLOAD + `?folder=${folder}&fileName=${fileName}`,
      )) as CommonResponse<{ presignedUrl: string; path: string }>;
      return response.data;
    },
    enabled: isEnabled,
  });
};
