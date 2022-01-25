import {ButtonComponent, TableComponent} from '../components'
import {withButtonConfig, withTableConfig} from '../hoc'

export const makePageFactory = ({pageConfig}) => {
    const {tableConfig, buttonConfig} = pageConfig

    const Table = withTableConfig(TableComponent, tableConfig)
    const Button = withButtonConfig(ButtonComponent, buttonConfig)

    return (
        <>
            <Button />
            <Table />
        </>
    )
}