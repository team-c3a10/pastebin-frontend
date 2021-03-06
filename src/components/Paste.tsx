import "./Paste.css";
import { useState } from "react";
import { IPaste } from "../utils/pasteInterface";
import { dateFormat } from "../utils/dateFormat";

interface PasteProps {
  paste: IPaste;
}

export default function Paste(props: PasteProps): JSX.Element {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <tr onClick={() => setCollapsed(!collapsed)} className="Paste">
      <td>{props.paste.title}</td>
      <td className={collapsed ? "" : "pasteBody"}>
        <p>{props.paste.paste_body}</p>
      </td>
      <td>{dateFormat(props.paste.date)}</td>
    </tr>
  );
}
