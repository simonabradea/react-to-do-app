import "./form.scss";

const Form = ({status, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="taskTitle">Task Title</label>
            <input id="taskTitle" type="text" placeholder="Task Title"/>
            <label htmlFor="taskDescription">Task Description</label>
            <textarea id="taskDescription"/>
            <label htmlFor="taskStatus">Task Status</label>
            <select>
                {status.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;