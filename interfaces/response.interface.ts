export interface CommonResponse<T = any> {
  data: T;
  message: string;
  status: number;
}
