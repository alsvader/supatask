import type { User, Session, AuthError } from "@supabase/supabase-js";
export interface FormData {
  email: string;
  password: string;
}

export interface SignInResponse {
  success: boolean;
  data: {
    user: User | null;
    session: Session | null;
  };
  error: AuthError | null;
}

export interface SignInWithError {
  success: boolean;
  error: AuthError;
}
