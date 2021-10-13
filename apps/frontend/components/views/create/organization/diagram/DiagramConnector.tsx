import { DiagramConnectorType } from "./types";

const connectorStyle = {
  stroke: '#000000'
};

export const DiagramConnector = (props: DiagramConnectorType) => {
  const { id, sourceHandle, source, target } = props;

  return {
    id: id,
    source: source,
    target: target,
    sourceHandle: sourceHandle,
    animated: false,
    style: connectorStyle,
    type: 'step',
  };
};
