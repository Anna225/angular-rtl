import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [ComposeComponent, InboxComponent, ReadMailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    CKEditorModule
  ]
})
export class EmailModule { }
