const Link = ({title, to}) => {

    return (
        <a className='header-link p-2 mr-2' href={to}>{title}</a>
    )
}

export default Link