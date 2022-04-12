import { Component } from 'react'
import './form.css'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
  }
  addPost = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.value)
    this.setState({
      value:''
    })
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const{value} = this.state
    return (
      <div className="form-inner">
        <form className="wish-form" onSubmit={this.addPost}>
          <input className="wish-input" type="text" name='value' value={value} onChange={this.onValueChange}/>
          <button className="wish-button">Post it</button>
        </form>
      </div>
    )
  }

}

export default Form