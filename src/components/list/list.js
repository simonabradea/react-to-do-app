import "./list.scss";

const List = ({ 
    list = [], 
    status = [], 
    listTitle = "", 
    onDeleteTask,
    onStatusSelect }) => {

    return (
        <div className="list-container">
            <div className="list-header">{listTitle}</div>
            <ul>
                {list.map((item, index) => (
                    <li key={item + index}>
                        <span>{item}</span>
                        <div>
                            <select onSelect={onStatusSelect}>
                                {status.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                            <button className="delete-task-button" onClick={() => onDeleteTask(item)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;