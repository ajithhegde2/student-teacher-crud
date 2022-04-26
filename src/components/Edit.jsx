import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
    <div className=' d-flex justify-content-center mt-5'>
      <div className='border rounded p-5 w-50  mt-5'>
        <Form>
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

export default Edit
