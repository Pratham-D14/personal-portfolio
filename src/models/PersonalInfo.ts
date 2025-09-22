import mongoose from "mongoose";

const PersonalInfoSchema = new mongoose.Schema({
  skills: {
    frontendSkills: [String],
    backendSkills: [String],
    softSkills: [String],
  },
  workExperience: { type: [Object], default: [] },
  education: { type: [Object], default: [] },
  certification: { type: [Object], default: [] },
  projects: { type: [Object], default: [] },
  interest: { type: [Object], default: [] },
});

export default mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", PersonalInfoSchema);
