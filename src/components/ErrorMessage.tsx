import type { ReactNode } from "react";

function ErrorMessage({ children }: { children: ReactNode }) {
  return <p className="text-red-400 text-sm">{children}</p>;
}

export default ErrorMessage;
