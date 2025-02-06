export const FetchUtil = {
  get: async (endpoint: string) => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`).then((res) => res.json());
  },
};
