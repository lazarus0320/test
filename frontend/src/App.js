import React from 'react';
import { selector, useRecoilValueLoadable } from 'recoil';

const listQueryState = selector({
  key: 'ListQuery',
  get: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  },
});

function App() {
  const queryListLoadable = useRecoilValueLoadable(listQueryState);

  return (
    <>
      {queryListLoadable.state === 'loading' && <li>Loading...</li>}
      {queryListLoadable.state === 'hasValue' &&
        queryListLoadable.contents.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      {queryListLoadable.state === 'hasError' && (
        <li>Error: {queryListLoadable.contents.message}</li>
      )}
    </>
  );
}

export default App;
