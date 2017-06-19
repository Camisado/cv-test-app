import { CvTestAppPage } from './app.po';

describe('cv-test-app App', () => {
  let page: CvTestAppPage;

  beforeEach(() => {
    page = new CvTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
