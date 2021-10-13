/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { observer } from 'mobx-react-lite';
import { Button, Modal, Row, Divider, Card } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CreateModalStore } from '../../utils/contexts';
import { CreateSuccessUnitsPageAddPeopleModalTextType } from 'apps/frontend/types/texts';
import { EmployeesResponseType } from "../../services/http/types";

interface AddPeopleModalProps {
  texts: CreateSuccessUnitsPageAddPeopleModalTextType,
  addHandler: Function,
  employees: Array<EmployeesResponseType>
  currentEmployees: { [key: number]: EmployeesResponseType }
}

export const AddEmployeeModal: React.FC<AddPeopleModalProps> = observer(
  ({
     texts,
     addHandler,
     employees,
     currentEmployees
  }) => {
    const {
      modal_title,
    } = texts;

    const onCancel = () => {
      CreateModalStore.setShowAddEmployeeModal(false);
    };

    return (
      <Modal
        title={modal_title}
        visible={CreateModalStore.isAddEmployeeModalShowed()}
        onCancel={onCancel}
        width={400}
        footer={null}
        destroyOnClose
      >

        <Row style={{ maxHeight: 240, overflowY: 'auto', display: 'block' }}>
          {Object.values(employees).length > 0 &&
            Object.values(employees).map((human, i) => {
              return !currentEmployees[human.id] && <Card
                key={`existingEmployee-${i}`}
                style={{ marginBottom: 5, borderRadius: 8, width: '100%' }}
                bodyStyle={{ padding: '5px 10px' }}>
                <Row justify="space-between" align="middle">
                  <Button
                    type="text"
                    style={{ width: '100%', textAlign: 'left' }}
                    onClick={() => {
                      addHandler(human);
                      CreateModalStore.setShowAddEmployeeModal(false)
                    }
                  }>
                    {`${human.familyName} ${human.givenName ? human.givenName : ''}`.trim()}
                  </Button>
                </Row>
              </Card>
            })
          }
        </Row>

        <Divider/>

        <Button
          type="link"
          style={{textAlign: 'left', padding: '2px 0'}}
          icon={<PlusOutlined/>}
          onClick={() => {
            CreateModalStore.setShowAddEmployeeModal(false);
            CreateModalStore.setShowAddNewEmployeeModal(true)
          }}
        >
          {'Add new employee'}
        </Button>
      </Modal>
    )
  }
);
