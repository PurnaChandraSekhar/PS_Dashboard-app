import React, { useContext } from 'react'
import { DashBoardContext } from '../../../Context/DashboardContext'

const TextArea = ({data}) => {
    const { id, heading } = data
    const { dashboardData, setDashboardData } = useContext(DashBoardContext)

    const handleChange = (value) => {
    const updatedItem = dashboardData.map(item => item.id === id ? {...item, heading: value} : item)
    setDashboardData(updatedItem) 
    }

  return (
     <input type="text" value={heading} onChange={(e) => handleChange(e.target.value)} />
  )
}

export default TextArea