import { useContext } from 'react'
import { DashBoardContext } from '../../../Context/DashboardContext'

import './Button.css'

const Button = ({btnLabel}) => {
  const { setIsEditable, isEditable } = useContext(DashBoardContext)

  const changeMode = () => {
    setIsEditable(!isEditable)
  }

  return (
    <button className="btn" onClick={changeMode}>{btnLabel}</button>
  )
}

export default Button