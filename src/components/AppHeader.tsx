import Login from "./Login";

interface HeaderProps {
  setUserId: (userId: number | null) => void;
  userId: number | null;
}

export default function AppHeader(props: HeaderProps): JSX.Element {
  return (
    <header className="d-flex justify-content-between">
      <h1 className="float-left ">Header</h1>
      <Login userId={props.userId} setUserId={props.setUserId} />
    </header>
  );
}
