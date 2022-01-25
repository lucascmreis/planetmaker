import {  Modal, Form, Input } from 'antd';
import { useEffect } from 'react/cjs/react.development';
import { withModalConfig } from '../../../hoc';
import { makeModalConfig } from '../configs';

export const ModalForm = ({ visible, onFinish, initialValues, setIsModalVisible }) => {

    const [form] = Form.useForm();

    const onOk = () => {
        form
        .validateFields()
        .then((values) => {
          onFinish(values);
        })
        .catch((info) => {
            console.log('Validate Failed:', info);
        });
    }
    
  const modalConfig = makeModalConfig({isVisible: visible, setIsVisible: setIsModalVisible, onOk, okText: 'make it!'})
  
  const ModalComponent = withModalConfig(Modal, modalConfig )
  
  return (
    <ModalComponent>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label="Planet Name"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="description" 
          label="Description" 
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item 
          name="imageUrl" 
          label="Image URL" 
          className="collection-create-form_last-form-item"
        >
        <Input type="url" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Types"
          placeholder="Separate with comma"
        >
          <Input />
        </Form.Item>
      </Form>
    </ModalComponent>
  );
};