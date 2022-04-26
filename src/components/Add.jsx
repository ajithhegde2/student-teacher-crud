import React, { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Add = () => {
  const [name, setName] = useState('')
  const { tId } = useParams()

  const { addTeacher, teachers, addStudent } = useContext(GlobalContext)
  const history = useNavigate()

  const onSubmit = () => {
    if (tId) {
      const newStudent = { name }
      addStudent(tId - 1, newStudent)
    } else {
      const newTeacher = { name, students: [] }
      addTeacher(newTeacher)
    }
    history('/')
  }
  const onChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div className=' d-flex justify-content-center mt-5'>
      <div className='border rounded p-5 w-50  mt-5'>
        <Form onSubmit={onSubmit}>
          {tId && (
            <Form.Group as={Row}>
              <Form.Label column sm='3' className='mb-3'>
                Teacher Name :
              </Form.Label>
              <Col>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={teachers[tId - 1].name}
                />
              </Col>
            </Form.Group>
          )}
          <Form.Group as={Row}>
            <Form.Label column sm='3' className='mb-3'>
              {tId ? 'New Student:' : 'New Teacher:'}
            </Form.Label>
            <Col>
              <Form.Control
                type='text'
                placeholder='Enter Name ...'
                className='mb-3'
                value={name}
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button type='submit' variant='secondary' className='me-3'>
              Submit
            </Button>
            <Link to='/' className='btn btn-danger'>
              Cancel
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Add
