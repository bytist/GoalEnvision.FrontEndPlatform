import React, { useState } from 'react';
import { Tree } from 'antd';
import Image from 'next/image';

const user = () => {
  return <Image src="/user.png" alt="user" width="30px" height="30px" />
}

const treeData = [
  {
    title: ' Name of persone',
    key: '0-0',
    icon: user,
  },
  {
    title: ' Name of persone',
    key: '0-1',
    icon: user,
  },
  {
    title: ' Name of persone',
    key: '0-2',
    icon: user,
  },
  {
    title: ' Name of persone',
    key: '0-3',
    icon: user,
  },
  {
    title: ' Name of persone',
    key: '0-4',
    icon: user,
  },
  {
    title: ' Name of persone',
    key: '0-5',
    icon: user,
  },
];

export const RightTree = () => {

  const [checkedKeys, setCheckedKeys] = useState<string[]>(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    setCheckedKeys(checkedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeys);
  };

  return (
    <Tree
      showIcon
      checkable
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};