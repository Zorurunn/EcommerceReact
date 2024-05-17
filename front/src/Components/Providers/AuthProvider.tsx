"use client";
import { api } from "@/app/common/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { toast } from "react-toastify";
type userType = {
  userName: string;
  email: string;
  merchName: string;
  address: { city: string; district: string; khoroo: string };
  experience: string;
  merchType: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  refresh: number;
  setRefresh: Dispatch<SetStateAction<number>>;
  signUp: (
    userName: string,
    email: string,
    merchName: string,
    city: string,
    district: string,
    khoroo: string,
    experience: string,
    merchType: string,
    password: string
  ) => void;
  user: userType;
  setUser: Dispatch<SetStateAction<userType>>;
  signIn: (email: string, password: string) => void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    merchName: "",
    address: { city: "", district: "", khoroo: "" },
    experience: "",
    merchType: "",
    password: "",
    role: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const [isLogged, setIsLogged] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [refresh, setRefresh] = useState(0);
  //Sign-Up function
  const signUp = async (
    userName: string,
    email: string,
    merchName: string,
    city: string,
    district: string,
    khoroo: string,
    experience: string,
    merchType: string,
    password: string
  ) => {
    try {
      const { data } = await api.post("auth/signUp", {
        userName,
        email,
        merchName,
        city,
        district,
        khoroo,
        experience,
        merchType,
        password,
      });
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  //Sign-In function
  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("auth/signIn", {
        email,
        password,
      });
      const { token } = data;
      localStorage.setItem("token", token);

      if (data.user.role == "merchant") {
        router.push("/MerchantDashboard");
      }

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      setIsLogged(false);
      router.push("/");
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("user/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setUser(data);
      const { role } = data;

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    setIsReady(false);
    if (isLogged) {
      getUser();
    }
    setIsReady(true);
  }, [isLogged]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        refresh,
        setRefresh,
        signUp,
        signIn,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
