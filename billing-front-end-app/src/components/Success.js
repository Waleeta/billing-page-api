import './Success.css'

const Success = (props) => {
    const { firstName } = props
    return (
        <div className="successField"> You've successfully submitted your billing address, {firstName}</div>
    )
}


export default Success;