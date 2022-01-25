
import {useState, useEffect} from 'react'

import {ButtonComponent, ModalComponent, TableComponent} from  '../../components/'
import {ModalForm} from './planet-components/modalForm'
import {withButtonConfig, withModalConfig, withTableConfig} from '../../hoc/'
import { makeButtonConfig, makeModalConfig, makeTableConfig } from './configs'

import {usePlanet} from '../../hooks/usePlanet'

import './style.scss';

export const Planet = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [planet, setPlanet] = useState({})
 
  const {planets, list, create, update} = usePlanet()
  
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
      imageUrl: values.imageUrl || 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987924uaycc.png',
      type: values.type|| 'any'
    }
    if(!planet){
      await create(newPlanet)
    }else{
      await update({id: planet.id, ...newPlanet})
    }

    list()
    setIsFormVisible(!isFormVisible);
  }

  console.log('planet', planet)

  const handleEdit = (data) => {
    console.log('edit', data)
    setPlanet(data)
    setIsFormVisible(!isFormVisible)
  }

  const handleDelete = (data) => {
    console.log('delete', data)
  }

  const buttonConfig = makeButtonConfig({onClickHandler: makePlanetHandler, type: 'primary'})
 
  const modalConfig = makeModalConfig({setIsVisible: setIsModalVisible , isVisible: isModalVisible, onSubmitHandle})

  const tableConfig = makeTableConfig({dataSource: planets, handleEdit, handleDelete})

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
        onFinish={onSubmitHandle}
        initialValues={planet}
        onCancel={() => {
          setIsFormVisible(!isFormVisible);
        }}
      />


    </>
  );
}