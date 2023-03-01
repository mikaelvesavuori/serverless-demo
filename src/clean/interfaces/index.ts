export type InputDTO = string;

export type EventBridgeEvent = {
  EventBusName: string;
  Source: string;
  DetailType: string;
  Detail: string;
};
