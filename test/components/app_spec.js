import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { App } from '../../src/components/app';

describe('<App>', () => {
    describe('render()', () => {
        const wrapper = shallow(<App />);
        
        it('renders an h1 tag', () => {
            expect(wrapper).to.have.exactly(1).descendants('h1');
        });
    });
});