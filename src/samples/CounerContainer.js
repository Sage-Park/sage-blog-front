import React from "react";
import {render, fireEvent} from "@testing-library/react";
import configureMockStore from 'redux-mock-store';

describe('CounterContainer', () => {
    let component = null;
    let buttons = null;
    const mockStore = configureMockStore();

    let store = mockStore({
        counter: {
            number: 0
        }
    })

    it('renders properly', function () {
        const context = {store}




    });
})