import React, { useRef } from 'react';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { withRouter, Link } from 'react-router-dom';
import { Input, Grid, Form, Message } from '@alifd/next';
import styles from './index.module.scss';

const { Row } = Grid;
const FormItem = Form.Item;
const Icon = FoundationSymbol;

function UserLogin(props) {
  const formEl = useRef(null);

  const handleSubmit = (value, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log(value);
    Message.success('登录成功');
    props.history.push('/');
  };

  return (
    <div className={styles.userLogin}>
      <div className={styles.formContainer}>
        <Form onSubmit={handleSubmit} ref={formEl}>
          <FormItem required requiredMessage='必填' className={styles.formItem}>
            <Input
              innerBefore={<Icon type='person' className={styles.inputIcon} />}
              size='large'
              name='adminId'
              maxLength={20}
              placeholder='管理员账号'
            />
          </FormItem>
          <FormItem required requiredMessage='必填' className={styles.formItem}>
            <Input
              innerBefore={<Icon type='lock' className={styles.inputIcon} />}
              name='password'
              size='large'
              htmlType='password'
              placeholder='管理员密码'
            />
          </FormItem>
          <Row className={styles.formItem}>
            <Form.Submit
              type='primary'
              onClick={handleSubmit}
              validate
              className={styles.submitBtn}
              loading={false}
            >
              登 录
            </Form.Submit>
          </Row>

          <Row className='tips'>
            <Link to='/user/login' className={styles.tipsText}>
              注册
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(UserLogin);
