import { LearnDirectivesPage } from './app.po';

describe('learn-directives App', function() {
  let page: LearnDirectivesPage;

  beforeEach(() => {
    page = new LearnDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
