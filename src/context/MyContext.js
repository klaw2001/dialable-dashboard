import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const mycontext = createContext();
const API = "https://dialable-revamp.vercel.app/api";

export const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading , setLoading] = useState(true)

    const getAllUsers = async () => {
        try {
            const res = await axios.get(API + "/auth/get-all-users");
            setLoading(false)
            setUsers(res.data.users); 
        } catch (error) {
            console.log(error);
        }
    };

    return <mycontext.Provider value={{ getAllUsers, users , loading }}>{children}</mycontext.Provider>;
};

export const useApi = () => useContext(mycontext);
