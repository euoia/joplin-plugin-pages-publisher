import { container } from 'tsyringe';
import type { GeneratingProgress } from '../../domain/model/Publishing';
import { generatorToken } from '../../domain/service/PublishService';
export interface GeneratorRequest {
  event: 'generateSite' | 'getGeneratingProgress';
}
declare const webviewApi: {
  postMessage: <T = void>(payload: GeneratorRequest) => Promise<T>;
};

container.registerInstance(generatorToken, {
  generateSite() {
    return webviewApi.postMessage<string[]>({ event: 'generateSite' });
  },

  getProgress() {
    return webviewApi.postMessage<GeneratingProgress>({ event: 'getGeneratingProgress' });
  },
});
