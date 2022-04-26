const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_TEACHER': {
      state.teachers.splice(action.payload, 1)
      return {
        teachers: state.teachers,
      }
    }
    case 'ADD_TEACHER': {
      return {
        teachers: [...state.teachers, action.payload],
      }
    }
    case 'UPDATE_TEACHER': {
      state.teachers[action.payload.tId].name = action.payload.teacher
      return {
        teachers: state.teachers,
      }
    }
    case 'REMOVE_STUDENT': {
      state.teachers[action.payload.tId].students.splice(action.payload.sId, 1)
      return {
        teachers: state.teachers,
      }
    }

    case 'ADD_STUDENT': {
      state.teachers[action.payload.tId].students.push(action.payload.student)
      return {
        teachers: state.teachers,
      }
    }
    case 'UPDATE_STUDENT': {
      state.teachers[action.payload.tId].students[action.payload.sId].name =
        action.payload.student
      return {
        teachers: state.teachers,
      }
    }
    default:
      return state
  }
}

export default AppReducer
