import { useState, Fragment } from "react";
import axios from "axios";
import { API_BASE } from "../utils/APIFragments";

interface LoginProps {
  setUserId: (userId: number | null) => void;
  userId: number | null;
}

export default function Login(props: LoginProps): JSX.Element {
  const [username, setUsername] = useState<string>("");

  const handleGetUserId = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .get(`${API_BASE}users/${username}`)
      .then((response) => {
        console.log(response);
        props.setUserId(response.data.user.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    setUsername("");
    props.setUserId(null);
  };

  return (
    <Fragment>
      {props.userId === null ? (
        <form onSubmit={handleGetUserId} className="float-right">
          <div className="input-group mb-3">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              placeholder="enter username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              log in
            </button>
          </div>
        </form>
      ) : (
        <div className="float-right d-flex flex-row align-items-center">
          <p className="p-2 mr-1 mt-3">User logged in: {username}</p>
          {/* <label htmlFor="signout">User logged in: {username}</label> */}
          <button
            id="signout"
            onClick={handleSignOut}
            type="button"
            className="btn btn-warning p-2 ml-2"
          >
            sign out
          </button>
        </div>
      )}
    </Fragment>
  );
}
