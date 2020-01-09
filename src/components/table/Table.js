import React from 'react';

import { FormGroup, Label, Input } from 'reactstrap';
// import { NavInput } from '../dashboard/styles/navbar';
import {
  TableHeader,
  TableForm,
  TableTitleText,
  NavInput,
  Group1,
  TableWrapper
} from '../dashboard/styles/table';
import { TableBody } from './TableBody';

export const Table = () => {
  return (
    <TableWrapper>
      <TableTitleText>
        <h2> Payments </h2>
      </TableTitleText>

      <TableForm>
        <FormGroup>
          <TableHeader>
            <Group1>
              <Label for='exampleSelect' className='form-texts'>
                Showing
              </Label>
              <Input
                type='select'
                name='select'
                id='exampleSelect'
                className='select-input'
              >
                <option> 20 </option>
              </Input>
              <p className='form-texts ml-4 mb-1'>out of 500 payments</p>
              <NavInput
                type='text'
                placeholder='&#xF002;  Search'
                className='ml-4'
              />
            </Group1>
            <Group1>
              <Label for='exampleSelect' className='form-texts mr-4'>
                Show
              </Label>
              <Input
                type='select'
                name='select'
                id='exampleSelect'
                className='select-wide'
              >
                <option> All </option>
                <option> Reconciled </option>
                <option> Un-reconciled </option>
                <option> Settled </option>
                <option> Unsettled </option>
              </Input>
            </Group1>
          </TableHeader>
          <TableBody />
        </FormGroup>
      </TableForm>
    </TableWrapper>
  );
};
