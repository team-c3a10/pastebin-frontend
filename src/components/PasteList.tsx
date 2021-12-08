import Paste from "./Paste";
import { IPaste } from "../utils/pasteInterface";

interface PasteListProps {
  allPastes: IPaste[];
}

export default function PasteList(props: PasteListProps): JSX.Element {
  const pasteElements = props.allPastes.map((singlePaste) => (
    <Paste key={singlePaste.paste_id} paste={singlePaste} />
  ));

  return (
    <div className="mx-4 my-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="col-md-2">
              Title
            </th>
            <th scope="col" className="col-md-8">
              Paste Body
            </th>
            <th scope="col" className="col-md-2">
              Date Created
            </th>
          </tr>
        </thead>
        <tbody>{pasteElements}</tbody>
      </table>
    </div>
  );
}
