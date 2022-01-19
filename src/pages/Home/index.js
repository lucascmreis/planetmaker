
import {useState} from 'react'
import {ButtonComponent} from  '../../components/button'
import {ModalComponent} from '../../components/modal'
import {withButtonFunctionality} from '../../hoc/withButtonFunctionality'
import {withModalFunctionality} from '../../hoc/withModalFunctionality'

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

  const OpenModalButton = withButtonFunctionality(ButtonComponent, buttonConfig)
  const Modal = withModalFunctionality(ModalComponent, modalConfig )

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
          <span>here goes the table</span>

        </div>
      </div>

      <Modal>
        <p>to no modal!</p>
      
      </Modal>
    </>
  );
}