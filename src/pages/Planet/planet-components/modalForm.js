import {  Modal, Form, Input } from 'antd';
import { withModalConfig } from '../../../hoc';
import { makeModalConfig } from '../configs';

export const ModalForm = ({ visible, onCreate, setIsModalVisible }) => {
    const [form] = Form.useForm();
    const onSubmitHandle = () => {
        form
        .validateFields()
        .then((values) => {
            form.resetFields();
            onCreate(values);
        })
        .catch((info) => {
            console.log('Validate Failed:', info);
        });
        }

  const modalConfig = makeModalConfig({isVisible: visible, setIsVisible: setIsModalVisible, onOk: onSubmitHandle, okText: 'make it!'})
  
  const ModalComponent = withModalConfig(Modal, modalConfig )
  
  return (
    <ModalComponent>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
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

// const CollectionsPage = () => {
//   const [visible, setVisible] = useState(false);

//   const onCreate = (values) => {
//     console.log('Received values of form: ', values);
//     setVisible(false);
//   };

//   return (
//     <div>
//       <Button
//         type="primary"
//         onClick={() => {
//           setVisible(true);
//         }}
//       >
//         New Collection
//       </Button>
//       <CollectionCreateForm
//         visible={visible}
//         onCreate={onCreate}
//         onCancel={() => {
//           setVisible(false);
//         }}
//       />
//     </div>
//   );
// };