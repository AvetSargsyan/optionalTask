import { faker } from '@faker-js/faker';

// --------------------- Given data. Can't be changed -------------------------------
const generateRandomDate = () => {            //Generates random date range
    return faker.date.between(
        new Date(2000, 1, 1),
        new Date(2030, 12, 31),
    );
};

export const jurisdictions = [                 //Generates array with objects. Each object contains random data
    {
        name: faker.word.sample(),
        type: faker.word.sample(),
        countryId: faker.number.int(),
        countryName: faker.word.sample(),
        stateId: faker.number.int(),
        stateName: faker.word.sample(),
        hasIndicator: faker.datatype.boolean(),
        id: faker.number.int(),
    },
]  // count of objects in array is not limited. Sturucture is the same for each of them


export const date = [{                           //Generates array with 1 object containing 2 dates
    startDate: generateRandomDate().toLocaleDateString(),
    endDate: generateRandomDate().toLocaleDateString(),
}]; // this array contains only 1 object !!!

// ------------------------- Can't be changed -------------------------------