import React from "react";
import { Link } from "react-router-dom";

function Navigation({ user }) {
  const loginInfo = () => {
    const isLogin = (localStorage.getItem('access_token')!=null)
    console.log(isLogin)
    if (user) {
      return (
        <Link className="nav-link" to="logout">
          {user.username} (로그아웃)
        </Link>
      );
    } else {
      return (
        <Link className="nav-link" to="login">
          로그인
        </Link>
      );
    }
  };
  const registerInfo = () => {
    if (!user) {
      return <Link className="nav-link" to="register">회원가입</Link>;
    }
  };

  return (
    //   <nav classNameName="navbar navbar-expand-lg bg-light">
    //   <div classNameName="container-fluid">
    //     <Link classNameName="navbar-brand" to="/">BookChatting</Link>
    //     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>
    //     <div classNameName="collapse navbar-collapse" id="navbarText">
    //       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link" href="#">Features</a>
    //         </li>
    //         <li classNameName="nav-item">
    //           <a classNameName="nav-link" href="#">Pricing</a>
    //         </li>
    //       </ul>
    //       <form classNameName="d-flex col-4" role="search">
    //           <input classNameName="search form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //       </form>
    //       <Link to="/login" classNameName="signin btn btn-light">로그인</Link>
    //       <Link to="/signup" classNameName="signup btn btn-primary">회원가입</Link>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BookChatting
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="#navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">{loginInfo()}</li>
            <li className="nav-item">{registerInfo()}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
