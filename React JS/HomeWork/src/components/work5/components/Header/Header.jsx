import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const { username, setUsername } = useContext(UserContext);
  const { name, email } = useSelector((state) => state.user);
  return (
    <header>
      <div>UserName(Context): {username}</div>
      <div>Имя(Redux): {name}</div>
      <div>E-mail(Redux): {email}</div>
      <button onClick={() => setUsername("Гость")}>Выйти</button>
    </header>
  );
};
