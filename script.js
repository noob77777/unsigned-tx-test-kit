const connect_wallet = async () => {
  if (
    (await window.ergo_check_read_access()) ||
    (await window.ergo_request_read_access())
  ) {
    const elem = document.getElementById('connect_wallet_button');
    elem.innerText = 'Connected';
  } else {
    const elem = document.getElementById('connect_wallet_button');
    elem.innerText = 'Connect Wallet';
  }
};

const submit_tx = async () => {
  try {
    const json = document.getElementById('unsigned_tx');
    const unsigned_tx = JSON.parse(json.value);
    const signed_tx = await ergo.sign_tx(unsigned_tx);
    const tx_id = await ergo.submit_tx(signed_tx);
    console.log(tx_id);
  } catch (e) {
    console.log(e);
  }
};
