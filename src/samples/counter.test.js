import counter, * as counterActions from './counter';

describe('counter', () => {
    describe('actions', () => {
        it('sould create actions', function () {
            const expectedActions = [
                {type: 'counter/INCREASE'},
                {type: 'counter/DECREASE'}
            ];
            const actions = [
                counterActions.increase(),
                counterActions.decrease()
            ];

            expect(actions).toEqual(expectedActions);
        });
    })

    describe('reducer', () => {
        let state = counter(undefined, {});

        it('should return the initialState', function () {
            expect(state).toHaveProperty('number', 0);
        });

        it('should increase', function () {
            state = counter(state, counterActions.increase());
            expect(state).toHaveProperty('number', 1);
        });

        it('should decrease', function () {
            state = counter(state, counterActions.decrease());
            expect(state).toHaveProperty('number', 0);
        });

    })
})