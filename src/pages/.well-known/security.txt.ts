import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  const expiryDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
  expiryDate.setHours(0)
  expiryDate.setMinutes(0)
  expiryDate.setSeconds(0)
  expiryDate.setMilliseconds(0)
  return new Response(`Contact: mailto:james@jaminit.co.uk
Expires: ${expiryDate.toISOString()}
Preferred-Languages: en
  `)
}