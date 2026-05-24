import { useState, useCallback } from "react";

export const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const reset = useCallback(() => setValue(""), []);
  const set = useCallback((newValue: string) => setValue(newValue), []);

  return { value, setValue, reset, set };
};
