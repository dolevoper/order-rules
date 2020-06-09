export interface Order {
    id: number;
    total_price: number;
    email: string;
    currency: string;
    products: { title: string, price: number, quantity: number }[];
}

type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never
};
type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

export type OrderFieldOfType<T> = AllowedNames<Order, T>;