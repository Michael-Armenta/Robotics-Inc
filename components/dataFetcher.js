// The dataFethcer module will return parsed jason data

async function getData(url) {
  let dataArray = [];

  const response = await fetch(url); //receice the response body
  dataArray = [...(await response.json())]; // parsing data in JSON objects

  return dataArray;
}

export { getData };
