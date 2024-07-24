import { categoryDataType, mealListType } from '@/constants/misc';

import { create } from 'zustand'

type State = {
    activeCategory: string
    categories: categoryDataType[]
    meals: mealListType[]
}

type Action = {
    setActiveCategory: (category:string) => void
    setCategories: () => void
    setMeals: () => void
}

// export const useMainStore = create<State & Action>((set) => ({
//     activeCategory:'Beef',
//     categories:[],
//     meals:[],
//     setActiveCategory: (category) => set(() => ({ activeCategory: category })),
//     setCategories: () => set(()=>({categories:[]})),
//     setMeals: () => set(()=>({meals:[]}))
// }))

export const useMainStore = create((set)=>({
    activeCategory: 'Beef',
    setActiveCategory: (category:string)=>set(()=>({
        activeCategory:category
    }))
}))