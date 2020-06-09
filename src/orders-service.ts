import { Order } from './order';

export async function fetch(): Promise<Order[]> {
    const ordersRaw: unknown = (await import('../array.json')).default;

    return (ordersRaw as string[]).map(order => JSON.parse(order));
}