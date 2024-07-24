

import { create } from 'zustand'
import { MAIN_THEME } from './constants'

type State = {
    theme: typeof MAIN_THEME
    name: string
}

type Action = {
    updateTheme: (theme: State['theme']) => void
    updateName: (name: State['name']) => void
}

export const useThemeStore = create<State & Action>((set) => ({
    theme: MAIN_THEME,
    name: 'Main Theme',
    updateTheme: (theme) => set(() => ({ theme: theme })),
    updateName: (name) => set(() => ({ name: name })),
}))