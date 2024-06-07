import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

interface AuthProps {
    children: React.ReactElement
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthProps) => {
    const [user, setUser] = useLocalStorage("user", null)
    const navigate = useNavigate();

    const login = async(data: object) => {
        console.log(data)
        setUser(data)
        navigate("/dashboard", { replace:true })
    }

    const logout = () => {
        setUser(null);
        navigate("/dashboard/login", { replace:true })
    }

    const value = useMemo(() => ({
        user,
        login,
        logout
    }),
        [user]
    )

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

