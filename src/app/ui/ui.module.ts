import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { AnimationsComponent } from './animations/animations.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { LabelsComponent } from './labels/labels.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PreloadersComponent } from './preloaders/preloaders.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { WavesComponent } from './waves/waves.component';

@NgModule({
  declarations: [AlertsComponent, AnimationsComponent, BadgeComponent, ButtonsComponent, CardsComponent, CollapseComponent, DialogsComponent, HelperClassesComponent, LabelsComponent, ListGroupComponent, MediaObjectComponent, ModalComponent, NotificationsComponent, PreloadersComponent, ProgressbarsComponent, RangeSlidersComponent, TabsComponent, TypographyComponent, WavesComponent],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
