import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Player from './Player';

describe('<Player />', function() {
    const defaultProps = {
        timeElapsed: '0',
        duration: '104'
    };
    const component = mount(<Player {...defaultProps} />);

    describe('<Player /> component', () => {
        it('should render Player', () => {
            expect(component.length).to.equal(1);
            console.log('component: ', component.debug());
        });
    });
});
