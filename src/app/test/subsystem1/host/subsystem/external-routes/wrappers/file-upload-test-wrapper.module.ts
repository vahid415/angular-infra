import { NgModule } from '@angular/core';
import { FileUploadTestModule } from '../../../../lib/usecase/file-upload/file-upload-test.module';

@NgModule({
  exports: [FileUploadTestModule]
})
export class FileUploadTestWrapperModule { }
