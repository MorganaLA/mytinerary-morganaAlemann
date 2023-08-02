import Link from './Link';
import Title from './Title';
import Button from './Button';
function Navbar() {
    const links = [
        { title: 'Home', to: '/home' },
        { title: 'Cities', to: '/cities' },
    ]

    return (
        <header className='navbar font-custom flex justify-between items-center text-base font-semibold'>
            <Title />
            <nav className="flex justify-around items-center">
                {
                    links.map((link) => (<Link key={link.title} title={link.title} to={link.to} />))
                }
            <Button title='Login' className="flex flex-row items-center mx-2" to='/Login' />
            </nav>
        </header>
    )
}

export default Navbar