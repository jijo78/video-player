import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Player from './Player';

describe('<Player />', function() {
    beforeEach(() => {
        global.window = global;
        window.addEventListener = () => {};
        window.setInterval = callback => {
            callback();
        };
        this.clock = sinon.useFakeTimers();
        sinon.stub(HTMLMediaElement.prototype, 'play');
    });
    afterEach(() => {
        window.removeEventListener = () => {};
        this.clock.restore();
    });
    const component = mount(<Player />);

    describe('<Player /> component', () => {
        it('should render Player', () => {
            component
                .find('PlayPause')
                .props()
                .onClick();

            console.log('component: ', component.find('PlayPause').props());

            expect(component.find('PlayPause').props().isUiHidde).to.equal(1);
        });
    });
});
