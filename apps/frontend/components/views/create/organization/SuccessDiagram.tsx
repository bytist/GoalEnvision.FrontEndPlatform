import {
  ApartmentOutlined,
  MinusOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd'
import {
  DiagramConnector,
  DiagramConnectorType,
  PlusTemplate,
  UnitTemplate,
} from '../'
import React, { useEffect, useState } from 'react'
import ReactFlow, { Node } from 'react-flow-renderer'

import { RoundButton } from '../../../'

interface SuccessDiagramProps {
  nodes: Array<Node>
  connectors?: Array<DiagramConnectorType>
  hideControls?: boolean
  title?: string
  style?: React.CSSProperties
  fit?: boolean
}

const initBgColor = 'transparent'
const connectionLineStyle = { stroke: '#fff' }

export const SuccessDiagram: React.FC<SuccessDiagramProps> = ({
  nodes,
  connectors,
  hideControls,
  title,
  style,
  fit,
}) => {
  const [reactFlowInstance, setReactFlowInstance] = useState(undefined)

  const nodeTypes = {
    customDiagramNode: UnitTemplate,
    plusDiagramNode: PlusTemplate,
  }

  const [elements, setElements] = useState([])

  const onDiagramLoad = (reactFlowInstance) => {
    if (fit) setTimeout(() => reactFlowInstance.fitView(), 1)
    setReactFlowInstance(reactFlowInstance)
  }

  const changeZoom = (increment: boolean) => {
    if (increment) {
      reactFlowInstance.zoomIn()
    } else {
      reactFlowInstance.zoomOut()
    }
    /*
    const current = reactFlowInstance.toObject();
    const transform: FlowTransform = {
      x: (current.zoom > 0 ? current.zoom * () : 0),
      y: current.position[1],
      zoom: current.zoom
    };
    reactFlowInstance.setTransform(transform)
    */
  }

  useEffect(() => {
    const array = []

    nodes.map((node) => array.push(node))

    if (connectors) {
      connectors.map((connector) => array.push(DiagramConnector(connector)))
    }

    setElements(array)
  }, [nodes, connectors])

  const diagramStyle = {
    ...{ background: initBgColor, width: '100%', height: '500px' },
    ...(style ? style : {}),
  }

  return (
    <Row style={{ marginTop: 40 }}>
      <Col lg={{ span: 22, offset: 1 }} xs={{ span: 24, offset: 0 }}>
        {!hideControls && (
          <Row justify={title ? 'space-between' : 'end'} align="middle">
            {title && <Col style={{ fontSize: 24 }}>{title}</Col>}

            <Col pull={1}>
              <RoundButton
                left={{
                  icon: <PlusOutlined />,
                  onClick: () => changeZoom(true),
                }}
                right={{
                  icon: <MinusOutlined />,
                  onClick: () => changeZoom(false),
                }}
              />

              <RoundButton
                style={{ marginLeft: 20 }}
                left={{
                  icon: <ApartmentOutlined />,
                  onClick: () => console.log('clicked'),
                }}
                right={{
                  icon: <UnorderedListOutlined />,
                  onClick: () => console.log('clicked'),
                }}
              />
            </Col>
          </Row>
        )}
        <Row style={{ marginTop: 40 }}>
          <ReactFlow
            elements={elements}
            style={diagramStyle}
            onLoad={onDiagramLoad}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            snapToGrid={true}
            zoomOnScroll={false}
            snapGrid={[10, 10]}
          />
        </Row>
      </Col>
    </Row>
  )
}
