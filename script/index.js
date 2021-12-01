  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  function bannedChecker() {
    let BanRefreshActi = getCookie("banned");
    if (BanRefreshActi == "1") {
      alert("You are banned.");
    } else {
      window.location.replace("https://tuan-os.github.io/home");
      alert("Welcome");
    }
  }
  bannedChecker(); // check cookies
