const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const parties = require("./src/data/guestList.json");
  const invitationPageTemplate = path.resolve(
    `src/templates/invitationPage.js`
  );

  parties.forEach((party) => {
    createPage({
      path: `/invitation/${party.partyName}`,
      component: invitationPageTemplate,
      context: {
        partyName: party.partyName,
        partyMembers: party.partyMembers,
        displayName: party.displayName,
        slug: `/invitation/${party.partyName}`,
      },
    });
  });
};
