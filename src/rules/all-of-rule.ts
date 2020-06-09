import { Rule } from './rule';
import { Order } from '../order';

export class AllOfRule implements Rule {
    constructor(
        private rules: Rule[]
    ) {}

    validate(order: Order) {
        return this.rules.every(rule => rule.validate(order));
    }
}