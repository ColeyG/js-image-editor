export default {
  req(coldAjaxMethod, coldAjaxUrl, coldAjaxProcessor, data) {
    const coldHttpRequest = new XMLHttpRequest();

    function loading() {
      if (!coldHttpRequest) {
        alert("Request Failed!");
      }
      coldHttpRequest.onreadystatechange = processRequest;
      coldHttpRequest.open(coldAjaxMethod, coldAjaxUrl, true);
      if (data) {
        coldHttpRequest.send(data);
      } else {
        coldHttpRequest.send();
      }
    }

    function processRequest() {
      if (coldHttpRequest.readyState == XMLHttpRequest.DONE) {
        if (coldHttpRequest.status === 200) {
          let data = coldHttpRequest.responseText;
          let resp = data;
          coldAjaxProcessor(resp);
        } else {
          let resp = "Failed Request!";
          coldAjaxProcessor(resp);
        }
      }
    }

    loading();
  },
};
