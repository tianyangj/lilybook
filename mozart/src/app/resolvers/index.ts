import { waitForSignIn, requireSignIn } from './authentication.resolver';

export let resolver = {
    waitForSignIn: waitForSignIn,
    requireSignIn: requireSignIn
};
