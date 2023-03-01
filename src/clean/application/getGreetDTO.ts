import { InputDTO } from '../interfaces';

/**
 * @description Retrieves the expected input in a well-defined shape.
 */
export function getGreetDTO(event: any): InputDTO {
  const body: Record<string, any> =
    event && event?.body && typeof event?.body === 'string' ? JSON.parse(event?.body) : event?.body;

  return body?.name || '';
}
