import pyramid from '.'


test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  pyramid(2);
  expect(logSpy.mock.calls[0][0]).toEqual(' # ');
  expect(logSpy.mock.calls[1][0]).toEqual('###');
  expect(logSpy.mock.calls.length).toEqual(2);
  logSpy.mockRestore();
});

test('prints a pryamid for n = 3', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  pyramid(3);
  expect(logSpy.mock.calls[0][0]).toEqual('  #  ');
  expect(logSpy.mock.calls[1][0]).toEqual(' ### ');
  expect(logSpy.mock.calls[2][0]).toEqual('#####');
  expect(logSpy.mock.calls.length).toEqual(3);
  logSpy.mockRestore();
});

test('prints a pryamid for n = 4', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  pyramid(4);
  expect(logSpy.mock.calls[0][0]).toEqual('   #   ');
  expect(logSpy.mock.calls[1][0]).toEqual('  ###  ');
  expect(logSpy.mock.calls[2][0]).toEqual(' ##### ');
  expect(logSpy.mock.calls[3][0]).toEqual('#######');
  expect(logSpy.mock.calls.length).toEqual(4);
  logSpy.mockRestore();
});
