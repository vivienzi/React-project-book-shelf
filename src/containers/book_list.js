import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }


  render () {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //!!whatever the state is change, this Booklist is auto rerender
  //!whenever the state is change,the props is rerender
  //whatever is returned will show up as props inside of booklist
  return {
    books: state.books
  }
}

//anything returned from this function will end up as props on the booklist container
//call by this.props.selectBook
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//promote to Components to container- it needs to know about new methods
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
