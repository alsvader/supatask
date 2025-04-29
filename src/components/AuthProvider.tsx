import { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import type { Session } from "@supabase/supabase-js";
import type { FormData } from "@/components";
import { Loading } from "@/components";
import { AuthContext } from "@/context/AuthContext";
import supabase from "@/utils/supabase";

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   console.log("getSession", session);
    //   setSession(session);
    // });

    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  const signUp = async (formData: FormData) => {
    const { data, error } = await supabase.auth.signUp(formData);

    if (error) {
      return { success: false, error, data: { user: null, session: null } };
    }

    return {
      success: true,
      data: { user: data.user, session: data.session },
      error: null,
    };
  };

  const signIn = async (formData: FormData) => {
    const { data, error } = await supabase.auth.signInWithPassword(formData);

    if (error) {
      return { success: false, error, data: { user: null, session: null } };
    }

    return {
      success: true,
      data: { user: data.user, session: data.session },
      error: null,
    };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error signing out:", error);
    }
  };

  if (isLoading) {
    return <Loading message="Configuring App..." />;
  }

  return (
    <AuthContext.Provider value={{ session, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
