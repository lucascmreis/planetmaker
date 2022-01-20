import { Tag, Space } from 'antd'

  export const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      maxWidth: 10,
      render: theImageURL => <img alt={theImageURL} src={theImageURL} /> 
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: tags => (
        <>
          {tags && tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href='/'>Edit {record.name}</a>
          <a href='/'>Delete</a>
        </Space>
      ),
    },
  ];
  
 export const data = [
    {
      key: '1',
      image: 'https://i.pinimg.com/originals/8c/36/39/8c363969b243519fd89ed4713434378e.png',
      name: 'Mars',
      description: 'some desc',
      type: ['Hot', 'Next to Sun'],
    },
    {
      key: '2',
      image: 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987924uaycc.png',
      name: 'Earth',
      description: 'desc',
      type: ['cool', 'blue planet'],
    },
    {
      key: '3',
      image: 'https://i.pinimg.com/originals/8c/36/39/8c363969b243519fd89ed4713434378e.png',
      name: 'Venus',
      description: 'venus where?',
      type: ['cool', 'gerek god?'],
    },
  ];

  export const tableConfig = {
      columns: columns,
      dataSource: data
  }