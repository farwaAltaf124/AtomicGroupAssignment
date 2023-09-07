describe('ABN LOOKUP Assignment', () => {

    // Task 1: Visit ABR Website:
    beforeEach(function () {
        cy.navigateToABNWebsite("https://abr.business.gov.au/")
		cy.fixture("testdata").as("data");
        
	})

    //Task 2: Perform ABN Lookup for "Automic PTY LTD":
    it('task no.2', function () {
       
        cy.EnterABN({abn: this.data.abn1} )
        cy.Searchbutton()
   
        cy.ABNEntryLookup({abnentry: this.data.abnentry1})
        cy.VerifyStatus('Active')

    })

    //Task 3: Perform ABN Lookup for "MARIO BROS PTY LTD":
    it('task no.3', function ()  {

        // cy.EnterABN('MARIO BROS PTY LTD')
        cy.EnterABN({abn: this.data.abn2})
        cy.Searchbutton()
         // Check if this result contains desired ABN
        function searchText() {
            cy.get('#content-matching').each(function($el) {
              if ($el.text().includes('93 118 220 920')) {
                $el.click();
                // Assertion for ABN details correctness
                cy.ABNEntryLookup({abnentry: this.data.abnentry2})
                // cy.VerifyName('The Trustee for MAURO BROTHERS SENIOR SUPER FUND')
                cy.VerifyName({detail:this.data.ABNdetails})
              } 
            
              //Else keep pressing NEXT until desired ABN Found 
              else {
                cy.get('.PagedList-skipToNext > button > img').click();
                searchText();
              }
            }
            )
        };
        searchText();
          }
    )
    })
