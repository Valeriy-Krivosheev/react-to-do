import './form.css'
const Form = ({ addItem}) => {
  const addPost = (e) => {
    e.preventDefault()
    const value = e.target.post.value
    addItem(value)
  }

  return (
    <div className="form-inner">
      <form className="wish-form" onSubmit={addPost}>
        <input className="wish-input" type="text" name='post' />
        <button className="wish-button">Post it</button>
      </form>
    </div>
  )
}

export default Form