/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { observer } from 'mobx-react-lite';
import { Button, Typography, Modal, Divider } from 'antd';
import { CreateModalStore } from '../../utils/contexts';
import { CreateOrgDetailsPageExitModalTextType } from 'apps/frontend/types/texts'
import {useRouter} from "next/router";

interface CreateModalProps {
  texts: CreateOrgDetailsPageExitModalTextType
  action: Function
}

export const CreateModal: React.FC<CreateModalProps> = observer(
  ({
    texts,
    action
  }) => {
    const { Title, Paragraph } = Typography;

    const { modal_title, title_text, button_confirm, text, button_cancel } = texts;

    const router = useRouter();

    return (
      <Modal
        title={modal_title}
        visible={CreateModalStore.isStep1ExitModalShowed()}
        onCancel={() => CreateModalStore.setShowStep1ExitModal(false)}
        width={400}
        footer={null}
      >
        <div style={{textAlign: 'center'}}>
          <Title level={3}>{title_text}</Title>

          <Paragraph>{text}</Paragraph>

          <Divider />

          <Button
            style={{ width: '100%', marginTop: 20 }}
            type="primary"
            shape="round"
            onClick={(): void => {
              router.push('/');
              CreateModalStore.setShowStep1ExitModal(false)
            }}
          >
            {button_confirm}
          </Button>

          <Button
            style={{ width: '100%', marginTop: 20 }}
            type="default"
            shape="round"
            onClick={(): void => CreateModalStore.setShowStep1ExitModal(false)}
          >
            {button_cancel}
          </Button>
        </div>
      </Modal>
    )
  }
);
