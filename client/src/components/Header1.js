import styled from "styled-components";
import { Link } from "react-router-dom";

const GoodsList = styled.button`
  //버튼 이름 바꾸자
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: white;
  &:hover {
    color: #ffcf00;
  }
  &:active {
    font: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const Headerpart = styled.header`
  margin: 20px;
  background: white;
  display: flex;
  justify-content: right;
  height: auto;
`;

export default function Header() {
  return (
    <div>
      <Headerpart>
        <Link to="/goods/goods" style={{ textDecoration: "none" }}>
          <GoodsList>상품리스트</GoodsList>
        </Link>
        <Link to="/users/login" style={{ textDecoration: "none" }}>
          <GoodsList>로그인</GoodsList>
        </Link>
        <Link to="/users/signup" style={{ textDecoration: "none" }}>
          <GoodsList>회원가입</GoodsList>
        </Link>

        <Link to="/users/login" style={{ textDecoration: "none" }}>
          <GoodsList>상품등록</GoodsList>
        </Link>
      </Headerpart>
    </div>
  );
}
