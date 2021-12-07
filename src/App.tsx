import AppHeader from "./components/AppHeader";
import PasteList from "./components/PasteList";
import PasteForm from "./components/PasteForm";
import { Paste } from "./utils/pasteInterface";
import { API_BASE } from "./utils/APIFragments";
import { useState, useEffect } from "react";
import axios from "axios";

function App(): JSX.Element {
  const [userId, setUserId] = useState<number | null>(null);
  const [allPastes, setAllPastes] = useState<Paste[]>([]);

  const loadAllPastes = async () => {
    await axios
      .get(`${API_BASE}pastes/${userId}`)
      .then((response) => {
        setAllPastes(response.data.data.userPastes);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (userId === null) {
      setAllPastes([]);
    } else {
      loadAllPastes();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  console.log(allPastes);
  return (
    <>
      <AppHeader userId={userId} setUserId={setUserId} />
      <PasteForm />
      <PasteList />
    </>
  );
}

export default App;
