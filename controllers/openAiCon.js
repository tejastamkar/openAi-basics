const openai = require('../config/openaiConfig');

/**
 * Generates a meta description for a given title using the OpenAI API.
 *
 * @param {string} title - The title for which to generate the meta description.
 * @return {Promise<Object>} A Promise that resolves to the output of the OpenAI API call.
 */
const generateMeta = async (title) => {

    const outputQuery = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: `Give answer for query ${title}`
            }
        ],
        max_tokens: 80
    })
    console.log(outputQuery.choices[0]);

}


module.exports = { generateMeta }