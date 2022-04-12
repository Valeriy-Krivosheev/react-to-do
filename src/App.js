import './App.css';
import Form from './form/Form';
import List from './list/List';
import Title from './title/Title';
import { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        { name: 'Сделать to do list на React', id: 1 },
        { name: 'Кликнуть по этой кнопке', id: 2 },
        { name: 'Убедиться, в изменении state', id: 3 },
      ],

    }

  }
  onItemClick = (id) => {
    this.setState({
      arr: this.state.arr.filter(item => item.id !== id)
    })
  }
  addItem = (value) => {
    this.setState({
      arr: [
        ...this.state.arr,
        { name: value, id: Date.now() }
      ]

    })
  }

  render() {
    console.log(this.state.arr);
    const length = this.state.arr.length
    return (
      <div className="App">
        <div className="container">
          <Title length={length} />
          <Form addItem={this.addItem} />
          <List listDeal={this.state.arr} delelete={this.onItemClick} />
        </div>
      </div>
    )
  }
}

export default App;
