import { SubsystemExternalRouteConfig } from '@navaco/mcb-infra';
import { SubsystemContextComponent, SubsystemRootComponent } from '../../../lib/public.api';

export default {
  usecasesRoutes: [{
    path: 'subsystem1',
    component: SubsystemContextComponent,
    children: [{
      path: '',
      component: SubsystemRootComponent,
      children: [
        {
          path: 'usecase1',
          loadChildren: () => import('./wrappers/usecase1-wrapper.module').then(x => x.Usecase1WrapperModule)
        },
        {
          path: 'lookup2-test',
          loadChildren: () => import('./wrappers/lookup2-test-wrapper.module').then(x => x.Lookup2TestWrapperModule)
        },
        {
          path: 'file-upload',
          loadChildren: () => import('./wrappers/file-upload-test-wrapper.module').then(x => x.FileUploadTestWrapperModule)
        },
        {
          path: 'master-form',
          loadChildren: () => import('./wrappers/master-form-wrapper.module').then(x => x.MasterFormWrapperModule)
        }
      ]
    }]
  }],
  stateProcessorsRoutes: [
    {
      id: '100',
      path: 'upload',
      titleKey: '',
      loadChildren: () => import('./wrappers/file-upload-test-wrapper.module').then(x => x.FileUploadTestWrapperModule)
    }
  ]
} as SubsystemExternalRouteConfig;
