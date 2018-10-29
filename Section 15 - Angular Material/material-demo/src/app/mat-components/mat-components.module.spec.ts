import { MatComponentsModule } from './mat-components.module';

describe('MatComponentsModule', () => {
  let matComponentsModule: MatComponentsModule;

  beforeEach(() => {
    matComponentsModule = new MatComponentsModule();
  });

  it('should create an instance', () => {
    expect(matComponentsModule).toBeTruthy();
  });
});
