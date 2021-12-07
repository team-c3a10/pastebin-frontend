import Login from "./Login";

interface HeaderProps {
  setUserId: (userId: number | null) => void;
  userId: number | null;
}

export default function AppHeader(props: HeaderProps): JSX.Element {
  return (
    <header className="d-flex justify-content-between m-4">
      <h1 className="float-left">Pastebin</h1>
      <Login userId={props.userId} setUserId={props.setUserId} />
    </header>
  );
}
