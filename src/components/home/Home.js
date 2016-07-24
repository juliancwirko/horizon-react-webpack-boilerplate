import React from 'react';
import cssModules from 'react-css-modules';
import style from './styles.styl';
import Todo from './Todo';
import { connect } from 'react-hz';

const Home = (props) => {
  const { todos, addTodo } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      addTodo(elem.value, false, new Date().getTime());
      elem.value = '';
    }
  };
  return (
    <div styleName="todo-wrapper">
      <div>
        <input
          type="text"
          styleName="add-todo-input"
          placeholder="Add todo item ..."
          onKeyPress={handleAddTodo}
        />
      </div>
      <div>
        {todos.map((t, i) => <Todo
          id={t.id}
          todo={t.todo}
          finished={t.finished}
          timestamp={t.timestamp}
          key={i}
        />)}
      </div>
    </div>
  );
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  addTodo: React.PropTypes.func.isRequired,
};

export default connect(cssModules(Home, style), {
  subscriptions: {
    todos: (hz) => hz('todos').order('timestamp', 'descending').limit(10000),
  },
  mutations: {
    addTodo: (hz) => (todo, finished, timestamp) => hz('todos').store({
      todo, finished, timestamp,
    }),
  },
});
