
import {ButtonComponent} from  '../../components/button'
import {withButtonFunctionality} from '../../hoc/withButtonFunctionality'

import './style.scss';


export const Home = () => {

  const onClickHandler = () => {
    console.log('click with hoc')
  }

  const config = {
    onClick: () => onClickHandler(),
    type: 'primary'
  }

  const OpenModalButton = withButtonFunctionality(ButtonComponent, config)

  return(
      <div className='container'>
        <h1>Planet Maker</h1>
        
        <OpenModalButton>
          Make a Planet with HOC !
        </OpenModalButton>

        <ButtonComponent onClick={()=> alert('Esse é um componente puro sem o hoc')}>Make a Planet Pure!</ButtonComponent>

        <div className='wrapper'>
          
        </div>

      </div>
  );
}