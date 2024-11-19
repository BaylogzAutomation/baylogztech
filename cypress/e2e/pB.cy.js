let pa
describe('PARA BANK TEST', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.fixture('paraSelector').then((par) => {
      pa = par
    })
  })

  it('Verify user can complete registeration', () => {
    cy.get(pa.registerButton).type(pa.standardUser)
  })

//   it('Verify user can login with registered username and password', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//   })

//   it('Verify user can open a new bank account', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.viewBackPack).click()
//     cy.get(pa.backToProduct).click()
//     cy.get(pa.viewBikeLight).click()
//     cy.get(pa.backToProduct).click()
//     cy.get(pa.viewBoltTshirt).click()
//     cy.get(pa.backToProduct).click()
//     cy.get(pa.viewFleeceJacket).click()
//     cy.get(pa.backToProduct).click()
//     cy.get(pa.viewOnesie).click()
//     cy.get(pa.backToProduct).click()
//     cy.get(pa.viewTshirtRed).click()
//     cy.get(pa.backToProduct).click()
//   })

//   it('Verify user can transfer funds', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.fleeceJacket).click()
//     cy.get(pa.onesie).click()
//     cy.get(pa.tshirtRed).click()
//   })

//   it('Verify user can pay bills', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.fleeceJacket).click()
//     cy.get(pa.onesie).click()
//     cy.get(pa.tshirtRed).click()
//     cy.get(pa.cartButton).click()
//   })

//   it('Verify user can find transaction', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.fleeceJacket).click()
//     cy.get(pa.onesie).click()
//     cy.get(pa.tshirtRed).click()
//     cy.get(pa.cartButton).click()
//     cy.get(pa.continueShopping).click()
//   })

//   it('Verify user can updated contact info', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.fleeceJacket).click()
//     cy.get(pa.onesie).click()
//     cy.get(pa.tshirtRed).click()
//     cy.get(pa.cartButton).click()
//     cy.get(pa.checkoutButton).click()
//   })

//   it('Verify user can request for loan', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.fleeceJacket).click()
//     cy.get(pa.onesie).click()
//     cy.get(pa.tshirtRed).click()
//     cy.get(pa.cartButton).click()
//     cy.get(pa.checkoutButton).click()
//     cy.get(pa.firstnameField).type(pa.firstName)
//     cy.get(pa.lastnameField).type(pa.lastName)
//     cy.get(pa.postalcodeField).type(pa.postalCode)
//   })

//   it('Verify user can logout successfully', () => {
//     cy.get(pa.usernameField).type(pa.standardUser)
//     cy.get(pa.passwordField).type(pa.password)
//     cy.get(pa.loginButton).click()
//     cy.get(pa.backPack).click()
//     cy.get(pa.bikeLight).click()
//     cy.get(pa.boltTshirt).click()
//     cy.get(pa.logoutButton).click()
//   })

})