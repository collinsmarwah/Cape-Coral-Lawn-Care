import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest, AIQuoteResponse } from "../types";

// Initialize the Gemini client
// Note: process.env.API_KEY is assumed to be available as per guidelines.
const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API_KEY is missing from environment variables.");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const generateSmartQuote = async (request: QuoteRequest): Promise<AIQuoteResponse | null> => {
    const ai = getClient();
    if (!ai) return null;

    const prompt = `
        You are an expert lawn care estimator for "Cape Coral Lawn Care" in Cape Coral, Florida.
        The climate is tropical, with specific grass types like St. Augustine and Floratam.
        A customer has provided the following details about their lawn:
        - Approximate Size: ${request.lawnSize} sq ft
        - Desired Service: ${request.serviceType}
        - Specific Issues/Notes: ${request.issues}

        Our Standard Pricing Reference (for your internal calculation logic only):
        - Weekly Maintenance: starts around $139/mo
        - Bi-Weekly: starts around $109/mo
        - Landscaping: Custom

        Based on this, provide:
        1. A realistic estimated monthly price range (e.g. "$110 - $140").
        2. A short, professional summary of what we will do (max 2 sentences).
        3. Three specific tips for the homeowner to improve their lawn condition immediately, considering the Florida climate (e.g. irrigation, chinch bugs, fungus).

        Return the data strictly in JSON format.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        estimatedPrice: { type: Type.STRING },
                        summary: { type: Type.STRING },
                        tips: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        }
                    },
                    required: ["estimatedPrice", "summary", "tips"]
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response from AI");

        return JSON.parse(text) as AIQuoteResponse;

    } catch (error) {
        console.error("Error generating quote:", error);
        return {
            estimatedPrice: "Contact for Quote",
            summary: "We couldn't generate an automatic estimate right now, but we'd love to help.",
            tips: ["Check your irrigation system", "Inspect for pests", "Contact us for a free on-site consultation"]
        };
    }
};