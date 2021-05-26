import { useState, useEffect, useRef } from "react";
export const useXState = function (initState) {
  const [state, setState] = useState(initState);
  const isUpdate: any = useRef();
  const setXState = (state, callback) => {
    setState((prev) => {
      isUpdate.current = callback;
      return typeof state === "function" ? state(prev) : state;
    });
  };
  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current();
    }
  });
  return [state, setXState];
};
export const useDebounce = function (fn: Function, ms = 50, deps = []) {
  let timeout = <any>useRef();
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);
  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  };
  return [cancel];
};
