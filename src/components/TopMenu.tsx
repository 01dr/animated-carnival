import * as React from "react";
import { Navbar, Button, Alignment, Intent, Alert, Classes } from "@blueprintjs/core";
import { useStore } from "effector-react";
import { $isDark, toggleTheme } from "../store/theme";
import {
  $isResetConfirmationOpen,
  closeResetConfirmation,
  handleResetDictionary,
  openResetConfirmation,
} from "../store/dictionary";
import clsx from "clsx";

export const TopMenu: React.FC = () => {
  const isDark = useStore($isDark);
  const isResetConfirmationOpen = useStore($isResetConfirmationOpen);

  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Stasi learns Deutsch</Navbar.Heading>
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            className="bp3-minimal"
            icon="trash"
            intent={Intent.DANGER}
            onClick={openResetConfirmation}
          />
          <Button
            className="bp3-minimal"
            icon={isDark ? "lightbulb" : "moon"}
            onClick={toggleTheme}
          />
        </Navbar.Group>
      </Navbar>

      <Alert
        className={clsx(isDark && Classes.DARK)}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        icon="trash"
        intent={Intent.DANGER}
        isOpen={isResetConfirmationOpen}
        onCancel={closeResetConfirmation}
        onConfirm={() => {
          handleResetDictionary();
          closeResetConfirmation();
        }}
        canEscapeKeyCancel
      >
        <p>
          Nastya, are you sure you want to delete <b>everything</b>? You will
          not be able to restore the dictionary later
        </p>
      </Alert>
    </>
  );
};
