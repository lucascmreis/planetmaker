export const makeModalConfig = ({isVisible, setIsVisible, title, onOk, onCancel, width, destroyOnClose, okText, okButtonProps, ...props}) => {

  const handleOkDefault = () => {
    console.log('modal ok')
    setIsVisible(!isVisible)
  }

  const handleCancelDefault = () => {
    console.log('modal cancelou')
    setIsVisible(!isVisible)
  }

  const onOkHandler = onOk ? onOk : handleOkDefault 
  const onCancelHandler = onCancel? onCancel : handleCancelDefault
  
  return {
      visible: isVisible,
      title: title || 'Hoc Modal Rocks!',
      onOk: () => onOkHandler(),
      onCancel: () => onCancelHandler(),
      width: width || 414,
      destroyOnClose: destroyOnClose || true,
      okText: okText || "bang!",
      okButtonProps: okButtonProps || { type: 'primary' },
      ...props
  }
}