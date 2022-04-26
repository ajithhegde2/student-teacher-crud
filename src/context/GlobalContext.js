import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  teachers: [
    {
      name: 'Teacher 1',
      students: [{ name: 'student 1' }, { name: 'student 2' }],
    },
    {
      name: 'Teacher 2',
      students: [{ name: 'student 1' }, { name: 'student 1' }],
    },
    {
      name: 'Teacher 3',
      students: [{ name: 'student 1' }, { name: 'student 2' }],
    },
    {
      name: 'Teacher 4',
      students: [{ name: 'student 1' }, { name: 'student 2' }],
    },
  ],
}

// Create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const removeTeacher = (id) => {
    dispatch({ type: 'REMOVE_TEACHER', payload: id })
  }

  const addTeacher = (teacher) => {
    dispatch({ type: 'ADD_TEACHER', payload: teacher })
  }
  const updateTeacher = (tId, teacher) => {
    console.log(tId, teacher)
    dispatch({ type: 'UPDATE_TEACHER', payload: { tId, teacher } })
  }

  const removeStudent = (tId, sId) => {
    dispatch({ type: 'REMOVE_STUDENT', payload: { tId, sId } })
  }

  const addStudent = (tId, student) => {
    dispatch({ type: 'ADD_STUDENT', payload: { tId, student } })
  }

  const updateStudent = (tId, sId, student) => {
    dispatch({ type: 'UPDATE_STUDENT', payload: { tId, sId, student } })
  }

  return (
    <GlobalContext.Provider
      value={{
        teachers: state.teachers,
        removeTeacher,
        removeStudent,
        addTeacher,
        addStudent,
        updateTeacher,
        updateStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
