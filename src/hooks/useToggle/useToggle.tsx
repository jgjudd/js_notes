import { useState, useCallback } from "react";

export default function useToggle(initialValue = true) {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }

    return Boolean(initialValue);
  });

  type ToggleProps = {
    value: string | number | boolean | object | null;
  };

  const handleToggle = useCallback(({ value }: ToggleProps) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }

    return setOn((v) => !v);
  }, []);

  return [on, handleToggle];
}
