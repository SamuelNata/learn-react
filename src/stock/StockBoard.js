import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export class StockBoard extends Component {
  constructor(){
    super();
    this.state = {data: {} };
  }

  componentDidMount(){
    // let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo'
    // fetch(url)
    // .then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({data: data});
    //   console.log("Data is: ", this.state.data);
    // })
  }

  createTable = () => {
    let table = []
    // Outer loop to create parent
    for (let k in this.state.data["Time Series (5min)"]) {
      let children = []
      children.push(<td key={k}>{k}</td>)
      for (let k2 in this.state.data["Time Series (5min)"][k]) {
        children.push(<td>{this.state.data["Time Series (5min)"][k][k2]}</td>)
      }
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  render(){
    return <p>hi</p>;
    // return (
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Time</th>
    //         <th>Open</th>
    //         <th>High</th>
    //         <th>Low</th>
    //         <th>Close</th>
    //         <th>Volume</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {this.createTable()}
    //     </tbody>
    //   </table>
    // );
  }

}


export class ColoredRect extends Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default StockBoard;
