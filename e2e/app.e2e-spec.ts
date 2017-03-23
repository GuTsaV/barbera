import { BarberaPage } from './app.po';

describe('barbera App', () => {
  let page: BarberaPage;

  beforeEach(() => {
    page = new BarberaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
