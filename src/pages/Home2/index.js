import { ButtonComponent } from '../../components'
import { withButtonConfig } from '../../hoc'
import { makeButtonConfig } from '../Home2/configs/buttonConfig'

import './styles.scss'

export const Home2 = () => {

    const handleClick = () => {
        console.log('click')
    }

    const buttonConfig = makeButtonConfig({handleClick})

    const OpenModalButton = withButtonConfig(ButtonComponent, buttonConfig)
    return (
        <>
            <div className="container">
                <header className='header-container'>
                    <h1>Second Home</h1>
                    <OpenModalButton>
                        Open Modal
                    </OpenModalButton>

                </header>
            </div>
        </>
    )
}