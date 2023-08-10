

describe('auth with proper credentials', () => { 
  it('bypass login', () => {
      cy.visit('https://bc-uat.manuport-logistics.com/LQS_BC_Antwerp_ACC/', {
          auth: {
              username: 'DBUYSE',
              password: 'NewYork2023!',          
           },
      })
      
  })
})
