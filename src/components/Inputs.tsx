import * as React from "react";
import { FormGroup, ControlGroup, InputGroup, Button, Intent } from "@blueprintjs/core";

export const Inputs: React.FC = () => {
  return (
    <>
      <FormGroup>
        <ControlGroup fill>
          <InputGroup large value="yooo" onChange={console.log} />
          <InputGroup large value="heye" onChange={console.log} />
          <Button icon="cross" outlined intent={Intent.DANGER} onClick={console.log} />
        </ControlGroup>
      </FormGroup>

      <FormGroup>
        <ControlGroup fill>
          <InputGroup large value="yooo" onChange={console.log} />
          <InputGroup large value="heye" onChange={console.log} />
          <Button icon="cross" outlined intent={Intent.DANGER} onClick={console.log} />
        </ControlGroup>
      </FormGroup>

      <FormGroup>
        <ControlGroup fill>
          <InputGroup large value="yooo" onChange={console.log} />
          <InputGroup large value="heye" onChange={console.log} />
          <Button icon="cross" outlined intent={Intent.DANGER} onClick={console.log} />
        </ControlGroup>
      </FormGroup>

      <FormGroup>
        <ControlGroup fill>
          <InputGroup large value="yooo" onChange={console.log} />
          <InputGroup large value="heye" onChange={console.log} />
          <Button icon="cross" outlined intent={Intent.DANGER} onClick={console.log} />
        </ControlGroup>
      </FormGroup>
      

      <FormGroup>
        <ControlGroup fill>
          <Button onClick={console.log} icon="plus" text="Add new row" small />
        </ControlGroup>
      </FormGroup>
    </>
  );
};
