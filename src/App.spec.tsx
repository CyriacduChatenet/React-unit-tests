import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach } from 'vitest';

import { userEvent } from './utils/test-utils';
import App from './App';


describe('App.tsx', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should be render component', () => {
        const text = screen.getByText('Vite + React');
        expect(text).toBeInTheDocument();
    })

    it('should be increment counter state', () => {
        const button = screen.getByText('count is 0');
        fireEvent.click(button);
        expect(button.textContent).toBe('count is 1');
    });

    it('should be render input', () => {
        const input = screen.getByPlaceholderText('text');
        expect(input).toBeInTheDocument();
    });

    it('should be empty value in input', () => {
        const input = screen.getByPlaceholderText('text');
        expect(input).toHaveDisplayValue('');
    });
});