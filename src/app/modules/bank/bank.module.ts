import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateBankComponent } from './components/create-bank/create-bank.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ViewBankComponent } from './components/view-bank/view-bank.component';

import {SharedModule} from '../../shared/shared.module';
import { ViewBankDetailComponent } from './components/view-bank-detail/view-bank-detail.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [CreateBankComponent, CreateQuestionComponent, ViewBankComponent, ViewBankDetailComponent],
  imports: [
    CommonModule,
    CoreModule, 
    ReactiveFormsModule,
    SharedModule,
    ClipboardModule
  ],
  exports: []
})
export class BankModule { }