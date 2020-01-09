import React from 'react';
import {
  NavbarWrapper,
  Navbrand,
  NavItemContainer,
  NavMenu,
  NavMenuItem,
  NavInput,
  NavbrandText,
  NavImg,
  NavCont
} from './styles/navbar';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavCont>
        <Navbrand>
          <NavbrandText> TransMonitor </NavbrandText>{' '}
        </Navbrand>{' '}
        <NavInput type='text' placeholder='&#xF002;  Search' />
      </NavCont>{' '}
      <NavItemContainer>
        <div className='nav-items ml-auto'>
          <NavMenu>
            <NavMenuItem> Support </NavMenuItem>{' '}
            <NavMenuItem> FAQ </NavMenuItem>{' '}
            <NavMenuItem>
              <i className='fa fa-bell'>
                <span className='badges'>1</span>
              </i>
            </NavMenuItem>{' '}
            <NavMenuItem>
              <small className='text-muted float-right'> Hello </small>{' '}
              <br></br> Oluwaleke Ojo{' '}
            </NavMenuItem>{' '}
            <NavMenuItem>
              <NavImg src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />
            </NavMenuItem>{' '}
          </NavMenu>{' '}
        </div>{' '}
      </NavItemContainer>{' '}
    </NavbarWrapper>
  );
};
