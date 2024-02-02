import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';

test('Tests if the input element is accepting text and onSubmit function is working properly.', () => {
    const mockOnSubmit = jest.fn();
    render(<Input onSubmit={mockOnSubmit} placeholder="" label="" defaultValue="" />);

    const inputField = screen.getByPlaceholderText('');
    const inputTest = 'Study power electronics'
    userEvent.type(inputField, inputTest);
    
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });
    
    expect(mockOnSubmit).toHaveBeenCalledWith(inputTest);
 });
