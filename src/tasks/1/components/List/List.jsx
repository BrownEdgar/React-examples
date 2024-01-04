import './List.scss'
import PropTypes from 'prop-types'
import { MENU_ITEMS_LIST } from '../../constants'

function dataRender(target, data) {
  switch (target) {
    case 'posts': return <p>{data.body}</p>
    case 'todos': return <p>status{data.completed ? 'done' : 'undone'}</p>
    case 'comments':
      return (
        <>
          <p>
            <img src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" alt="user logo" className='userLogo' />
            {data.body}</p>
          <address>
            email : {data.email}
          </address>
        </>
      )

    default: return null;
  }
}

export default function List({ currentTarget, data }) {
  return (
    <div className='List'>
      {data.map(elem => {
        return (
          <div className="List__item" key={elem.id}>
            <h2 className='List__Title'>{elem.title || elem.name}</h2>
            {dataRender(currentTarget, elem)}
          </div>
        )
      })}
    </div>
  )
}


List.propTypes = {
  currentTarget: PropTypes.oneOf(MENU_ITEMS_LIST),
  data: PropTypes.array
}