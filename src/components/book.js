import React from 'react'

const Book = props => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${props.book.imageLinks.thumbnail}")`
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select
            onChange={e => props.changeBookShelf(props.book, e.target.value)}
            value={props.defaultShelf}
          >
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{props.book.title}</div>
      <div className='book-authors'>{props.book.authors}</div>
    </div>
  )
}

// class Book extends Component {
//   render () {
//     console.log(this.props.book)
//     return (
//       <div className='book'>
//         <div className='book-top'>
//           <div
//             className='book-cover'
//             style={{
//               width: 128,
//               height: 188,
//               backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
//             }}
//           ></div>
//           <div className='book-shelf-changer'>
//             <select
//               onChange={e =>
//                 this.props.changeBookShelf(this.props.book, e.target.value)
//               }
//               value={this.props.defaultShelf}
//             >
//               <option value='move' disabled>
//                 Move to...
//               </option>
//               <option value='currentlyReading'>Currently Reading</option>
//               <option value='wantToRead'>Want to Read</option>
//               <option value='read'>Read</option>
//               <option value='none'>None</option>
//             </select>
//           </div>
//         </div>
//         <div className='book-title'>{this.props.book.title}</div>
//         <div className='book-authors'>{this.props.book.authors}</div>
//       </div>
//     )
//   }
// }

export default Book
