export default async function () {
  // get user's ip
  const response = await fetch('https://api-bdc.net/data/client-ip');
  const data = await response.json();
  let ip = data?.ipString;
  // return { ip, location: '' };
  if (!ip) {
    // error
    return { ip: '', location: '', isp: '' };
  } else {
    // get user's location
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const info = await response.json();
    return {
      ip,
      location: `${info.city} ${info.region} ${info.countryCode} ${info.zip}`,
      isp: info.isp,
    };
  }
}
