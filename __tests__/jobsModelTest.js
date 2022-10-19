const mongoose = require("mongoose");
const {Jobs} = require("../server/models/schemas.js");

const db = require("../setup/dbTest");

const jobsData = {
  username: "robot",
  companyName: "Facebook",
  jobTitle: "SWE"
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
 * Jobs Schema Tests
 */
describe("Jobs model", () => {
  it("create & save jobs document successfully", async () => {
    const validJob = new Jobs(jobsData);
    const savedJob = await validJob.save();
    
    // User Id should be defined when successfully saved to MongoDB.
    expect(savedJob._id).toBeDefined();
    expect(savedJob.created_at).toBeDefined();
    expect(savedJob.username).toBe(jobsData.username);
    expect(savedJob.companyName).toBe(jobsData.companyName);
    expect(savedJob.jobTitle).toBe(jobsData.jobTitle);
  });

  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field not defined in schema should be undefined", async () => {
    const jobWithInvalidField = new Jobs({
      ...jobsData,
      email: "robot@email.com",
    });

    const savedJobWithInvalidField = await jobWithInvalidField.save();
    expect(savedJobWithInvalidField._id).toBeDefined();
    expect(savedJobWithInvalidField.username).toBe(jobsData.username);
    expect(savedJobWithInvalidField.email).toBeUndefined();
  });

  // It should us tell us the errors in on username field.
  it("create user without required field should fail", async () => {
    const jobWithoutRequiredField = new Jobs({ companyName: "Facebook" });
    let err;
    try {
      const savedJobWithoutRequiredField = await jobWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.username).toBeDefined();
  });
});