import login from "../fixtures/login.json"

describe('login', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login correto', () => {
    cy.get('input[name="username"]').type(login.admin.user)
    cy.get('input[name="password"]').type(login.admin.password)
    cy.get('button[type="submit"]').click()
    cy.get('div[id="app"]').should('be.visible')
  })

  it('Login incorreto', () => {
    cy.get('input[name="username"]').type(login.invalidUser.user)
    cy.get('input[name="password"]').type(login.invalidUser.password)
    cy.get('button[type="submit"]').click()
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]')
    .contains('Invalid credentials')
  })

  it('Valida o funcionamento do botão "Forgot your password?"', () => {
    cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click({force:true})
    cy.get('button[type="button"]')
      .should('be.visible')
  })

})