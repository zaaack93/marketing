import React, { useCallback, useState } from "react";
import { Button, Layout, Modal, Page, TextField } from "@shopify/polaris";
import { Form } from "@remix-run/react";

type Props = {
  activate:boolean,
  setActivate: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateCompainForm:React.FC<Props> = ({activate,setActivate}) => {
  const handleSetActivate = useCallback(() => {
    setActivate(!activate);
  }, [activate]);

  const [value, setValue] = useState('default');

  const handleOnChangeText = useCallback((newValue:string) => {
    setValue(newValue);
  }, []);

  const activator = <Button onClick={handleSetActivate}>Open</Button>;

  return (
    <Page>
      <Modal
        activator={activator}
        open={activate}
        onClose={handleSetActivate}
        title="Create new Email Campaing"
        primaryAction={{
          content:'Save',
          onAction: ()=> {}
        }}
        secondaryActions={{
          content:'Finish Later',
          onAction: ()=> {}
        }}
      >



      <Modal.Section>
        <Form>
          <Layout>
            <Layout.Section>
                <TextField
                  label="Camping Name"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />
                <TextField
                  label="To"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />
                <TextField
                  label="Corporation"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />
                <TextField
                  label="From"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />
                <TextField
                  label="Email Subject"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />

                <TextField
                  label="Content"
                  value={value}
                  onChange={handleOnChangeText}
                  autoComplete="off"
                />

                <Button submit>send</Button>
            </Layout.Section>
          </Layout>
        </Form>
      </Modal.Section>

      </Modal>
    </Page>
  );
};

export default CreateCompainForm;
