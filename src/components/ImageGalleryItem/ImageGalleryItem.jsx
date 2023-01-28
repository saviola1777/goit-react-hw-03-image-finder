import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

const ImageGalleryItem =({items})=>{
 return (
 
    items.map(({id , title, body})=>
    <li key={id}  className={css.appItem}>
    <img src={title} alt={body} />
  </li>
        )
  )
}
export default ImageGalleryItem ;
ImageGalleryItem.defaultPrors={
  items:[]
}