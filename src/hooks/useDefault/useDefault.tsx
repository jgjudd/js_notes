import { useState } from "react";

type UseDefaultProps = {
  initialValue: string | number | boolean | object;
  defaultValue: string | number | boolean | object;
};

export default function useDefault({
  initialValue,
  defaultValue,
}: UseDefaultProps) {
  const [state, setState] = useState(initialValue);

  if (typeof state === "undefined" || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}
