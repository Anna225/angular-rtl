import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { LabelsComponent } from './labels/labels.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { PreloadersComponent } from './preloaders/preloaders.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { WavesComponent } from './waves/waves.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AnimationsComponent } from './animations/animations.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { RangeSlidersComponent } from './range-sliders/range-sliders.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [

  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'animations',
    component: AnimationsComponent
  },
  {
    path: 'badges',
    component: BadgeComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'collapse',
    component: CollapseComponent
  },
  {
    path: 'dialogs',
    component: DialogsComponent
  },
  {
    path: 'labels',
    component: LabelsComponent
  },
  {
    path: 'list-group',
    component: ListGroupComponent
  },
  {
    path: 'media-object',
    component: MediaObjectComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'preloaders',
    component: PreloadersComponent
  },
  {
    path: 'progressbars',
    component: ProgressbarsComponent
  },
  {
    path: 'rangeslider',
    component: RangeSlidersComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'waves',
    component: WavesComponent
  },
  {
    path: 'helper-classes',
    component: HelperClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
