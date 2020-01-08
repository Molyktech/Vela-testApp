import styled from 'styled-components';

export const SidebarContainer = styled.div `
  height: 92vh;
  width: 260px;
  background-color: #fff;
  color: #647787;
  
  box-shadow: 0px 2px 10px rgba(79, 79, 79, 0.07);
  @media (max-width: 375px) {
   display: none;
}
`;

export const SidebarMenu = styled.ul `
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding: 0px 30px;
        margin: 0;
      
`;

export const SidebarMenuItem = styled.li `
display: flex;
        height: 40px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        margin: 25px 0 0 0;
        &:hover {
            background: rgba(24,117,240,0.1);
           width: inherit; 
        box-shadow: inset 3px 0 0 0 #1875F0;
        cursor: pointer;
        }
`;

export const SidebarButton = styled.button `
border-radius: 30px;
text-align: center;
padding: 10px;
outline: none;
border: none;
margin: 20px 0;
text-transform: uppercase;
background: #27AE60;
color: #fff;
width: 170px;
`;

export const Icon = styled.img `
        
        color: blue;
        font-weight: 100;
`;
export const SidebarMenuItemLabel = styled.p `
        font-family: "Roboto", sans-serif;
      
        font-size: 14px;
        font-weight: 300;
        line-height: 1.3;
        text-align: left;
        padding: 12px 0px;
        color: #647787;
        margin-left: 20px;
`;