import Login from "./Login";

interface HeaderProps {
  setUserId: (userId: number | null) => void;
  userId: number | null;
}

export default function AppHeader(props: HeaderProps): JSX.Element {
  return (
    <header className="d-flex justify-content-between p-4 mb-5 bg-light">
      <h1 className="float-left display-2">Pastebin</h1>
      <Login userId={props.userId} setUserId={props.setUserId} />
    </header>
  );
}
