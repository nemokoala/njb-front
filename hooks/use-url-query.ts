import { useSearchParams, useRouter } from 'next/navigation';

export const useUrlQuery = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const getParam = (key: string) => searchParams.get(key);
  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`?${params.toString()}`);
  };
  const removeParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.replace(`?${params.toString()}`);
  };
  return { getParam, setParam, removeParam };
};
