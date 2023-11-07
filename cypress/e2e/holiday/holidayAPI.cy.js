import { qase } from "cypress-qase-reporter/dist/mocha";
/*
 * As an end user
 * I want to make a request to the holiday API
 * using a number of different parameters and values
 */
describe("Given a user makes a holiday API request", () => {
  context(
    "When we request U.S. national holiday data for the current year",
    () => {
      qase(
        [2],
        it("Then holiday data for the U.S. shall be returned for the current year HAPI-2", () => {
          cy.request({
            method: "GET",
            url: "/holidays",
            body: {
              api_key: Cypress.env("TOKEN"),
              country: "us",
              type: "national",
              year: "2023",
            },
          }).then((response) => {
            expect(response.body)
              .to.have.property("response")
              .to.have.property("holidays");
            expect(response.body.response.holidays)
              .to.be.an("array")
              .to.have.lengthOf(13);
            // cy.log(
            //   "The number of items in Holidays is: " +
            //     response.body.response.holidays.length
            // );
          });
        })
      );
    }
  );

  context("When we request US National New Years holiday data", () => {
    qase(
      [1],
      it("Then New Year's Day holiday data for the U.S. shall be returned for the current year HAPI-1", () => {
        cy.request({
          method: "GET",
          url: "/holidays",
          body: {
            api_key: Cypress.env("TOKEN"),
            country: "us",
            type: "national",
            day: "01",
            month: "01",
            year: "2023",
          },
        }).then((response) => {
          let holiday = response.body.response.holidays;
          expect(holiday).to.have.lengthOf(1);
          expect(holiday[0].name).to.be.eq("New Year's Day");
        });
      })
    );
  });
});
