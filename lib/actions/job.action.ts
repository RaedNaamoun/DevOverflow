export const fetchLocation = async () => {
  const response = await fetch("http://ip-api.com/json/?fields=country");
  const location = await response.json();
  return location.country;
};

export const fetchCountries = async (): Promise<Country[]> => {
  const countries = (await import("world-countries")).default;

  return countries
    .map((country) => ({ name: { common: country.name.common } }))
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
};

export const fetchJobs = async (filters: JobFilterParams) => {
  const { query, page } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`, {
    headers,
  });

  const result = await response.json();

  return result.data;
};