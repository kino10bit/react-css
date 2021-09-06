export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">タイトル</p>
        <button className="button">ボタン</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: sapce-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: blue;
          border: none;
          padding: 8px;

          &:hover {
            background-color: red;
          }
        }
      `}</style>
    </>
  );
};
