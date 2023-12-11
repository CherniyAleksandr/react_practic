export const component1 = (props) => {
    const {title, description} = props
    return <div className="comp">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>

} 