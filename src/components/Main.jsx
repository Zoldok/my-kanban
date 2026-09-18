import React, { useState } from 'react';
import Column from './Column/Column';

const Main = () => {
  const STATUSES = ['No Status', 'To Do', 'In Progress', 'Testing', 'Done'];

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <main class='main'>
      <div class='container'>
        <div class='main__block'>
          {loading ? (
            <div className='preloader'>Данные загружаются...</div>
          ) : (
            <div class='main__content'>
              {/* рендерим колонки по статусам */}
              {STATUSES.map((status) => (
                <Column key={status} status={status} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
