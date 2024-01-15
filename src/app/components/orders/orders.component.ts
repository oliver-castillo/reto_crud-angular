import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  public ordersResults$!: Array<Order>;

  constructor(private service: OrderService) {
    this.ordersResults$ = new Array<Order>();
  }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe((orders) => {
      this.ordersResults$ = orders;
      console.log(orders);
    });
  }
}
