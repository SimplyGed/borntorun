import { BorntorunPage } from './app.po';

describe('borntorun App', () => {
  let page: BorntorunPage;

  beforeEach(() => {
    page = new BorntorunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
