import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Jacob Hollis',
        loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        title: 'About | Jacob Hollis',
        loadComponent: () => import('./pages/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'skills',
        title: 'Skills | Jacob Hollis',
        loadComponent: () => import('./pages/skills.component').then((m) => m.SkillsComponent),
      },
      {
        path: 'projects',
        title: 'Projects | Jacob Hollis',
        loadComponent: () => import('./pages/projects.component').then((m) => m.ProjectsComponent),
      },
      {
        path: 'contact',
        title: 'Contact | Jacob Hollis',
        loadComponent: () => import('./pages/contact.component').then((m) => m.ContactComponent),
      },
      // Unknown URLs go home instead of showing a blank page.
      { path: '**', redirectTo: '' },
    ],
  },
];
