import './Button.scss'

export default function Button({buttonClass, buttonText, buttonIcon}) {
    return (
        <button className={buttonClass}>{buttonText}{buttonIcon}</button>
    )
}