import { Order } from './order';
import { Rule } from './rules';

export function validate(orders: Order[], rules: Rule[]) {
    return orders
        .filter(order => rules.every(rule => rule.validate(order)))
        .length;
}