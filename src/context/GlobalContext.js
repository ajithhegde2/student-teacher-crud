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

  const removeStudent = (tId, sName) => {
    dispatch({ type: 'REMOVE_STUDENT', payload: { tId, sName } })
  }

  return (
    <GlobalContext.Provider
      value={{
        teachers: state.teachers,
        removeTeacher,
        removeStudent,
        addTeacher,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
