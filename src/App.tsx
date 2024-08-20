import AsyncComponent from "./components/AsyncComponent";
import Button from "./components/Button"
import Form from "./components/Form";

function App() {

  return (
    <>
      <Button label="ボタン" onClick={() => alert('クリック')} />
      <Form />
      <AsyncComponent />
    </>
  );
}

export default App
