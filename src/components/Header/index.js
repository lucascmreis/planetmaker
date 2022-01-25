import './styles.scss'

export const Header = () => {
    return(
        <div className='header-container'>
            <div className='header-wrapper'>
                <h1>Planet Maker</h1>
                <nav>
                    <a href='/'>Planets</a>
                    <a href='/galaxy'>Galaxies</a>
                </nav>
            </div>
        </div>
    )
}