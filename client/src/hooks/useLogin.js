import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import api from "../api";

const provider = new GoogleAuthProvider();

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithPopup(auth, provider);
      const userBody = {
        name: res.user.displayName,
        email: res.user.email,
        displayPicture: res.user.photoURL,
      };
      const apiRes = await api.post("signup", userBody);

      // dispatch login action
      dispatch({
        type: "LOGIN",
        payload: { id: apiRes.data.user._id, ...res.user },
      });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
