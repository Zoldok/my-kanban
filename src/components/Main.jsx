import React, { useState } from 'react';
import Column from './Column/Column';
import * as S from './Main.styled';

const Main = () => {
  const STATUSES = ['No Status', 'To Do', 'In Progress', 'Testing', 'Done'];

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <S.Main>
      <div class="container">
        <S.MainBlock>
          {loading ? (
            <div className="preloader">Данные загружаются...</div>
          ) : (
            <S.MainContent>
              {/* рендерим колонки по статусам */}
              {STATUSES.map((status) => (
                <Column key={status} status={status} />
              ))}
            </S.MainContent>
          )}
        </S.MainBlock>
      </div>
    </S.Main>
  );
};

export default Main;
