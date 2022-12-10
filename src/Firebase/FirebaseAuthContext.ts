import { User } from "firebase/auth";
import CreateAppContext from "../Utilities/CreateAppContext";

export interface AppUser {
    user: User;
    extraProp: string;
}

const [ctx, provider] = CreateAppContext<AppUser | null>(null);

export const AuthContext = ctx;
export const AuthProvider = provider;