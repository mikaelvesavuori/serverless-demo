export const handler = async (event: any) => {
  const name = event?.detail?.data?.name || 'UNKNOWN';
  const time = event?.detail?.metadata?.timestamp || '0';

  const timestamp = new Date(parseInt(time)).toLocaleString();

  console.log(`${name} was greeted at ${timestamp}!`);

  return {
    statusCode: 200,
    body: ''
  };
};
