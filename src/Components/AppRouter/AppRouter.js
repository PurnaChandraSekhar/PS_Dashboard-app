import {Routes, Route} from 'react-router-dom'

import {DashBoard, Team, Calendar, Projects, ErrorPage} from '../Organisms'

import './AppRouter.css'

const AppRouter = () => {
  return (
    <main className='main-container'>
    <Routes>
        <Route path='/' element={<DashBoard />}/>
        <Route path='/team' element={<Team />}/> 
        <Route path='/projects' element={<Projects />}/> 
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='*' element={<ErrorPage />}/>
    </Routes>
    </main>
  )
}

export default AppRouter