import {createSlice} from '@reduxjs/toolkit'

const studentSlice = createSlice({
    name: '',
    initialState: {
        students_male: [
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
        ],
        students_female: [
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
    ]
    },
    reducers: {
        addNewMaleStudent:(state,action) => {
            state.students_male = [...state.students_male,action.payload];
        },
        addNewFemaleStudent:(state,action) => {
            state.students_female = [...state.students_female,action.payload];
        },
    }
})


export const {addNewFemaleStudent,addNewMaleStudent} = studentSlice.action
export default studentSlice.reducer