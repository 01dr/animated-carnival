import { H5 } from "@blueprintjs/core";
import * as React from "react";
import floppa from "../images/floppa.png";
import styles from "./Floppa.module.css";

export const Floppa: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={floppa} alt="The Big Floppa" className={styles.image} />

      <H5>Big Floppa greets you, Nastya!</H5>
      <div>
        At the moment your dictionary is empty. Let's add a new line. Click the
        button below or try CMD + A (a means add - easy to remember) shortcut
        (you can hold to create a bunch of rows quickly)
      </div>
    </div>
  );
};
