import { PokemonModule } from './pokemon.module';

describe('PokemonModule', () => {
  let pokemonModule: PokemonModule;

  beforeEach(() => {
    pokemonModule = new PokemonModule();
  });

  it('should create an instance', () => {
    expect(pokemonModule).toBeTruthy();
  });
});
