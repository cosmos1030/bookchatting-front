import React, { useEffect } from "react";

function Logout({ setUser }) {
    useEffect(() => {
      // setLoggedInUser와 setUser를 호출하여 사용자 정보를 업데이트합니다.
      setUser(null);
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_info')
    }, [setUser]); // useEffect의 의존성 배열에 함수들을 추가
  
    return null;
  }
  

export default Logout;
