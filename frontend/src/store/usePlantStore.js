import { create } from "zustand";
import {axiosInstance} from "../libs/axios.js"




export const usePlantStore = create((set) => ({
    history: [],
    isLoading: false,
    plantInfo: null,


    getInfo: async (body) => {
        try {
            set({isLoading: true});
            const res = await axiosInstance.post("/identification",{
                body
            })
            console.log(res.data);
            set({plantInfo: res.data});
        } catch (error) {
            console.log("Error in hitting api: ",error);
        }
        finally{
            set({isLoading: false})
        }
    }
}))