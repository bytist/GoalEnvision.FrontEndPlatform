import { PlusTemplateData } from './';
import { Position } from 'react-flow-renderer';

const nodeStyle = {
  padding: 0,
  minWidth: 40,
  height: 40,
  border: 'none',
  background: 'transparent'
};

interface DiagramPlusNode {
  id: string
  x: number
  y: number
  data?: PlusTemplateData
}

export const DiagramPlusNode = (props: DiagramPlusNode) => {
  const { id, data, x, y } = props;

  return {
    id: id,
    type: 'plusDiagramNode',
    data: data,
    style: nodeStyle,
    position: { x: x, y: y },
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
    draggable: false,
    connectable: false
  };
};
