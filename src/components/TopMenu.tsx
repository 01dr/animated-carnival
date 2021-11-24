import * as React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { useStore } from "effector-react";
import { $isDark, toggleTheme } from "../store/theme";

export const TopMenu: React.FC = () => {
  const isDark = useStore($isDark);

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Stasi learning deutsch</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon={isDark ? 'lightbulb' : 'moon'} onClick={toggleTheme} />
      </Navbar.Group>
    </Navbar>
  );
};
