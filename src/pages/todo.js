import Form from "../components/form/form";
import List from "../components/list/list";
import Modal from "../components/modal/modal";

const ToDo = () => {
    return (
        <>
        <div className="todo-container">
            <div className="todo-header"><button>+ Add Task</button></div>
            <div className="todo-list-row">
                <List listTitle="To Do" status={["to do", "in progress", "done"]} />
                <List listTitle="In Progress" status={["to do", "in progress", "done"]} />
                <List listTitle="In Test" status={["to do", "in progress", "done"]} />
                <List listTitle="Done" status={["to do", "in progress", "done"]} />
            </div>
        </div>
        <Modal>
            <Form status={["to do", "in progress", "done"]}/>
        </Modal>
        </>
    )
}

export default ToDo;