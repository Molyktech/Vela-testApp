import React from 'react';
import { CardList } from './CardList';
import { CardWrapper } from '../dashboard/styles/card';

const data = [
  { id: 1, title: 'Daily Transaction Volume', number: '2,342' },
  { id: 2, title: 'Daily Transaction Value', number: '4,000,000' },
  { id: 3, title: 'Daily Transaction Volume', number: '452,000' },
  { id: 4, title: 'Daily Transaction Value', number: '4,000,000' }
];

export const Card = props => {
  return (
    <CardWrapper>
      {data.map(deets => (
        <CardList cardData={deets} key={deets.id} />
      ))}
    </CardWrapper>
  );
};
