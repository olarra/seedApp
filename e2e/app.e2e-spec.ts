import { AppPage } from './app.po';

describe('seed-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getButtonBarTitle()).toEqual('Select your action on a mission');
    // page.makepause();
  });
});
