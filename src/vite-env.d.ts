/// <reference types="vite/client" />

import { ReactNode } from "react";

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}
