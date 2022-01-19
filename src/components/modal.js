import {Modal} from 'antd'

export const ModalComponent = ({children, ...props}) => {
    console.log('modal props', props)
    return <Modal {...props} >{children}</Modal>
}