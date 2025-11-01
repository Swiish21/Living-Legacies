// Enhanced community data with story-like narratives
const communities = {
    kikuyu: {
        name: 'Kikuyu',
        emoji: '🏔️',
        region: 'Central Kenya',
        population: 'Approximately 8.1 million (22% of Kenya\'s population)',
        history: 'Long ago, when the mountain called Kirinyaga stood majestically against the African sky, the Kikuyu people made a sacred covenant with this towering giant. Legend tells us that Gikuyu, their founding father, received this land as a divine gift from Ngai, the Creator himself. For over four centuries, they have tended the fertile slopes of Mount Kenya, their lives intertwined with the rhythms of the land and the wisdom of their ancestors. From the sacred Mugumo trees to the bustling markets of modern Nairobi, the Kikuyu story is one of resilience, innovation, and an unbreakable bond with their mountain home.',
        impact: 'The Kikuyu have been the architects of modern Kenya\'s story. From the hallowed halls of Uhuru Park where independence was declared, to the boardrooms of multinational corporations, their entrepreneurial spirit has shaped the nation\'s economic landscape. They have given Kenya its first and fourth presidents, its literary giants, and countless innovators who have carried the Kenyan dream beyond the borders of their ancestral lands. Their belief in education and hard work has created a legacy that continues to inspire generations.',
        practices: [
            'Sacred ceremonies under the ancient Mugumo tree, where elders speak to the spirits of ancestors',
            'Circumcision rites that transform boys into men while preserving ancient wisdom',
            'Teaching through captivating proverbs and riddles that paint pictures of life',
            'Honoring the sacred fig tree as a bridge between the earthly and spiritual realms',
            'Traditional dances like Mwomboko that tell stories through rhythmic movement'
        ],
        products: [
            { name: 'Sacred Kikuyu Basket', price: 'KSh 1,500', icon: '🧺', story: 'Woven with prayers and purpose, these baskets carry the wisdom of generations' },
            { name: 'Traditional Kiondo', price: 'KSh 2,000', icon: '👜', story: 'Each thread tells a story of community, crafted with love and ancestral knowledge' },
            { name: 'Ancestral Beaded Jewelry', price: 'KSh 800', icon: '📿', story: 'Beads that have witnessed countless celebrations and lifecycle ceremonies' },
            { name: 'Carved Heritage Pieces', price: 'KSh 3,500', icon: '🗿', story: 'Wood sculptures that bring to life the myths and legends of Mount Kenya' }
        ]
    },
    luo: {
        name: 'Luo',
        emoji: '🌊',
        region: 'Nyanza (Western Kenya)',
        population: 'Approximately 5.1 million (14% of Kenya\'s population)',
        history: 'Picture the gentle waves of Lake Victoria lapping against golden shores, and you\'ll begin to understand the Luo soul. These descendants of the great Nilotic migrations arrived on Kenya\'s shores like a gentle tide, bringing with them the songs of Sudan and the rhythms of ancient waters. Their canoes have cut through these waters for centuries, carrying not just fish, but stories, wisdom, and the soulful music that has become Kenya\'s heartbeat. The Luo believe that water is life, and their lives have flowed like rivers through Kenya\'s history, nourishing the land with their intellectual prowess and artistic genius.',
        impact: 'The Luo have been Kenya\'s intellectual lighthouse, illuminating the nation\'s path through education, politics, and the arts. From the golden voice of Benga music that echoes across the continent to the wise counsel of leaders like Jaramogi Oginga Odinga, they have shaped Kenya\'s soul. Their lakeside wisdom, combined with an unwavering commitment to education, has produced generations of doctors, lawyers, teachers, and artists who continue to push the boundaries of excellence.',
        practices: [
            'Soulful music sessions where the Nyatiti harp tells stories under starlit skies',
            'Ancient fishing wisdom passed down through generations of master fishermen',
            'Kumalira funeral ceremonies that celebrate life while honoring the departed',
            'Benga music sessions that blend traditional rhythms with modern expression',
            'Traditional healing arts that harmonize body, mind, and spirit'
        ],
        products: [
            { name: 'Sacred Nyatiti Harp', price: 'KSh 2,500', icon: '🥁', story: 'The sound of this harp carries the prayers and dreams of generations' },
            { name: 'Master Fisherman\'s Nets', price: 'KSh 1,200', icon: '🎣', story: 'Handwoven nets that have brought sustenance from Lake Victoria\'s bounty' },
            { name: 'Royal Beaded Crowns', price: 'KSh 3,000', icon: '👑', story: 'Crowns worn by chiefs and elders, symbols of wisdom and leadership' },
            { name: 'Ancestral Wooden Stools', price: 'KSh 1,800', icon: '🪑', story: 'Seats of honor where elders gathered to share their wisdom' }
        ]
    },
    luhya: {
        name: 'Luhya',
        emoji: '🌾',
        region: 'Western Kenya',
        population: 'Approximately 6.8 million (16% of Kenya\'s population)',
        history: 'In the rolling highlands of Western Kenya, where golden maize fields stretch to meet the horizon, the Luhya people have written their epic. Seventeen tribes united by blood and destiny, they came like a great river flowing from the Congo, bringing with them the gift of cultivation and the art of community. They are the masters of the soil, turning Kenya\'s western breadbasket into a canvas of abundance. Their villages, with their distinctive circular huts, have stood as beacons of agricultural excellence, feeding not just their families but the entire nation with their harvest of hope.',
        impact: 'The Luhya have been Kenya\'s agricultural architects and business pioneers. Their sophisticated farming techniques have made Western Kenya the country\'s breadbasket, while their entrepreneurial spirit has built business empires that span industries. They have given Kenya brilliant politicians, successful farmers, and innovative leaders who understand that prosperity comes from the marriage of hard work and wisdom. Their commitment to education and community development continues to shape Kenya\'s future.',
        practices: [
            'Ancient farming wisdom that knows when the earth is ready for planting',
            'Circumcision ceremonies that forge brotherhood and preserve cultural identity',
            'Traditional beer brewing that turns ordinary grains into liquid celebration',
            'Master basket weaving that transforms simple materials into works of art',
            'Circular architecture that reflects their understanding of community and harmony'
        ],
        products: [
            { name: 'Sacred Woven Baskets', price: 'KSh 1,200', icon: '🧺', story: 'Each basket holds the prayers of harvest and the dreams of prosperity' },
            { name: 'Ceremonial Beer Sets', price: 'KSh 2,000', icon: '🍺', story: 'Vessels that have witnessed countless celebrations and tribal gatherings' },
            { name: 'Hand-forged Tools', price: 'KSh 800', icon: '🛠️', story: 'Tools that have tilled the soil and built the foundations of Western Kenya' },
            { name: 'Beaded Heritage Items', price: 'KSh 1,500', icon: '📿', story: 'Beads that chronicle the stories of seventeen tribes in beautiful colors' }
        ]
    },
    kalenjin: {
        name: 'Kalenjin',
        emoji: '🏃',
        region: 'Rift Valley',
        population: 'Approximately 5.9 million (14% of Kenya\'s population)',
        history: 'High in the cool highlands of the Rift Valley, where eagles soar above misty peaks, the Kalenjin people discovered their extraordinary gift. Legends speak of their ancestors being blessed by the mountain spirits, granting them the ability to run like the wind itself. Their traditional pastoral lifestyle, moving cattle across vast highland pastures, forged legs of steel and hearts of determination. Today, they are the world\'s running royalty, their names echoing through Olympic stadiums and marathon records across the globe. But beneath their athletic fame lies a rich culture of age-sets, cattle ceremonies, and traditions that have shaped them into champions both on and off the track.',
        impact: 'The Kalenjin have put Kenya on the world map through their extraordinary athletic achievements. Their runners have brought home Olympic gold, set world records, and inspired millions to believe in the power of human potential. Beyond sports, they are respected for their strong family values, their commitment to education, and their ability to balance traditional culture with modern achievement. Their legacy extends far beyond running tracks to become symbols of excellence and perseverance.',
        practices: [
            'Traditional pastoralism that connects them to the land and their livestock',
            'Sacred bride price ceremonies where cattle represent family bonds and respect',
            'Warrior traditions that build courage and protect the community',
            'Age-set systems that create lifelong bonds and shared responsibilities',
            'Traditional songs and dances that celebrate victories and life\'s milestones'
        ],
        products: [
            { name: 'Sacred Cultural Beads', price: 'KSh 1,500', icon: '📿', story: 'Beads that tell the story of victories won and traditions preserved' },
            { name: 'Master Leather Goods', price: 'KSh 2,200', icon: '👝', story: 'Crafted from cattle raised with love on the Rift Valley highlands' },
            { name: 'Handwoven Treasures', price: 'KSh 1,800', icon: '🧶', story: 'Textiles that carry the warmth of community and the skill of generations' },
            { name: 'Traditional Instruments', price: 'KSh 2,800', icon: '🎵', story: 'Instruments that celebrate victories and keep ancestral rhythms alive' }
        ]
    },
    kamba: {
        name: 'Kamba',
        emoji: '🎨',
        region: 'Eastern Kenya',
        population: 'Approximately 4.5 million (11% of Kenya\'s population)',
        history: 'In the sun-baked plains of Eastern Kenya, where acacia trees stretch their branches toward endless skies, the Kamba people have transformed the art of survival into the art of beauty. They are the master sculptors and traders of Kenya, their hands breathing life into ordinary wood and their caravans carrying not just goods but stories across East Africa. Their trading networks, established centuries ago, became the veins that connected communities, while their artistic vision turned everyday objects into treasures. The Kamba understand that true wealth lies not just in what you own, but in what you can create with your own hands.',
        impact: 'The Kamba have been Kenya\'s artistic ambassadors and entrepreneurial pioneers. Their wood carvings and sculptures have become synonymous with African art worldwide, while their trading spirit has built business networks that span the continent. They have maintained a perfect balance between preserving ancient crafts and embracing modern opportunities, proving that tradition and progress can dance together in harmony.',
        practices: [
            'Master wood carving that transforms trees into stories and sculptures',
            'Intricate basketry and weaving that showcase incredible patience and skill',
            'Ancient ironworking techniques that forged tools and weapons of strength',
            'Lukhongwe dance that expresses the joy and rhythm of daily life',
            'Divination practices (Mbaa) that connect the community to spiritual guidance'
        ],
        products: [
            { name: 'Carved Sculptures', price: 'KSh 2,500', icon: '🗿', story: 'Each sculpture carries the spirit of the wood and the vision of the artist' },
            { name: 'Traditional Baskets', price: 'KSh 1,800', icon: '🧺', story: 'Woven baskets that have carried harvests and hopes for generations' },
            { name: 'Handwoven Textiles', price: 'KSh 2,200', icon: '🧶', story: 'Fabrics that tell stories through color, pattern, and tradition' },
            { name: 'Carved Jewelry', price: 'KSh 1,500', icon: '💎', story: 'Jewelry that transforms natural materials into wearable art' }
        ]
    },
    kisii: {
        name: 'Kisii',
        emoji: '🗿',
        region: 'Nyanza (Southern)',
        population: 'Approximately 2.7 million (6% of Kenya\'s population)',
        history: 'On the steep, misty slopes of Mount Nyamgiri, where tea plantations cascade down mountainsides like green waterfalls, the Kisii people have carved their masterpiece from stone itself. They arrived from the highlands of Rwanda and Burundi, bringing with them the ancient art of soapstone carving and the wisdom of terraced farming. With hammers and chisels, they transform rough stone into smooth sculptures that capture the soul of their people. Their hands have created not just art, but a legacy that has traveled to galleries and homes across the world, carrying with it the spirit of the highlands.',
        impact: 'The Kisii have put Kenya on the international art map through their world-renowned soapstone carvings. Their terraced farms have made the highlands a green paradise, producing the tea and coffee that Kenya exports to the world. They are master cultivators who have turned challenging mountain terrain into productive farmland, proving that determination and ingenuity can overcome any obstacle.',
        practices: [
            'Soapstone carving that transforms raw earth into works of art and beauty',
            'Masterful terraced farming that conquers steep mountain slopes',
            'Traditional pottery that creates both functional and ceremonial vessels',
            'Tea and coffee cultivation that feeds the world from Kenyan highlands',
            'Ancient knowledge of medicinal plants that heals both body and spirit'
        ],
        products: [
            { name: 'Soapstone Sculptures', price: 'KSh 3,000', icon: '🗿', story: 'Carved from mountain stone, each piece holds the spirit of the highlands' },
            { name: 'Highland Tea Collection', price: 'KSh 500', icon: '🍵', story: 'Tea leaves that have absorbed the mist and magic of Mount Nyamgiri' },
            { name: 'Premium Coffee Beans', price: 'KSh 800', icon: '☕', story: 'Coffee that carries the aroma of Kisii highlands to coffee cups worldwide' },
            { name: 'Ceramic Artistry', price: 'KSh 1,200', icon: '🏺', story: 'Pottery that combines ancient techniques with contemporary vision' }
        ]
    },
    mijikenda: {
        name: 'Mijikenda',
        emoji: '🌴',
        region: 'Coastal Kenya',
        population: 'Approximately 1.8 million (4% of Kenya\'s population)',
        history: 'Where the Indian Ocean kisses Kenya\'s golden shores, and coconut palms sway to the rhythm of ocean breezes, the nine tribes of the Mijikenda have created a unique coastal civilization. They are the guardians of the sacred Kaya forests, ancient sanctuaries where spirits dwell among towering trees that have witnessed centuries of history. Their traditional dhows, with their distinctive lateen sails, have carried spices, stories, and cultures across the vast Indian Ocean. In their Swahili stone houses and coral mosques, they have blended African traditions with Arab influences, creating a coastal culture as rich and diverse as the ocean itself.',
        impact: 'The Mijikenda communities are the keepers of Kenya\'s coastal heritage and maritime traditions. Their management of sacred Kaya forests has preserved biodiversity for centuries, while their sailing skills and boat-building expertise have maintained the connection between land and sea. They have preserved a unique Swahili culture that represents the meeting point of Africa, Arabia, and the wider Indian Ocean world.',
        practices: [
            'Traditional dhow building and sailing that connects them to ancient maritime routes',
            'Sacred Kaya forest management that preserves both nature and spirituality',
            'Swahili architecture that blends African and Arabic influences',
            'Traditional healing that uses coastal plants and marine resources',
            'Sustainable marine management that ensures ocean bounty for future generations'
        ],
        products: [
            { name: 'Traditional Dhow Boats', price: 'KSh 5,000', icon: '⛵', story: 'Handcrafted vessels that have sailed the Indian Ocean for centuries' },
            { name: 'Kaya Forest Crafts', price: 'KSh 2,000', icon: '🌿', story: 'Items crafted from sacred forest materials blessed by ancestral spirits' },
            { name: 'Swahili Textiles', price: 'KSh 1,500', icon: '🧶', story: 'Fabrics that tell the story of cultural fusion along the coast' },
            { name: 'Coastal Spices', price: 'KSh 300', icon: '🧂', story: 'Spices that have traveled from these shores to tables around the world' }
        ]
    },
    maasai: {
        name: 'Maasai',
        emoji: '🦒',
        region: 'Southern Kenya/Northern Tanzania',
        population: 'Approximately 1.1 million (3% of Kenya\'s population)',
        history: 'Under the endless African sky, where acacia trees dot the golden savannah and herds of wildlife roam free, the Maasai people have preserved a way of life that seems as old as the land itself. They are the poets of the African plains, their red shukas bright against the landscape, their jumping dances reaching toward the heavens. Their relationship with cattle goes beyond economics to the spiritual – every animal is a blessing, every birth a celebration. The Moran warriors, with their fierce courage and elaborate hairstyles, have become symbols of African nobility and the untamed spirit of the continent.',
        impact: 'The Maasai have become international symbols of African culture while maintaining their traditional lifestyle. Their distinctive customs, colorful beadwork, and warrior traditions have become integral to Kenya\'s tourism identity. They have shown the world that ancient wisdom and modern development can coexist, inspiring global appreciation for indigenous knowledge and sustainable pastoralism.',
        practices: [
            'Semi-nomadic pastoralism that moves with the seasons and the needs of cattle',
            'Moran warrior traditions that build courage, leadership, and community protection',
            'Spectacular jumping dances that celebrate life and demonstrate warrior prowess',
            'Circumcision ceremonies that mark the transition from boyhood to manhood',
            'Sacred cattle culture that elevates animals to spiritual and economic importance'
        ],
        products: [
            { name: 'Traditional Beadwork', price: 'KSh 2,000', icon: '📿', story: 'Beads that tell stories through color patterns worn by Maasai warriors and women' },
            { name: 'Authentic Maasai Shukas', price: 'KSh 3,500', icon: '🧥', story: 'The iconic red cloth that has become a symbol of Maasai pride and identity' },
            { name: 'Ceremonial Spears', price: 'KSh 1,800', icon: '🏹', story: 'Crafted weapons that have protected communities and represented warrior status' },
            { name: 'Cattle Products', price: 'KSh 1,200', icon: '🐄', story: 'Traditional items made from cattle that sustain Maasai pastoral life' }
        ]
    },
    turkana: {
        name: 'Turkana',
        emoji: '🏜️',
        region: 'Northern Kenya',
        population: 'Approximately 1.0 million (2% of Kenya\'s population)',
        history: 'In the harsh, arid lands of northern Kenya, where temperatures soar and rainfall is precious as gold, the Turkana people have written one of humanity\'s greatest survival stories. They are the masters of adaptation, turning one of Kenya\'s most challenging environments into a home. Their traditional knowledge of water harvesting, livestock management, and survival in the desert has made them legends among pastoralists. They have shown the world that with wisdom, resilience, and community cooperation, humans can not just survive but thrive in the harshest conditions.',
        impact: 'The Turkana communities have demonstrated remarkable resilience and innovation in the face of extreme environmental challenges. Their traditional water harvesting techniques and climate adaptation strategies have become models for sustainable living in arid regions. They have preserved ancient knowledge while adapting to modern challenges, showing remarkable strength in the face of adversity.',
        practices: [
            'Nomadic pastoralism that moves with livestock to find water and grazing',
            'Traditional water harvesting that captures every precious drop of rain',
            'Livestock trading that sustains communities in harsh environments',
            'Traditional fishing along the Nile and Lake Turkana where applicable',
            'Climate adaptation strategies passed down through generations'
        ],
        products: [
            { name: 'Survival Beaded Jewelry', price: 'KSh 1,500', icon: '📿', story: 'Beads that celebrate life and beauty even in the harshest conditions' },
            { name: 'Desert Leather Work', price: 'KSh 2,200', icon: '👝', story: 'Crafted from livestock that survive in one of Kenya\'s toughest environments' },
            { name: 'Survival Tools', price: 'KSh 1,800', icon: '🛠️', story: 'Tools that have enabled survival and prosperity in the northern deserts' },
            { name: 'Cultural Artifacts', price: 'KSh 2,500', icon: '🎭', story: 'Items that preserve the rich cultural heritage of northern Kenya' }
        ]
    },
    samburu: {
        name: 'Samburu',
        emoji: '🐘',
        region: 'Northern Kenya',
        population: 'Approximately 350,000 (1% of Kenya\'s population)',
        history: 'In the rugged highlands of northern Kenya, where Mount Ololokwi rises like a sacred sentinel, the Samburu people have crafted a culture as distinctive as the landscape they call home. Cousins to the Maasai but with their own unique identity, they have adapted pastoralism to the challenges of the northern highlands and semi-arid plains. Their deep connection with camels, their elaborate age-set systems, and their warrior traditions have created a society that balances ancient customs with the realities of modern Kenya. They are the custodians of northern Kenya\'s cultural heritage.',
        impact: 'Samburu culture preserves unique traditions of northern Kenya\'s pastoralist communities while contributing to the region\'s cultural diversity and tourism appeal. Their specialized knowledge of camel pastoralism, their colorful beadwork, and their warrior traditions have become integral to understanding Kenya\'s ethnic mosaic.',
        practices: [
            'Camel-focused pastoralism that has adapted to northern highland conditions',
            'Traditional age-set systems that create lifelong bonds and shared responsibilities',
            'Singing and dancing traditions that celebrate life and preserve history',
            'Warrior ceremonies that honor courage and protect the community',
            'Master beadwork and craftsmanship that creates wearable art'
        ],
        products: [
            { name: 'Samburu Beadwork', price: 'KSh 2,200', icon: '📿', story: 'Intricate beadwork that tells stories through color and pattern' },
            { name: 'Traditional Attire', price: 'KSh 3,000', icon: '👘', story: 'Clothing that reflects the unique identity and pride of the Samburu people' },
            { name: 'Camel Products', price: 'KSh 1,500', icon: '🐪', story: 'Items crafted from camels that sustain Samburu pastoral life' },
            { name: 'Handcrafted Treasures', price: 'KSh 2,000', icon: '🎨', story: 'Artisan creations that showcase Samburu craftsmanship and cultural identity' }
        ]
    }
};

