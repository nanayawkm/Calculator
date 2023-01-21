import { configureStore } from '@reduxjs/toolkit'
import student_reducer from '../reducers/student_reducer'
import teacher_reducer from '../reducers/teacher_reducer'

export default configureStore({
  reducers: {student: student_reducer,
            teacher: teacher_reducer
}
  
})   