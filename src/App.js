import './App.css';
import { useEffect, useState } from 'react'

const  App = () => {

  const [pictures, setPictures] = useState([]);
 
  useEffect(() =>{ 
    handleFetch();
  }, []);

  const handleFetch = async () => { 
    const response = await fetch ('https://picsum.photos/v2/list')
    // this converts from json 
    const data = await response.json();
    setPictures(data);
  }
  return (
    <div className='App'>
  
      {pictures.map((item, index)=>{
        return(
          <div>
            <h2>{item.author}</h2>
            <img className='imageContainer' src = {item.download_url} alt = "random"/>
          </div>
        )
      })}
    </div>
  )
}

export default App;