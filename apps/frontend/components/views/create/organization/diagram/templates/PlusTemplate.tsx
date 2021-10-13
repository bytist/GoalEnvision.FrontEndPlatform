import { Handle, Position } from 'react-flow-renderer';
import React, { memo } from 'react';

import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';

export type PlusTemplateData = {
  hasSource?: boolean
  hasTarget?: boolean
  hasSideSource?: boolean
  hasSideTarget?: boolean
  action: Function
  text?: string
};

interface PlusTemplateProps {
  id: string
  data?: PlusTemplateData
}

export const PlusTemplate = memo((props: PlusTemplateProps) => {

  const { id, data } = props;

  const { action, text } = data;

  return (
    <>
      {data && data.hasTarget &&
        <Handle
          id={`${id}Port1`}
          type='target'
          position={Position.Top}
          style={{ background: '#ccc', left: 21 }}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }

      {data && data.hasSideTarget &&
        <Handle
          id={`${id}PortLeft`}
          type='target'
          position={Position.Left}
          style={{background: '#ccc'}}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }

      <Button style={{
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          height: 40
        }}
        onClick={(ev) => action(ev)}
        type='link'
      >
        <PlusOutlined style={{
          fontSize: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: 40,
          border: '1px solid #ddd',
          padding: 5,
          background: '#ffffff',
          color: '#000000',
          borderRadius: '100%'
        }}/>

        {text ? text : ''}
      </Button>

      {data && data.hasSource &&
        <Handle
          id={`${id}Port2`}
          type='source'
          position={Position.Bottom}
          style={{ background: '#ccc', left: 21 }}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }

      {data && data.hasSideSource &&
        <Handle
          id={`${id}PortRight`}
          type='source'
          position={Position.Right}
          style={{ background: '#ccc' }}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }
    </>
  )
});
