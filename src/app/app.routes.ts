import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'my-orders',
    loadComponent: () =>
      import('./components/orders/orders.component').then(
        (c) => c.OrdersComponent
      ),
  },
  {
    path: 'add-order',
    loadComponent: () =>
      import('./components/add-edit-order/add-edit-order.component').then(
        (c) => c.AddEditOrderComponent
      ),
  },
  {
    path: '',
    redirectTo: '/my-orders',
    pathMatch: 'full',
  },
];
