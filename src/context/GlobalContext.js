import React, { createContext, useEffect, useReducer, useState } from 'react'
import AppReducer from './AppReducer'
import api from '../api/teachers'

// initial state
const initialState = { teachers: [] }

// Create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const [loading, setLoading] = useState(true)

  const retriveTeachers = async () => {
    const response = await api.get('/teachers')
    return response.data
  }

  useEffect(() => {
    const getAllTeachers = async () => {
      const allTeachers = await retriveTeachers()

      if (allTeachers) {
        dispatch({ type: 'ADD_DATA', payload: allTeachers })
        console.log(allTeachers)
      }
    }
    getAllTeachers()
    setLoading(false)
  }, [])

  // Actions
  const removeTeacher = async (id) => {
    dispatch({ type: 'REMOVE_TEACHER', payload: id })
  }

  const addTeacher = async (teacher) => {
    dispatch({
      type: 'ADD_TEACHER',
      payload: { id: state.teachers.length + 1, ...teacher },
    })
  }
  const updateTeacher = async (tId, teacher, id) => {
    dispatch({ type: 'UPDATE_TEACHER', payload: { tId, teacher, id } })
  }

  const removeStudent = async (tId, sId, id) => {
    dispatch({ type: 'REMOVE_STUDENT', payload: { tId, sId, id } })
  }

  const addStudent = async (tId, student, id) => {
    dispatch({ type: 'ADD_STUDENT', payload: { tId, student, id } })
  }

  const updateStudent = async (tId, sId, student, id) => {
    dispatch({ type: 'UPDATE_STUDENT', payload: { tId, sId, student, id } })
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
      {loading ? (
        <div className='d-flex justify-content-center '>
          <h1 className=''> LOADING ...</h1>
        </div>
      ) : state ? (
        children
      ) : (
        <div className='d-flex justify-content-center '>
          <h1 className=''> OOPS! Something went Wrong</h1>
        </div>
      )}
    </GlobalContext.Provider>
  )
}
