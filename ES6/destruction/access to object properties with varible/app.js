// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {
  first: firstName, // we can change the variable used for property name like this
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling //we can use favoriteSibling instead of siblings.sister 
   },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
