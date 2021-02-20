import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ name, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{name}</h1>
      <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  name : 'Task Tracker'
}

Header.propTypes = {
  name : PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;