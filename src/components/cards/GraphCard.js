import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import {
  GraphWrapper,
  GraphHeader,
  GraphText,
  GraphInputWrapper,
  GraphInput,
  GraphPaginationBoxes
} from '../dashboard/styles/card';

import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
  {
    name: 'January',
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: 'February',
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: 'March',
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: 'April',
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: 'May',
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: 'June',
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];

export default class GraphCard extends PureComponent {
  render() {
    return (
      <GraphWrapper>
        <GraphHeader>
          <GraphText>Today: 5, Aug 2018</GraphText>
          <GraphInputWrapper>
            <GraphInput type='text' placeholder='1 Jan- 1 Jun' />
            <GraphPaginationBoxes>
              <FontAwesomeIcon icon={faChevronLeft} />
            </GraphPaginationBoxes>
            <GraphPaginationBoxes>
              <FontAwesomeIcon icon={faChevronRight} />
            </GraphPaginationBoxes>
          </GraphInputWrapper>
        </GraphHeader>
        <ComposedChart
          width={790}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis
            dataKey='name'
            label={{
              value: '',
              position: 'insideBottomRight',
              offset: 0
            }}
          />
          <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />
          <Tooltip />

          <Area type='monotone' dataKey='amt' fill='#0294FF' stroke='#0294FF' />
          <Bar dataKey='pv' barSize={3} fill='#CFE8FB' />
          <Line type='monotone' dataKey='uv' stroke='#CFE8FB' />
        </ComposedChart>
      </GraphWrapper>
    );
  }
}
