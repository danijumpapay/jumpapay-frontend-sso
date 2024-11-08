type Param = {
    page?: number;
    limit?: number;
    s?: string;
  };
  
  type RequestParam<T = Param> = {
    id?: string | number | null;
    params?: T;
  };
  
  type PaginationData = {
    page: number;
    next: number;
    prev: number;
    limit: number;
    totalPage: number;
    totalData: number;
  };
  
  type ResponseResult<T> = {
    pagination: PaginationData;
    data: T;
  };
  
  type ResponseApiList<T> = {
    success: boolean;
    message: string;
    results: ResponseResult<T>;
  };
  
  type ResponseApiResult<T> = {
    success: boolean;
    message: string;
    results: T;
  };
  
  type ResponseApiDetail<T> = {
    success: boolean;
    message: string;
    results: T;
  };
  
  type BodyParam<T> = {
    body: T;
  };