import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModule } from "./components/CssMolude";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
