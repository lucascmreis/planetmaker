import {ButtonComponent, TableComponent, SubheaderComponent} from '../components'
import {withButtonConfig, withTableConfig} from '../hoc'

export const makePageFactory = (pageConfig) => {
    console.log('fac', pageConfig)
    const {table: tableConfig, button: buttonConfig} = pageConfig
    console.log('tablecon', tableConfig)
    const Table = withTableConfig(TableComponent, tableConfig)
    const Button = withButtonConfig(ButtonComponent, buttonConfig)

    return (
        <>
            <SubheaderComponent>
                <Button />
            </SubheaderComponent>
            <Table />
        </>
    )
}