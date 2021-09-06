export const InlineStyle = () => {
  const contentStyle = {
    border: "solid 2px #392eff",
    borderRadisu: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "sapce-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "blue",
    border: "none",
    padding: "8px"
  };
  return (
    <div style={contentStyle}>
      <p style={titleStyle}>タイトル</p>
      <button style={buttonStyle}>BBB</button>
    </div>
  );
};
