import { FormDemoModule } from './form-demo.module';

describe('FormDemoModule', () => {
  let formDemoModule: FormDemoModule;

  beforeEach(() => {
    formDemoModule = new FormDemoModule();
  });

  it('should create an instance', () => {
    expect(formDemoModule).toBeTruthy();
  });
});
