import "./style.scss"

function Paragraph(props) {
    return (
        <p className="paragraph-wrapper">
            {props.children}
        </p>
    );
}

export default Paragraph;