// Navigation functions
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageName + 'Page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

function showCommunity(communityKey) {
    const community = communities[communityKey];
    if (!community) return;
    
    // Create or update community detail page
    const communityPagesContainer = document.getElementById('communityPages');
    
    const communityHTML = `
        <div id="community-${communityKey}" class="page-content">
            <div class="community-detail">
                <div class="community-header">
                    <h1>${community.emoji} ${community.name}</h1>
                    <p>${community.region} • ${community.population}</p>
                </div>
                
                <div class="detail-section story-section">
                    <h2>Our Story</h2>
                    <p>${community.history}</p>
                </div>
                
                <div class="detail-section">
                    <h2>Our Impact on Kenya</h2>
                    <p>${community.impact}</p>
                </div>
                
                <div class="detail-section">
                    <h2>Our Cultural Heritage</h2>
                    <ul>
                        ${community.practices.map(practice => `<li>${practice}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mini-shop">
                    <h2>Support Our Community</h2>
                    <p class="shop-intro">Discover authentic crafts and products that tell the story of our people</p>
                    <div class="products-grid">
                        ${community.products.map(product => `
                            <div class="product-card">
                                <div class="product-image">${product.icon}</div>
                                <div class="product-info">
                                    <h3 class="product-name">${product.name}</h3>
                                    <p class="product-story">${product.story}</p>
                                    <p class="product-price">${product.price}</p>
                                    <button class="add-to-cart" onclick="addToCart('${communityKey}', '${product.name}', '${product.price}')">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="text-align: center; margin: 3rem 0;">
                    <button onclick="showPage('home')" class="cta-button">← Back to Home</button>
                </div>
            </div>
        </div>
    `;
    
    // Insert or replace community page
    const existingPage = document.getElementById(`community-${communityKey}`);
    if (existingPage) {
        existingPage.remove();
    }
    communityPagesContainer.insertAdjacentHTML('beforeend', communityHTML);
    
    // Hide all pages and show community page
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`community-${communityKey}`).classList.add('active');
    
    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('communitiesDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

function addToCart(communityKey, productName, productPrice) {
    alert(`Added ${productName} (${productPrice}) to cart! Supporting ${communities[communityKey].name} community.`);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('communitiesDropdown');
    const isClickInside = dropdown.contains(event.target);
    
    if (!isClickInside) {
        dropdown.classList.remove('active');
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});