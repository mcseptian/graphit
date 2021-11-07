import { useState, useEffect } from 'react';

function getSessionStorageValue(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export default function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(
    getSessionStorageValue(key, defaultValue)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}