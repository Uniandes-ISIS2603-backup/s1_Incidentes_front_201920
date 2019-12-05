import { TecnicoModule } from './tecnico.module';

describe('TecnicoModule', () => {
  let tecnicoModule: TecnicoModule;

  beforeEach(() => {
    tecnicoModule = new TecnicoModule();
  });

  it('should create an instance', () => {
    expect(tecnicoModule).toBeTruthy();
  });
});
