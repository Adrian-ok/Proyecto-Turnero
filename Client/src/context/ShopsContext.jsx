import { createContext, useState, useContext, useEffect } from 'react'
import { getShopRequest, getShopsRequest, createShopRequest, updateShopsRequest, deleteShopsRequest } from '../api/Shops'

export const ShopsContext = createContext()

export const useShops = () => {
    const context = useContext(ShopsContext);
    if (!context) throw new Error("useTasks must be used within a TaskProvider");
    return context;
};

export function ShopsProvider({ children }) {
    const [shop, setShop] = useState([])

    const getShops = async () => {
        const res = await getShopsRequest();
        setShop(res.data);
    };

    const deleteShop = async (id) => {
        try {
            const res = await deleteShopsRequest(id);
            if (res.status === 204) setShop(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const createShop = async (task) => {
        try {
            const res = await createShopRequest(task);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getShop = async (id) => {
        try {
            const res = await getShopRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateShop = async (id, task) => {
        try {
            await updateShopsRequest(id, task);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ShopsContext.Provider
            value={{
                shop,
                getShop,
                getShops,
                createShop,
                updateShop,
                deleteShop
            }}
        >
            {children}
        </ShopsContext.Provider>
    );
}
