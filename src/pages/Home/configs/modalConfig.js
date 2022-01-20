export const makeModalConfig = ({isModalVisible, handleOk, handleCancel}) => {
    return {
        visible: isModalVisible,
        title: 'Hoc Modal Rocks!',
        onOk: () => handleOk(),
        onCancel: () => handleCancel(),
        width: 414,
        destroyOnClose: true,
        okText: "bang!",
        okButtonProps: { type: 'primary', danger: true },
      }
}