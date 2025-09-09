import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'tasks',
        loadComponent: () => import('./task-list/task-list').then(m => m.TaskList)
    },
    {
        path: 'users',
        loadComponent: () => import('./user-list/user-list').then(m => m.UserList)
    },
    { path: '**', redirectTo: 'login' }
];