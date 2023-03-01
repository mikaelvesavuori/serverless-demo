import { EventBridgeClient, PutEventsCommand } from '@aws-sdk/client-eventbridge';

import { EventBridgeEvent } from '../../interfaces';

export class EventBridgeEmitter {
  private readonly eventBridge: EventBridgeClient;

  constructor(region: string) {
    this.eventBridge = new EventBridgeClient({ region });
  }

  public async emit(event: EventBridgeEvent): Promise<void> {
    const command = new PutEventsCommand({ Entries: [event] });
    if (process.env.NODE_ENV !== 'test') await this.eventBridge.send(command);
  }
}
