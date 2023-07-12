import classnames from "classnames"

function Button(props) {
    console.log(props)
    let buttonSize
    if (props.size === "lg") {
        buttonSize = `button-large`
    }else if(props.size === "sm") {
        buttonSize = "button-small"
    }

    const variantClass = props.variant ? `button-${props.variant}` : ""

    const allClasses = classnames(buttonSize, props.className, variantClass)
    console.log(allClasses)

    return (
        <button {...props} className = {allClasses} >{props.children}</button>
    )
}

export default Button