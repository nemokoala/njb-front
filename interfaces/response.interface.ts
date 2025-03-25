export interface CommonResponse<T = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: T;
  message: string;
  status: number;
}
