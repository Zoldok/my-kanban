import Card from '../Card/Card';
import tasks from '../../task';

const Column = ({ status }) => {
  const filterTasks = tasks.filter((task) => task.status === status);

  return (
    <div class="main__column column">
      <div class="column__title">
        <p>{status}</p>
      </div>
      <div class="cards">
        {/* компонент */}
        {/* <Card /> */}
        {filterTasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
