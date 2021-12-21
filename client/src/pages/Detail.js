import Header2 from "../components/Header1";
import LogoImage from "../components/Logo";
import Nav from "../components/Nav";
import React, { useState } from "react";
import "./Detail.css";

const Detail = () => {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <Header2 />
      <LogoImage />
      <Nav />

      {/* 이걸 컴포넌트로 할 필요가 있을까? */}
      <hr />
      <div className="detail-main">
        <div className="detail-delete">
          <span>
            <button>수정</button>
          </span>
          <span>
            <button className="detail-btn2">삭제</button>
          </span>
        </div>
        <div>
          <input type="file"></input>
        </div>

        <div className="detail">
          <div className="detail-title">제목</div>

          <div className="detail-title">가격</div>

          <div className="detail-title">상세설명</div>
        </div>
        <div className="detail-love">
          <button>♥️찜하기</button>

          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            연락하기
          </button>
          <button>쿨거래</button>
        </div>
        {modal === true ? <Modal></Modal> : null}
      </div>
    </div>
  );
  function Modal() {
    return (
      <div className="modal">
        <button className="modal-delete">삭제</button>
        <h2>닉네임</h2>
        <input placeholder="댓글" />
        <span className="modal-put">
          <button>등록</button>
        </span>
      </div>
    );
  }
};

export default Detail;
