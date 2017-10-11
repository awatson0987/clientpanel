import { Cp2Page } from './app.po';

describe('cp2 App', () => {
  let page: Cp2Page;

  beforeEach(() => {
    page = new Cp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
