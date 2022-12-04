"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//--------DOM元素綁定 start--------
var navDropdowmMenu = document.querySelector("[data-nav-dropdowm-menu]");
var navUserImg = document.querySelector("[data-nav-user-img]");
var register = document.querySelector("[data-register]");
var registerForm = document.querySelector("[data-register-form]");
var login = document.querySelector("[data-login]");
var loginForm = document.querySelector("[data-login-form]");
var formList = document.querySelector("[data-form-list]");
var clacBtn = document.querySelector("[data-btn-clac]");
var fINum = document.querySelector("[data-FINum]");
var userPage = document.querySelector("[data-user-page]");
var userpageImg = document.querySelector("[data-userpage-user-img]");
var userpageName = document.querySelector("[data-userpage-user-name]");
var userpageMail = document.querySelector("[data-userpage-user-mail]");
var backstageUserImg = document.querySelector("[data-backstage-userImg]");
var allUserData = document.querySelector("[data-backstage-users]");
var allPostData = document.querySelector("[data-backstage-posts]");
var userpageFINum = document.querySelector("[data-userpage-FINum]");
var fINumAnnualExpenses = document.querySelector("[data-FINum-annual-expenses]");
var fINumAnnualExpensesForm = document.querySelector("[data-FINum-annual-expenses-form]");
var fINumOnetimeExpenses = document.querySelector("[data-FINum-onetime-expenses]");
var fINumOnetimeExpensesForm = document.querySelector("[data-FINum-onetime-expenses-form]");
var fINumOnetimeExpenses1 = document.querySelector("[data-FINum-onetime-expenses-1]");
var fINumOnetimeExpenses2 = document.querySelector("[data-FINum-onetime-expenses-2]");
var fINumOnetimeExpenses3 = document.querySelector("[data-FINum-onetime-expenses-3]");
var fINumOnetimeExpenses4 = document.querySelector("[data-FINum-onetime-expenses-4]");
var fINumWithdrawalRate = document.querySelector("[data-FINum-withdrawal-rate]");
var fINumInvestReturn = document.querySelector("[data-FINum-invest-return]"); //--------DOM元素綁定 end--------
//--------參數宣告 start--------

var freeNum = 0;
var howFarToFree = 0;
var loginConstraints = {
  email: {
    presence: {
      message: "^請輸入email"
    },
    email: {
      message: "^請正確填寫email格式"
    }
  },
  password: {
    presence: {
      message: "^請輸入密碼"
    },
    length: {
      minimum: 5,
      maximum: 12,
      message: "^密碼需為5~12位英文或數字"
    },
    format: {
      pattern: "[a-z0-9]+",
      message: "^密碼需為5~12位英文或數字"
    }
  }
};
var registerConstraints = {
  name: {
    presence: {
      message: "^請輸入使用者暱稱"
    },
    length: {
      minimum: 1,
      maximum: 10,
      message: "^暱稱為1~10個中英數字"
    }
  },
  email: {
    presence: {
      message: "^請輸入email"
    },
    email: {
      message: "^請正確填寫email格式"
    }
  },
  password: {
    presence: {
      message: "^請輸入密碼"
    },
    length: {
      minimum: 5,
      maximum: 12,
      message: "^密碼需為5~12位英文或數字"
    },
    format: {
      pattern: "[a-z0-9]+",
      message: "^密碼需為5~12位英文或數字"
    }
  },
  passwordCheck: {
    equality: {
      attribute: "password",
      message: "^輸入值與密碼不符，請重新輸入"
    }
  }
};
var clacConstraints = {
  annualExpenses: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpenses1: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpensesTime1: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpenses2: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpensesTime2: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpenses3: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  oneTimeExpensesTime3: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  annualInvestment: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  currentInvestment: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  targetWithdrawalRate: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  },
  expectedInvestmentAnnualReturn: {
    numericality: {
      notValid: "^欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^輸入的數字需要大於等於零"
    }
  }
}; //--------參數宣告 end--------
//--------函士宣告 start--------
//-------- 共用函式 start--------

var getFormData = function getFormData(dom) {
  var formData = new FormData(dom);

  var formDataObj = _toConsumableArray(formData).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        values = _ref2[1];

    acc[name] = values.trim();
    return acc;
  }, {});

  return formDataObj;
};

