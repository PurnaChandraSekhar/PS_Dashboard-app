import { useContext } from 'react'
import { DashBoardContext } from '../../../Context/DashboardContext'
import {Button} from '../../Atoms'

import './Header.css'

const Header = () => {
  const { isEditable } = useContext(DashBoardContext)

  return (
    <header className='header'>
        <h2 className="headingLogo">React Context Playground</h2>
        <Button btnLabel={ isEditable != null && !isEditable ? "Switch to Edit Mode" : "Switch on View Mode"} />
    </header>
  )
}

export default Header