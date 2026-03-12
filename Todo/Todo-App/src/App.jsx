import React, { useState, useRef } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [editid, setEditid] = useState(null);
  const taskname = useRef(null);
  const taskpriority = useRef(null);
  const currentref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskName = taskname.current.value;
    const taskPriority = taskpriority.current.value;
    const dueDate = currentref.current.value;
    console.log("Task Name:", taskName);
    console.log("Task Priority:", taskPriority);
    console.log("Due Date:", dueDate);

    if (!taskName || !taskPriority || !dueDate) {
      alert("Please fill all the fields");
      return;
    }
    if (editid !== null) {
      const updatedTasks = task.map((t) => {
        if (t.id === editid) {
          return { ...t, taskName, taskPriority, dueDate };
        }
        return t;
      });
      setTask(updatedTasks);
      setEditid(null);
    } else {
      let newtask = {
        id: Date.now(),
        taskName,
        taskPriority,
        dueDate,
      };
      setTask([...task, newtask]);
      taskname.current.value = "";
      taskpriority.current.value = "";
      currentref.current.value = "";
    }
  };

  const handleDelete = (deleteID) => {
    let updatetask = task.filter((tasks) => {
      return tasks.id != deleteID;
    });
    setTask(updatetask);
    //delete thorugh id
    // task.splice(task.findIndex((tasks)=>tasks.id==deleteID),1);
    // setTask([...task]);
  };

  const handleEdit = (editID) => {
    const taskToEdit = task.find((t) => t.id === editID);

    taskname.current.value = taskToEdit.taskName;
    taskpriority.current.value = taskToEdit.taskPriority;
    currentref.current.value = taskToEdit.dueDate;

    setEditid(editID);
  };
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    // <div>
    //   <div className="heading">
    //     <h1>My Todo List</h1>
    //   </div>
    //   <form
    //     action=""
    //     onSubmit={(e) => {
    //       handleSubmit(e);
    //     }}
    //   >
    //     <div className="main">
    //       <label htmlFor="tskname">TaskName</label>
    //       <input type="text" id="tskname" ref={taskname} />
    //       <br />
    //       <br />
    //       <label htmlFor="tskdesc">TaskPriority</label>
    //       <select name="" id="priority" ref={taskpriority}>
    //         <option value="">Please Select one option</option>
    //         <option value="High">High</option>
    //         <option value="Mid">Mid</option>
    //         <option value="Low">Low</option>
    //       </select>
    //       <br />
    //       <br />
    //       <label htmlFor="dates">Due Date</label>

    //       <input type="date" id="dates" ref={currentref} />
    //       <br />
    //       <br />
    //       <button>{editid?"Update Task":"Add Task"}</button>
    //     </div>
    //   </form>

    //   {task.length > 0 ? (
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Task Name</th>
    //           <th>Task Priority</th>
    //           <th>Due Date</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {task.map((tasks) => {
    //           return (
    //             <tr key={tasks.id}>
    //               <td>{tasks.taskName}</td>
    //               <td>{tasks.taskPriority}</td>
    //               <td>{formatDate(tasks.dueDate)}</td>
    //               <td>
    //                 <button
    //                   onClick={() => {
    //                     handleDelete(tasks.id);
    //                   }}
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //               <td>
    //                 {" "}
    //                 <button
    //                   onClick={() => {
    //                     handleEdit(tasks.id);
    //                   }}
    //                 >
    //                   Edit
    //                 </button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   ) : (
    //     <h2>No Task Added</h2>
    //   )}
    // </div>
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">My Todo List</h1>
        <p className="text-muted">Manage your tasks efficiently</p>
      </div>

      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task Name"
                  ref={taskname}
                />
              </div>

              <div className="col-md-3">
                <select className="form-select" ref={taskpriority}>
                  <option value="">Priority</option>
                  <option value="High">High</option>
                  <option value="Mid">Mid</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="col-md-3">
                <input type="date" className="form-control" ref={currentref} />
              </div>

              <div className="col-md-2 d-grid">
                <button className="btn btn-success">
                  {editid ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          {task.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {task.map((t) => (
                    <tr key={t.id}>
                      <td>{t.taskName}</td>

                      <td>
                        <span
                          className={`badge ${
                            t.taskPriority === "High"
                              ? "bg-danger"
                              : t.taskPriority === "Mid"
                                ? "bg-warning text-dark"
                                : "bg-success"
                          }`}
                        >
                          {t.taskPriority}
                        </span>
                      </td>

                      <td>{formatDate(t.dueDate)}</td>

                      <td>
                        <button
                          className="btn btn-sm btn-primary me-2"
                          onClick={() => handleEdit(t.id)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(t.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-4">
              <h5 className="text-muted">No Tasks Added</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
