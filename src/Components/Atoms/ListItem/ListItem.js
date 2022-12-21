import {NavLink} from 'react-router-dom'

import {sideBarListItems} from './ListItemsData'

import './ListItem.css'

const ListItem = () => {
  return (
    <ul className='list'>
        {
            sideBarListItems.map(item => (
              <NavLink key={item.id} to={item.path} className="listItem">{item.label}</NavLink>
            ))
        }
    </ul>
  )
}

export default ListItem