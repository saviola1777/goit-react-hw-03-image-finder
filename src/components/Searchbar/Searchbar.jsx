
import css from 'components/Searchbar/Searchbar.module.css'
import React from "react"
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state={
    search:''
  }

  handleChancge=({target})=>{
    const{name,value}=target;
    this.setState({[name]:value})
 }

 handleSubmit=(e)=>{
  e.preventDefault();
 const {onSubmit}=this.props;
  onSubmit({...this.state})
 this.setState({search:''})
 }
  render(){
    const {search}=this.state ;
    const{handleChancge ,handleSubmit}=this
    // console.log(this.state.search)
    return(
<header className={css.searchbar}>
  <form className={css.form} onSubmit={handleSubmit}>
    <input
      onChange={handleChancge}
      name="search"
      value={search}
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      required
      placeholder="Search images and photos"
    />
       <button type="submit" className={css.button}>
      <span className={css.span}>Search</span>
    </button>
  </form>
</header>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar