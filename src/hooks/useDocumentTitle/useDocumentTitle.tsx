import { useEffect } from "react";

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    if (typeof title === "string") {
      document.title = title;
    }
  }, [title]);
}
