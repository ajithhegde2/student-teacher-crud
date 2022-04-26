import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Add = () => {
  const { tName } = useParams()

  const { addTeacher } = useContext(GlobalContext)
  const history = useNavigate()

  const onSubmit = () => {
    // const newTeacher = { name: 'Ajith', students: [] }

    // addTeacher(newTeacher)

    history('/')
  }
  // const onChange = (e) => {
  //   setName(e.target.value)
  // }
  return (
    <div className=' d-flex justify-content-center mt-5'>
      <div className='border rounded p-5 w-50  mt-5'>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label className='mb-3'>Name :</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name ...'
              className='mb-3'
            />
          </Form.Group>
          <Button type='submit' variant='secondary' className='me-3'>
            Submit
          </Button>
          <Link to='/' className='btn btn-danger'>
            Cancel
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default Add
