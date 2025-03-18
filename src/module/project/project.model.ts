import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const ProjectSchema = new Schema<IProject>({
    name: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    technologiesUsed: {
        frontend: { type: [String], required: true },
        backend: { type: [String], required: true },
        database: { type: String, required: true },
        authentication: { type: String, required: true },
    },
    teamMembers: { type: String, required: true },
    projectType: {
        type: String,
        enum: ["personal", "team"],
        required: true,
        lowercase: true,
    },
    role: { type: String, required: true },
    liveSite: { type: String, required: true },
    clientSiteGitHub: { type: String, required: true },
    serverSiteGitHub: { type: String, required: true },
    keyFeatures: { type: [String], required: true },
    challengesFaced: { type: [String], required: true },
    futureImprovements: { type: [String], required: true },
},
    { timestamps: true }
);

const ProjectModel = mongoose.model<IProject>("Project", ProjectSchema);
export default ProjectModel;
