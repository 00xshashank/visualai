import { z } from "zod";

export const TrainModel = z.object({
    name : z.string(),
    age : z.number(),
    type : z.enum(["Man", "Woman", "Dog", "Cat", "Others"]),
    ethnicity: z.enum(["White", 
        "Black", 
        "Asian_American", 
        "East_Asian",
        "South_East_Asian", 
        "South_Asian", 
        "Middle_Eastern", 
        "Pacific", 
        "Hispanic"
    ]),
    eyeColor : z.enum(["Brown", "Blue", "Hazel", "Gray"]),
    bald : z.boolean(),
    images : z.array(z.string())
})

export const GenerateImage = z.object({
    prompt: z.string(), 
    modelId: z.string(),
    num: z.number()
})

export const GenerateImagePack = z.object({
    packId: z.string(),
    modelId: z.string()
})