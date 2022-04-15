import './title.css'
const Title = ({ length}) => {
  return (
    length === 0?
    <div>
      <h1 className="wish-title">Упс, ты все выполнил :) </h1>
    </div>
    :
    <div>
        <h1 className="wish-title">Общее количество дел: {length} </h1>
    </div>
  )
}

export default Title