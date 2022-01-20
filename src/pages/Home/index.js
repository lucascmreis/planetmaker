
import {useState} from 'react'

import {ButtonComponent} from  '../../components/button'
import {ModalComponent} from '../../components/modal'
import {TableComponent} from '../../components/table'

import {withButtonConfig} from '../../hoc/withButtonConfig'
import {withModalConfig} from '../../hoc/withModalConfig'
import {withTableConfig} from '../../hoc/withTableConfig'

import { makeButtonConfig } from './configs/buttonConfig'
import { makeModalConfig } from './configs/modalConfig'
import { tableConfig } from './configs/tableConfig'

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

  const buttonConfig = makeButtonConfig({onClickHandler, type:'primary'})
  const modalConfig = makeModalConfig({handleCancel, handleOk, isModalVisible})

  const OpenModalButton = withButtonConfig(ButtonComponent, buttonConfig)
  const Modal = withModalConfig(ModalComponent, modalConfig )
  const Table = withTableConfig(TableComponent, tableConfig)

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
          <Table />
        </div>
      </div>

      <Modal>
        <p>to no modal!</p>
      </Modal>
    </>
  );
}