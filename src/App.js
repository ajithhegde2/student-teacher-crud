import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './components/Edit'
import Home from './components/Home'

import Add from './components/Add'
import Heading from './components/Heading.jsx'
import { GlobalProvider } from './context/GlobalContext'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/teacher/:tId' element={<Edit />} />
            <Route path='/teacher/add' element={<Add />} />
            <Route path='/:tId/student/:sId' element={<Edit />} />
            <Route path='/:tId/student/add' element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
