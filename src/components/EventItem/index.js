// Write your code here

import './index.css'

const EventItem = props => {
  const {each, onClickEvent, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = each

  const borderCol = isActive ? 'border-col' : ''

  const onClickEventItem = () => {
    onClickEvent(id, registrationStatus)
  }
  return (
    <button onClick={onClickEventItem} type="button" className="event-item-btn">
      <li className="event-item-li-con">
        <img
          className={`event-item-img ${borderCol}`}
          src={imageUrl}
          alt="event"
        />
        <h1 className="event-item-name">{name}</h1>
        <p className="event-item-location">{location}</p>
      </li>
    </button>
  )
}

export default EventItem
