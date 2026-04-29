module.exports = {
    name: "COLD Community NEMT",
    email: "dispatch@coldcommunitynemt.com",
    phoneForTel: "334-520-4179",
    phoneFormatted: "(334) 520-4179",
    address: {
        lineOne: "Serving Phenix City & Surrounding Areas",
        lineTwo: "Lee · Russell · Macon · Chambers & More",
        city: "Phenix City",
        state: "AL",
        zip: "",
        country: "US",
        mapLink: "https://maps.google.com/?q=Phenix+City+Alabama",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and
    domain: "https://www.coldcommunitynemt.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
}