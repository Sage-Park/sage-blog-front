import React from "react";
import {fireEvent, getByPlaceholderText, render, screen} from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm />', () => {
    const setup = (props = {}) => {
        render(<TodoForm {...props} />);

        const input = screen.getByPlaceholderText('할 일을 입력하세요.');
        const button = screen.getByText('등록');

        return {
            input, button
        }
    }

    it('has input and a button', function () {
        setup();
        screen.getByPlaceholderText('할 일을 입력하세요.');
        screen.getByText('등록');
    });

    it('changes input', function () {
        const {input} = setup();

        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });

        expect(input).toHaveAttribute('value', 'TDD 배우기');

    });

    it('calls onInsert and clears input', function () {
        const onInsert = jest.fn();

        const {input, button} = setup({onInsert})

        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        })

        fireEvent.click(button);

        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });
});