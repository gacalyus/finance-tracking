
import { configureStore } from '@reduxjs/toolkit'
import generalSlice from '@/features/general/generalSlice'

export const store = configureStore({
    reducer: {
        general: generalSlice
    },
})