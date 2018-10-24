'use strict';
const HashMap = require('../lib/hash-map');

describe('hashmap tests', () => {
  test('should create a hash map when given a number of indexes', () => {
    let hashMap = new HashMap(8);
    expect(hashMap.bucketCount).toBe(8);
    expect(hashMap.buckets.length).toBe(8);

  });

  test('should create a hashmap with last index being null', () => {
    let hashMap = new HashMap(8);
    expect(hashMap.buckets[7]).toBeNull;

  });

  test('should create a hash when sumHash is called with a key', () => {
    let hashMap = new HashMap(8);
    let hashedKey = hashMap.sumHash('Sharon');
    expect(hashedKey).toBe(3);
  });

  test('should create a hash when sumHash is called with a key', () => {
    let hashMap = new HashMap(8);
    let hashedKey = hashMap.sumHash('Sharon');
    expect(typeof hashedKey).toBe('number');
  });

  test('should throw and error when sumHash is called without at a key passed in', () => {
    let hashMap = new HashMap(8);
    expect(() => hashMap.sumHash()).toThrowError();
  });

  test('should create add a hashed key and value to an instance of a hashmap', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10, true);
    let actual = hashMap.buckets[3];
    expect(actual).toBeInstanceOf(Object);
  });

  test('should throw error when key is not a string', () => {
    let hashMap = new HashMap(8);
    expect(() => hashMap.set(4, 2, true)).toThrowError();
  });

  test('should throw an error when there are not 2 arguments', () => {
    let hashMap = new HashMap(8);
    expect(() => hashMap.set(2)).toThrowError();
    expect(() => hashMap.set(2, 3, 4)).toThrowError();
  });

  test('should throw an error when there is not an argument', () => {
    let hashMap = new HashMap(8);
    expect(() => hashMap.get()).toThrowError();

  });
  test('should create add a hashed key and value to an instance of a hashmap', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10, true);
    let actual = hashMap.get('sharon');
    expect(actual).toBe(10);
  });

  test('should return second value set and override the first value', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10, true);
    hashMap.set('sharon', 11, true);
    let actual = hashMap.get('sharon');
    expect(actual).toBe(11);
  });

  test('should find and remove a value', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10, true);
    hashMap.remove('sharon');
    expect(hashMap.buckets[3]).toBe(null);
  });

  test('should throw error if key searched for does not exist', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10);
    expect(() => hashMap.remove('steve')).toThrowError();
  });

  test('should throw error if there is not an arg passed in', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10);
    expect(() => hashMap.remove()).toThrowError();
  });
  test('should serialize the hashmap and return a string', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10);
    let serialized = hashMap.serialize();
    expect(typeof serialized).toBe('string');
  });

  test('should deserialize a serialized HashMap', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10);
    let serialized = hashMap.serialize();
    let deserialized = HashMap.deserialize(serialized);
    expect(deserialized).toBeInstanceOf(HashMap);
  });

  test('should deserialize a serialized HashMap and return the value', () => {
    let hashMap = new HashMap(8);
    hashMap.set('sharon', 10, true);
    let serialized = hashMap.serialize();
    let deserializedHMap = HashMap.deserialize(serialized);
    let actual = deserializedHMap.get('sharon');
    expect(actual).toBe(10);
  });
});

