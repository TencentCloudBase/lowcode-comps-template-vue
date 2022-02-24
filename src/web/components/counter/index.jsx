import React from 'react';
import {WedaVueWrapper} from '@tcwd/vuera';
import counter from './counter.vue';

export default function Counter(props) {
    return (
        <WedaVueWrapper
            component={counter}
            {...props}
        />
    );
}
