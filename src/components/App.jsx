import React from "react"
// import css from 'components/App.module.css'
// import axios from "axios"

import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import {getAxios} from 'components/Api/GalleryApi'
import Loader from 'components/Loader/Loader'
class App extends React.Component{
  state = {
  items: [],                         //зберігаємо дані з аякс запиту , картинки опис тощо
   loading: false ,                  //cтворюємо для того що коли йде запит ми могли показати спінер чи повідомлення що запит іде
   error:null,                       //обєкт для повідомлення якщо є якась помилка 
   search:'',                        //записуємо дані з мого інпута з поля в якому ми шукаємо картинки тощо
   page:1,                          //пля пагінації при отправці сторінка має бути першою
   showModal:false,                 //для нашої модалки щоб її не було видно при натискані на шось ставала тру і зявлялася 
   largeImg:null,                   //будемо передавати велику картинку

    }

  componentDidUpdate(prevProps ,prevState){               //попередні пропси   попередній стейт
  const{search ,page}=this.state                         // доступ до стейта  
if(prevState.search!==search ||prevState.page!==page){   //якшо попередня строка пошуку не дорівнює  теперішній prevState.search -тобто тещо ми вписали попередній раз не таке саме що 
 this.fetchPosts()                                       //що вписали зараз і так само номер page , то тоді ми визиваємо this.fetchPosts()
}}                                                       //this.fetchPosts() -це функція яка відповідає за повернення запиту і відловлювання помилок 

async fetchPosts(){
  try{
    this.setState({loading: true})
    const{search ,page}=this.state ;
    const data=await getAxios (search ,page)
    this.setState(({items})=> ({items:[...items, ...data.hits]}));
}
catch(error){
  this.setState({error:error.message})
}
finally{
  this.setState({loading: false})
}
}
 
    searchImage=({search })=>{
      this.setState({search , page:1 , items:[] })
          }

    loadMore=()=>{
      this.setState(prevState=>({page:prevState.page+1}))  //prevState--завжди коли треба попереднє значення і тоді page:2 
    }

    showImage=({largeImageURL, tags })=>{
      this.setState({
        largeImg:{
          largeImageURL, 
          tags, 
        },
    showModal:true,
      })
    }

    closeModal=()=>{
      this.setState({showModal:false , largeImg:null,})
    }

render(){
   const{items , loading , error , showModal , largeImg}=this.state ;
   const{searchImage , loadMore, showImage , closeModal} = this ;
   console.log(items,largeImg )
return(
  <> 
  <Searchbar onSubmit={searchImage}/>
  <ImageGallery><ImageGalleryItem items={items} showImage={showImage}/></ImageGallery>
  
  {loading && <Loader/>}   
  {error&& <p>Something go wrong</p>}
  {Boolean(items.length)&&<Button onClick={loadMore}/>}
  {showModal&&<Modal largeImg={largeImg} close={closeModal}/>} 
 
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


// componentDidUpdate(prevProps ,prevState){  //попередні пропси   попередній стейт
//   const{search ,page}=this.state
// if(prevState.search!==search ||prevState.page!==page){   //якшо попередня строка пошуку не дорівнює  теперішній prevState.search --те що ми записали в попередній раз (search)те що записали зараз
//   this.setState({loading: true})
// //  axios.get(`https://pixabay.com/api/?q=${search}&key=31958740-fc1ca03b202680423fa77b228&image_type=photo&orientation=horizontal&per_page=12`)
//  searchImage(search ,page)
//  .then(data=>this.setState(({items})=> ({items:[...items, ...data.hits]})))
//  .catch(error=>this.setState({error:error.message}))
//  .finally(()=>this.setState({loading: false}))
//  console.log()
// } }