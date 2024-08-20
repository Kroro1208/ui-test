import AsyncComponent from "./components/AsyncComponent";
import Button from "./components/Button"
import Form from "./components/Form";
import SnapshotComponent from "./components/SnapshotComponent";

function App() {

  return (
    <>
      <Button label="ボタン" onClick={() => alert('クリック')} />
      <Form />
      <AsyncComponent />
      <SnapshotComponent text="React" />
    </>
  );
}

export default App
