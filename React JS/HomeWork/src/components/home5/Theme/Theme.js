import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/themeReducer";
import { Button, Switch } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const Theme = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div id="box" className={`${theme === "light" ? "light" : "dark"}`}>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(toggle());
        }}
      >
        Сменить тему
      </Button>
      <Switch {...label} onChange={() => dispatch(toggle())} />
      <h3>Theme: {theme}</h3>
    </div>
  );
};
