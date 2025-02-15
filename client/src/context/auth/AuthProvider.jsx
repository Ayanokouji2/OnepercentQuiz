import React from "react";
import { AuthContext } from "./index";

const AuthProvider = ({ children }) => {
	const [isUser, setIsUser] = React.useState(null);

    React.useEffect(()=>{
        const userToken = localStorage.getItem("token") || null;
        setIsUser(userToken)
    },[])

	const login = (token) => {
        console.log("this is the token from auth provider", token)
		setIsUser(token);
		localStorage.setItem("token", token);
	};

	const logout = () => {
		setIsUser(null);
		localStorage.removeItem("token");
	};

	const authStore = {
		isUser,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authStore}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
