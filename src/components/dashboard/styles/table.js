import styled, { css } from 'styled-components';

export const TableWrapper = styled.div`
  padding: 20px;
  margin: 0 0 0 30px;
`;

export const TableTitleText = styled.div`
  padding: 20px;
`;

export const TableHeader = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;

export const TableForm = styled.form`
  padding: 20px;
`;

export const NavInput = styled.input`
  width: 380px;
  border: none;
  border-bottom: 1px solid #757575;
  background: none;
  height: 40px;

  font-family: FontAwesome;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #787878;
  }
`;

export const Group1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 3px;
`;
export const Group2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

// main table

export const Table = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  position: relative;
`;

export const TableHeadRow = styled.tr`
  height: 60px;
  background: #eaeef0;
  font-size: 16px;
  color: #7f8fa4;
  font-weight: 100;
`;

export const TableBodyRow = styled.tr`
  height: 68px;
  border-bottom: 1px solid #e3f1d5;

  &:last-child {
    border: 0;
  }
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const TableDataHead = styled.th`
  padding: 10px;
`;

export const ItemType = styled.div`
  width: 36px;
  height: 36px;
  background: #7f8fa4;
  color: #fff;
  border-radius: 50%;
  text-align: center;
`;

export const ItemTypeText = styled.p`
  position: relative;
  font-size: 0.8em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ball = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => (props.secondary ? '#7f8fa4' : '#27AE60')};
  display: inline-block;
  border-radius: 50%;
  ${props =>
    props.warning &&
    css`
      background: #ebc315;
    `};
`;

export const Button = styled.button`
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  height: 40px;
  width: 160px;
  background-color: #ffffff;
  border: 1px solid #cccfd4;
  color: ${props => (props.secondary ? '#7f8fa4' : '#27AE60')};

  ${props =>
    props.warning &&
    css`
    
    color: #ebc315;,
    
    `};
`;
