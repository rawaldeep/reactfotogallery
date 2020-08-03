import React, { useState} from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleDelete = (e) =>{
    if(e.target.classList.contains('closebtn')){
      console.log('ref')
      console.log(e.target)
  }
  }
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg &&
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} handleDelete={handleDelete}/>}
    </div>
  );
}

export default App;
