import { importFromString } from 'module-from-string';

test('do something', async () => {
    const module = await importFromString('export const TEST = "test";');
    expect(module.TEST).toEqual('test');
});
