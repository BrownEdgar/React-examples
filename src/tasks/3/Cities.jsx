import PropTypes from 'prop-types';
import Title from '../../components/Title/Title';

export default function Cities({ city }) {
  return (
    <div className='city'>
      <Title as='h1' hedding={city.name} />
      <img src={city.image} alt={city.name} loading='lazy' />
    </div>
  )
}

Cities.propTypes = {
  city: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })
}
