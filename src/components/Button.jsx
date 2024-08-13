import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Button.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string.isRequired,  // `isRequired` si el prop es obligatorio
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string
};

const Button = ({ img, text, to, onClick, className, type }) => (
    <Link className={className} to={to}>
    <button onClick={onClick} type={type}>
        <span className="absolute inset-0 translate-x-1 translate-y-1 bg-indigo-600/50 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="button-text relative flex items-center gap-0.5 border-2 border-current px-4 py-2 text-sm font-bold tracking-widest text-slate-950 group-active:text-opacity-75">
            {img}
            <span>{text}</span>                 
        </span>
    </button>
    </Link>
);

export default Button;






