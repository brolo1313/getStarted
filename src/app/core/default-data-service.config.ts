import { DefaultDataServiceConfig } from "@ngrx/data";

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'https://610ff948c848c900171b3a2f.mockapi.io/v2/posts/',
    timeout: 3000, // request timeout
  }