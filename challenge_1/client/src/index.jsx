import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: '',
      page: 1,
      pageCount: 0,
      data: undefined
    }

    this.handlePage = this.handlePage.bind(this);
  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({
      searchTerm: query
    })
  }

  handleClick() {
    this.search(this.state.searchTerm, this.state.page)
  }

  search(query, page) {
    axios(`http://localhost:3000/events?q=${query}&_page=${page}&_limit=10`)
    .then(res => {
      // console.log(res.headers);
      this.setState({
        pageCount: Math.ceil(res.headers['x-total-count']/10),
        data: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  handlePage(e) {
    let page = e.selected + 1;
    this.setState({
      page: page
    })
    this.search(this.state.searchTerm, page)
  }

  render () {
    return (
    <div>
      <h1>Mini Apps 2 Challenge 1</h1>
      <Search handleChange={this.handleChange.bind(this)} handleClick={this.handleClick.bind(this)}/>
      <br/>
      <Results data={this.state.data} />
      <br/>
      <ReactPaginate pageCount={this.state.pageCount} 
        pageRangeDisplayed={5} 
        marginPagesDisplayed={2} 
        onPageChange={this.handlePage}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));