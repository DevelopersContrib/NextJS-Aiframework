import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? DOMAIN
    : referrer.replace("www.", "");
  return domainName;
}

export function getLoginUrl() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domain = referrer.includes("localhost")
    ? 'http://'+referrer
    : 'https://'+referrer.replace("www.", "");

  const url = process.env.CONTRIB_LOGIN_URL+
    `?client=${process.env.API_KEY}&redirect_url=${domain}/contrib/login&cancel_url=${domain}`
  return url
}

export function ucfirst(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1+`&domain=${domain}`
const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTopsites() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1_TOPSITES+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getScript(url) {
  try {
    const res = await axios.get(url);
    return res.data.data.content;
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}

export async function getTeamApplication(){
  const domain = getDomain();
  const url = process.env.CONTRIB_API1_TEAM_APPLICATION+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();

}

export async function getTotalTasks(){
  const domain = getDomain();
  const url = process.env.CONTRIB_AP1_TOTAL_TASKS+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
  
}

export async function getTotalLeads(){
  const domain = getDomain();
  const url = process.env.CONTRIB_AP1_TOTAL_LEADS+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
  
}

export async function getTotalMembers(){
  const domain = getDomain();
  const url = process.env.CONTRIB_AP1_CONTRIB_MEMBERS+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
  
}

