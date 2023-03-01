import { InputDTO } from '../interfaces';

import { EventBridgeEmitter } from '../infrastructure/emitters/eventBridge';

/**
 * @description Emit a greeting event with EventBridge.
 */
export async function emitEvent(name: InputDTO) {
  const region = process.env.REGION || '';
  const emitter = new EventBridgeEmitter(region);
  await emitter.emit({
    EventBusName: process.env.BUS_NAME || 'default',
    Source: 'greeter',
    DetailType: 'greeter.greeting',
    Detail: JSON.stringify({
      metadata: {
        timestamp: Date.now().toString()
      },
      data: {
        name: name
      }
    })
  });
}
