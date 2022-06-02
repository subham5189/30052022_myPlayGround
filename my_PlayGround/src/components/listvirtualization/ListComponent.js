import React from 'react';
import { VariableSizeList } from 'react-window';
// import { li } from "index.css";
import RowComponent from './RowComponent';

import items from './mock.json';
let forLooping = ["1","2","3","4","5","6","7","8","9","10"];
// const renderAnimals = forLooping.map(item => (<Row loopingNo={item}/>));
const Row = ({ index, style }) => (
  // const renderAnimals = forLooping.map(item => (<RowComponent image={items[index]} num={index} style={style} />));
  <RowComponent image={items[index]} num={index} style={style} />
);

const getItemSize = () => Math.floor(Math.random() * 230) + 130;
 
const ListComponent = () => (
  <VariableSizeList
    height={500}
    width={500}
    itemCount={items.length}
    itemSize={getItemSize}
    className="list-container"
  >
    {Row}
  </VariableSizeList>
);

export default ListComponent;