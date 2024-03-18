import { createServer, Model } from "miragejs";
import product0 from "./assets/images/Products/Product_0/product_0.jpg";
import product1 from "./assets/images/Products/Product_1/product_1.jpg";
import product2 from "./assets/images/Products/Product_2/product_2.jpg";
import product3 from "./assets/images/Products/Product_3/product_3.jpg";
import product4 from "./assets/images/Products/Product_4/product_4.jpg";
import product5 from "./assets/images/Products/Product_5/product_5.jpg";
import product6 from "./assets/images/Products/Product_6/product_6.jpg";
import product7 from "./assets/images/Products/Product_7/product_7.jpg";
import product8 from "./assets/images/Products/Product_8/product_8.jpg";
import product9 from "./assets/images/Products/Product_9/product_9.jpg";

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create("product", {
      id: 0,
      title:
        "No Plan B: The unputdownable new Jack Reacher thriller from the No.1 bestselling authors",
      image: product0,
      image_small: "2./images/product_0_small.jpg",
      attribute: "Paperback",
      description:
        "When your name is Jack Reacher, the truth is always worth doing time for.Gerrardsville, Colorado. One tragic event. Two witnesses. Two conflicting accounts. One witness sees a woman throw herself in front of a bus - clearly suicide. The other witness is Jack Reacher. And he sees what really happened - a man in grey hoodie and jeans, swift and silent as a shadow, pushing the victim to her death, before grabbing her bag and sauntering away.Reacher follows the killer, not knowing that this was no random act of violence. It is part of something much bigger...a sinister, secret conspiracy, with powerful people on the take, enmeshed in an elaborate plot that leaves no room for error. If any step is compromised, the threat will have to be quickly and permanently removed.",
      brand: "Lee Child",
      avgRating: 4,
      ratings: 24089,
      price: 476,
      oldPrice: 699,
      discount: 32,
      badge: "seller",
    });
    server.create("product", {
      id: 1,
      title: "IRON FLAME BY REBECCA YARROS PAPERBACK ENGLISH EDITION 2023",
      image: product1,
      image_small: "../images/product_1_small.jpg",
      attribute: "Hardcover",
      brand: "Guinness World Records",
      description:
        "The 2023 edition takes readers on a journey that's out of this world! ",
      avgRating: 5,
      ratings: 929,
      price: 357,
      oldPrice: 699,
      discount: 51,
      quantity: 0,
      badge: "choice",
    });
    server.create("product", {
      id: 2,
      title: "One (Lead Title): Simple One-Pan Wonders ",
      image: product2,
      image_small: "../images/product_2_small.jpg",
      attribute: "Paperback",
      brand: "Jamie Oliver",
      description:
        "THE NO. 1 SUNDAY TIMES BESTSELLER.The brand-new cookbook that will make getting good food on the table easier than ever before . . . Jamie's back to basics with over 120 simple, delicious, ONE pan recipes FEATURING RECIPES FROM THE HIT NEW CHANNEL 4 SHOW JAMIE'S ONE-PAN WONDERS 'JAMIE'S EASIEST RECIPES EVER' DAILY MAIL 'Lovely straightforward ideas' Daily Telegraph 'Full of affordable one-pot dinners and desserts' BBC Good Food 'The nation's favourite chef' Sainsbury's Magazine 'Easy and delicious' The Times",
      avgRating: 4,
      ratings: 2993,
      price: 1299,
      oldPrice: 1999,
      discount: 35,
      badge: "choice",
    });
    server.create("product", {
      id: 3,
      title: "The Bullet That Missed: (The Thursday Murder Club 3)",
      image: product3,
      image_small: "../images/product_3_small.jpg",
      attribute: "Paperback",
      description:
        "A new mystery is afoot in the third book in the Thursday Murder Club series from record-breaking, bestselling author Richard Osman.It is an ordinary Thursday and things should finally be returning to normal.Except trouble is never far away where the Thursday Murder Club is concerned. A decade-old cold case leads them to a local news legend and a murder with no body and no answers.Then, a new foe pays Elizabeth a visit. Her mission? Kill . . . or be killed.As the cold case turns white hot, Elizabeth wrestles with her conscience (and a gun), while Joyce, Ron and Ibrahim chase down clues with help from old friends and new. But can the gang solve the mystery and save Elizabeth before the murderer strikes again?",
      brand: "Richard Osman",
      avgRating: 5,
      ratings: 29283,
      price: 460,
      discount: 34,
      oldPrice: 699,
    });
    server.create("product", {
      id: 4,
      title:
        "Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture",
      image: product4,
      image_small: "../images/product_4_small.jpg",
      attribute: "Hardcover",
      description:
        "Interesting Facts For Curious Minds gives you the answer to all these and many, many more questions that I know have crossed your mind from time to time. This book is divided into 63 chapters by topic for your convenience, bringing you a nice mix of science, history, pop culture, and all sorts of stuff in between. Each chapter contains 25 concise yet engaging factoids that are sure to make you think and at times laugh. How you read this book is entirely up to you.",
      brand: "Jordan Moore",
      avgRating: 4,
      ratings: 885,
      price: 899,
      oldPrice: 1032,
      discount: 13,
      badge: "limited",
    });
    server.create("product", {
      id: 5,
      title: "It Start with Us",
      image: product5,
      image_small: "../images/product_5_small.jpg",
      attribute: "Paperback",
      description:
        "Before It Ends with Us, it started with Atlas.Colleen Hoover tells fan favourite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the #1 Sunday Times bestseller It Ends with Us ",
      brand: "Colleen Hoover",
      avgRating: 4,
      ratings: 44402,
      price: 324,
      oldPrice: 699,
      discount: 54,
      badge: "choice",
    });
    server.create("product", {
      id: 6,
      title: "Spaceboy: The epic and funny new children’s book",
      image: product6,
      image_small: "../images/product_6_small.jpg",
      attribute: "Paperback",
      description:
        "Go back to the Space Race with No.1 bestselling author David Walliams for a breathless cinematic adventure full of mystery, action, laughs and surprises.Stuck on a remote farm with her awful aunt, twelve-year-old orphan Ruth spends every night gazing at the stars, dreaming of adventure.One night she spots a flying saucer blazing across the sky… before crash-landing in a field. When the spaceship opens and reveals a mysterious alien, all Ruths dreams come true.But does this visitor from another planet have a giant secret?. ",
      brand: "David Walliams",
      avgRating: 5,
      ratings: 877,
      price: 374,
      oldPrice: 499,
      discount: 25,
      badge: "choice",
    });
    server.create("product", {
      id: 7,
      title: "Lessons in Chemistry",
      image: product7,
      image_small: "../images/product_7_small.jpg",
      attribute: "Hardcover",
      description:
        "Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth Zott would be the first to point out that there is no such thing.But it's the early 1960s and her all-male team at Hastings Research Institute take a very unscientific view of equality.Forced to leave her job at the institute, she soon finds herself the reluctant star of America's most beloved cooking show, Supper at Six.But as her following grows, not everyone is happy. Because as it turns out, Elizabeth Zott isn't just teaching women to cook.She's daring them to change the status quo. One molecule at a time.",
      brand: "Bonnie Garmus",
      avgRating: 4,
      ratings: 62749,
      price: 371,
      discount: 33,
      oldPrice: 550,
    });
    server.create("product", {
      id: 8,
      title: "A Court of Mist and Fury",
      image: product8,
      image_small: "../images/product_8_small.jpg",
      attribute: "Hardcover",
      description:
        "The steamy second book in the seductive fantasy series from global #1 bestselling author Sarah J.Though she now possesses the powers of the High Fae, her heart remains human, and it can't forget the terrible deeds she performed to save Tamlin's people. Nor has Feyre forgotten her bargain with Rhysand, the mesmerising High Lord of the feared Night Court. As Feyre navigates his dark web of political games and tantalising promises, a greater evil looms - and she might be key to stopping it. But only if she can step into her growing power, heal her fractured soul and have the courage to shape her own future - and the future of a world cloven in two. Sarah J. Maas's books have sold millions of copies worldwide and have been translated into 37 languages. Discover the sweeping romantic fantasy for yourself.",
      brand: "Storm Dunlop",
      avgRating: 4,
      ratings: 134,
      price: 402,
      oldPrice: 699,
      discount: 10,
      badge: "choice",
    });
    server.create("product", {
      id: 9,
      title: "Fire TV Stick Lite",
      image: "../images/product_9.jpg",
      image_small: "../images/product_9_small.jpg",
      attribute: "Streaming Device",
      description:
        "Our most affordable Fire TV Stick—enjoy fast streaming in Full HD. Comes with Alexa Voice Remote Lite. Easy to set up, stays hidden—plug in behind your TV, turn on the TV and connect to the internet to get set up. ",
      brand: "Amazon",
      avgRating: 4,
      ratings: 17602,
      price: 34.99,
      oldPrice: 40.99,
      badge: "choice",
    });
    server.create("product", {
      id: 10,
      title: "BOSS Men's Prime Shirt",
      image: "../images/product_10.jpg",
      image_small: "../images/product_10_small.jpg",
      attribute: "Polo",
      description:
        "Shirt; BOSS; HUGO BOSS. 100% Cotton. Machine Wash. Fastening: Pull On. Collar Style: Classic. Slim Fit",
      brand: "Hugo Boss",
      avgRating: 3,
      ratings: 10,
      price: 42.95,
      oldPrice: 45.0,
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/products", (schema) => {
      return schema.products.all();
    });

    this.get("/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });
  },
});
