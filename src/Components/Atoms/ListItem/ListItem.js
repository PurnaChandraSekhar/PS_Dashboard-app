import { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import {sideBarListItems} from './ListItemsData'

import './ListItem.css'
import { DashBoardContext } from '../../../Context/DashboardContext'

const ListItem = () => {
  const { isEditable } = useContext(DashBoardContext)
  return (
    <ul className='list'>
        {
            sideBarListItems.map(item => (
              <NavLink key={item.id}
                to={item.path}
                style={({ isActive }) => ({ pointerEvents: !isActive && isEditable === true ? "none" : "" })}
                className="listItem">
                  {item.label}
              </NavLink>
            ))
        }
    </ul>
  )
}
export default ListItem