const Link = ({ href, text }) => {
    return (
        <a className="px-6 py-1 border border-transparent rounded-3xl transition-colors hover:border-white" href={href}>{text}</a>
    )
}

export default Link