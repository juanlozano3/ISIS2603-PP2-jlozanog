import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaveComponent } from './nave.component';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NaveComponent, NaveDetailComponent],
  exports : [NaveComponent]
})
export class NaveModule { }
