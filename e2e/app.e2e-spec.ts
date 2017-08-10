import { LaravelQuotePage } from './app.po';

describe('laravel-quote App', () => {
  let page: LaravelQuotePage;

  beforeEach(() => {
    page = new LaravelQuotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
