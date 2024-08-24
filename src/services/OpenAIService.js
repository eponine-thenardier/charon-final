import { handleFetch } from "./fetching"; 
//import { useChatCompletion } from 'openai-streaming-hooks';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

async function fetchAttractions(city) {
  if (!city) {
    return 'Please provide a city name to fetch attractions.';
  }

  const messages = [
    { role: 'system', content: 'You are a helpful assistant who writes in complete sentences with correct grammar and punctuation. Do not cut off the end of your response. Answer in full.' },
    { role: 'user', content: `List a maximum of 5 attractions in ${city} with a sentence long description of each. Make sure all sentences are complete. Separate each attraction on '\n' new line.` }
  ];
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: messages,
      max_tokens: 1000,
    }),
  };

  const [responseData, error] = await handleFetch('https://api.openai.com/v1/chat/completions', options)

  if (error) {
    console.error('Error fetching attractions:', error);
    return 'Sorry, something went wrong while fetching the attractions. Please try again later.'
  }

  if (responseData && responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
    return responseData.choices[0].message.content.trim();
  } else {
    return 'Sorry, I couldn’t retrieve any attractions for that location.'
  }
}

async function fetchWeatherTrends(city, dates) {
  if (!city) {
    return 'Please provide a city name to fetch weather trends.'
  }

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: `Respond in no more than five complete sentences .What are the typical weather trends in ${city} around the dates ${dates}? I don't need the weather for the specific dates, just for the time of year in general.` }
  ];
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: messages,
      max_tokens: 150,
    }),
  };

  const [responseData, error] = await handleFetch('https://api.openai.com/v1/chat/completions', options)

  if (error) {
    console.error('Error fetching weather trends:', error)
    return 'Sorry, something went wrong while fetching the weather trends. Please try again later.'
  }

  if (responseData && responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
    return responseData.choices[0].message.content.trim()
  } else {
    return 'Sorry, I couldn’t retrieve any weather trends for that location.'
  }
}

export { fetchAttractions, fetchWeatherTrends };