var userInputCheck = function userInputCheck(dom, constraints) {
  var dataCheckBool = "";
  var dataCheck = validate(dom, constraints);
  console.log(dataCheck);

  if (dataCheck) {
    Object.values(dataCheck).forEach(function (i) {
      console.log(i);
    });
    dataCheckBool = false;
  } else {
    dataCheckBool = true;
  }

  return dataCheckBool;
}; //--------首頁-財富自由計算機 start--------
//整理formData取得的資料


var getClacDataObj = function getClacDataObj(obj) {
  var DataObj = {
    annualExpenses: obj["年支出"],
    oneTimeExpenses1: obj["大筆支出1"],
    oneTimeExpensesTime1: obj["幾年後支出1"],
    oneTimeExpenses2: obj["大筆支出2"],
    oneTimeExpensesTime2: obj["幾年後支出2"],
    oneTimeExpenses3: obj["大筆支出3"],
    oneTimeExpensesTime3: obj["幾年後支出3"],
    annualInvestment: obj["每年投資金額"],
    currentInvestment: obj["已投入金額"],
    targetWithdrawalRate: obj["預估每年提領率"],
    expectedInvestmentAnnualReturn: obj["預估平均年報酬"]
  };
  var makeDataNoEmpty = Object.entries(DataObj).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    !value ? acc[key] = 0 : acc[key] = parseInt(value, 10);
    return acc;
  }, {});
  return makeDataNoEmpty;
}; //計算財富自由數字


var clacFINum = function clacFINum(obj) {
  var financialIndependenceNumber = obj.annualExpenses / (obj.targetWithdrawalRate / 100) + obj.oneTimeExpenses1 / Math.pow(1 + obj.expectedInvestmentAnnualReturn / 100, obj.oneTimeExpensesTime1) + obj.oneTimeExpenses2 / Math.pow(1 + obj.expectedInvestmentAnnualReturn / 100, obj.oneTimeExpensesTime2) + obj.oneTimeExpenses3 / Math.pow(1 + obj.expectedInvestmentAnnualReturn / 100, obj.oneTimeExpensesTime3);
  return financialIndependenceNumber;
};

var untilFI = function untilFI(obj, num) {
  // Math.log( (財富自由數字*投資報酬率+預估每年可存入金額)/(預估每年可存入金額+已投入金額*投資報酬率)) / Math.log(1+投資報酬率)
  var untilFinancialIndependence = Math.log((num * obj.expectedInvestmentAnnualReturn / 100 + obj.annualInvestment) / (obj.annualInvestment + obj.currentInvestment * obj.expectedInvestmentAnnualReturn / 100)) / Math.log(1 + obj.expectedInvestmentAnnualReturn / 100);
  return untilFinancialIndependence;
}; //渲染圖表


var renderClacChart = function renderClacChart(FINum, crrInv, FIDays) {
  // index-clac-chart
  var chart = c3.generate({
    bindto: d3.select(".index-clac-chart"),
    data: {
      columns: [["財富自由達成率", crrInv], ["距離財富自由目標還有", FINum - crrInv]],
      order: null,
      type: "donut",
      // onclick: function (d, i) { console.log("onclick", d, i); },
      // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      // onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        財富自由達成率: "#03CBE6",
        距離財富自由目標還有: "transparent"
      }
    },
    donut: {
      title: "距離財富自由還有",
      label: {
        show: false
      },
      width: 20
    },
    legend: {
      hide: "距離財富自由目標還有"
    }
  });

  if (!Math.round(FIDays * 365) || !isFinite(FIDays)) {
    d3.select(".c3-chart-arcs-title").style("dominant-baseline", "text-after-edge").style("font-size", "20px").attr("class", "fill-white") // .style("fill","white")
    .insert("tspan").attr("dy", 50).attr("x", 0).attr("font-size", 40).text("？？？天");
  } else {
    d3.select(".c3-chart-arcs-title").style("dominant-baseline", "text-after-edge").style("font-size", "20px").attr("class", "fill-white").insert("tspan").attr("dy", 50).attr("x", 0).attr("font-size", 40).text("".concat(Math.round(FIDays * 365), "\u5929"));
  }

  d3.select(".c3-legend-item").attr("class", "fill-white");
}; //--------首頁-財富自由計算機 end--------
//--------登入註冊功能 start--------


