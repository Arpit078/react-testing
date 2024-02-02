import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './main';


test('if a user can write 10,000 todos', () => {
    const todos = Array.from({ length: 10000 }, (_, i) => ({ id: i, title: `Todo ${i}`, completed: false }));
    render(
        <Router>
             <Main todos={todos} dispatch={() => {}} />
        </Router>
      );

    const items = screen.getAllByTestId('todo-item');
    expect(items.length).toEqual(10000);
 });

