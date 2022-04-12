import './title.css'
const Title = ({ length}) => {
  return (
    <div>
      <h1 className="wish-title">Общее количество дел: {length} </h1>
    </div>
  )
}

export default Title