class ParaBankLogs{

    //selector for register 

    registerButton = "#loginPanel > :nth-child(3) > a"
    firstnameField = "#customer\\.firstName"
    regFirstname = 'Toyib'
    lastnameField = '#customer\\.lastName'
    regLastname = 'Balogun'
    addressField = '#customer\\.address\\.street'
    regAddress = '259 Broadhead Ave'
    cityField = '#customer\\.address\\.city'
    regCity = 'Jamestown'
    stateField = '#customer\\.address\\.state'
    regState = 'NY'
    zipcodeField = '#customer\\.address\\.zipCode'
    regZipcode = '14701'
    phoneField = '#customer\\.phoneNumber'
    regPhone = '3869312877'
    ssnField = '#customer\\.ssn'
    regSSN = '621-61-2216'
    cusUsernameField = '#customer\\.username'
    regUsername = 'baylogzautomationsq'
    cusPasswordField = '#customer\\.password'
    regPassword = 'Testing234%'
    cusPasswordConfirmField = '#repeatedPassword'
    cusRegisterButton = '[colspan="2"] > .button'
    
    //selector for login

    usernameField = ':nth-child(2) > .input'
    passwordField = ':nth-child(4) > .input'
    loginButton = ':nth-child(5) > .button'

    // selector for new account

    openNewAccount = '#leftPanel > ul > :nth-child(1) > a'
    typeofAccountDropdown = '#type'
    typeofAccount = 'SAVINGS'
    openNewAccountButton = 'form > div > .button'

    // //selector for transfer funds 

    transferFundsButton = '#leftPanel > ul > :nth-child(3) > a'
    amountField = '#amount'
    transferAmount = '250'
    // fromAccountField = 
    toAccountField = '#toAccountId'
    toAccountNumber = '13788'
    transferButton = ':nth-child(4) > .button'

    // // //selector for pay bills
    
    paybillsButton = '#leftPanel > ul > :nth-child(4) > a'
    payeeNameField = ':nth-child(1) > [width="20%"] > .input'
    payeeName = 'Olawale'
    payeeAddressField = ':nth-child(2) > [width="20%"] > .input'
    payeeAddress = '2125 W Pioneer Pkwy'
    payeeCityField = ':nth-child(3) > [width="20%"] > .input'
    payeeCity = 'Grand Prairie'
    payeeStateField = ':nth-child(4) > [width="20%"] > .input'
    payeeState = 'Texas'
    payeeZipcodeField = ':nth-child(5) > [width="20%"] > .input'
    payeeZipcode = '75051'
    payeePhoneField = '[name="payee.phoneNumber"]'
    payeePhone = '5179277872'
    payeeAccountField = '[name="payee.accountNumber"]'
    payeeAccount = '12093'
    payeeVerifyAccountField = '[name="verifyAccount"]'
    payeeAmountField = '[name="amount"]'
    payeeAmount = '100'
    payeeFromAccountField = '[name="fromAccountId"]'
    payeeFromAccount = '13788'
    payeeSendPaymentButton = ':nth-child(14) > :nth-child(2) > .button'

    // //selector for Update Contact Info 

    updateContactButton = '#leftPanel > ul > :nth-child(6) > a'
    updateAddressField = '#customer\\.address\\.street'
    updateAddress = '625 Windrift Lane'
    updateCityField = '#customer\\.address\\.city'
    updateCity = 'Forth Wayne'
    updateZipcodeField = '#customer\\.address\\.zipCode'
    updateZipcode = '75051'
    updateProfileButton = '[colspan="2"] > .button'

    // //selector for Request for Loan
    
    requestLoanButton = '#leftPanel > ul > :nth-child(7) > a'
    loanAmountField = '#amount'
    loanAmount = '200'
    downPaymentField = '#downPayment'
    downPayment = '20'
    confirmLoanButton = '[colspan="2"] > .button'

    // //selector for Find Transaction 

    findTransButton = '#leftPanel > ul > :nth-child(5) > a'
    findAccountID = '#accountId'
    selectAccountID = '13788'
    findByAmountField = '#amount'
    findByAmount = '100'
    findTrans = '#findByAmount'
    
    findByIDField = '#transactionId'
    findByID = '19003'
    findByDateField = 'transactionDate'
    findByDate = '11-15-2024'
    findByDateRangeField1 = '#fromDate'
    findByDateRange1 = '11-15-2024'
    findByDateRangeField2 = '#toDate'
    findByDateRange2 = '11-16-2024'


    // //selector for Logout

    logoutButton = '#leftPanel > ul > :nth-child(8) > a'
    




