import * as React from "react";
import { useGate, useStore } from "effector-react";
import clsx from "clsx";
import { Classes } from "@blueprintjs/core";
import styles from "./App.module.css";

import { TopMenu } from "./TopMenu";
import { Inputs } from "./Inputs";
import { $isDark } from "../store/theme";
import { AppGate } from "../store/app";

export const App: React.FC = () => {
  useGate(AppGate);
  const isDark = useStore($isDark);

  return (
    <div className={clsx(styles.root, isDark ? styles.dark : styles.light)}>
      <div className={clsx(styles.container, isDark && Classes.DARK)}>
        <div className={styles.menu}>
          <TopMenu />
        </div>

        <div className={styles.inputs}>
          <Inputs />
        </div>
      </div>
    </div>
  );
};
