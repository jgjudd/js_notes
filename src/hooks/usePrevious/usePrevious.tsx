import { useState } from "react";

export default function usePrevious(value = null) {
  const [currentValue, setCurrentValue] = useState(value);
  const [previousValue, setPreviousValue] = useState(null);

  if (value !== currentValue) {
    setPreviousValue(currentValue);
    setCurrentValue(value);
  }

  return previousValue;
}
