import mongoose from "mongoose";

const config = useRuntimeConfig();
export default defineNitroPlugin(async (nitroApp) => {
    try {
        await mongoose.connect(config.mongoUrl);
        console.log("DB connection established.");
    } catch (err) {
        console.error("DB connection failed.", err);
    }
})
