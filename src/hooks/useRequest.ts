import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AsyncThunk } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store/store";

interface SliceState<T> {
  items: T[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export function useRequest<T>(
  thunk: AsyncThunk<T[], void, object>,
  selector: (state: RootState) => SliceState<T>
) {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector(selector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(thunk());
    }
  }, [status, dispatch, thunk]);

  return { data: items, status, error };
}
