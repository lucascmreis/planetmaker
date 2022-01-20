export const makeButtonConfig = ({onClickHandler, onClickSecondaryHandler,  type}) => {
    const clickHandler = onClickHandler ? onClickHandler : onClickSecondaryHandler
    return {
        onClick: () => clickHandler(),
        type: type
      }
}