import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
    } else {
        localStorage.removeItem("accessToken");
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT": {
            const { loggedInformation } = action.payload;

            return {
                ...state,
                isAuthenticated: true,
                isInitialised: true,
                user: loggedInformation,
            };
        }
        case "LOGIN": {
            const { loggedInformation } = action.payload;

            return {
                ...state,
                isAuthenticated: true,
                isInitialised: true,
                user: loggedInformation,
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        }
        case "REGISTER": {
            const { loggedInformation } = action.payload;

            return {
                ...state,
                isAuthenticated: true,
                isInitialised: true,
                user: loggedInformation,
            };
        }
        default: {
            return { ...state };
        }
    }
};

const AuthContext = createContext({
    ...initialState,
    method: "JWT",
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const login = async (mobile, pin) => {
    //     // const mobile = "01727967674";
    //     // const pwd = "1234s5";
    //     const response = await axios.post(
    //         "https://wp.boonik.org/wp-json/api/v1/users/login",
    //         { mobile, pin }
    //     );
    //     // user login information
    //     const loggedInformation = JSON.stringify({ mobile, pin });
    //     // const { accessToken, user } = response.data;

    //     const isValidUser = response.data;
    //     if (isValidUser) {
    //         // setSession(accessToken);
    //         // store to logged information in session
    //         setSession(loggedInformation);
    //         const authJson = JSON.stringify(response?.data.hash)
    //         localStorage.setItem("a_h_s", authJson)
    //         localStorage.setItem("authentication", true);
    //         dispatch({
    //             type: "LOGIN",
    //             payload: {
    //                 user: loggedInformation,
    //             },
    //         });
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    // register auth
    // const register = (data) => {
    //     // if (data) {
    //     // 	setSession(data.hash);
    //     // 	dispatch({
    //     // 		type: "LOGIN",
    //     // 		payload: {
    //     // 			user: data.hash,
    //     // 		},
    //     // 	});
    //     // 	return true;
    //     // } else {
    //     // 	return false;
    //     // }
    //     console.log(data);
    //     if (data) {
    //         const hash = data?.hash;
    //         setSession(hash);
    //         dispatch({
    //             type: "REGISTER",
    //             payload: {
    //                 hash,
    //             },
    //         });
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    const logout = () => {
        setSession(null);
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
    };

    useEffect(() => {
        (async () => {
            try {
                const accessToken = window.localStorage.getItem("accessToken");
                if (accessToken) {
                    setSession(accessToken);
                    dispatch({
                        type: "INIT",
                        payload: {
                            isAuthenticated: true,
                        },
                    });
                } else {
                    dispatch({
                        type: "INIT",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                dispatch({
                    type: "INIT",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        })();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: "JWT",
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
