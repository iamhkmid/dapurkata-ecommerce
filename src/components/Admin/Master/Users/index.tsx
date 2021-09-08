import { useState } from "react";
import ButtonBase from "../../../otherComps/Buttons/ButtonBase";
import Create from "./Create";
import List from "./List";
import * as El from "./UsersElement";

const Users = () => {
  const navItem = ["Create", "Users list"];
  const [navState, setNavState] = useState(1);
  const changeNavState = (value) => {
    setNavState(value);
  };

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <El.Navigation>
        {navItem.map((item, index) => (
          <ButtonBase
            name={item}
            type="button"
            key={item}
            active={navState === index}
            onClick={() => setNavState(index)}
          />
        ))}
      </El.Navigation>
      {navState === 0 && <Create />}
      {navState === 1 && <List />}
    </El.Container>
  );
};
export default Users;
