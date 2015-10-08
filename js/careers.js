function Position(title, genDescription, ourNeeds, ourWants) {
    this.title = title;
    this.genDescription = genDescription;
    this.ourNeeds = ourNeeds;
    this.ourWants = ourWants;
}

var androidSoftwareDev = new Position("Software Engineer, Android",
                                        "We’re looking for product-aware engineers who are thoughtful, responsible and passionate builders who appreciate user experience. We’re looking for someone who is not only well versed in Android development, but also has a strong understanding of good UX and isn’t afraid to get their hands dirty in backend code. We believe that great product people use lots of products, so if you’re an active user of Airbnb, we are listening.",
                                        "Not only is mobile quickly becoming the preferred means to book travel, but mobile uniquely enables our hosts to be responsive and connects our guests to their surroundings. Because of the unique form-factor of mobile, we put a particular emphasis on the user-experience design. Our apps have been featured in the app store, Google Play and at WWDC.",
                                        "Happy",
                                        "Day");

console.log(androidSoftwareDev.genDescription);