import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../components/Account";
import ChangePassword from "../components/ChangePassword";

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  return (
    <div>
      {loggedIn && (
        <>
          <h1>Settings</h1>

          <ChangePassword />
        </>
      )}
    </div>
  );
};