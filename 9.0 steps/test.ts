import steps from '.'


test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {

  const logSpy = jest.spyOn(global.console, 'log');
  steps(1);

  expect(logSpy.mock.calls[0][0]).toEqual('#');
  expect(logSpy.mock.calls.length).toEqual(1);
  logSpy.mockRestore();
});

test('steps called with n = 2', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  steps(2);
  expect(logSpy.mock.calls[0][0]).toEqual('# ');
  expect(logSpy.mock.calls[1][0]).toEqual('##');
  expect(logSpy.mock.calls.length).toEqual(2);
  logSpy.mockRestore();
});

test('steps called with n = 3', () => {
  const logSpy = jest.spyOn(global.console, 'log');
  steps(3);
  expect(logSpy.mock.calls[0][0]).toEqual('#  ');
  expect(logSpy.mock.calls[1][0]).toEqual('## ');
  expect(logSpy.mock.calls[2][0]).toEqual('###');
  expect(logSpy.mock.calls.length).toEqual(3);
  logSpy.mockRestore();
});
