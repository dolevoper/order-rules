import { Rule } from './rule';
import { OrderFieldOfType, Order } from '../order';

export class ContainsRule implements Rule {
    constructor(
        private fieldName: OrderFieldOfType<string>,
        private value: string
    ) {}

    validate(order: Order) {
        return order[this.fieldName].toLowerCase().includes(this.value.toLowerCase());
    }
}