import React from 'react';
import { Card } from '../cards/Card';
import GraphCard from '../cards/GraphCard';
import { GraphCardWrapper, StackedCardWrapper } from './styles/card';
import { OrdersCardList } from '../cards/OrdersCardList';
import { OrdersCard } from '../cards/OrdersCard';
import { Table } from '../table/Table';

export const Main = () => {
  return (
    <div style={{ background: '#f7f8fa' }}>
      <Card />

      <GraphCardWrapper>
        <GraphCard />
        <StackedCardWrapper>
          <OrdersCardList />
          <OrdersCard />
        </StackedCardWrapper>
      </GraphCardWrapper>
      <Table />
    </div>
  );
};
