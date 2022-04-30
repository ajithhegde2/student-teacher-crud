import api from '../api/teachers'

const AppReducer = (state, action) => {
  const updateList = async () => {
    try {
      await api.put(
        `/teachers/${action.payload.id}`,
        state.teachers[action.payload.tId]
      )
      return true
    } catch (error) {
      return false
    }
  }
  switch (action.type) {
    case 'ADD_DATA': {
      return { teachers: action.payload }
    }
    case 'REMOVE_TEACHER': {
      const removeTeacher = async () => {
        try {
          await api.delete(`./teachers/${action.payload}`)
          state.teachers.splice(action.payload - 1, 1)
          return true
        } catch (error) {
          return false
        }
      }
      return removeTeacher() ? { teachers: state.teachers } : {}
    }
    case 'ADD_TEACHER': {
      const addTeacher = async () => {
        try {
          const response = await api.post('/teachers', action.payload)
          return { teachers: response.data }
        } catch (error) {
          return {}
        }
      }

      return addTeacher()
    }
    case 'UPDATE_TEACHER': {
      state.teachers[action.payload.tId].name = action.payload.teacher

      return updateList() ? { teachers: state.teachers } : {}
    }
    case 'REMOVE_STUDENT': {
      state.teachers[action.payload.tId].students.splice(action.payload.sId, 1)
      return updateList() ? { teachers: state.teachers } : {}
    }

    case 'ADD_STUDENT': {
      state.teachers[action.payload.tId].students.push(action.payload.student)
      return updateList() ? { teachers: state.teachers } : {}
    }
    case 'UPDATE_STUDENT': {
      state.teachers[action.payload.tId].students[action.payload.sId].name =
        action.payload.student
      return updateList() ? { teachers: state.teachers } : {}
    }
    default:
      return state
  }
}

export default AppReducer
