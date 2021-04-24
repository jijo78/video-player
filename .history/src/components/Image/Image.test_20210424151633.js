import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import Image from './Image';

describe('<Image />', function() {
    beforeEach(() => {
        global.window = global;
        window.addEventListener = () => {};
        window.requestAnimationFrame = callback => {
            callback();
        };
    });
    afterEach(() => {
        window.removeEventListener = () => {};
    });
    const defaultProps = {
        alt: '',
        id: '79798',
        className: '',
        url: `79798.jpg`,
        setMovedListener: sinon.stub()
    };
    const component = mount(<Image {...defaultProps} />);

    describe('<Image /> component', () => {
        it('should render component', () => {
            expect(component.length).to.equal(1);
        });
        it('should only render Image on load', () => {
            expect(component.find('.imageBackground').props().style).to.equal(
                null
            );

            component
                .find('.imageImg')
                .props()
                .onLoad();

            component.update();
            expect(
                component.find('.imageBackground').props().style
            ).to.have.property(
                'backgroundImage',
                'url(/assets/images/79798.jpg)'
            );
        });
        it('should call setMovedListener function for visible images', () => {
            expect(defaultProps.setMovedListener.callCount).to.be.equal(3);
        });
    });
});
