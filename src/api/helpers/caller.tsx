import { AxiosResponse, Method } from 'axios';
import api from '../api';

async function caller<T = any>(
  method: Method,
  endpoint: string,
  body?: any,
): Promise<T> {
  const response: AxiosResponse<T> = await api.request({
    method,
    url: encodeURI(endpoint),
    data: body,
  });

  return response.data;
}

export default caller;
