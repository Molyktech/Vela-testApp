import React from 'react';
import { OrderWrapper, GraphText } from '../dashboard/styles/card';
import { Progress } from 'reactstrap';

export const OrdersCard = () => {
  return (
    <OrderWrapper>
      <GraphText> Payments </GraphText>{' '}
      <Progress multi>
        <Progress bar value='85' color='success' />

        <Progress bar color='warning' value='15' />
      </Progress>
      <p>
        Un-reconciled Payments:{' '}
        <strong>
          <span className='warning '>20</span>
        </strong>{' '}
      </p>
      <p>
        Reconciled Payments:{' '}
        <strong>
          <span className='success'>80</span>{' '}
        </strong>
      </p>
      <p>
        Total Payments:{' '}
        <strong>
          <span className='primary'>100</span>
        </strong>{' '}
      </p>
    </OrderWrapper>
  );
};
