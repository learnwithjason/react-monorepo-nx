describe('PageHeader', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=pageheader--primary&args=siteTitle:Learn+With+Jason'
    )
  );

  it('should show the component', () => {
    cy.get('[data-test-id="pageheader"]').should(
      'contain.text',
      'Learn With Jason'
    );
  });
});
