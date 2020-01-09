import React from 'react';
import {
  Table,
  TableHeadRow,
  TableBodyRow,
  TableDataHead,
  TableData,
  ItemType,
  ItemTypeText,
  Button,
  Ball,
  Group2
} from '../dashboard/styles/table';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';

export const TableBody = () => {
  return (
    <div>
      <Table>
        <thead>
          <TableHeadRow>
            <TableDataHead> Item Type </TableDataHead>{' '}
            <TableDataHead> </TableDataHead>{' '}
            <TableDataHead> Price </TableDataHead>
            <TableDataHead> Transaction No </TableDataHead>{' '}
            <TableDataHead> Time </TableDataHead>{' '}
            <TableDataHead> </TableDataHead> <TableDataHead> </TableDataHead>
          </TableHeadRow>
        </thead>
        <tbody>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button>
                <Ball> </Ball> Reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button warning>
                <Ball warning> </Ball> Pending
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType className=''>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button>
                <Ball> </Ball> Reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType className=''>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button>
                <Ball> </Ball> Reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button warning>
                <Ball warning> </Ball>
                Pending
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button secondary>
                <Ball secondary> </Ball>
                Un-reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType className=''>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button>
                <Ball> </Ball> Reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button secondary>
                <Ball secondary> </Ball>
                Un-reconciled
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
          <TableBodyRow>
            <TableData>
              <ItemType>
                <ItemTypeText> VW </ItemTypeText>
              </ItemType>
            </TableData>
            <TableData> Apple Mac Book 15” 250 SSD 12 GB </TableData>{' '}
            <TableData> $7430 </TableData>
            <TableData> 1234567890 </TableData> <TableData> 12:13 </TableData>
            <TableData>
              <Button warning>
                <Ball warning> </Ball>
                Pending
              </Button>
            </TableData>
            <TableData>
              {' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className='text-secondary'
              />{' '}
            </TableData>
          </TableBodyRow>
        </tbody>
      </Table>
      <Group2>
        <p>Showing 1 to 10 of 500 entries</p>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={<span className='gap'>...</span>}
          activePage={1}
          pageCount={2}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </Group2>
    </div>
  );
};
