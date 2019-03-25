import React from 'react';

import EditBox from './EditBox.jsx';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      show: false
    }
    this.editEntry = this.editEntry.bind(this);
  }

  editEntry(event) {
    this.setState({
      show: true
    })
    //console.log(event.target.id)

  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <EditBox />
          <input type='submit' value='Submit Changes'/>
        </div>
      )
    }
    return (
      <div>
        <input type='submit' value='Edit' onClick={(event) => this.editEntry(event)} id={this.props.id}/>
      </div>
    )
  }
}

export default Edit;
