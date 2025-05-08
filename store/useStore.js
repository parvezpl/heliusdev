// store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
    collection: null,
    collectionHead: null,
    setCollection: (data) => {
        set({ collectionHead: data.name })
        const fetchdata = async () => {
            const response = await fetch(`${data.api}`);
            const result = await response.json();
            // console.log(result)
            set({ collection: result.users });
        }
        fetchdata()
    },


}));
export default useStore;
