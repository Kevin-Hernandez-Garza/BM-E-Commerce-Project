const { Male } = require('../models');


const maleData = [
    {
        product_name: '1 MILLION PRIVE',
        price: 114.49,
        stock: 38,
        description:"Paco Rabanne launched 1 Million fragrance in 2008 and Lady Million fragrance in 2010. The perfume pair inspired by extravagance, gold and wealth has become very popular. The new fragrant pair of the collection features 1 Million Prive and Lady Million Prive coming out in summer 2016.Red carpet, photographers and spotlights. Hollywood, Paris, London, Saint Petersburg. Luxury, opulence, glamour, vacuity. A dash of boredom and an overdose of bla bla bla. A glance right and a wink. Cling. He takes her hand and leads her. Together, they run, get lost and hide. She's the Bonnie to his Clyde. In the line of fire is the pure pleasure of maddening, invigorating adrenaline that thrives on shivers. A safe opens with a snap of the fingers. They are there. Sparkling, intense and precious, the famous gold bar and the insolent diamond. As the door closes behind them, the world in hot pursuit, the partners in crime go over the film in private. At daybreak, they are gone. A legendary scent lingers in the air. A finger to the lips. What was that. Shhh. Silence is golden. The future is theirs.1 Million Prive is an oriental woody fragrance full of contrasts, signed by the perfumer Christophe Raynaud. It opens with blood mandarin and cinnamon, ingredients that marked the original. The heart includes notes of hookah tobacco enriched with myrrh resin. The base is a warm and sensual blend of patchouli and tonka bean absolute.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'A*MEN PURE HAVANE',
        price: 99.99,
        stock: 23,
        description:"Angel Men Pure Havana is a gourmand interpretation of the tobacco scent and the finest Cuban cigars signed by perfumer Jacques Huclier. The composition opens with fresh tobacco leaves and honey, followed by notes of patchouli, vanilla and bitter cocoa. The base is warm and oriental with notes with labdanum, amber and styrax.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111275/ANGELMENPUREHAVANE_hveadt.jpg"
    },
    {
        product_name: 'A*MEN PURE MALT',
        price: 89.99,
        stock: 55,
        description:"Designer and perfumer extraordinaire Thierry Mugler created Angel Men Pure Malt for men as a captivating ode to whisky and malt, both of which are notes in this scent. In addition, the fragrance has oriental and smoky accords that add to its allure and give it a decidedly woodsy scent that is masculine yet refined for daily wear. The beautiful bottle is suitable for display, so feel free to leave the bottle out after use.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111275/PUREMALT_fvi2rg.jpg"
    },
    {
        product_name: 'ACQUA DI GIO PROFONDO',
        price: 174.99,
        stock: 40,
        description:"Armani presented its popular masculine aquatic fragrance Acqua di Gio in 1996. Nearly 20 years later, a new version of the fragrance is launched—Acqua di Gio Profumo, elegant, airy and deep. The fragrance symbolizes the merging of sea waves with black rocks. Acqua di Gio Profumo is an aquatic, aromatic, woody and spicy composition which is, like the original, signed by Alberto Morillas. It opens with fresh aquatic accord and bergamot. Its heart captures aromatic tones of geranium, sage and rosemary, laid on the base of patchouli and incense",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111274/ACQUADIGIOPROFONDO_ruciyg.jpg"
    },
    {
        product_name: 'AQVA POUR HOMME',
        price: 152.99,
        stock: 25,
        description:"The popular masculine aquatic fragrance from Bvlgari, Aqva Pour Homme, was created by perfumer Jacques Cavallier in 2005. Its new version comes out in March 2017 as Aqva Pour Homme Atlantiqve, signed by the same famous nose.Aqva Pour Homme Atlantiqve is a refreshing and energetic aquatic fragrance inspired by the strength of the Atlantic Ocean. Jacques Cavallier developed the sea amber note which is supposed to evoke the depths of the ocean, located in the heart of the composition. Its top notes include accords of Calabrian bergamot, Sicilian lemon and a vital water accord. The base ends with woody tones of vetiver, patchouli, sandalwood and benzoin.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111275/AQVAPOURHOMME_q2yfah.jpg"
    },
    {
        product_name: 'ARMANI CODE PROFUMO',
        price: 135.99,
        stock: 30,
        description:"Armani Code Profumo by Giorgio Armani is a Oriental Spicy fragrance for men. This is a new fragrance. Armani Code Profumo was launched in 2016. Top notes are green mandarin, green apple and cardamom. Middle notes are orange blossom, lavender and nutmeg. Base notes are tonka bean, amber and leather.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111275/ARMANICODEPROFUMO_e4z0lq.jpg"
    },
    {
        product_name: 'AZZARO WANTED BY NIGHT',
        price: 235.99,
        stock: 30,
        description:"Azzaro launched Wanted by Night in as a sensual, evening edition of the original Wanted created by Fabrice Pellegrin in 2016. The new perfume is inspired by the hedonistic lifestyle of Loris Azzaro during the 1970s. Azzaro Wanted by Night is the fragrance of a modern day seducer. An extraordinary man. Elegant, bold, mysterious, he is surrounded by an air of confidence and power. Whether night or day, he attracts and arouses desire. For him, it's an endless night, and for them, it's a one on one moment that they will never forget.Azzaro Wanted by Night is announced as an explosive woody and spicy oriental of unabashed sensuality, a blend of temptation and masculinity. The composition mixes exotic woods and spices, and highlights the three main accords: cinnamon, red cedar and tobacco.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111275/AZZAROWANTEDBYNIGHT_aztajg.jpg"
    },
    {
        product_name: "LA NUIT DE L'HOMME",
        price: 135.99,
        stock: 30,
        description:"La Nuit de L'Homme, the new fragrance for men by Yves Saint Laurent is a story of seduction, intensity and bold sensuality. A structure of contrasting forces. A seduction that lies halfway between restraint and abandon. Bright, masculine freshness combines with sophistication and nonchalance for a deep, mysterious and sensual fragrance. A combination of freshness, tone and comfort with notes of Cardamom, Cedar, and Coumarin.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637116913/La-Nuit-de-lhomme-m_kdyyj8.jpg"
    }
]



const seedMaleProducts = () => Male.bulkCreate(maleData);

module.exports = seedMaleProducts;