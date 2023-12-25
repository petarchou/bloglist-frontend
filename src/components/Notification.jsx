const Notification = ({ message, error }) => {
  if (!(message || error)) {
    return null
  }

  // known edge-case for when both message and error exist - it won't happen in practice
  let cssClass = message
    ? 'success'
    : 'error'

  return (
    <div className={cssClass}>
      {message || error}
    </div>
  )
}

export default Notification