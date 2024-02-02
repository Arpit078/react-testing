import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Item } from './item';

test('if cross button when clicked removes the item from the dom', async () => {
    const mockDispatch = jest.fn();
    const todo = { id: 1, title: 'Test Todo', completed: false };
    render(<Item todo={todo} dispatch={mockDispatch} index={0} />);

    const deleteButton = screen.getByTestId('todo-item-button');
    fireEvent.click(deleteButton);

    const itemElement = screen.queryByTestId('todo-item');
    expect(itemElement).not.toBeInTheDocument;
});
