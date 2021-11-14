import "./styles.css";
import { InlineStyle } from "./componets/InlineStyle";
import { CssModules } from "./componets/CssModules";
import { StyledJsx } from "./componets/StyledJsx";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
