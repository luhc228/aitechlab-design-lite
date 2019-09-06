import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from '@alifd/next';

const renderInput = (item) => (
  <Form.Item label={item.label} required={item.required} key={item.label}>
    <Input placeholder="请输入" hasClear {...item.componentProps} style={{ width: 150 }} />
  </Form.Item>
);

const renderSelect = (item) => (
  <Form.Item label={item.label} required={item.required} key={item.label}>
    <Select hasClear {...item.componentProps} style={{ width: 150 }} />
  </Form.Item>
);

const renderFormItem = (config) => {
  return config.map((item) => {
    if (item.component === 'Input') {
      return renderInput(item);
    }
    if (item.component === 'Select') {
      return renderSelect(item);
    }
    return null;
  });
};

const FilterForm = ({ value, onChange, config, onSubmit }) => {
  /**
   * 
   * @param {*} values 
   * @param {*} error 
   */
  const handleSubmit = (values, error) => {
    if (error) {
      return;
    }

    Object.entries(values).forEach(([key, value]) => {
      if (value === '') {
        delete values[key];
      }
    });

    onSubmit(values);
  };

  return (
    <Form inline value={value} onChange={onChange}>
      {renderFormItem(config)}
      <Form.Submit
        htmlType="submit"
        type="primary"
        onClick={(fliterValues, error) => handleSubmit(fliterValues, error)}
      >
        查询
      </Form.Submit>
    </Form>
  )
}

FilterForm.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  config: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FilterForm;
