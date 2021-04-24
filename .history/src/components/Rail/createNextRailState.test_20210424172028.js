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

        it('should return false if index is less than 0', () => {
            const state = createNextRailState({
                index: 1
            });
            assert.isFalse(state.isAtLeftEdge);
        });
    });

    describe('right edge functionality', () => {
        const railState = createNextRailState({});
        it('should return true if trackX is less than totalWidth', () => {
            stub(railState, 'trackX').value(0);
            stub(railState, 'minTrackX').value(1);

            assert.isTrue(railState.isAtRightEdge);
        });

        it('should return true if trackX equals totalWidth', () => {
            stub(railState, 'trackX').value(0);
            stub(railState, 'minTrackX').value(0);

            assert.isTrue(railState.isAtRightEdge);
        });

        it('should return true if trackX is greater than totalWidth', () => {
            stub(railState, 'trackX').value(1);
            stub(railState, 'minTrackX').value(0);

            assert.isFalse(railState.isAtRightEdge);
        });
    });
    describe('nextIndex', () => {
        it('should return 4 tiles on next index', () => {
            const onScreen = 4;
            const railState = createNextRailState({
                index: 0,
                viewportWidth: tileWidths[0] * onScreen,
                tileWidths
            });

            assert.equal(railState.nextIndex, onScreen - 1);
        });
    });
});
