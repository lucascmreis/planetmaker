import { ButtonComponent } from '../../components'
import { withButtonConfig } from '../../hoc'
import { makeButtonConfig } from './configs/buttonConfig'

import './styles.scss'

export const Galaxy = () => {

    const handleClick = () => {
        console.log('click')
    }

    const buttonConfig = makeButtonConfig({handleClick})

    const OpenModalButton = withButtonConfig(ButtonComponent, buttonConfig)
    return (
        <>
            <div className="container">
                <header className='header-container'>
                    <h1>Galaxy</h1>
                    <OpenModalButton>
                        Open Modal
                    </OpenModalButton>

                </header>
            </div>
        </>
    )
}