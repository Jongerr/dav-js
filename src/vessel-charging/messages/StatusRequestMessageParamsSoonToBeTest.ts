import MessageParams from './StatusRequestMessageParams';

describe('MessageParams class', () => {
  const messageParams = new MessageParams(); // <-- Causing TypeError
  const serializedMessageParams: any = {
    type: 'status_request_message',
    protocol: 'boat_charging',
    ttl: undefined,
  };

  describe('serialize method', () => {
    it('should return serialized message params object with the current values', () => {
      expect(messageParams.serialize()).toEqual(serializedMessageParams);
    });
  });

  describe('deserialize method', () => {
    it('should return MessageParams instance with the current parameters', () => {
      const messageParamsObject = new MessageParams();
      messageParamsObject.deserialize(serializedMessageParams);
      expect(messageParamsObject).toEqual(messageParams);
    });
  });
});
