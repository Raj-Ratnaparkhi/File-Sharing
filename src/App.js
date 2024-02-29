import { useRef,useState,useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';


function App() {
  const [file,setFile] = useState('')
  const [result, setResult] = useState('');

  const logo = "https://cdn.pixabay.com/photo/2019/03/28/10/34/wifi-4086902_1280.jpg"
  const logo2 = "https://cdn.worldvectorlogo.com/logos/shareit-logo.svg"

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const fileInputRef = useRef();
  console.log(file)
  const onUploadClick = () =>{
    fileInputRef.current.click();
  }
  
  return (
       <div className='Back'>
          <img src={logo} alt='Bg'/>
          
          <div className='content1'>
            <div className='content'>
                <h1>SHAREall-The Ultimate File Sharing WebApp</h1>
                <p>Simple, secure file transfer </p><p>Make file transfers up to 100 GB with Filefly Transfer</p>
                <div><ion-icon name="share-social-outline"></ion-icon><ion-icon name="share-social-outline"></ion-icon><ion-icon name="share-social-outline"></ion-icon></div>
                <div className='banner'>Click On upload to Generate A link and send the generated link to Share it on different devices</div> 
                
                <button onClick={() => onUploadClick()}>Upload</button>
                <input type="file" ref={fileInputRef} style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />

                <a href={result} target='_blank'>{result}</a> 


            </div>
          </div>
       </div>
       

  );
}

export default App;
