const showMessage = (cbSetMessage, cbSetBool) => {
  return (mss) => {
    cbSetMessage(mss);
    cbSetBool(true);
    setTimeout(() => { cbSetBool(false) }, 2000);
  }
}

export default showMessage;