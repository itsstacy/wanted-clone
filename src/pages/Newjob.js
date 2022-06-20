import React, {useRef, useState} from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import S3 from 'react-aws-s3';
import {createJob} from '../redux/modules/feedSlice';

window.Buffer = window.Buffer || require("buffer").Buffer;

function Newjob() {

  const navigate = useNavigate();
  const [position, setPosition] = useState(0);
  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState(true);

  //file uploader
  const inputFile = useRef(null);
  const onButtonClick = () => {
      inputFile.current.click();
  };

  //file upload to S3 storage & show preview
  const [selectedFile, setSelectedFile] = useState(null);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME_S,
    region: process.env.REACT_APP_REGION_S,
    accessKeyId: process.env.REACT_APP_ACCESS_S,
    secretAccessKey: process.env.REACT_APP_SECRET_S
  }
  console.log(config);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    if (e.target.files[0].name.length > 0) {
        uploadFile(e.target.files[0]);
    };
}

const uploadFile = async (file) => {
    const ReactS3Client = new S3(config);
    ReactS3Client
    .uploadFile(file, file.name)
    .then((data) => {
        console.log(data.location);
        setFile(data.location);
        setSelectedFile(data.location);
        setDisplay(false);
    })
    .catch(err => console.error(err))
}

  console.log(file);
  console.log(selectedFile);

  //job data ref
  const _title = React.useRef(null);
  const _subcontent = React.useRef(null);
  const _maincontent = React.useRef(null);


  const newpost = () => {
    dispatchEvent(createJob({
      title: _title.current.value,
      thumbnail: file? file: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_175138996_97986.jpg",
      maincontent: _maincontent.current.value,
      subcontent: _subcontent.current.value,
      position: position,
    }))
  }

  return (
    <div className="newjob-container">
      <div className = "detailhead topmg40">
        채용공고를 등록해주세요.
      </div>
      <div className = "newjob-text-grey topmg10">
      채용 정보를 정확하게 입력할수록 알맞은 인재를 찾을 확률이 올라갑니다!
      </div>
      <div className="newjob-head">
        공고제목
      </div>
      <input type="text" className="newjob-input topmg10" ref={_title}></input>
      <div className="newjob-head">
        썸네일 등록
      </div>
      <Filebutton display={display} onClick={onButtonClick}><span className="material-icons">add_a_photo</span></Filebutton>
      <input className='newjob-file' type="file" ref={inputFile} 
          onChange={(e) => {
              handleFileInput(e)
          }}
      ></input>
      <img src={file} className='newjob-preview' />
      <div className="newjob-head">
        구분
      </div>
      <div className="button-wrap">
        <Button position={position} onClick={()=>{
          setPosition(1)
          console.log(position)
          }}> Front-end </Button>
        <Button2  position={position} onClick={()=>{
          setPosition(-1)
          console.log(position)
          }}> Back-end </Button2>
      </div>
      <div className="newjob-head">
        주요업무
      </div>
      <textarea className="newjob-inputarea" ref={_maincontent}></textarea>
      <div className="newjob-head">
        자격요건
      </div>
      <textarea className="newjob-inputarea" ref={_subcontent}></textarea>
      <div className="flex-center">
       <button 
       className="newjob-register-button" 
       onClick={()=>{
         newpost()
       }}> 등록하기 </button>
      </div>
    </div>
    
  )
}


export default Newjob;

const Button = styled.div`
  padding-top: 10px;
  min-width: 200px;
  width: 45%;
  height: 38px;
  font-weight: 600;
  background-color: white;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.position == 1 ?  '#0482F7' : '#e0dede')};
  color: ${(props) => (props.position == 1 ?  '#0482F7': 'black')};
  text-align: center;
  &:hover,
  &:focus {
    color: var(--primary-color);
    transform: scale(0.99);
    border: 2px solid var(--primary-color);
    transform: scale(0.99);
  }

`

const Button2 = styled.div`
  padding-top: 10px;
  min-width: 200px;
  width: 45%;
  height: 38px;
  font-weight: 600;
  background-color: white;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.position == -1 ?  '#0482F7' : '#e0dede')};
  color: ${(props) => (props.position == -1 ?  '#0482F7': 'black')};
  text-align: center;
  font-size: 1rem;
  &:hover,
  &:focus {
    color: var(--primary-color);
    transform: scale(0.99);
    border: 2px solid var(--primary-color);
    transform: scale(0.99);
  }

`

const Filebutton = styled.div`
display: block;
width: 97.5%;
height: 250px;
object-fit: cover;
margin: 20px auto 20px auto; 
background-color: white;
border:5px solid var(--box-border);
border-radius: 5px;
text-align: center;

cursor: pointer;
display: ${(props) => props.display ? 'block' : 'none'};
&:hover {
    border:5px solid var(--primary-color);
}
&:hover span {
  color: var(--primary-color);
}
&>span {
    font-size:3rem;
    margin-top: 95px;
    color: var(--light-grey);
  }

`