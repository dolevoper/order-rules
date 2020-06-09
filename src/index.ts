import * as OrdersService from './orders-service';
import * as RulesService from './rules-service';
import * as ValidationService from './orders-validator';

async function app() {
    const [orders, rules] = await Promise.all([
        OrdersService.fetch(),
        RulesService.fetch()
    ]);

    return ValidationService.validate(orders, rules);
}

app().then(
    console.log,
    console.error
);