var userRegister = function userRegister(data) {
  axios.post("http://localhost:3000/register", data).then(function (res) {
    console.log(res.data);
    alert("註冊成功");
    setTimeout(function () {
      location.href = "./login.html";
    }, 500);
  })["catch"](function (err) {
    console.error(err);
  });
}; //登入並把accessToken跟userId放入localStorage
//這裡的post還不需要帶token


var userLogin = function userLogin(data) {
  // const header = {}
  axios.post("http://localhost:3000/login", data).then(function (res) {
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("userId", res.data.user.id);
    alert("登入成功");
    setTimeout(function () {
      location.href = "./userpage.html";
    }, 500);
  })["catch"](function (err) {
    console.error(err);
    alert("請確認帳號或密碼是否正確填寫");
  });
}; //登入確認，回傳fn(res)


var loginCheck = function loginCheck(data, callbackFn) {
  var userId = localStorage.getItem("userId");
  var userheaders = {
    headers: {
      Authorization: "Bearer ".concat(localStorage.getItem("accessToken"))
    }
  }; // console.log(userId);

  if (userId) {
    axios.get("http://localhost:3000/600/users/".concat(userId), userheaders).then(function (res) {
      if (res.status === 200) {
        console.log("登入成功");
        callbackFn(res); // navDropdowmMenu.innerHTML = `<li>${res.data.name}</li>`;
      }
    })["catch"](function (err) {
      var _err$response;

      if ((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 401) {
        console.log("請重新登入");
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
      }

      callbackFn(err.response); // console.log(err.response);
    });
  } else {
    callbackFn();
  }
}; //不同身分渲染不同畫面


var renderUserNav = function renderUserNav(status, isAdmin, userName) {
  console.log(status, isAdmin, userName);

  if (status === 200 && isAdmin) {
    // console.log("管理者");
    navDropdowmMenu.innerHTML = " \n    <li><a class=\"dropdown-item text-center\">Hi~".concat(userName, "</a></li>\n    <hr class=\"m-1\">\n    <li><a class=\"dropdown-item text-center\" href=\"/userpage.html\">\u6703\u54E1\u9801\u9762</a></li>\n    <li><a class=\"dropdown-item text-center\" href=\"/backstage-users.html\">\u7BA1\u7406\u8005\u5F8C\u53F0</a></li>\n    <li><a class=\"dropdown-item text-center\" data-user-logout>\u767B\u51FA</a></li>\n    ");
  } else if (status === 200) {
    // console.log("一般會員");
    navDropdowmMenu.innerHTML = " \n    <li><a class=\"dropdown-item text-center\">Hi~".concat(userName, "</a></li>\n    <hr class=\"m-1\">\n    <li><a class=\"dropdown-item text-center\" href=\"/userpage.html\">\u6703\u54E1\u9801\u9762</a></li>\n    <li><a class=\"dropdown-item text-center\" data-user-logout>\u767B\u51FA</a></li>\n    ");
  } else if (status === 401) {
    console.log("非會員");
  }
}; //不同使用者渲染不同頭像


var renderNavUserImg = function renderNavUserImg(status, userImg) {
  var userId = localStorage.getItem("userId");

  if (status === 200) {
    console.log(userImg);
    navUserImg.innerHTML = "";

    if (userImg) {
      navUserImg.style.background = "url(\"".concat(userImg, "\") no-repeat center/cover");
    } else {
      navUserImg.style.background = "url(\"https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80\") no-repeat center/cover";
    }

    navUserImg.classList.add("rounded-circle");
  } else {
    navUserImg.innerHTML = "<span class=\"usermenu-icon material-symbols-outlined text-primary align-middle\">account_circle</span>";
  }
};

var getUserpageFIData = function getUserpageFIData(data, callbackFn) {
  var userId = localStorage.getItem("userId");
  var userheaders = {
    Authorization: "Barer ".concat(localStorage.getItem("accessToken"))
  };
  console.log(userId, userheaders);
}; //依據使用者輸入資料渲染c3圖型


var renderUserClacChart = function renderUserClacChart(FINum, crrInv, FIDays) {
  var chart = c3.generate({
    bindto: d3.select(".user-clac-chart"),
    data: {
      columns: [["財富自由達成率", crrInv], ["距離財富自由目標還有", FINum - crrInv]],
      order: null,
      type: "donut",
      // onclick: function (d, i) { console.log("onclick", d, i); },
      // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      // onmouseout: function (d, i) { console.log("onmouseout", d, i); },
      colors: {
        財富自由達成率: "#03CBE6",
        距離財富自由目標還有: "transparent"
      }
    },
    donut: {
      title: "距離財富自由還有",
      label: {
        show: false
      },
      width: 20
    },
    legend: {
      hide: "距離財富自由目標還有"
    }
  });

  if (!Math.round(FIDays * 365) || !isFinite(FIDays)) {
    d3.select(".c3-chart-arcs-title").style("dominant-baseline", "text-after-edge").style("font-size", "20px").insert("tspan").attr("dy", 50).attr("x", 0).attr("font-size", 40).text("？？？天");
  } else {
    d3.select(".c3-chart-arcs-title").style("dominant-baseline", "text-after-edge").style("font-size", "20px").insert("tspan").attr("dy", 50).attr("x", 0).attr("font-size", 40).text("".concat(Math.round(FIDays * 365), "\u5929"));
  }
}; //不同使用者渲染不同頁面資料


var renderUserpageUserData = function renderUserpageUserData(userImg, userName, userMail) {
  userpageName.textContent = userName;
  userpageMail.textContent = userMail;

  if (userImg) {
    userpageImg.style.background = "url(\"".concat(userImg, "\") no-repeat center/cover");
  } else {
    userpageImg.style.background = "url(\"https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80\") no-repeat center/cover";
  }
};

var userLogout = function userLogout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("accessToken");
  alert("登出成功");
  location.href = "/index.html";
}; //--------登入註冊功能 end--------
//--------抓取後台資料 start--------


