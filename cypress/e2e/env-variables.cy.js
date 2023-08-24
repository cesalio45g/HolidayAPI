// holiday api test file
describe("Give I have an Environment Variables", () => {
  it("Then the dotenv plug-in shall display .env variables", () => {
    cy.log("Authentication Token: " + Cypress.env("TOKEN"));
  });

  it("Then cypress.env.json file shall display environment variables", () => {
    cy.log("Authentication Token: " + Cypress.env("TOKEN2"));
  });

  it("Then hard coded .env variables shall display", () => {
    cy.log("My Favorite Holiday is : " + Cypress.env("HOLIDAY"));
  });
});
