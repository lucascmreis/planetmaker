
import {useState, useEffect} from 'react'

import {ButtonComponent, ModalComponent, TableComponent} from  '../../components/'
import {withButtonConfig, withModalConfig, withTableConfig} from '../../hoc/'
import { makeButtonConfig, makeModalConfig, makeTableConfig } from './configs'

import {usePlanet} from '../../hooks/usePlanet'

import './style.scss';

export const Home = (...props) => {
  console.log('props', props)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const {planets, list} = usePlanet()
  
  useEffect(()=>{
    list()
  }, [])
  
  console.log('planets', planets)

  const onClickHandler = () => {
    console.log('lets open modal')
    setIsModalVisible(!isModalVisible)
  }

  const onClickSecondaryHandler = () => {
    console.log('secondary ')
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

  const buttonConfig = makeButtonConfig({onClickHandler, type: 'primary'})
  const secondaryButtonConfig = makeButtonConfig({onClickSecondaryHandler, type: 'danger'})
  const modalConfig = makeModalConfig({handleCancel, handleOk, isModalVisible})
  const tableConfig = makeTableConfig({dataSource: planets})

  const OpenModalButton = withButtonConfig(ButtonComponent, buttonConfig)
  const SecondaryButton = withButtonConfig(ButtonComponent, secondaryButtonConfig)
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

          <SecondaryButton>
            This is a sec button with HOC !
          </SecondaryButton>

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