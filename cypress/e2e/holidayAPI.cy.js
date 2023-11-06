describe.only("Given a user makes a default holiday request", () => {
  context("When no other parameters are included in the request body", () => {
    it("Then the default holidays list shall be returned", () => {
      cy.request({
        method: "GET",
        url: "/api/v2/holidays",
        body: {
          api_key: Cypress.env("TOKEN"),
          country: "us",
          year: "2023",
        },
      }).then((response) => {
        expect(response.body)
          .to.have.property("response")
          .to.have.property("holidays");
        expect(response.body.response.holidays).to.be.an("array");
        cy.log(
          "The number of items in Holidays is: " +
            response.body.response.holidays.length
        );
      });
    });
  });
});
