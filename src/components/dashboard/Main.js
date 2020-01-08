import React from 'react';
import { Card } from '../cards/Card';
import GraphCard from '../cards/GraphCard';
import { GraphCardWrapper, StackedCardWrapper } from './styles/card';
import { OrdersCardList } from '../cards/OrdersCardList';
import { OrdersCard } from '../cards/OrdersCard';

export const Main = () => {
  return (
    <div style={{ background: '#e5e5e5' }}>
      <Card />

      <GraphCardWrapper>
        <GraphCard />
        <StackedCardWrapper>
          <OrdersCardList />
          <OrdersCard />
        </StackedCardWrapper>
      </GraphCardWrapper>
    </div>
  );
};
