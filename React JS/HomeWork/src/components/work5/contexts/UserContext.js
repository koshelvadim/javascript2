import { createContext } from "react";

export const UserContext = createContext({  //создаем Контекст
  username: "",
  setUsername: () => {},
});
