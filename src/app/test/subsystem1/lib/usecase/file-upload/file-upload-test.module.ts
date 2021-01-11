import { NgModule } from '@angular/core';
import { InfrastructureModule } from '@app/ng-infra';
import { RouterModule } from '@angular/router';
import { FileUploadTestComponent } from './file-upload-test.component';

@NgModule({
  declarations: [
    FileUploadTestComponent
  ],
  imports: [
    InfrastructureModule,
    RouterModule.forChild([{
        path: '',
        component: FileUploadTestComponent
    }])
  ]
})
export class FileUploadTestModule {
}
