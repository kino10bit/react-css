import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <STitle>タイトル</STitle>
      <SButton>ボタン</SButton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: sapce-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: blue;
  border: none;
  padding: 8px;
  &:hover {
    background-color: red;
  }
`;
