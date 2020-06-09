import { Rule } from './rule';
import { Order, OrderFieldOfType } from '../order';

export class LargerThanRule implements Rule {
    constructor(
        private fieldName: OrderFieldOfType<number>,
        private value: number
    ) {}

    validate(order: Order) {
        return order[this.fieldName] > this.value;
    }
}