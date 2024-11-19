import ParaBankLogs from '../POM/parabankLogs'
const para = new ParaBankLogs

describe('PARABANK TEST',()=>{
    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.logo').should('be.visible')
    })  
    
    it('REGISTER',()=>{
        para.setRegistration()
    })

    it('LOGIN',()=>{
        para.setLogin()
    })

    it('OPEN NEW ACCOUNT',()=>{
        para.setOpenAccount()
    })


    it('TRANSFER FUNDS',()=>{
        para.setTransferFunds()
    })

    it('PAY BILLS',()=>{
        para.setPayBills()
    })

    it('UPDATE CONTACT INFO',()=>{
        para.setUpdateContactInfo()
    })

    it('REQUEST FOR LOAN',()=>{
        para.setRequestForLoan()
    })

    it('FIND TRANSACTION',()=>{
        para.setFindTransaction()
    })

    it('LOG OUT',()=>{
        para.setLogout()
    })

})