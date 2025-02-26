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

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, pillData}; // Requires import {warningMessage, dummyData} from './data/development.js';