var renderBackstageUser = function renderBackstageUser(userImg) {
  console.log(userImg);

  if (userImg) {
    backstageUserImg.style.background = "url(\"".concat(userImg, "\") no-repeat center/cover");
  } else {
    backstageUserImg.style.background = "url(\"https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80\") no-repeat center/cover";
  }
};

var getAllUserData = function getAllUserData(data, callbackFn) {
  var userId = localStorage.getItem("userId");
  var userheaders = {
    Authorization: "Barer ".concat(localStorage.getItem("accessToken"))
  };
  axios.get("http://localhost:3000/users", userheaders).then(function (res) {
    if (res.status === 200) {
      // console.log(res);
      callbackFn(res);
    }
  })["catch"](function (err) {
    console.log(err);
    callbackFn();
  });
};

var getAllPostData = function getAllPostData(data, callbackFn) {
  var userId = localStorage.getItem("userId");
  var userheaders = {
    Authorization: "Barer ".concat(localStorage.getItem("accessToken"))
  };
  axios.get("http://localhost:3000/posts?_expand=user", userheaders).then(function (res) {
    if (res.status === 200) {
      // console.log(res);
      callbackFn(res);
    }
  })["catch"](function (err) {
    console.log(err);
    callbackFn();
  });
}; //--------抓取後台資料 end--------
//--------函士宣告 end--------
//--------DOM元素監聽 start--------
//首頁計算機功能


if (clacBtn) {
  clacBtn.addEventListener("click", function (e) {
    var formDataRow = getFormData(formList); //getClacDataObj()整理Data這裡要處理，如果欄位未寫入，自動帶入0

    var formData = getClacDataObj(formDataRow);
    console.log(formData); //userInputCheck()提領率跟投報率要有預設，並且不得小於1

    var check = userInputCheck(formData, clacConstraints); //整合現有值，進行財富自由數字及天數的運算

    var financialIndependenceNumber = Math.round(clacFINum(formData) * 100) / 100;
    var financialIndependenceDays = untilFI(formData, financialIndependenceNumber);
    console.log(financialIndependenceDays); //運算完畢後回傳並渲染cs.js

    renderClacChart(financialIndependenceNumber, formData.currentInvestment, financialIndependenceDays);
    fINum.textContent = "".concat(financialIndependenceNumber, "\u842C");
  });
} //註冊功能


