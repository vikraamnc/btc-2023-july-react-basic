// while importing components use {} for inline otherwise use default in the exporting file.
import "./App.css";
import Display from "./Display";
import Button from "./Display";
import { Paragraph } from "./Paragraph";
const App = () => {
  return (
    <div>
      {/* <div> Hello World!</div>
      <div>Hi</div>
      <hr /> */}
      {/* <Display /> */}
      {/* <Button />
      <Paragraph /> */}
    </div>
  );
};

export default App;
