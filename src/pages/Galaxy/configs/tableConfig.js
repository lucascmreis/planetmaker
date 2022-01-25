import { Tag, Space } from 'antd'
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons';

export const makeTableConfig = ({dataSource, handleEdit, handleDelete}) => {

    const columns = [
      {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        maxWidth: 10,
        render: theImageURL => <img alt={theImageURL} src={theImageURL} /> 
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: "name"
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: 'Type',
        dataIndex: 'type',
        render: tags => {
          let color = tags.toUpperCase() === 'BLUE' ? 'geekblue' : 'red';
          return (
            <>     
              <Tag color={color} key={tags}>
                {tags.toUpperCase()}
              </Tag>
            </>
        )},
      },
      {
        title: 'Action',
        render: (item) => (
          <Space>
            <EditTwoTone onClick={() => handleEdit(item)} />
            <DeleteTwoTone onClick={() => handleDelete(item)}/>
          </Space>
        ),
      },
    ];
    
    return {
      columns: columns,
      dataSource: dataSource
    }
  }