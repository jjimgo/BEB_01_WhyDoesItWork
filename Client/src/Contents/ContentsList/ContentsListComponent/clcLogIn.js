import "./clcLogin.css";
import React from "react";

import { useEffect, useState } from "react";
//import axios from "axios";

export const LogInPage = () => {
    // 초기 페이지

    const [user, SetUser] = useState(false);
    const [Id, SetId] = useState("");
    const [password, SetPassword] = useState("");
    const [login, SetLogin] = useState("");
    const [newUser, SetnewNew] = useState(false);

    // Id는 아이디, password는 비밀번호,
    const change1 = (e) => {
      SetId(e.target.value);
    };
    const change2 = (e) => {
      SetPassword(e.target.value);
    };
    /*
    useEffect(() => {
      // 항상 id값과 password값을 확인함으로써 로그인버튼의 opacity가 변경됨
      if (Id.length !== 0 && password.length !== 0) {
        SetLogin(true);
      } else {
        SetLogin(false);
      }
    }, [Id, password, user, newUser]);
  
    const GoLogin = async () => {
      // 로그인 처리를 하는 핸들러
      await axios
        .post("http://localhost:8080/login", {
          Id: Id,
          password: password,
        })
        .then((a) => {
          if (!a.data.data) {
            alert("없는 아이디 입니다!");
          } else {
            SetData({
              username: a.data.answer.username,
              password: a.data.answer.password,
            });
            SetUser(a.data.data);
            SetAuth(a.data.data);
          }
        });
    };
  
    const Gomake = async () => {
      // 회원가입에 사용하는  핸들러 함수
      await axios
        .post("http://localhost:8080/make", {
          Id: Id,
          password: password,
        })
        .then((a) => {
          if (!a.data.data) {
            alert("이미 있는 아이디와 비밀번호 입니다.");
          } else {
            alert("아이디 생성 완료!");
            SetId("");
            SetPassword("");
            SetnewNew(!newUser);
          }
        });
    };
  
    const make = async () => {
      // 회원가입, 로그인 버튼을 바꿔주는 함수
      SetId("");
      SetPassword("");
      SetnewNew(!newUser);
    };
  */

    return (
        <div className='SignInPage'>
            <div className="App_box">
                <div className="Img_div">
                    {/*<img src="./img/phone.png" alt="phone" />*/}
                </div>
                <div className="login_box">
                    <div className="login_form">
                        <h2>project_2</h2>
                        <input
                            placeholder="전화번호, 사용자 이름 또는 이메일"
                            value={Id}
                            onChange={change1}
                        />
                        <input placeholder="비밀번호" value={password} onChange={change2} />
                        {newUser ? (
                            <button className={login ? "on" : "login"} /*onClick={Gomake}*/>
                                회원가입
                            </button>
                        ) : (
                            <button className={login ? "on" : "login"} /*onClick={GoLogin}*/>
                                로그인
                            </button>
                        )}
                    </div>
                    <div className="new_User" /*onClick={make}*/>
                        계정이 없으신가요?
                    </div>
                    <div className="link">
                        <h2>앱을 다운로드하세요.</h2>
                        <div className="real_link">
                            <button>dsf</button>
                            <button className="button_scond">dsf</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
