'use strict';

class HashMap {
  constructor(nBuckets) {
    this.bucketCount = nBuckets;
    this.buckets = Array(this.bucketCount).fill(null);
  }
  sumHash(key) {
    if (!key) {
      throw new Error('you must pass a key into this function');
    }
    if (typeof key !== 'string') {
      throw new Error('key must be a string');
    }
    return key.split('').reduce((a, b) => {
      return a + b.charCodeAt(0);
    }, 0) % this.bucketCount;
  }

  set(key, value) {
    if (arguments.length !== 2) {
      throw new Error('must pass in a key and a value');
    }
    let hash;
    try {
      hash = this.sumHash(key);
    } catch (e) {
      throw e;
    }
    this.buckets[hash] = { [key]: value };
  }

  get(key) {
    let hash;
    try {
      hash = this.sumHash(key);
    } catch (e) {
      throw e;
    }
    return this.buckets[hash][key];
  }

  update(key, value) {
    let hash = this.sumHash(key);
    this.buckets[hash] = { [key]: value };

  }

  remove(key) {
    let hash = this.sumHash(key);
    if (!this.get(key)) {
      throw new Error('the key you are searching for does not exist');
    } else {
      this.buckets[hash] = null;
    }
  }

  keys() {
    return this.buckets.map(obj => {
      if (obj) {
        let key = Object.keys(obj)[0];
        return key;
      }
      return null;
    });
  }

  serialize() {
    return JSON.stringify(this.buckets);
    //expect this to be a string of the object
  }
  //we are calling this static because it is a method on the Class not on an instance - because once it has been serialized it can no longer be used on an instance because it is a string.
  static deserialize(serializedHMap) {
    let deserializedHMap = JSON.parse(serializedHMap);
    console.log(deserializedHMap.length);
    let result = new HashMap(deserializedHMap.length);
    result.buckets = deserializedHMap;


    //look back at constructor and set the properties to the new instance of the class
    // result.bucketCount = deserializedHMap.bucketcount;
    // result.buckets = deserializedHMap.buckets;

    return result;
    //to deserialize I need to call HashMap.deserialize(newmap); 
  }

  prettyPrint() {
    let msg = '';

    this.keys().forEach((key) => {
      if (key) {
        msg += `\${key}: ${this.get(key)}`;
      }
    });

    console.log(msg);
  }

  repeatedWord(book) {
    let words = book.split('');
    let wordCounts = {};

    for (let i = 0; i < words.length; i++)
      if (wordCounts[words[i]]) {
        return words;
      } else {
        wordCounts[words[i]] = 1;
      }
  }

}



module.exports = HashMap;