export const makeModalConfig = ({isModalVisible, setIsModalVisible,  title}) => {
  const handleOk = () => {
    console.log('modal deu ok')
    setIsModalVisible(!isModalVisible)
  }

  const handleCancel = () => {
    console.log('modal cancelou')
    setIsModalVisible(!isModalVisible)
  }
    return {
        visible: isModalVisible,
        title: title || 'Hoc Modal Rocks!',
        onOk: () => handleOk(),
        onCancel: () => handleCancel(),
        width: 414,
        destroyOnClose: true,
        okText: "bang!",
        okButtonProps: { type: 'primary' },

      }
}