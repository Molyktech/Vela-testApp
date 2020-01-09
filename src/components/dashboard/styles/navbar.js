import styled from 'styled-components';

export const NavbarWrapper = styled.header `
  display: flex;
  flex-basis: 100%;
  height: 70px;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #647787;
  font-size: 16px;
`;

export const NavCont = styled.div `
  margin: 0 20px;
  display: flex;
`;

export const Navbrand = styled.a `
  display: flex;
  flex: 0 0 250px;
  justify-content: center;
  align-items: center;
  position: relative;

  color: #1875f0;

  font-size: 24px;
  text-align: center;
`;

export const NavbrandText = styled.h3 `
  color: #1875f0;
  font-weight: bolder;
`;

export const NavItemContainer = styled.div `
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0;
`;
export const NavMenu = styled.ul `
  display: flex;
  margin-top: 27px;
  
 
`;

export const NavMenuItem = styled.li `
  list-style-type: none;
  margin: 5px 15px;
  line-height: 12px;

`;

export const NavInput = styled.input `
  width: 300px;
  border: none;

  font-family: FontAwesome;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #757575;
  }
`;

export const NavImg = styled.img `
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const Badge = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background: blue;
`;