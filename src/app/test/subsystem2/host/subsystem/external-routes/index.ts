import { SubsystemContextComponent } from './../../../lib/subsystem/subsystem-context.component';
import { SubsystemExternalRouteConfig } from '@app/ng-infra';
import { SubsystemRootComponent } from '../../../lib/subsystem/subsystem-root.component';

export default {
  usecasesRoutes: [
    {
      path: 'subsystem2',
      component: SubsystemContextComponent,
      children: [
        {
          path: '',
          component: SubsystemRootComponent,
          children: [
            {
              path: 'usecase1',
              loadChildren: () => import('./wrappers/usecase1-wrapper.module').then(x => x.Usecase1WrapperModule)
            },
            {
              path: 'printer-test',
              loadChildren: () => import('./wrappers/printer-test-wrapper.module').then(x => x.PrinterTestWrapperModule)
            },
            {
              path: 'zero-test',
              loadChildren: () => import('./wrappers/zero-test-wrapper.module').then(x => x.ZeroTestWrapperModule)
            },
          ]
        }
      ]
    }],
  stateProcessorsRoutes: []
} as SubsystemExternalRouteConfig;
