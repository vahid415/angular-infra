import { EnvironmentDescriptor } from '@app/ng-infra';

export const environment: EnvironmentDescriptor = {
    name: 'prod',
    production: true,
    useFakeAuthenticationProvider: true,
    useZcoreSignin: false,
    printerAgentAddress: 'http://10.12.126.2:9090'};
