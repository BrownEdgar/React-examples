import './MenuBar.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { MENU_ITEMS_LIST } from '../../constants'


MenuBar.propTypes = {
  changeTarget: PropTypes.func.isRequired,
  currentTarget: PropTypes.oneOf(MENU_ITEMS_LIST)
}

export default function MenuBar({ changeTarget, currentTarget }) {
  return (
    <div className='Menu'>
      <h1 className='Menu__Title'>{currentTarget}</h1>
      <ul className='Menu__list'>
        {MENU_ITEMS_LIST.map(menuItem => {
          return <li
            key={menuItem}
            onClick={() => changeTarget(menuItem)}
            className={classNames('Menu__item', {
              'Menu__item-active': menuItem === currentTarget
            })}
          >{menuItem}</li>
        })}
      </ul>
    </div>
  )
}
