import "./style.scss"

function Heading(props) {
    return (
        <div className="heading-wrapper">
            <h1>{props.children}</h1>
        </div>
    )
}

export default Heading