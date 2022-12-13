// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li>
      <div className="Container">
        <img src={imgUrl} className="image" alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
