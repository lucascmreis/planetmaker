
import { Table, Tag, Space } from 'antd'
import {useState} from 'react'
import {ButtonComponent} from  '../../components/button'
import {ModalComponent} from '../../components/modal'
import {withButtonConfig} from '../../hoc/withButtonConfig'
import {withModalConfig} from '../../hoc/withModalConfig'

import './style.scss';


export const Home = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const onClickHandler = () => {
    console.log('lets open modal')
    setIsModalVisible(!isModalVisible)
  }

  const handleOk = () => {
    console.log('modal deu ok')
    setIsModalVisible(!isModalVisible)
  }

  const handleCancel = () => {
    console.log('modal cancelou')
    setIsModalVisible(!isModalVisible)
  }

  const buttonConfig = {
    onClick: () => onClickHandler(),
    type: 'primary'
  }
  const modalConfig = {
    visible: isModalVisible,
    title: 'Hoc Modal Rocks!',
    onOk: () => handleOk(),
    onCancel: () => handleCancel(),
    width: 414,
    destroyOnClose: true,
    okText: "bang!",
    okButtonProps: { type: 'primary', danger: true },
  }

  const columns = [
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
          {tags.map(tag => {
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
  
  const data = [
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

  const OpenModalButton = withButtonConfig(ButtonComponent, buttonConfig)
  const Modal = withModalConfig(ModalComponent, modalConfig )

  return(
    <>
      <div className='container'>
        <header className='header-container'>
          <h1>Planet Maker</h1>
          
          <OpenModalButton>
            Make a Planet with HOC !
          </OpenModalButton>

          <ButtonComponent onClick={()=> alert('Esse é um componente puro sem o hoc')}>
            Make a Planet Pure!
          </ButtonComponent>
        </header>

        <div className='wrapper'>
          <Table columns={columns} dataSource={data} />

        </div>
      </div>

      <Modal>
        <p>to no modal!</p>
      
      </Modal>
    </>
  );
}