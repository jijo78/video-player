import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Video from './Video';

describe('<Video />', function() {
    const defaultProps = {
        timeElapsed: '0',
        duration: '104',
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

        it('should call setMovedListener function for visible images', () => {
            console.log(component.debug());
            expect(defaultProps.onChange.callCount).to.be.equal(1);
        });
    });
});
