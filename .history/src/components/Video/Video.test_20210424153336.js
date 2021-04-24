import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Video from './Video';

describe('<Video />', function() {
    beforeEach(() => {
        sinon.spy(window.HTMLVideoElement.prototype.call, 'currentTime');
    });

    const defaultProps = {
        timeElapsed: '0',
        duration: '104',
        setRef: sinon.stub(React, 'useRef').returns({ current: null }),
        onChange: sinon.stub()
    };
    const component = mount(<Video {...defaultProps} />);

    describe('<Video /> component', () => {
        it('should render Video', () => {
            expect(component.length).to.equal(1);
        });
        it('should render Elapsed time and format time in HH:MM:SS', () => {
            const elapsed = component.find('[data-test="elapsed-time"]');
            expect(elapsed.length).to.equal(1);
            expect(elapsed.text()).to.be.eql('00:00:00');
        });
        it('should render Duration and format time in HH:MM:SS', () => {
            const duration = component.find('[data-test="duration-time"]');

            expect(duration.length).to.equal(1);
            expect(duration.text()).to.be.eql('00:01:44');
        });

        it('should call onChange on range input', () => {
            console.log(component.find('[type="range"]').props().value);
            const event = {
                target: { value: '200' }
            };

            component.find('[type="range"]').simulate('change', event);
            component.update();
            console.log(component.debug());
            expect(component.find('[type="range"]').props().value).to.be.equal(
                1
            );
        });
    });
});
