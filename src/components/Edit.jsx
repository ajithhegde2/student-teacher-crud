import React, { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Add = () => {
  const { tId, sId } = useParams()
  const { updateTeacher, updateStudent, teachers } = useContext(GlobalContext)
  const [name, setName] = useState(
    sId ? teachers[tId - 1].students[sId - 1].name : teachers[tId - 1].name
  )

  const history = useNavigate()

  const onSubmit = () => {
    if (sId) {
      updateStudent(tId - 1, sId - 1, name)
    } else {
      updateTeacher(tId - 1, name)
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
          {sId && (
            <Form.Group as={Row}>
              <Form.Label column sm='3' className='mb-3'>
                Teacher Name:
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
              {sId ? 'New Student:' : 'New Teacher:'}
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
