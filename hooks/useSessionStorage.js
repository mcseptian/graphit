import React, { useState, useEffect } from "react";

function getSessionStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    return JSON.parse(sessionStorage.getItem(key));
  }
  return defaultValue;
}

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(getSessionStorageValue(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
