/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { observer } from 'mobx-react-lite';
import { Modal, Typography } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CreateModalStore } from '../../utils/contexts';

interface ErrorModalProps {
  errorText: string
  errorTitle: string
}

export const ErrorModal: React.FC<ErrorModalProps> = observer(
  ({ errorText, errorTitle }) => {

    const { Title } = Typography;

    return (
      <Modal
        title={errorTitle}
        visible={CreateModalStore.isErrorModalShowed()}
        onCancel={() => CreateModalStore.setShowErrorModal(false)}
        width={400}
        footer={null}
        destroyOnClose
      >
        <Title style={{ fontSize: 20, color: '#f90000' }} >{errorText}</Title>
      </Modal>
    );
  }
);
