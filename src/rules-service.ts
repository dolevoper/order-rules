import { Rule, AllOfRule, ContainsRule, LargerThanRule } from './rules';

export async function fetch(): Promise<Rule[]> {
    return [
        new AllOfRule([
            new ContainsRule('email', 'gmail.com'),
            new LargerThanRule('total_price', 100)
        ])
    ];
}