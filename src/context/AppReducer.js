const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_TEACHER': {
      state.teachers.splice(action.payload, 1)
      return {
        teachers: state.teachers,
      }
    }
    case 'REMOVE_STUDENT': {
      state.teachers[action.payload.tId].students = state.teachers[
        action.payload.tId
      ].students.filter((item) => item.name !== action.payload.sName)
      return {
        teachers: state.teachers,
      }
    }

    case 'ADD_TEACHER': {
      state.teachers.push(action.payload)
      return {
        teachers: state.teachers,
      }
    }
    default:
      return state
  }
}

export default AppReducer
