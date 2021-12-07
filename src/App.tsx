import AppHeader from "./components/AppHeader";
import PasteList from "./components/PasteList";
import PasteForm from "./components/PasteForm";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <PasteForm />
      <PasteList />
    </>
  );
}

export default App;
