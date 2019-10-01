import React, { Component } from 'react';
import {LineChart, Line}  from 'recharts';

export default (props) => {
  console.log(props.data);
  return (
    <div>
      <LineChart width={180} height={120} data={props.data}>
        <Line type='monotone' dataKey='temp' stroke='black' />
      </LineChart>
    </div>
  );
}