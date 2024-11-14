export async function fetchData(url: string): Promise<any> {
  const response: Response = await fetch(url);
  const result = await response.json();
  return result;
}