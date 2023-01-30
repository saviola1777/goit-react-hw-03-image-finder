import css from 'components/Button/Button.module.css'
import PropTypes from 'prop-types';

const Button =({onClick})=>{
  return(
    <button onClick={onClick} className={css.buttonLoadMore}>Load more</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button