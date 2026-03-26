import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { ArchitecturePageComponent } from './pages/architecture/architecture-page.component';
import { UserStoriesPageComponent } from './pages/user-stories/user-stories-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'docs/architecture' },
      { path: 'docs/architecture', component: ArchitecturePageComponent },
      { path: 'docs/user-stories', component: UserStoriesPageComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
