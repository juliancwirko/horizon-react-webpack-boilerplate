import React from 'react';
import cssModules from 'react-css-modules';
import style from './styles.styl';
import { connect } from 'react-hz';

const Todo = (props) => {
  const { id, finished, todo, removeTodo, editTodo } = props;
  const handleRemove = () => {
    removeTodo(id);
  };
  const handleEdit = () => {
    editTodo(id, todo, !finished);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
    <div styleName={finishedClass()}>
      <input type="checkbox" checked={finished} value="" onChange={handleEdit} />
      {todo}
      <button type="button" onClick={handleRemove}>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

Todo.propTypes = {
  todo: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  finished: React.PropTypes.bool,
  removeTodo: React.PropTypes.func.isRequired,
  editTodo: React.PropTypes.func.isRequired,
};

export default connect(cssModules(Todo, style, { allowMultiple: true }), {
  mutations: {
    removeTodo: (hz) => (id) => hz('todos').remove(id),
    editTodo: (hz) => (id, todo, finished) => hz('todos').replace({ id, todo, finished }),
  },
});
