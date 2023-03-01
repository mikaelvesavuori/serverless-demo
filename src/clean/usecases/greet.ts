import { InputDTO } from '../interfaces';

import { emitEvent } from '../application/emitEvent';

/**
 * @description The actual business logic.
 *
 * If we get a name then we'll welcome them, else we'll give a general greeting.
 */
export async function greet(name?: InputDTO) {
  const phrase = name ? `Hi ${name}!` : 'Hi there!';

  if (process.env.NODE_ENV !== 'test') await emitEvent(name || 'UNKNOWN');

  return phrase;
}
