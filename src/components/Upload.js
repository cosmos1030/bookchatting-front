import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  // 제목 입력 시 호출되는 함수
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 서버로 데이터 전송 함수
  const sendFormDataToServer = async () => {
    const formData = new FormData();
    formData.append("file", file); // 파일 업로드
    formData.append("title", title); // 파일 제목 업로드

    // 실제로는 서버로 POST 요청을 보내야 합니다.
    // 이 예시에서는 콘솔에 FormData를 출력합니다.
    console.log("FormData:", formData);
    console.log(formData.get("file"));

    // 서버로 POST 요청 보내는 코드를 추가하세요.
    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("successful", response.data);
    } catch (error) {
      console.error("failed", error.response);
    }
  };

  return (
    <div className="chat-room">
      <div className="chat-room-name">추가하기</div>
      <div className="chat-messages" id="chatMessages">
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <button onClick={sendFormDataToServer}>전송</button>
    </div>
  );
};

export default Upload;
