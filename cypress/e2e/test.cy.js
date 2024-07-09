describe('Dog Image Fetching', () => {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
  
    // Function to fetch a random dog image URL
    const fetchDogImage = () => {
      return cy.request(apiUrl).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq('success');
        return response.body.message;
      });
    };
  
    // Helper function to get the current image source
    const getCurrentImageSrc = () => {
      return cy.get('.image-content img').invoke('attr', 'src');
    };
  
    // Store the previous image URL
    let previousImageUrl = '';
  
    it('should enable the fetch button', () => {
      cy.visit('https://dog.ceo/dog-api/'); // Replace with the URL of your page
      cy.get('.get-dog.button').should('be.enabled');
    });
  
    it('should fetch a new dog image on button click', () => {
      cy.visit('https://dog.ceo/dog-api/'); // Replace with the URL of your page
  
      // Get the initial image URL
      getCurrentImageSrc().then((initialImageUrl) => {
        previousImageUrl = initialImageUrl;
      });
  
      // Click the fetch button
      cy.get('.get-dog.button').click();
  
      // Verify that the image changes
      getCurrentImageSrc().should((newImageUrl) => {
        expect(newImageUrl).not.to.eq(previousImageUrl);
        previousImageUrl = newImageUrl;
      });
    });
  
    it('should not repeat the same image consecutively', () => {
      cy.visit('https://dog.ceo/dog-api/'); // Replace with the URL of your page
  
      // Fetch and store the first image URL
      fetchDogImage().then((firstImageUrl) => {
        previousImageUrl = firstImageUrl;
  
        // Click the fetch button
        cy.get('.get-dog.button').click();
  
        // Verify that the new image URL is different from the previous one
        getCurrentImageSrc().should((newImageUrl) => {
          expect(newImageUrl).not.to.eq(previousImageUrl);
        });
      });
    });
  });
  