import React from 'react';
import { Table, Pagination, Button } from '@alifd/next';
import FoundationSymbol from '@icedesign/foundation-symbol';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { PAGINATION_CONFIGS } from '@/appConfig';

const Icon = FoundationSymbol;

const CustomTable = ({
  loading,
  current,
  total,
  dataSource,
  onSort,
  children,
  primaryKey,
  rowHeight,
  rowSelection,
  onRowOpen,
  buttons,
  onPagination,
  columns,
  maxBodyHeight,
  expandedRowRender,
}) => {
  return (
    <div className={styles.customTable}>
      <div className={styles.filterWrap}>{children}</div>
      <Table
        dataSource={dataSource}
        hasBorder={false}
        onSort={onSort}
        primaryKey={primaryKey}
        loading={loading}
        rowHeight={rowHeight}
        rowSelection={rowSelection}
        onRowOpen={onRowOpen}
        maxBodyHeight={maxBodyHeight}
        expandedRowRender={expandedRowRender}
      >
        {columns.map(item => {
          if (!item.hidden) {
            return (
              <Table.Column
                title={item.title}
                dataIndex={item.dataIndex}
                key={item.key}
                sortable={item.sortable || false}
                cell={item.cell}
                width={item.width || 'auto'}
                lock={item.lock}
              />
            );
          }
          return null;
        })}
      </Table>
      <div className={buttons ? styles.footer : styles.paginationWrap}>
        {buttons !== undefined && (
          <div className={styles.btnWrap}>
            {buttons.map(button => (
              <Button
                key={button.text}
                type={button.type}
                onClick={button.onClick}
                className={`${styles.btn} ${button.type !== 'primary' && styles.secondary}`}
              >
                <Icon type={button.icon} />
                <span>{button.text}</span>
              </Button>
            ))}
          </div>
        )}
        {onPagination !== undefined && (
          <Pagination
            pageSizePosition="end"
            useFloatLayout
            current={current}
            total={total}
            pageSize={PAGINATION_CONFIGS.pageSize}
            onChange={onPagination}
          />
        )}
      </div>
    </div>
  )
}

CustomTable.defaultProps = {
  loading: false,
  maxBodyHeight: 100,
  rowHeight: 100,
  children: null,
  onRowOpen: () => { },
  rowSelection: {},
  buttons: [],
  onSort: () => { },
  onPagination: () => { },
};

CustomTable.prototypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  maxBodyHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  onRowOpen: PropTypes.func,
  rowSelection: PropTypes.object,
  buttons: PropTypes.array,
  onSort: PropTypes.func,
  onPagination: PropTypes.func,
  children: PropTypes.node,
};

export default CustomTable;
