let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});


describe("Github page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

    test("The h1 header content'", async () => {
      jest.setTimeout(7000);
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();
      expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
    });

    test("The first link attribute", async () => {
      jest.setTimeout(6000);
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    });

    test("The page contains Sign in button", async () => {
      jest.setTimeout(7000);
      const btnSelector = " a[class='btn-mktg btn-large-mktg btn-muted-mktg']";
      await page.waitForSelector(btnSelector, {
       visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Sign up for free");
    });
});


describe("Github Pricing page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/pricing");
  });

    test("Title prising page'", async () => {
      jest.setTimeout(7000);
      const actual = await page.title();
      expect(actual).toEqual("Pricing · Plans for every developer · GitHub");
    });

    test("Visibility of the header page'", async () => {
      jest.setTimeout(7000);
      const actual = await page.$eval(
        "h1[class='h2-mktg']",
        (link) => link.textContent);
      expect(actual).toContain("Get the complete developer platform");
    });
})


  test("Title issues page'", async () => {
    await page.goto("https://github.com/features/issues");
    jest.setTimeout(7000);
    const actual = await page.title();
    expect(actual).toEqual(
      "GitHub Issues · Project planning for developers · GitHub");
   });







