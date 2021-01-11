import { EnvironmentDescriptor } from '@app/ng-infra';

export const environment: EnvironmentDescriptor = {
    name: 'prod',
    production: true,
    useFakeAuthenticationProvider: false,
    useZcoreSignin: false
};
