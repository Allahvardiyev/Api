import React from 'react'
import ImageItem from './ImageItem'

const ImageList = ({imagePlaceHolder}) => {
    
  return (
    <div className='imageList'>
        {imagePlaceHolder.map((image, index)=>{
           
            
       return <ImageItem key={index} image={image}/>
        })}
    </div>
  )
}

export default ImageList