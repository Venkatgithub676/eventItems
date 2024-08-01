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
    <li className="event-item-li-con">
      <button
        onClick={onClickEventItem}
        type="button"
        className="event-item-btn"
      >
        <img
          className={`event-item-img ${borderCol}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <p className="event-item-name">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
