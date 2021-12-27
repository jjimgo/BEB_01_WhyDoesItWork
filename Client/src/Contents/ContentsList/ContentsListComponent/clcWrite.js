import axios from "axios";
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./clcWrite.css";
export const WritePage = ({ data, SetBoard }) => {
  // 간단하게 글을 작성하는 부분

  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");
  const [tag, SetTag] = useState("");

  const a = (e) => {
    SetTitle(e.target.value);
  };
  const b = (e) => {
    SetContent(e.target.value);
  };
  const c = (e) => {
    SetTag(e.target.value);
  };

  const send = async () => {
    // 작성된 글 데이터를 서버로 전송하는 함수
    await axios.post("http://localhost:8080/write", {
      title: title,
      content: content,
      tag: tag,
    });
  };

  return (
    <>
      <div className="Write_box">
        <input value={title} placeholder="title" onChange={a} />
        <textarea value={content} placeholder="content" onChange={b} />
        <input value={tag} placeholder="tag" onChange={c} />
        {/*<Link to="/board">*/}
          <button className="Write_button" onClick={send}>
            {" "}
            제출{" "}
          </button>
        {/*</Link>*/}
      </div>
    </>
  );
}