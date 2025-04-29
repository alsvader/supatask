import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";
import type { FormData, SignInResponse } from "@/components";

export interface AuthContextProps {
  session: Session | null;
  signIn: (formData: FormData) => Promise<SignInResponse | null>;
  signUp: (formData: FormData) => Promise<SignInResponse | null>;
  signOut: () => void;
}

const initialState: AuthContextProps = {
  session: null,
  signIn: (formData: FormData) => {
    return Promise.resolve(null);
  },
  signUp: (formData: FormData) => {
    return Promise.resolve(null);
  },
  signOut: () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialState);
