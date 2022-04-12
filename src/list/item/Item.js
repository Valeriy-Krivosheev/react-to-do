
const Item = (props) => {
  const {name, onDelete} = props
 
  return (
    <button
      className="deal-item"
      onClick={onDelete}
    >
      {name}
    </button>
  )
}
export default Item