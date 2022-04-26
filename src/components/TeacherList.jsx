import React, { useContext } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const TeacherList = () => {
  const { teachers, removeTeacher, removeStudent } = useContext(GlobalContext)

  return (
    <ListGroup className='w-50 ms-3'>
      <ListGroupItem
        variant='secondary'
        className='d-flex justify-content-between'
      >
        <h3>Teacher List</h3>
        <Link to='/teacher/add' className='btn btn-secondary ms-3'>
          Add Teacher
        </Link>
      </ListGroupItem>

      {teachers.map((teacher, index1) => {
        return (
          <div key={`t${index1}`}>
            {/* teacher List */}
            <ListGroupItem className='d-flex justify-content-between'>
              <strong className='m-1'>{teacher.name}</strong>

              <div className='ms-auto'>
                {/* Add Student btn */}
                <Link
                  to={`/${index1 + 1}/student/add`}
                  className='btn btn-secondary'
                >
                  Add Student
                </Link>

                {/* edit teacher btn */}
                <Link
                  className='btn btn-warning ms-3'
                  to={`/teacher/${index1 + 1}`}
                >
                  edit
                </Link>

                {/* delete teacher btn */}
                <Button
                  type='button'
                  className='btn btn-danger ms-3'
                  onClick={(e) => {
                    removeTeacher(index1)
                  }}
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>

            {teacher.students.map((student, index2) => {
              return (
                <ListGroupItem
                  className='d-flex justify-content-between'
                  key={`s${index1}${index2}`}
                >
                  <strong className='m-1 ms-5'>{student.name}</strong>

                  <div className='ms-auto'>
                    {/* edit Student btn */}
                    <Link
                      className='btn btn-warning'
                      to={`/${index1 + 1}/student/${index2 + 1}`}
                    >
                      edit
                    </Link>

                    {/* delete Student btn */}
                    <Button
                      type='button'
                      className='btn btn-danger ms-3'
                      onClick={() => removeStudent(index1, index2)}
                    >
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              )
            })}
          </div>
        )
      })}
    </ListGroup>
  )
}

export default TeacherList
