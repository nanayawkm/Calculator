import {createSlice} from '@reduxjs/toolkit'

const studentSlice = createSlice({
    name: '',
    initialState: {
        teacher_male: [
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
            {name:'kwaku',gen:'23'},
        ],
        teacher_female: [
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
            {name:'joyce',gen:'23'},
    ]
    },
    reducers: {
        addNewMaleTeacher:(state,action) => {
            state.teacher_male = [...state.students_male,action.payload];
        },
        addNewFemaleTeacher:(state,action) => {
            state.teacher_female = [...state.students_female,action.payload];
        },
    }
})


export const {addNewFemaleStudent,addNewMaleStudent} = studentSlice.action
export default studentSlice.reducer