import React, { useRef, useState } from "react";
import styled from "styled-components";
import S3 from "react-aws-s3";

function Newjob() {
  const [position, setPosition] = useState(0);
  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState(true);

  //file uploader
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  //file upload to storage & show preview
  const [selectedFile, setSelectedFile] = useState(null);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
  };

  const handleFileInput = (e) => {
    if (e.target.files[0].name.length > 0) {
      setSelectedFile(e.target.files[0]);
      const length = e.target.files.length;
      console.log(length);
      uploadFile(e.target.files[0]);

      const uploadFile = async (file) => {
        const ReactS3Client = new S3(config);
        // the name of the file uploaded is used to upload it to S3
        ReactS3Client.uploadFile(file, file.name)
          .then((data) => {
            console.log(data.location);
            setFile(data.location);
            setSelectedFile(data.location);
            setDisplay(false);
          })
          .catch((err) => console.error(err));
      };
    }

    return (
      <div className="newjob-container">
        <div className="detailhead topmg40">채용공고를 등록해주세요.</div>
        <div className="newjob-text-grey topmg10">
          채용 정보를 정확하게 입력할수록 알맞은 인재를 찾을 확률이 올라갑니다!
        </div>
        <div className="newjob-head">공고제목</div>
        <input type="text" className="newjob-input topmg10"></input>
        <div className="newjob-head">썸네일 등록</div>
        <Button display={display} onClick={onButtonClick}>
          <span className="material-icons color-primary topmg20">
            add_a_photo
          </span>
        </Button>
        <input
          className="file"
          type="file"
          multiple
          ref={inputFile}
          onChange={(e) => {
            handleFileInput(e);
          }}
        ></input>

        <div className="newjob-head">구분</div>
        <div className="button-wrap">
          <Button
            position={position}
            onClick={() => {
              setPosition(1);
              console.log(position);
            }}
          >
            {" "}
            Front-end{" "}
          </Button>
          <Button2
            position={position}
            onClick={() => {
              setPosition(-1);
              console.log(position);
            }}
          >
            {" "}
            Back-end{" "}
          </Button2>
        </div>
        <div className="newjob-head">주요업무</div>
        <textarea className="newjob-inputarea"></textarea>
        <div className="newjob-head">자격요건</div>
        <textarea className="newjob-inputarea"></textarea>
      </div>
    );
  };
}

export default Newjob;

const Button = styled.div`
  padding-top: 10px;
  min-width: 200px;
  width: 45%;
  height: 38px;
  background-color: white;
  border-radius: 35px;
  border: 2px solid
    ${(props) => (props.position === 1 ? "#0482F7" : "rgb(130, 130, 130)")};
  color: ${(props) => (props.position === 1 ? "#0482F7" : "black")};
  text-align: center;
  font-size: 1rem;
  &:hover,
  &:focus {
    color: var(--primary-color);
    transform: scale(0.99);
    border: 2px solid var(--primary-color);
    transform: scale(0.99);
  }
`;

const Button2 = styled.div`
  padding-top: 10px;
  min-width: 200px;
  width: 45%;
  height: 38px;
  background-color: white;
  border-radius: 35px;
  border: 2px solid
    ${(props) => (props.position === -1 ? "#0482F7" : "rgb(130, 130, 130)")};
  color: ${(props) => (props.position === -1 ? "#0482F7" : "black")};
  text-align: center;
  font-size: 1rem;
  &:hover,
  &:focus {
    color: var(--primary-color);
    transform: scale(0.99);
    border: 2px solid var(--primary-color);
    transform: scale(0.99);
  }
`;
