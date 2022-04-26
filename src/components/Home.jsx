import React from 'react'
import { Container } from 'react-bootstrap'

import TeacherList from './TeacherList'

const Home = () => {
  return (
    <div>
      <Container className='d-flex justify-content-center mt-5'>
        <TeacherList />
      </Container>
    </div>
  )
}

export default Home
