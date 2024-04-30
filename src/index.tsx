import React from "react";
import ReactDOM from "react-dom/client";
import RouterDOM from "./services/router/routerDom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./contexts/ThemeProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <RouterDOM />
    </QueryClientProvider>
  </ThemeProvider>
);
