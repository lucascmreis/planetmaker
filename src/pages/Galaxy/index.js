import { ButtonComponent } from '../../components'
import { withButtonConfig } from '../../hoc'
import { makeButtonConfig, makePageConfig, makeTableConfig } from './configs'
import {makePageFactory} from '../../factories/makePageFactory'

import './styles.scss'

export const Galaxy = () => {

    const onClick = () => {
        console.log('click')
    }

    const handleEdit = () => {
        console.log('edit')
    }

    const handleDelete = () => {
        console.log('delete')
    }

    const dataSource = [
        {
            id: 1,
            name: "Mars",
            description: "red planet",
            imageUrl: "https://i.pinimg.com/originals/8c/36/39/8c363969b243519fd89ed4713434378e.png",
            type: "red"
        }
    ]

    const tableConfig = makeTableConfig({ dataSource, handleDelete, handleEdit})
    const buttonConfig = makeButtonConfig({onClick })
    const pageConfig = makePageConfig({tableConfig, buttonConfig})
    
    const PageSkelleton = makePageFactory(pageConfig)

    return (
        <></>
    )
}