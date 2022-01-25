
import {useState, useEffect} from 'react'

import {ButtonComponent, ModalComponent, TableComponent, FormComponent} from  '../../components/'
import {ModalForm} from './planet-components/modalForm'
import {withButtonConfig, withModalConfig, withTableConfig} from '../../hoc/'
import { makeButtonConfig, makeModalConfig, makeTableConfig } from './configs'

import {usePlanet} from '../../hooks/usePlanet'

import './style.scss';
import { Input } from 'antd'

export const Planet = () => {
//   let initalPlanetMock = {
//    imageUrl: "https://i.pinimg.com/originals/8c/36/39/8c363969b243519fd89ed4713434378e.png", name: "Urano", description: "red planet", type: ["red"] 
//  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
 
  const {planets, list, create} = usePlanet()
  
  useEffect(()=>{
    list()
  }, [])
  
  const makePlanetHandler = () => {
    console.log('lets make a planet')
    setIsFormVisible(!isFormVisible)
  }

  const onSubmitHandle = async (values) => {

    console.log('Received values of form: ', values);

    const newPlanet = {
      ...values, 
      imageUrl: values.imageUrl || 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987924uaycc.png'
    }
    
    await create(newPlanet)

    list()
    setIsFormVisible(!isFormVisible);
         
  }

  const buttonConfig = makeButtonConfig({onClickHandler: makePlanetHandler, type: 'primary'})
 
  const modalConfig = makeModalConfig({setIsVisible: setIsModalVisible , isVisible: isModalVisible, onSubmitHandle})

  const tableConfig = makeTableConfig({dataSource: planets})

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

      <ModalForm
        visible={isFormVisible}
        setIsModalVisible={setIsFormVisible}
        onCreate={onSubmitHandle}
        onCancel={() => {
          setIsFormVisible(!isFormVisible);
        }}
      />


    </>
  );
}