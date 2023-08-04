function Button({ img, title, to }) {
    return (
        <a className="button group relative inline-block focus:outline-none focus:ring"
            href={to}
        >
            <span
                className="absolute inset-0 translate-x-1 translate-y-1 bg-indigo-600/50 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
 
            <span className="button-text relative flex items-center gap-0.5 border-2 border-current px-4 py-2 text-sm font-bold tracking-widest text-slate-950 group-active:text-opacity-75"
            >   {img}
                {title}
            </span>
        </a>
    )
}

export default Button