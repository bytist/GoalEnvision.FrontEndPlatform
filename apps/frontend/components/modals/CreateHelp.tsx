import React from "react";
import { observer } from 'mobx-react-lite';
import { CreateModalStore } from "../../utils/contexts";
import { Drawer, Row } from "antd";

interface CreateHelpProps {
  text: string
}

export const CreateHelp: React.FC<CreateHelpProps> = observer(({
    text
  }) => {
    return (
      <Drawer
        width={300}
        mask={false}
        onClose={() => CreateModalStore.setShowCreateHelp(false)}
        visible={CreateModalStore.isCreateHelpShowed()}
      >
        <Row style={{ padding: '20px 0' }}>
          {text}
        </Row>
      </Drawer>
    )
});