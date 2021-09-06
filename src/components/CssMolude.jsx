import classes from "./CssModule.module.scss";
export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>タイトル</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
