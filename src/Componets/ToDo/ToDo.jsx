import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Todo.scss";

function ToDo() {
  let [tasks, setTasks] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  async function getList() {
    let { data } = await axios.get("https:dummyjson.com/todos");
    // console.log(data.todos);
    setTasks(data.todos);
  }
  console.log(tasks);
  useEffect(() => {
    getList();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm)
    setTasks(
      tasks.filter((todo) =>
        todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          <div className="pb-5">
            <input
              onChange={handleSearch}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          {tasks?.map((task) => {
            return (
              <div key={task.id} className="todo w-50">
                <p className="todoP">{task.todo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ToDo;
