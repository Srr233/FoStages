const sendReq = () => {
  const serverLink = 'https://four-stages.herokuapp.com/';

  const fn = async ({ method, reqObj}) => {
    const responce = await fetch(`${serverLink}${method}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqObj)
    });
    const json = await responce.json();
    return json;
  }

  return fn;
}
export default sendReq();