if (register) {
  register.addEventListener("click", function (e) {
    var data = getFormData(registerForm);
    delete data.passwordCheck;
    console.log(data);
    var check = userInputCheck(registerForm, registerConstraints);
    console.log(check);

    if (check) {
      data["isAdmin"] = false;
      userRegister(data); // console.log(data);
    } else {
      console.log("reject");
    }
  });
} //登入功能


if (login) {
  login.addEventListener("click", function (e) {
    var data = getFormData(loginForm); // console.log(data);

    var check = userInputCheck(loginForm, loginConstraints);
    console.log(check);

    if (check) {
      userLogin(data);
    } else {
      console.log("reject");
    }
  });
}

{
  /* <div class="modal-header">
   <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary">Save changes</button>
  </div> */
} //--------DOM元素監聽 end--------
//畫面載入時，判斷是否是登入狀態

window.onload = function () {
  loginCheck("", function (res) {
    // console.log(res);
    if (res) {
      var _res$data;

      if ((res === null || res === void 0 ? void 0 : res.status) === 401) {
        console.log(res === null || res === void 0 ? void 0 : res.status);
        renderUserNav(401, false);
      } else if ((res === null || res === void 0 ? void 0 : res.status) === 200 && res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.isAdmin) {
        if (location.pathname === "/backstage-users.html" || location.pathname === "/backstage-posts.html") {
          renderBackstageUser(res.data.userImg);
        } else {
          renderNavUserImg(200, res.data.userImg);
        }

        renderUserNav(200, true, res.data.name);
        var logoutBtn = document.querySelector("[data-user-logout]");

        if (logoutBtn) {
          logoutBtn.addEventListener("click", function (e) {
            userLogout();
          });
        }
      } else if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        renderUserNav(200, false, res.data.name);
        renderNavUserImg(200, res.data.userImg);

        var _logoutBtn = document.querySelector("[data-user-logout]");

        if (_logoutBtn) {
          _logoutBtn.addEventListener("click", function (e) {
            userLogout();
          });
        }
      }
    } else {
      console.log("訪客模式");

      if (navUserImg) {
        renderNavUserImg("", false);
      }
    }
  });
}; //當在會員頁面，進行判斷是否有登入，如果有登入撈資料給他瀏覽，如果沒登入請他登入


if (location.pathname === "/userpage.html") {
  loginCheck("", function (res) {
    if (res) {
      if (res.status === 401) {
        setTimeout(function () {
          location.href = "./login.html";
        }, 500);
        alert("請重新登入");
      }
    } else {
      setTimeout(function () {
        location.href = "./login.html";
      }, 500);
      alert("請重新登入");
    }

    renderUserClacChart(30, 20, "?");
    renderUserpageUserData(res.data.userImg, res.data.name, res.data.email);
    getUserpageFIData();
  });
}

console.log(location.pathname);

if (location.pathname === "/backstage-users.html") {
  loginCheck("", function (res) {
    // console.log(res);
    if (res) {
      if (res.status === 401) {
        location.href = "./login.html";
        alert("請重新登入");
      }
    } else {
      location.href = "./login.html";
      alert("請重新登入");
    } // console.log(res);

  });
  getAllUserData("", function (res) {
    var userData = res.data.reduce(function (acc, crr) {
      acc += "\n      <tr class=\"align-baseline\">\n        <th scope=\"row\">".concat(crr.id, "</th>\n        <td>").concat(crr.name, "</td>\n        <td>").concat(crr.email, "</td>\n        <td>").concat(crr.isAdmin, "</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-outline-secondary\"  data-bs-toggle=\"modal\" data-bs-target=\"#showAndEdit").concat(crr.id, "\" data-backstage-showBtn>\u67E5\u770B/\u7DE8\u8F2F</button>\n        </td>\n      </tr>\n      <div class=\"modal fade\" id=\"showAndEdit").concat(crr.id, "\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h1 class=\"modal-title fs-5\" id=\"exampleModalLabel\">user data</h1>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n          </div>\n          <div class=\"modal-body\">\n            <form action=\"\" class=\"w-100\" data-backstage-edit-list>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userId").concat(crr.id, "\">id\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userId").concat(crr.id, "\" name=\"id\" value=\"").concat(crr.id, "\" disabled>\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userName").concat(crr.id, "\">name\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userName").concat(crr.id, "\" name=\"name\" value=\"").concat(crr.name, "\">\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userEmail").concat(crr.id, "\">email\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userEmail").concat(crr.id, "\" name=\"email\" value=\"").concat(crr.email, "\" disabled>\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userImg").concat(crr.id, "\">userImg\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userImg").concat(crr.id, "\" name=\"userImg\" value=\"").concat(crr.userImg, "\">\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"isAdmin").concat(crr.id, "\">isAdmin\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"isAdmin").concat(crr.id, "\" name=\"isAdmin\" value=\"").concat(crr.isAdmin, "\">\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n          </div>\n        </div>\n      </div>\n      ");
      return acc;
    }, "");
    allUserData.innerHTML = userData;
  });
}

