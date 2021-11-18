const { Male } = require('../models');


const maleData = [

    {
        product_name: 'ALIEN',
        price: 189.99,
        stock: 32,
        description:"Thierry Mugler, the maker of beauty classic Angel, brings you Alien, a fragrance which stands out from the crowd and isn't afraid to be different. It reflects the creator's relentless search to find something new. The feminine fragrance smells unrecognizable, yet at the same time comfortingly familiar. The bottle is faceted like a jewel and its amethyst color symbolizes thoughtfulness and peace of mind. The name, engraved on the glass, is reflected in reverse to form a sign as it would in a mirror.The unique and distinctive woody amber - solar floral fragrance consists of two powerful top notes brightened by a luminous flower: ALIEN PERFUME, an Amber Revelation, Thierry Mugler dreamed of a new ingredient, modern amber: a talisman with a warm, soothing spirit, a mineral hewn into a precious stone with magical power. ALIEN...A Woody Revelation, Accompanying the new amber is a woody note which is just as exuberant and suffused with Cashmeran. The woody note is distinctive, mysterious and stimulates the imagination. ALIEN...A Floral Revelation, Within this combination of luxurious, unusual notes is a floral lightness of Jasmine Sambac, a gentle yet powerful flower with delicate petals that blooms under the Indian sun and gives off a bewitching scent with a hint of green notes and orange blossom.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111274/ALIEN_qkxnx0.jpg"
    },
    {
        product_name: 'ARMANI SI',
        price: 115.99,
        stock: 43,
        description:"According to Womens Wear Daily - Australian actress Cate Blanchett has been confirmed as the new face of Giorgio Armani Parfums, a division of L'Oreal Luxe. Blanchett, who is rehearsing for a play with Isabelle Huppert at the Sydney Theatre Company, will be the face of an advertising campaign for a new eau de parfum called Si that hit shelves at the end of the summer. The confirmation comes after weeks of unsubstantiated buzz following press reports about a fragrance collaboration between the actress and Giorgio Armani, who have a long standing professional relationship. Blanchett has often worn Armani creations on the red carpet and openly expressed admiration of him. The nose behind this fragrance is Christine Nagel.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111276/ARMANISI_oqlzoi.jpg"
    },
    {
        product_name: 'BONBON',
        price: 169.99,
        stock: 25,
        description:"This fragrance named after the candy aims at women who celebrate the pleasure and self-indulgence, as well as moments of relaxation and enjoyment.The fragrance comes in a pink bottle shaped as a wrapped candy. Its composition is signed by Cecile Matton and Serge Majoullier. The key note is caramel, surrounded by aromas of mandarin, orange and peach at the top. Flowers of orange blossom and jasmine in the heart, and cedar, guaiac wood, sandalwood and amber in the base.Model Edita Vilkeviciute is the face of the campaign, shot by photographers Inez van Lamsweerde and Vinoodh Matadin.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111276/BONBON_kwiswx.jpg"
    },
    {
        product_name: 'BLACK OPIUM',
        price: 214.99,
        stock: 30,
        description:"Yves Saint Laurent launched Black Opium, the new fragrance announced as a rock n roll interpretation of the classic that should highlight the dark, mysterious side of the YSL brand. Master perfumers Nathalie Lorson and Marie Salamagne, in collaboration with Olivier Cresp and Honorine Blanc, developed the composition. Notes of coffee, present in large quantities, dominate the scent. Additional accords are pink pepper, orange blossom, jasmine, vanilla, patchouli and cedar.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111276/BLACKOPIUM_s090ft.jpg"
    },
    {
        product_name: 'CHLOÉ',
        price: 32.99,
        stock: 45,
        description:"Chloé Eau de Parfum captures the creative, confident individuality of the Chloé woman. It is a fresh and feminine fragrance suited to a free spirit with an utterly innate sense of chic. The scent takes the classic rose and ingeniously translates it into a vibrant perfume, intimate and sensual. Chloé Eau de Parfum begins with a combination of floral powdery notes: hints of peony, lychee, and springtime freesia. The airy, flirtatious head notes drift away to reveal the richer and more sensual side of the rose. The distinctive character of this unique rose is accompanied by magnolia and lily of the valley, as well as subtle intimations of warm amber and elegant cedarwood. The fragrance is enclosed in a modern, delicately pleated bottle adorned with a hand-tied ribbon.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111276/CHLOEEDP_eibcjp.jpg"
    },
    {
        product_name: 'BRIGHT CRYSTAL',
        price: 125.99,
        stock: 50,
        description:"Bright Crystal perfume by Versace was inspired by a mixture of Donatella Versace's favorite floral fragrances, Bright Crystal is a fresh, sensual blend of refreshing chilled yuzu and pomegranate mingled with soothing blossoms of peony, magnolia, and lotus flower, warmed with notes of musk and amber. Notes include Iced Accord, Yuzu, Pomegranate, Peony, Magnolia, Lotus Flower, Acajou, Vegetal Amber, Musk.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111276/BRIGHTCRYSTAL_h9pfpq.jpg"
    },
    {
        product_name: 'COACH',
        price: 125.99,
        stock: 50,
        description:"Coach New York by Coach is classified as a floral-fruity fragrance for women. Coach Eau de Toilette is a joyful, floral green fragrance paying tribute to the energy of New York as the sun rises over the city. It is a scent full of contrasts, both fresh and fruity with juicy notes of Pear; yet luxurious and timeless with elegant Alba Rose and sensual Cedarwood. This fun and exciting scent is ideal for casual use.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637111274/COACH_tofibw.jpg"
    },
    {
        product_name: 'FLOWERBOMB',
        price: 125.99,
        stock: 50,
        description:"Capturing floral and sweet aromas into a fragrant powerhouse, Flowerbomb for women is a self-asserting scent, exotic, opulent and rich. The fragrance brings together notes of jasmine and osmanthus, with fresh tea and bergamot hints balancing the mix. Settling on warm, relaxing tones of patchouli, Flowerbomb defines itself as a comforting fragrance to wear during cold months. Introduced in 2005 by Viktor & Rolf and available in an eau de parfum spray bottle, this scent demands attention and gets noticed..",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637116543/FLOWERBOMB_vsqmpd.jpg"
    },
    {
        product_name: 'LA VIE EST BELLE',
        price: 335.99,
        stock: 30,
        description:"The concept of this fragrance is centered on the idea of natural and simple beauty, freedom from conventions and the choice of once own vision of happiness. The fragrance is a kind of outlook on life, inspired by joy and pleasure in small things.This gourmand yet elegant composition is developed by perfumers Olivier Polge, Dominique Ropion and Anne Flipo. The final formula is the result achieved after three years of probation and 5000 versions. Iris is the key ingredient of the perfume, surrounded by orange blossoms and jasmine in the heart. The composition’s opening provides fruity flavors of black currant and pear, while the base is warm, gourmand and powdery due to almond-like accords of tonka bean, praline, patchouli and vanilla.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637117069/LAVIEESTBELLE_thbpf6.jpg"
    },
    {
        product_name: 'LADY MILLION',
        price: 135.99,
        stock: 30,
        description:"One Million is one of the most popular fragrances launched in last several years. After the edition for men, women's version inspired by gold and wealth was expected. Two years after men's edition, fragrant lady finally appears - Lady Million! We can just assume if this lady wants to earn millions or look like a million dollar. It is perfectly clear that the woman represented by this edition radiates, dominates and possesses fiery character with incredible sensuality.Flacon of Lady Million is in tune with composition and theme of this edition. Instead of gold bullion, the flacon for women is designed as a golden diamond. While insinuating luxury and wealth, the fragrance prepares a surprising composition of intertwined floral, fresh and woody accords. Only diamond can compete with gold, so Lady Million is the perfect companion to modern and masculine One Million.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637117069/LADYMILLION_z4god6.jpg"
    },
    {
        product_name: "MON PARIS",
        price: 335.99,
        stock: 30,
        description:"YSL launched the new Paris inspired line called Mon Paris. This fragrance is announced as a dazzling fragrance that represents a modern olfactory interpretation of love, free from all the obstacles, dedicated and intense.The composition has a fruity start, intoxicating floral heart and a dark chypre base. It opens with a juicy and sweet blend of Calabria bergamot, strawberry, raspberry and pear. The heart is dominated by datura flower accompanied by a bouquet of peony, Chinese and Sambac jasmine and orange blossom. Airy crystal white musk three types of it, ambroxan and an intense patchouli duo from Indonesian and Guatemala provide the provocative classic chypre signature base.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637117069/MONPARIS_bbb6bk.jpg"
    },
    {
        product_name: "MON GUERLAIN",
        price: 134.99,
        stock: 34,
        description:"Angelina Jolie was chosen as the face of the new perfume from the house of Guerlain. Thierry Wasser was inspired by the notes of a woman, or the choices, emotions and dreams that embody modern femininity. Fragrance notes of lavender and vanilla. Mon Guerlain was created by Thierry Wasser and Delphine Jelk.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637117306/MONGUERLAIN_ho05sw.jpg"
    },
    {
        product_name: "GOOD GIRL",
        price: 175.99,
        stock: 80,
        description:"The new, sexy oriental fragrance is ironically named Good Girl with the message It’s so good to be bad. Good Girl promises an innovative and addictive combination of tuberose and roasted tonka bean, which represents the duality of a woman’s character. A floral wave of white Sambac jasmine and tuberose is placed in contrast with the mysterious and deep notes of tonka bean and cocoa.",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637201592/GOODGIRL_fpwtka.jpg"
    },
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