import React from "react"
// import css from 'components/App.module.css'

import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import axios from "axios"
class App extends React.Component{
  state = {
    items: [],
    // loading: false ,
    // error:null,
    search:'',
    }

    // componentDidMount(){}
    componentDidUpdate(prevProps ,prevState){
      const{search}=this.state
if(prevState.search!==search){
 axios.get(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
}
    }

    searchImage=(search)=>{
      this.setState({search})
          }

render(){
   const{items}=this.state ;
   const{searchImage}=this
   console.log(this.state.search)
return(
  <> 
  <Searchbar onSumbit={searchImage}/>
  <ImageGallery><ImageGalleryItem items={items}/></ImageGallery>
  
   {/* {loading && <p>.....loading</p>}   
   {error&& <p>Something go wrong</p>}
<ul className={css.appList}>{elements}</ul> */}
</>
)}
}
  export default App
  

//   componentDidMount(){                      //axios це запит на сервер коли ми хочемо забрати дані
//     this.setState({loading:true}) //loading переписуємо на true і в самому рендері ставммо умову якщо loading:true то ми пишемо що йде загрузка чи вішаємо спінер якийсь
//     axios.get('https://jsonplaceholder.typicode.com/posts?userId=2') // це наз запит  axios.get і посилання на самий запит 
//     .then(({data})=>{console.log(data)   //then це відповідь ми получити наші дані дестректуризація і повернули в state наші дані
//      this.setState({items:data })         // повертаємо дані в наш state.items
// })
//     .catch(error=>this.setState({error:error.message}))  // сatch відловлює помики , якшо при нашому запросі відбудеться помилка то ми state.error запищемо потім створемо умову нижче 
//     .finally(()=>this.setState({loading: false})) //.finally() функція яка відбувається чи сталася помилка чи, вона спрацьовує чи буде помилка чи ні воно поміняє loading на false
// }