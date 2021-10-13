import React from 'react'

import { BaseLayout } from '../../components/BaseLayout'
import { observer } from 'mobx-react-lite'

export const MyPage: React.FC = observer(() => {

  return (
    <BaseLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          flex: 1
        }}
      >
        <h1>My Page</h1>
      </div>
    </BaseLayout>
  )
})

export default MyPage
