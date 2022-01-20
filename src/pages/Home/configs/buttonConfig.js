export const makeButtonConfig = ({onClickHandler, type}) => {
    return {
        onClick: () => onClickHandler(),
        type: type
      }
}