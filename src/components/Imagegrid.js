import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const ImageGrid = ({setSelectedImage}) => {
    const [imagesRendered, updateImagesRendered] = useState([]);
    function renderImages(responseData) {
        console.log("data passed", responseData);
        const imagesArray =  responseData.map((imageObject, setSelectedImg) => {    
          console.log(imageObject);
          const imageUrl = imageObject.download_url;
          const author = imageObject.author;
          const key = imageObject.id;
          return(
            <div className="col-md-4 col-sm-12 my-auto mx-auto">
              <div className="card my-4 mx-auto" style={{width: '18rem'}} key={key} onClick={() => setSelectedImage(imageUrl)}>
            <img src={imageUrl}  className="card-img-top" width="200" height="220" alt="..." />
            <div className="card-body">
              <p className="card-text" ><strong>Image by: {author}</strong></p>
            </div>
          </div>
            </div>
          );
        });
        updateImagesRendered(imagesArray);
      }
      async function getData() {
       const response = await axios.get("https://picsum.photos/v2/list");
       renderImages(response.data);
      }
      useEffect(() =>{
        console.log("called");
        getData();
      },[]);
return (
    <div className="row">
      {imagesRendered}
      </div>
)
}