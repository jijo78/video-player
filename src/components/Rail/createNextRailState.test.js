import { assert } from 'chai';
import { stub } from 'sinon';
import createNextRailState from './createNextRailState';

const tileWidths = [200, 200, 200, 200, 200, 200];

describe('createNextRailState', () => {
    describe('isAtLeftEdge()', () => {
        it('should return true if index is 0', () => {
            const state = createNextRailState({
                index: 0
            });
            assert.isTrue(state.isAtLeftEdge);
        });

        it('should return false if index is not 0', () => {
            const state = createNextRailState({
                index: 1
            });
            assert.isFalse(state.isAtLeftEdge);
        });
    });
});
