import Card from '../Card/Card';
import tasks from '../../task';
import * as S from './Column.styled';

const Column = ({ status }) => {
  const filterTasks = tasks.filter((task) => task.status === status);

  return (
    <S.ColumnWrapper className="column">
      <S.ColumnTitle>
        <p>{status}</p>
      </S.ColumnTitle>
      <S.Cards>
        {/* компонент */}
        {/* <Card /> */}
        {filterTasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </S.Cards>
    </S.ColumnWrapper>
  );
};

export default Column;
