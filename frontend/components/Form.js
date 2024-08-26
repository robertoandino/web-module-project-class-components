import React from 'react'

export default class Form extends React.Component {
  
  state = {
    name: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)  //Adds new todo to list
    this.setState({  //Resets state so on submit box clears when hitting submit
      ...this.state, //Get exisiting state to override only one key. In this case name. Instead of overriding all keys if there were more
      name: ''
    })
  }
  
  onChange = evt => {
    this.setState({
      ...this.state,
      name: evt.target.value  //Gets the values being typed in
    })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}
