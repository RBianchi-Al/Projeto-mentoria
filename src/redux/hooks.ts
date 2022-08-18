import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispach, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispach>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
