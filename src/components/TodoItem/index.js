// Write your code here
import './index.css'

const TodoItem = props => {
  const {title, onDelete, uniqueId} = props
  const performDelete = () => {
    onDelete(uniqueId)
  }
  return (
    <li className="item-container">
      <p className="para">{title}</p>
      <button type="button" className="btn" onClick={performDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
