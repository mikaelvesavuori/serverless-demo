import test from 'ava';

import { getGreetDTO } from '../src/clean/application/getGreetDTO';

test('It should get a provided name from an input payload', (t: any) => {
  const expected = 'Jeremiah';

  const response = getGreetDTO({ body: { name: expected } });

  t.is(response, expected);
});

test('It should return an empty string when there is no match in the provided object', (t: any) => {
  const expected = '';

  const response = getGreetDTO({});

  t.is(response, expected);
});
