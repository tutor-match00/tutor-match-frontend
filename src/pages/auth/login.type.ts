import { Dispatch, SetStateAction } from "react";

export type LoginPropType = {
    user?: {};
    setUser?: Dispatch<SetStateAction<number | undefined>>;
};
