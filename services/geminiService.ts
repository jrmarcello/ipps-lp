import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_API_KEY || '';

// We create the client lazily or check for key existence to prevent immediate crashes if key is missing,
// though the prompt implies the key is available.
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateEncouragement = async (topic: string): Promise<string> => {
  if (!API_KEY) {
    return "Configuração da API necessária para gerar mensagens personalizadas. Por favor, leia a Bíblia em Salmos 121 para conforto imediato.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Você é um pastor presbiteriano sábio e acolhedor. 
      O usuário está buscando uma palavra de esperança ou orientação sobre: "${topic}".
      Escreva uma mensagem muito curta (máximo de 2 parágrafos curtos) de encorajamento baseada na Bíblia.
      Inclua uma referência bíblica específica no final.
      O tom deve ser reformado, centrado em Cristo e na soberania de Deus, mas muito acolhedor.`,
    });

    return response.text || "Não foi possível gerar a mensagem no momento. Deus te abençoe.";
  } catch (error) {
    console.error("Error generating encouragement:", error);
    return "Ocorreu um erro ao buscar a mensagem. Tente novamente mais tarde.";
  }
};