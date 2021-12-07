import AppHeader from "./components/AppHeader";
import PasteList from "./components/PasteList";
import PasteForm from "./components/PasteForm";
import { useState } from "react";

function App(): JSX.Element {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <>
      <AppHeader userId={userId} setUserId={setUserId} />
      <PasteForm />
      <PasteList />
    </>
  );
}

export default App;
