
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
    setPlanet({})
    setIsFormVisible(!isFormVisible)
  }

  const onSubmitHandle = async (values) => { 
    const newPlanet = {
      ...values, 
      imageUrl: values.imageUrl || 'https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987924uaycc.png',
      type: values.type|| 'any'
    }
    if(!planet.id){
      await create(newPlanet)
    }else{
      await update({id: planet.id, ...newPlanet})
    }
    list()
    setIsFormVisible(!isFormVisible);
  }

  const handleEdit = (data) => {
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
        <header className='subheader-container'>
         
          <OpenModalButton>
            Make a Planet with HOC !
          </OpenModalButton>

          <ButtonComponent onClick={()=> alert('Esse é um componente puro sem o hoc')}>
            Make a Planet Pure!
          </ButtonComponent>
        </header>

        <div className='subheader-wrapper'>
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