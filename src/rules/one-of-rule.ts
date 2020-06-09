import { Rule } from './rule';
import { Order } from '../order';

export class OneOfRule implements Rule {
    constructor(
        private rules: Rule[]
    ) {}

    validate(order: Order) {
        return this.rules.some(rule => rule.validate(order));
    }
}