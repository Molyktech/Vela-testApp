import styled from 'styled-components';

export const CardWrapper = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`;

export const Card = styled.div `
  display: flex;
  justify-content: space-between;
  width: 300px;
  background: white;
  padding: 5px 10px;
  border-radius: 2px;
  border: 1px solid #eef8fd;
  box-sizing: border-box;
  margin-top: 10px;
  height: 120px;
`;

export const CardStats = styled.div `
  margin-top: 20px;
  line-height: 15px;
`;

export const CardTextBg = styled.p `
  font-size: 20px;
  color: #262626;
`;

export const CardText = styled.p `
  font-size: 12px;
  color: #787c90;
`;

export const GraphBox = styled.div `
  margin-top: 20px;
`;

export const GraphWrapper = styled.div `
  background: #fff;
  padding: 20px;
`;
export const GraphHeader = styled.div `
  display: flex;
  justify-content: space-between;
  /* padding: 20px; */
`;

export const GraphText = styled.p `
  font-size: 1.3rem;
  color: #4f4f4f;
  font-weight: bolder;
`;

export const GraphInputWrapper = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const GraphInput = styled.input `
  background: white;
  border: 1px solid #dde0e3;
  width: 140px;
  outline: none;
  height: 40px;
  border-radius: 5px;
  flex-grow: 2;
  padding: 0 10px;
  margin: 10px;
`;

export const GraphPaginationBoxes = styled.div `
  width: 30px;
  height: 40px;
  background: #f7f8fa;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  flex-grow: 1;
  margin: 10px;
`;

export const GraphCardWrapper = styled.div `
display:flex;
padding: 20px;
height: 505px;
`;

export const StackedCardWrapper = styled.div `
display:flex;
flex-direction: column;
margin: -4px 5px 0 5px;

`;

export const OrderWrapper = styled.div `
  margin:5px 0;
  width: 425px;
 height: 228px;
 
 background: #fff;
  padding: 20px;
`;