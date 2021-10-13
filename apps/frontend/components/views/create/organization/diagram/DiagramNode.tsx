import { Position } from 'react-flow-renderer';
import { UnitTemplateData } from './';

const nodeStyle = {
  border: '1px solid #ddd',
  padding: 20,
  background: '#ffffff',
  borderRadius: 16
};

interface DiagramNode {
  id: string
  x: number
  y: number
  width?: number | string
  height?: number | string
  data?: UnitTemplateData
}

export const DiagramNode = (props: DiagramNode) => {
  const { id, data, x, y, width, height } = props;

  return {
    id: id,
    type: 'customDiagramNode',
    data: data,
    style: { ...nodeStyle, ...(width ? { width: width } : {}), ...(height ? { height: height } : {}) },
    position: { x: x, y: y },
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
    draggable: false,
    connectable: false
  };
};
