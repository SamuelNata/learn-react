import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import { ColoredRect, StockBoard } from './stock/StockBoard';
import { Group, Stage, Layer, Rect, Text, Line } from 'react-konva';

class App extends Component {
  render() {
    let u = 100;

    let l = Array.apply(null, {length: window.innerWidth/u}).map((v, idx) => idx+1);
    const wLines = l.map((num) =>
      <Line
        points={[num*u, 0, num*u, window.innerHeight]}
        stroke='#fff'
        strokeWidth={1}
        lineCap='round'
      />
    );

    l = Array.apply(null, {length: window.innerHeight/u}).map((v, idx) => idx+1);
    const hLines = l.map((num) =>
      <Line
        points={[0, num*u, window.innerWidth, num*u]}
        stroke='#fff'
        strokeWidth={1}
        lineCap='round'
      />
    );

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Group>
            <Rect
              x={0}
              y={0}
              width={window.innerWidth}
              height={window.innerHeight}
              fill="#333"
            />
            <Group draggable={true}>
              {wLines}
              {hLines}
            </Group>
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default App;
