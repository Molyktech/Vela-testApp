import React from 'react';
import { OrderWrapper, GraphText } from '../dashboard/styles/card';
import { Progress } from 'reactstrap';

export const OrdersCardList = ({ data }) => {
  return (
    <div>
      <OrderWrapper>
        <GraphText> Orders </GraphText>{' '}
        <Progress multi>
          <Progress bar value='85' color='success' />

          <Progress bar color='warning' value='15' />
        </Progress>
        <p>
          Pending Orders:{' '}
          <strong>
            <span className='warning '>20</span>
          </strong>{' '}
        </p>
        <p>
          Reconciled Orders:{' '}
          <strong>
            <span className='success'>80</span>{' '}
          </strong>
        </p>
        <p>
          Total Orders:{' '}
          <strong>
            <span className='primary'>100</span>
          </strong>{' '}
        </p>
      </OrderWrapper>
    </div>
  );
};