    setRegistration(){
        cy.get(this.registerButton).click().should('be.visible')
        cy.get(this.firstnameField).type(this.regFirstname).should('be.empty')
        cy.get(this.lastnameField).type(this.regLastname).should('be.visible')
        cy.get(this.addressField).type(this.regAddress).should('be.empty')
        cy.get(this.cityField).type(this.regCity).should('be.empty')
        cy.get(this.stateField).type(this.regState).should('be.visible')
        cy.get(this.zipcodeField).type(this.regZipcode).should('be.empty')
        cy.get(this.phoneField).type(this.regPhone).should('be.empty')
        cy.get(this.ssnField).type(this.regSSN).should('be.visible')
        cy.get(this.cusUsernameField).type(this.regUsername).should('be.empty')
        cy.get(this.cusPasswordField).type(this.regPassword).should('be.visible')
        cy.get(this.cusPasswordConfirmField).type(this.regPassword).should('be.empty')
        cy.get(this.cusRegisterButton).click()
    }

    setLogin(){
        cy.get(this.usernameField).type(this.regUsername).should('exist')
        cy.get(this.passwordField).type(this.regPassword).should('be.visible')
        cy.get(this.loginButton).click().should('be.exist')
    }

    setOpenAccount(){
        cy.get(this.usernameField).type(this.regUsername).should('be.visible')
        cy.get(this.passwordField).type(this.regPassword).should('exist')
        cy.get(this.loginButton).click().should('be.visible')
        cy.get(this.openNewAccount).click().should('be.visible')
        cy.get(this.typeofAccountDropdown).select(this.typeofAccount).should('exist')
        cy.wait(500)
        cy.get(this.openNewAccountButton).should('exist').click()
    }

    setTransferFunds(){
        cy.get(this.usernameField).type(this.regUsername).should('be.visible')
        cy.get(this.passwordField).type(this.regPassword).should('exist')
        cy.get(this.loginButton).click().should('exist')
        cy.get(this.transferFundsButton).click().should('be.visible')
        cy.get(this.amountField).type(this.transferAmount)
        cy.get(this.toAccountField).select(this.toAccountNumber).should('exist')
        cy.get(this.transferButton).click().should('be.visible')
    }

    setPayBills(){
        cy.get(this.usernameField).type(this.regUsername).should('exist')
        cy.get(this.passwordField).type(this.regPassword).should('be.visible')
        cy.get(this.loginButton).click().should('exist')
        cy.get(this.paybillsButton).click().should('be.visible')
        cy.get(this.payeeNameField).type(this.payeeName).should('be.visible')
        cy.get(this.payeeAddressField).type(this.payeeAddress).should('exist')
        cy.get(this.payeeCityField).type(this.payeeCity).should('be.visible')
        cy.get(this.payeeStateField).type(this.payeeState).should('be.visible')
        cy.get(this.payeeZipcodeField).type(this.payeeZipcode).should('exist')
        cy.get(this.payeePhoneField).type(this.payeePhone).should('be.visible')
        cy.get(this.payeeAccountField).type(this.payeeAccount).should('be.visible')
        cy.get(this.payeeVerifyAccountField).type(this.payeeAccount).should('be.visible')
        cy.get(this.payeeAmountField).type(this.payeeAmount).should('be.visible')
        cy.get(this.payeeFromAccountField).select(this.payeeFromAccount).should('exist')
        cy.get(this.payeeSendPaymentButton).click().should('be.visible')
    }

    setUpdateContactInfo(){
        cy.get(this.usernameField).type(this.regUsername).should('exist')
        cy.get(this.passwordField).type(this.regPassword).should('be.visible')
        cy.get(this.loginButton).click().should('be.visible')
        cy.get(this.updateContactButton).click().should('be.visible')
        cy.wait(500)
        cy.get(this.updateAddressField).clear().type(this.updateAddress).should('be.visible')
        cy.get(this.updateCityField).clear().type(this.updateCity).should('be.visible')
        cy.get(this.updateZipcodeField).clear().type(this.updateZipcode).should('exist')
        cy.get(this.updateProfileButton).click().should('be.visible')
    }

    setRequestForLoan(){
        cy.get(this.usernameField).type(this.regUsername).should('be.visible')
        cy.get(this.passwordField).type(this.regPassword).should('be.visible')
        cy.get(this.loginButton).click().should('exist')
        cy.get(this.requestLoanButton).click().should('be.visible')
        cy.get(this.loanAmountField).type(this.loanAmount).should('be.visible')
        cy.get(this.downPaymentField).type(this.downPayment).should('exist')
        cy.get(this.confirmLoanButton).click().should('be.visible')
    }

    setFindTransaction(){
        cy.get(this.usernameField).type(this.regUsername).should('be.visible')
        cy.get(this.passwordField).type(this.regPassword).should('exist')
        cy.get(this.loginButton).click().should('exist')
        cy.get(this.findTransButton).click().should('be.visible')
        // cy.get(this.findAccountID).select('13788')
        cy.get(this.findByAmountField).type(this.findByAmount).should('be.visible')
        cy.get(this.findTrans).click().should('be.visible')
    }

    setLogout(){
        cy.get(this.usernameField).type(this.regUsername).should('be.visible')
        cy.get(this.passwordField).type(this.regPassword).should('exist')
        cy.get(this.loginButton).click().should('be.visible')
        cy.get(this.logoutButton).click().should('be.visible')
    }

}

export default ParaBankLogs