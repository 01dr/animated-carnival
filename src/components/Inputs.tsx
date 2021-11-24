import * as React from "react";
import {
  FormGroup,
  ControlGroup,
  InputGroup,
  Button,
  Intent,
  useHotkeys,
} from "@blueprintjs/core";
import { useStore } from "effector-react";
import {
  $dictionary,
  handleAddNewRow,
  handleChangeWord,
  handleRemoveRow,
} from "../store/dictionary";
import { DictionaryWordPosition } from "../types";

export const Inputs: React.FC = () => {
  const dictionary = useStore($dictionary);
  const { handleKeyDown, handleKeyUp } = useHotkeys([
    {
      combo: "cmd+a",
      label: "Add new row",
      global: true,
      preventDefault: true,
      onKeyDown: () => handleAddNewRow(),
    },
  ]);

  return (
    <>
      {dictionary.map((row) => (
        <FormGroup key={row.id}>
          <ControlGroup fill>
            <InputGroup
              large
              value={row.pair[0]}
              onChange={(e) =>
                handleChangeWord({
                  id: row.id,
                  value: e.target.value,
                  position: DictionaryWordPosition.left,
                })
              }
            />
            <InputGroup
              large
              value={row.pair[1]}
              onChange={(e) =>
                handleChangeWord({
                  id: row.id,
                  value: e.target.value,
                  position: DictionaryWordPosition.right,
                })
              }
            />
            <Button
              icon="cross"
              outlined
              intent={Intent.DANGER}
              onClick={() => handleRemoveRow(row.id)}
            />
          </ControlGroup>
        </FormGroup>
      ))}

      <FormGroup>
        <ControlGroup fill>
          <Button
            onClick={handleAddNewRow}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            icon="plus"
            text="Add new row (cmd + a)"
            small
          />
        </ControlGroup>
      </FormGroup>
    </>
  );
};
