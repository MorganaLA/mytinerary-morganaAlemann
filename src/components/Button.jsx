function Button({ title, to }) {
    return (
        <a className="button group relative inline-block focus:outline-none focus:ring"
            href={to}
        >
            <span
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-600/50 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="button-text relative flex items-center gap-0.5 border-2 border-current px-6 py-2 text-sm font-bold tracking-widest text-slate-950 group-active:text-opacity-75"
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                {title}
            </span>
        </a>
    )
}

export default Button