const mongoose = require("mongoose");
const {Users} = require("../server/models/schemas.js");

const db = require("../setup/dbTest");

const userData = {
  username: "robot",
  password: "microwave",
};

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});


/**
 * User Schema Tests
 */
describe("User model", () => {
  it("create & save user successfully", async () => {
    const validUser = new Users(userData);
    const savedUser = await validUser.save();
    
    // User Id should be defined when successfully saved to MongoDB.
    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(userData.username);
    expect(savedUser.password).toBe(userData.password);
  });

  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field not defined in schema should be undefined", async () => {
    const userWithInvalidField = new Users({
      ...userData,
      email: "robot@email.com",
    });

    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField._id).toBeDefined();
    expect(savedUserWithInvalidField.username).toBe(userData.username);
    expect(savedUserWithInvalidField.email).toBeUndefined();
  });

  // It should us tell us the errors in on password field.
  it("create user without required field should fail", async () => {
    const userWithoutRequiredField = new Users({ username: "robot" });
    let err;
    try {
      const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });
});