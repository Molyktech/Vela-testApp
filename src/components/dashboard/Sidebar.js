import React from 'react';
import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  Icon,
  SidebarMenuItemLabel,
  SidebarButton
} from './styles/sidebar';

import vector from '../../images/Vector.png';
import allPayments from '../../images/Group.png';
import RPayments from '../../images/Group (5).png';
import URPayments from '../../images/Group (1).png';
import manual from '../../images/Group (1).png';
import allOrders from '../../images/Group (3).png';
import pendingOrders from '../../images/Group (4).png';
import reconciledOrders from '../../images/order.png';

export const Sidebar = () => {
  return (
    <div>
      <SidebarContainer>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarButton>generate Invoice</SidebarButton>
          </SidebarMenuItem>
          <SidebarMenuItem>Main</SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={vector} />
            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
            <SidebarMenuItemLabel>Overview</SidebarMenuItemLabel>
          </SidebarMenuItem>

          <SidebarMenuItem>Payments</SidebarMenuItem>

          <SidebarMenuItem>
            <Icon src={allPayments} />
            <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={RPayments} />
            <SidebarMenuItemLabel>Reconciled Payments</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={URPayments} />
            <SidebarMenuItemLabel>Un- Reconciled Payments</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={manual} />
            <SidebarMenuItemLabel>Manual Settlement</SidebarMenuItemLabel>
          </SidebarMenuItem>

          <SidebarMenuItem>Orders</SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={allOrders} />
            <SidebarMenuItemLabel>All Orders</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={pendingOrders} />
            <SidebarMenuItemLabel>Pending Orders</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon src={reconciledOrders} />
            <SidebarMenuItemLabel>Reconciled Orders</SidebarMenuItemLabel>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>{' '}
    </div>
  );
};
