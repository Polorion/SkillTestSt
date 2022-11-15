import * as React from "react";
import AuthContainer from "../components/Auth/AuthContainer";

// export const publicRoute = [{ path: "/animal", elem: AnimalContainer }];
export const privateRoute = [{ path: "/auth", elem: <AuthContainer /> }];
