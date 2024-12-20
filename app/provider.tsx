import { Suspense } from "react";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="container relative h-[100vh]">
          <div className="absolute top-5 right-5">
            <ModeToggle />
          </div>
          {children}
        </div>
      </ThemeProvider>
    </Suspense>
  );
};
export default Provider;
