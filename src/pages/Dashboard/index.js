/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import WithUserInfo from '@/components/WithUserInfo';
import { withRouter } from 'react-router-dom';
import { Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import PageHead from '@/components/PageHead';
import CustomTable from '@/components/CustomTable';
import FilterForm from '@/components/FilterForm';
import stores from '@/stores/index';
import styles from './index.module.scss';

const filterConfig = [
  {
    label: '姓名',
    component: 'Input',
    required: false,
    componentProps: {
      name: 'name',
    },
  },
];

const Dashboard = (props) => {
  console.log(props);
  const dashboardStore = stores.useStore('dashboard');

  const { fetchDataSource, dataSource } = dashboardStore;
  const [filterValues, changeFilterValues] = useState({});

  /**
   * 
   * @param {*} id 
   */
  const handleEdit = (id) => {
    console.log(id);
  };

  /**
   * 
   * @param {*} id 
   */
  const handleDelete = (id) => {
    console.log(id);
  };

  const tableColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '班级',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '操作',
      dataIndex: 'opreation',
      key: 'operation',
      width: 120,
      cell: (_, __, record) => {
        return (
          <div>
            <Button text onClick={() => handleEdit(record.id)}>
              编辑
            </Button>
            <span className={styles.separator} />
            <Button text onClick={() => handleDelete(record.id)}>
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchDataSource(1);
  }, []);
  return (
    <div className="dashboard">
      <PageHead title='Dashboard' />
      <IceContainer>
        <CustomTable
          loading={fetchDataSource.loading}
          current={dataSource.page}
          total={dataSource.total}
          dataSource={dataSource.list}
          primaryKey="id"
          columns={tableColumns}
          onPagination={(current) => {
            fetchDataSource(current);
          }}
        >
          <FilterForm
            value={filterValues}
            onChange={values => changeFilterValues(values)}
            config={filterConfig}
            onSubmit={() => { }}
          />
        </CustomTable>
      </IceContainer>
    </div>
  )
};

export default WithUserInfo(Dashboard);
