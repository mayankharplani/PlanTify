import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../libs/axios.js";

export const usePlantStore = create(
  persist(
    (set) => ({
      history: [],
      isLoading: false,
      plantInfo: null,

      getInfo: async (body) => {
        try {
          set({ isLoading: true });
          const res = await axiosInstance.post(
            "/identification?details=common_names,url,name_authority,wiki_description,taxonomy,synonyms,rank,image_url,edible_parts,watering,propagation_methods,best_light_condition,best_soil_type,common_uses,medicinal_properties",
            body
          );
          set((state) => {
            const updatedHistory = [res.data,...state.history];// logs updated history
            return {
              plantInfo: res.data,
              history: updatedHistory,
            };
          });
        } catch (error) {
          console.log("Error in hitting api: ", error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "plant_storage",
      partialize: (state) => ({ history: state.history }),
    }
  )
);
