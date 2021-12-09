import axios from "axios";
import { useState } from "react";
import { API_BASE } from "../utils/APIFragments";

interface FormProps {
  userId: number | null;
  loadAllPastes: () => Promise<void>;
}

export default function PasteForm(props: FormProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [pasteBody, setPasteBody] = useState<string>("");

  const handleAddPaste = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pasteBody.replaceAll(" ", "") !== "") {
      await axios
        .post(`${API_BASE}pastes/${props.userId}`, {
          title: title,
          paste_body: pasteBody,
        })
        .then((response) => {
          console.log(response);
          setTitle("");
          setPasteBody("");
          props.loadAllPastes();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={handleAddPaste} className="px-5">
      <div className="w-60 m-auto px-5 input-group mb-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          placeholder="enter title"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          submit
        </button>
      </div>
      <div className="w-60 px-5 m-auto mb-3">
        <textarea
          value={pasteBody}
          onChange={(e) => setPasteBody(e.target.value)}
          placeholder="enter paste body"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </div>
    </form>
  );
}
