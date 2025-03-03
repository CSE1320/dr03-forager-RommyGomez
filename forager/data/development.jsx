// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const closeButton = {
    icon: "/icons/X.svg"
}
const pillData = [
    {
        pilltext: "Favorites",
        pilltype: "Tags",
        isEnabled: true
    },
    {
        pilltext: "Recents",
        pilltype: "Tags",
        isEnabled: true
    },
    {
        pilltext: "Texas",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "North America",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "South America",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "Asia",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "Europe",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "Africa",
        pilltype: "Regions",
        isEnabled: true
    },
    {
        pilltext: "Poisonous",
        pilltype: "Category",
        isEnabled: true
    },
    {
        pilltext: "Medicinal",
        pilltype: "Category",
        isEnabled: true
    },
    {
        pilltext: "Mythical",
        pilltype: "Category",
        isEnabled: true
    },
    {
        pilltext: "Good for Broths",
        pilltype: "Category",
        isEnabled: true
    }
]

const mushroomData = [
    {
        name: "Death Cap",
        image: "images/deathCap.jpg",
        alt: "A Death Cap on a pile of leaves",
        isToxic: true
    },
    {
        name: "Paddy Straw",
        image: "images/paddyStraw.jpg",
        alt: "Two Paddy Straws on a pile of dirt",
        isToxic: false
    },
    {
        name: "Destroying Angel",
        image: "images/destroyingAngel.jpg",
        alt: "A Destroying Angel atop decaying wood",
        isToxic: true
    },
    {
        name: "False Death Cap",
        image: "images/falseDeathCap.jpg",
        alt: "A False Death Cap on a pile of leaves",
        isToxic: true
    },
    {
        name: "Puffball",
        image: "images/puffball.jpg",
        alt: "Three Puffballs atop decaying wood",
        isToxic: false
    }
]
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {closeButton, warningMessage, dummyData, pillData, mushroomData}; // Requires import {warningMessage, dummyData} from './data/development.js';
