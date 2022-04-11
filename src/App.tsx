import { NextUIProvider } from "@nextui-org/react";
import { Home } from "features/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Home />
      </NextUIProvider>
    </QueryClientProvider>
  );
};
