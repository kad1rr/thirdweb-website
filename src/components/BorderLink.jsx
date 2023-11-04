const BorderLink = ({ href, text }) => {
    return (
        <a className="px-6 py-1 border border-white rounded-3xl transition-colors hover:bg-white hover:text-black" href={href}>{text}</a>
    )
}

export default BorderLink