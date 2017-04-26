export const getA = () => {
    return 'a';
}

import { getB } from './utils.jsx';
export const getBFromUtils = getB;