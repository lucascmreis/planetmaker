import {Modal} from 'antd'

export const ModalComponent = ({children, ...props}) => {
    return <Modal {...props} >{children}</Modal>
}