
import css from 'components/Searchbar/Searchbar.module.css'
import React from "react"
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
  const {onSabmit}=this.props;
  onSabmit({...this.state})
 this.setState({search:''})
 }
  render(){
    const {search}=this.state ;
    const{handleChancge ,handleSubmit}=this
    console.log(this.state.search)
    return(
<header className={css.searchbar}>
  <form className={css.form} onSubmit={handleSubmit}>
    <button type="submit" className={css.button}>
      <span className={css.span}>Search</span>
    </button>

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
  </form>
</header>
    )
  }
}

export default Searchbar