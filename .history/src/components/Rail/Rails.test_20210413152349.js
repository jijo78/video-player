import React from 'react';
import { expect, assert } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import Rail from './Rail';
const mockData = [
    {
        id: '3b47f17864b34a2687aabb0f25ea3e3e',
        title: 'AEK v FC Bayern München',
        isPromo: false
    },
    {
        id: '91fded81c9fe4e73aeced7b821039ad4',
        title: 'NFL Network',
        isPromo: false
    },
    {
        id: '294a3ebc66ec4a1883542468d325f151',
        title: 'World Series - Dodgers @ Red Sox',
        isPromo: false
    }
];
describe('<Rail />', function() {
    const component = mount(<Rail tiles={mockData} />);
    const now = new Date();
    let clock;
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        sandbox.restore();
        clock.restore();
    });
    describe('<Rail /> component', () => {
        it('should render Rail', () => {
            expect(component.length).to.equal(1);
        });
        it('should render Tiles', () => {
            expect(component.find('[data-test="tile-list"]').length).to.equal(
                3
            );
        });
    });
    describe('<Rail /> tile buttons', () => {
        it('should render right button', () => {
            expect(
                component.find('[data-test="button-right"]').length
            ).to.equal(1);
        });
        it('should render left button', () => {
            expect(component.find('[data-test="button-left"]').length).to.equal(
                1
            );
        });

        it('becomes visible after being clicked on', async () => {
            const button = component.find('[data-test="button-right"]').first();

            button.simulate('click');
            component.update();
            button.simulate('click');
            console.log('component.update(): ', component.debug());

            expect(component.hasClass('rail-at-right-edge')).to.be.true;
        });
    });
});
