import { Button, Divider, Modal, Row, Typography } from 'antd'
import React, { useState } from 'react'

import { AuthModalStore } from '../..//utils/contexts'
import { observer } from 'mobx-react-lite'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

interface AuthModalProps {
  title?: string
  socialTitle?: string
  emailTitle?: string
  linkedinName?: string
  facebookName?: string
  googleName?: string
  appleName?: string
  placeholder?: string
  buttonName?: string
  successTitle?: string
  successBtnName?: string
}

export const LoginModal: React.FC<AuthModalProps> = observer(() => {
  const router = useRouter()
  const { Title, Paragraph, Link } = Typography
  const { user } = useAuth0()
  const [loading, setLoading] = useState(false)

  return (
    <Modal
      title="Confirm your account contact details"
      visible={AuthModalStore.showModal}
      onCancel={() => AuthModalStore.setShowModal(false)}
      width={400}
      footer={null}
    >
      <div style={{ textAlign: 'center' }}>
        <Row justify="center" align='bottom'>
          <Title level={3} style={{ margin: '0 10px 0 0' }}>
            {user?.name}
          </Title>
          <Link style={{position: 'relative', bottom: 1}}>Edit</Link>
        </Row>
        <Paragraph>Confirm your Name</Paragraph>
        <Divider />
        <Title level={3} style={{ marginBottom: 20 }}>
          {user?.email}
        </Title>
        <Paragraph>
          Text that encourages the user to confirm their e-mail taken from the
          social profile
        </Paragraph>
        <Button
          loading={loading}
          style={{ width: '100%', marginTop: 20 }}
          type="primary"
          shape="round"
          onClick={() => {
            setLoading(true)
            router.push('/create-organization')
          }}
        >
          Continue
        </Button>
      </div>
    </Modal>
  )
})
