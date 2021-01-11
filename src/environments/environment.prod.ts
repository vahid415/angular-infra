import { EnvironmentDescriptor } from '@navaco/mcb-infra';

export const environment: EnvironmentDescriptor = {
    name: 'prod',
    production: true,
    useFakeAuthenticationProvider: false,
    useZcoreSignin: false
};
