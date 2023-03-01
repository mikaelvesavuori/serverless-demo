import test from 'ava';

import { greet } from '../src/clean/usecases/greet';

test('It should greet a user with empty string input', async (t: any) => {
  const expected = 'Hi there!';

  const response = await greet('');

  t.is(response, expected);
});

test('It should greet a user with a provided non-zero digit name', async (t: any) => {
  const name = 'Jeremiah';
  const expected = `Hi ${name}!`;

  const response = await greet(name);

  t.is(response, expected);
});
