import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { NgGridTooltipDirective } from './grid-tooltip.directive';


const DECLARATIONS = [
  ImagePipe,
  NgGridTooltipDirective
];
@NgModule({
  declarations: DECLARATIONS,

  imports: [
    CommonModule
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class UtilsModule {
}
