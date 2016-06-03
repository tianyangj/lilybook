import { getComposition } from './composition.resolver';
import { waitForSignIn, requireSignIn } from './authentication.resolver';

export let resolver = {
    getComposition: getComposition,
    waitForSignIn: waitForSignIn,
    requireSignIn: requireSignIn
};
