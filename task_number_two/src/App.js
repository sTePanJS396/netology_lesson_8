import React from 'react';
import './App.css';
import useJsonFetch from './hook/useJsonFetch';

function App() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/.........', {})
                                                                    // ↑ просто подставьте вот сюда одно из трех необходимых:
                                                                    // 1. data - успешное получение данных
                                                                    // 2. error - получение 500 ошибки
                                                                    // 3. loading - индикатор загрузки

  console.log(data, error, loading);
  return (
    <div className="container">
      <h1>Откройте консоль, все результаты находятся там!</h1>
    </div>
  );
}

export default App;
