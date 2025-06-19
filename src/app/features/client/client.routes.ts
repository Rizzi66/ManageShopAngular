import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const CLIENT_ROUTES: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: OrdersComponent },
];
