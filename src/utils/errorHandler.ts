import { errorDescriptions } from '../fixtures/errorDescriptions';

export class ErrorHandler {
  static toString(err: unknown) {
    if (err instanceof Error) return err.message;

    return String(err);
  }

  static getDescriptionByError(err: string) {
    if (err.includes('404')) return errorDescriptions.notFound;

    return errorDescriptions.default;
  }
}
