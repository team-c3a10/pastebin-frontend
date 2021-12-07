import { IPaste } from "../utils/pasteInterface";

interface PasteProps {
  paste: IPaste;
}

export default function Paste(props: PasteProps): JSX.Element {
  return (
    <tr>
      <td>{props.paste.title}</td>
      <td>{props.paste.paste_body}</td>
      <td>{props.paste.date}</td>
    </tr>
  );
}
