import { Order } from '../order';

export interface Rule {
    validate(order: Order): boolean;
}