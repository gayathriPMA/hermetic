
describe('POST API Call',()=>{



    it('POST CALL using JSON',()=>{


cy.request({
method:'POST',
url: 'https://dev-capi.hermetic.ai/register_user',
headers:{

    Authorization: 'Bearer amwiz@eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhbElkIjoiNFppUDA3b0d6UGVRbTJGZnFaNnZ2Qmlrem9RMiIsImVtYWlsIjoiZ2F5YXRocml2czE5OTFAZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJHYXlhdGhyaSBWYXJhdGhhcmFqYW4iLCJwaG90b1VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0o5eUJzX2pQTHlzQkxQZVdGeHlaREF5NGt3S0NUeW92cmVab0s3U3lISD1zOTYtYyIsImVtYWlsVmVyaWZpZWQiOnRydWUsInByb3ZpZGVyVXNlckluZm8iOlt7InByb3ZpZGVySWQiOiJnb29nbGUuY29tIiwiZGlzcGxheU5hbWUiOiJHYXlhdGhyaSBWYXJhdGhhcmFqYW4iLCJwaG90b1VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0o5eUJzX2pQTHlzQkxQZVdGeHlaREF5NGt3S0NUeW92cmVab0s3U3lISD1zOTYtYyIsImZlZGVyYXRlZElkIjoiNFppUDA3b0d6UGVRbTJGZnFaNnZ2Qmlrem9RMiIsImVtYWlsIjoiZ2F5YXRocml2czE5OTFAZ21haWwuY29tIiwicmF3SWQiOiI0WmlQMDdvR3pQZVFtMkZmcVo2dnZCaWt6b1EyIn1dLCJ2YWxpZFNpbmNlIjoiVGh1LCAyOSBGZWIgMjAyNCAwNTo0MzozNSBHTVQiLCJsYXN0TG9naW5BdCI6IlRodSwgMDQgSnVsIDIwMjQgMDc6MDM6NTYgR01UIiwiY3JlYXRlZEF0IjoiVGh1LCAyOSBGZWIgMjAyNCAwNTo0MzozNSBHTVQiLCJsYXN0UmVmcmVzaEF0IjoiVGh1LCAwNCBKdWwgMjAyNCAwNzowMzo1NiBHTVQiLCJpYXQiOjE3MjAwNzY2MzksImV4cCI6MTcyMDY4MTQzOX0.yNsI8eUdQy8uYRfesZOYvvEbN5JAeZi2kTg2JjxNFX8'

},
body:{
    "localId": "4ZiP07oGzPeQm2FfqZ6vvBikzoQ2",
    "email": "gayathrivs1991@gmail.com",
    "displayName": "Gayathri Varatharajan",
    "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ9yBs_jPLysBLPeWFxyZDAy4kwKCTyovreZoK7SyHH=s96-c",
    "emailVerified": true,
    "providerUserInfo": [
        {
            "providerId": "google.com",
            "displayName": "Gayathri Varatharajan",
            "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ9yBs_jPLysBLPeWFxyZDAy4kwKCTyovreZoK7SyHH=s96-c",
            "federatedId": "4ZiP07oGzPeQm2FfqZ6vvBikzoQ2",
            "email": "gayathrivs1991@gmail.com",
            "rawId": "4ZiP07oGzPeQm2FfqZ6vvBikzoQ2"
        }
    ],
    "validSince": "Thu, 29 Feb 2024 05:43:35 GMT",
    "lastLoginAt": "Thu, 04 Jul 2024 07:03:56 GMT",
    "createdAt": "Thu, 29 Feb 2024 05:43:35 GMT",
    "lastRefreshAt": "Thu, 04 Jul 2024 07:03:56 GMT"
}

}).then((response)=>{

  expect(response.status).to.equal(201)
  expect(response.body.data).has.property("message","User handled successfully")
expect(response.body.data.token).to.be.not.null;
})


    })




})