if (location.pathname === "/backstage-posts.html") {
  loginCheck("", function (res) {
    if (res) {
      if (res.status === 401) {
        setTimeout(function () {
          location.href = "./login.html";
        }, 500);
        alert("請重新登入");
      }
    } else {
      setTimeout(function () {
        location.href = "./login.html";
      }, 500);
      alert("請重新登入");
    }
  });
  getAllPostData("", function (res) {
    console.log(res);
    var postData = res.data.reduce(function (acc, crr) {
      acc += "\n      <tr class=\"align-baseline\">\n        <th scope=\"row\">".concat(crr.id, "</th>\n        <td>").concat(crr.user.name, "</td>\n        <td>").concat(crr.title, "</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-outline-secondary\"  data-bs-toggle=\"modal\" data-bs-target=\"#showAndEdit").concat(crr.id, "\" data-backstage-showBtn>\u67E5\u770B/\u7DE8\u8F2F</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\"  data-bs-toggle=\"modal\" data-bs-target=\"#delete").concat(crr.id, "\" data-backstage-deleteBtn>\u522A\u9664</button>\n        </td>\n      </tr>\n      <div class=\"modal fade\" id=\"delete").concat(crr.id, "\" tabindex=\"-1\" aria-labelledby=\"thisPostDelete\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h1 class=\"modal-title fs-5\" id=\"thisPostDelete\">delete post</h1>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n              \u662F\u5426\u78BA\u8A8D\u8981\u522A\u9664\u6B64\u7BC7\u8CBC\u6587\uFF1F\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-danger\">\u522A\u9664\u8CBC\u6587</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"showAndEdit").concat(crr.id, "\" tabindex=\"-1\" aria-labelledby=\"thisPostData\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h1 class=\"modal-title fs-5\" id=\"thisPostData\">post data</h1>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n          </div>\n          <div class=\"modal-body\">\n            <form action=\"\" class=\"w-100\" data-backstage-edit-list>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"postId").concat(crr.id, "\">id\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"postId").concat(crr.id, "\" name=\"id\" value=\"").concat(crr.id, "\" disabled>\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userId").concat(crr.id, "\">userId\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userId").concat(crr.id, "\" name=\"userId\" value=\"").concat(crr.userId, "\" disabled>\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"userName").concat(crr.id, "\">userName\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"userName").concat(crr.id, "\" name=\"userName\" value=\"").concat(crr.user.name, "\" disabled>\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"title").concat(crr.id, "\">title\uFF1A</label>\n                <input type=\"text\" class=\"w-80\" id=\"title").concat(crr.id, "\" name=\"email\" value=\"").concat(crr.title, "\">\n              </div>\n              <div class=\"calc-area-form-group mb-2\">\n                <label class=\"me-2\" for=\"content").concat(crr.id, "\">content\uFF1A</label>\n                <textarea type=\"form-control\" rows=\"6\" class=\"w-100 d-block\" id=\"content").concat(crr.id, "\" name=\"userImg\">").concat(crr.content, "</textarea>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">\u95DC\u9589</button>\n            <button type=\"button\" class=\"btn btn-primary\">\u5132\u5B58</button>\n          </div>\n        </div>\n      </div>\n      \n\n      ");
      return acc;
    }, "");
    allPostData.innerHTML = postData;
  });
} //先渲染畫面


renderClacChart(30, 20, "?");
//# sourceMappingURL=all.js.map
