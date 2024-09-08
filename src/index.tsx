import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Router from "@services/router/router";

const queryClient = new QueryClient();

queryClient.defaultMutationOptions({
  retry: false,
});

queryClient.defaultQueryOptions({
  retry: false,
});

const root = createRoot(document.getElementById("root")! as HTMLElement);
root.render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </ThemeProvider>
);
