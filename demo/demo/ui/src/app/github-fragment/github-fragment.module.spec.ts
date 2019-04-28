import { GithubFragmentModule } from './github-fragment.module';

describe('GithubFragmentModule', () => {
  let githubFragmentModule: GithubFragmentModule;

  beforeEach(() => {
    githubFragmentModule = new GithubFragmentModule();
  });

  it('should create an instance', () => {
    expect(githubFragmentModule).toBeTruthy();
  });
});
