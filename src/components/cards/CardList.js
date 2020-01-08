import React from 'react';
import {
  Card,
  CardTextBg,
  CardStats,
  CardText,
  GraphBox
} from '../dashboard/styles/card';
import TinyAreaCharts from '../charts/TinyAreaChart';

export const CardList = ({ cardData }) => {
  console.log(cardData);
  return (
    <Card>
      <CardStats>
        <CardText> {cardData.title} </CardText>
        <CardTextBg> {cardData.number} </CardTextBg>
      </CardStats>
      <GraphBox>
        <TinyAreaCharts />
      </GraphBox>
    </Card>
  );
};
