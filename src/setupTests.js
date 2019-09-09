import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode:'deep' }));

// React 16 Enzyme Adapter
configure({ adapter: new Adapter() });
