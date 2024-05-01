import { EventEmitter } from 'node:events';
import { EIP1193EventMap } from 'viem';

export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Helper to promisify waiting for given emitter's emitted event
 *
 * @param eventEmitter - instance of an {@link EventEmitter}
 */
export const waitForEmittedEvent = (eventEmitter: EventEmitter) => {
  /**
   * Helper to promisify waiting for an emitted event
   *
   * @param event - event name
   * @param timeoutMs - timeout in milliseconds
   */
  const waitForEvent = async <Event extends keyof EIP1193EventMap>(
    event: Event,
    timeoutMs = 3000,
  ): Promise<Parameters<EIP1193EventMap[Event]>[number]> => {
    return new Promise((_resolve: (...args: any) => void, _reject) => {
      let timeout: NodeJS.Timeout | undefined;
      let resolve: (...args: any[]) => void;

      const reject = () => {
        eventEmitter.removeListener(event, resolve);
        _reject(`Timeout waiting for event '${event}'`);
      };

      timeout = setTimeout(reject, timeoutMs);

      resolve = (...args: any[]) => {
        clearTimeout(timeout);
        _resolve(...args);
      };

      eventEmitter.on(event, resolve);
    });
  };

  return waitForEvent;
};
