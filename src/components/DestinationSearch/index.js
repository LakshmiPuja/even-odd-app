// Write your code here
import DestinationItem from './DestinationItem/index.js'

import './index.css'

const DestinationSearch = () => (
  <div className="bg-container">
    <h1 className="heading">Destination Search</h1>
    <input type="search" placeholder="Search" />
    <div className="card">
      <ul className="list-items"></ul>
    </div>
  </div>
)

export default DestinationSearch
