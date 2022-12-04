
//--------DOM元素綁定 start--------
const navDropdowmMenu = document.querySelector("[data-nav-dropdowm-menu]");
const navUserImg = document.querySelector("[data-nav-user-img]");

const register = document.querySelector("[data-register]");
const registerForm = document.querySelector("[data-register-form]");

const login = document.querySelector("[data-login]");
const loginForm = document.querySelector("[data-login-form]");

const formList = document.querySelector("[data-form-list]");
const clacBtn = document.querySelector("[data-btn-clac]");
const fINum = document.querySelector("[data-FINum]");

const userPage = document.querySelector("[data-user-page]");
const userpageImg = document.querySelector("[data-userpage-user-img]");
const userpageName = document.querySelector("[data-userpage-user-name]");
const userpageMail = document.querySelector("[data-userpage-user-mail]");

const backstageUserImg = document.querySelector("[data-backstage-userImg]");
const allUserData = document.querySelector("[data-backstage-users]");
const allPostData = document.querySelector("[data-backstage-posts]");

const userpageFINum = document.querySelector("[data-userpage-FINum]");
const fINumAnnualExpenses = document.querySelector("[data-FINum-annual-expenses]");
const fINumAnnualExpensesForm = document.querySelector("[data-FINum-annual-expenses-form]");
const fINumOnetimeExpenses = document.querySelector("[data-FINum-onetime-expenses]");
const fINumOnetimeExpensesForm = document.querySelector("[data-FINum-onetime-expenses-form]");
const fINumOnetimeExpenses1 = document.querySelector("[data-FINum-onetime-expenses-1]");
const fINumOnetimeExpenses2 = document.querySelector("[data-FINum-onetime-expenses-2]");
const fINumOnetimeExpenses3 = document.querySelector("[data-FINum-onetime-expenses-3]");
const fINumOnetimeExpenses4 = document.querySelector("[data-FINum-onetime-expenses-4]");
const fINumWithdrawalRate = document.querySelector("[data-FINum-withdrawal-rate]");
const fINumInvestReturn = document.querySelector("[data-FINum-invest-return]");


//--------DOM元素綁定 end--------






//--------參數宣告 start--------
const freeNum = 0;
const howFarToFree = 0;
const loginConstraints = {
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
      message: "^請輸入密碼",
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
const registerConstraints = {
  name: {
    presence: {
      message: "^請輸入使用者暱稱"
    },
    length: {
      minimum: 1,
      maximum: 10,
      message: "^暱稱為1~10個中英數字"
    },
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
      message: "^請輸入密碼",
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
      message: "^輸入值與密碼不符，請重新輸入",
    }
  }
};

const clacConstraints = {
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
}


//--------參數宣告 end--------





//--------函士宣告 start--------

//-------- 共用函式 start--------
const getFormData = (dom) => {
  const formData = new FormData(dom);
  const formDataObj = [...formData].reduce((acc, [name, values]) => {
    acc[name] = values.trim();
    return acc
  }, {});
  return formDataObj;
}

const userInputCheck = (dom, constraints) => {
  let dataCheckBool = "";
  const dataCheck = validate(dom, constraints);
  console.log(dataCheck);
  if (dataCheck) {
    Object.values(dataCheck).forEach((i) => {
      console.log(i);
    })
    dataCheckBool = false;
  } else {
    dataCheckBool = true;
  }
  return dataCheckBool;
}

//--------首頁-財富自由計算機 start--------

//整理formData取得的資料
const getClacDataObj = (obj) => {
  const DataObj = {
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
  }
  const makeDataNoEmpty = Object.entries(DataObj).reduce((acc, [key, value]) => {
    !value ? acc[key] = 0 : acc[key] = parseInt(value, 10);
    return acc;
  }, {})
  return makeDataNoEmpty;
}

//計算財富自由數字
const clacFINum = (obj) => {
  const financialIndependenceNumber = (obj.annualExpenses / (obj.targetWithdrawalRate / 100)) + (obj.oneTimeExpenses1 / Math.pow((1 + obj.expectedInvestmentAnnualReturn / 100), obj.oneTimeExpensesTime1)) + (obj.oneTimeExpenses2 / Math.pow((1 + obj.expectedInvestmentAnnualReturn / 100), obj.oneTimeExpensesTime2)) + (obj.oneTimeExpenses3 / Math.pow((1 + obj.expectedInvestmentAnnualReturn / 100), obj.oneTimeExpensesTime3));
  return financialIndependenceNumber;
}

const untilFI = (obj, num) => {
  // Math.log( (財富自由數字*投資報酬率+預估每年可存入金額)/(預估每年可存入金額+已投入金額*投資報酬率)) / Math.log(1+投資報酬率)
  const untilFinancialIndependence = Math.log(((num * obj.expectedInvestmentAnnualReturn / 100) + obj.annualInvestment) / (obj.annualInvestment + (obj.currentInvestment * obj.expectedInvestmentAnnualReturn / 100))) / Math.log(1 + obj.expectedInvestmentAnnualReturn / 100);

  return untilFinancialIndependence;
}

//渲染圖表
const renderClacChart = (FINum, crrInv, FIDays) => {
  // index-clac-chart
  let chart = c3.generate({
    bindto: d3.select(".index-clac-chart"),
    data: {
      columns: [
        ["財富自由達成率", crrInv],
        ["距離財富自由目標還有", FINum - crrInv]
      ],
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
    d3.select(".c3-chart-arcs-title")
      .style("dominant-baseline", "text-after-edge")
      .style("font-size", "20px")
      .attr("class", "fill-white")
      // .style("fill","white")
      .insert("tspan")
      .attr("dy", 50)
      .attr("x", 0)
      .attr("font-size", 40)
      .text("？？？天");
  } else {
    d3.select(".c3-chart-arcs-title")
      .style("dominant-baseline", "text-after-edge")
      .style("font-size", "20px")
      .attr("class", "fill-white")
      .insert("tspan")
      .attr("dy", 50)
      .attr("x", 0)
      .attr("font-size", 40)
      .text(`${Math.round(FIDays * 365)}天`);
  }

  d3.select(".c3-legend-item")
    .attr("class", "fill-white")

};


//--------首頁-財富自由計算機 end--------



//--------登入註冊功能 start--------



const userRegister = (data) => {
  axios
    .post("http://localhost:3000/register", data)
    .then((res) => {
      console.log(res.data);
      alert("註冊成功");
      setTimeout(() => {
        location.href = "./login.html";
      }, 500);
    })
    .catch((err) => {
      console.error(err);
    })
}

//登入並把accessToken跟userId放入localStorage
//這裡的post還不需要帶token
const userLogin = (data) => {
  // const header = {}
  axios
    .post("http://localhost:3000/login", data)
    .then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("userId", res.data.user.id);
      alert("登入成功");
      setTimeout(() => {
        location.href = "./userpage.html";
      }, 500);
    })
    .catch((err) => {
      console.error(err);
      alert("請確認帳號或密碼是否正確填寫");
    })
}

//登入確認，回傳fn(res)
const loginCheck = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  // console.log(userId);
  if (userId) {
    axios
      .get(`http://localhost:3000/600/users/${userId}`, userheaders)
      .then((res) => {
        if (res.status === 200) {
          console.log("登入成功");
          callbackFn(res)
          // navDropdowmMenu.innerHTML = `<li>${res.data.name}</li>`;
        }

      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          console.log("請重新登入")
          localStorage.removeItem("userId");
          localStorage.removeItem("accessToken");
        }
        callbackFn(err.response);
        // console.log(err.response);
      })
  } else {
    callbackFn();
  }
}
//不同身分渲染不同畫面
const renderUserNav = (status, isAdmin, userName) => {
  console.log(status, isAdmin, userName)
  if (status === 200 && isAdmin) {
    // console.log("管理者");
    navDropdowmMenu.innerHTML = ` 
    <li><a class="dropdown-item text-center">Hi~${userName}</a></li>
    <hr class="m-1">
    <li><a class="dropdown-item text-center" href="/userpage.html">會員頁面</a></li>
    <li><a class="dropdown-item text-center" href="/backstage-users.html">管理者後台</a></li>
    <li><a class="dropdown-item text-center" data-user-logout>登出</a></li>
    `
  } else if (status === 200) {
    // console.log("一般會員");
    navDropdowmMenu.innerHTML = ` 
    <li><a class="dropdown-item text-center">Hi~${userName}</a></li>
    <hr class="m-1">
    <li><a class="dropdown-item text-center" href="/userpage.html">會員頁面</a></li>
    <li><a class="dropdown-item text-center" data-user-logout>登出</a></li>
    `
  } else if (status === 401) {
    console.log("非會員");
  }
}

//不同使用者渲染不同頭像
const renderNavUserImg = (status, userImg) => {
  const userId = localStorage.getItem("userId");
  if (status === 200) {
    console.log(userImg);
    navUserImg.innerHTML = "";
    if (userImg) {
      navUserImg.style.background = `url("${userImg}") no-repeat center/cover`;
    } else {
      navUserImg.style.background = `url("https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80") no-repeat center/cover`;
    }
    navUserImg.classList.add("rounded-circle");
  } else {
    navUserImg.innerHTML = `<span class="usermenu-icon material-symbols-outlined text-primary align-middle">account_circle</span>`;
  }
}

const getUserpageFIData = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    Authorization: `Barer ${localStorage.getItem("accessToken")}`
  }
  console.log(userId, userheaders);

}

//依據使用者輸入資料渲染c3圖型
const renderUserClacChart = (FINum, crrInv, FIDays) => {
  let chart = c3.generate({
    bindto: d3.select(".user-clac-chart"),
    data: {
      columns: [
        ["財富自由達成率", crrInv],
        ["距離財富自由目標還有", FINum - crrInv]
      ],
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
    d3.select(".c3-chart-arcs-title")
      .style("dominant-baseline", "text-after-edge")
      .style("font-size", "20px")
      .insert("tspan")
      .attr("dy", 50)
      .attr("x", 0)
      .attr("font-size", 40)
      .text("？？？天");
  } else {
    d3.select(".c3-chart-arcs-title")
      .style("dominant-baseline", "text-after-edge")
      .style("font-size", "20px")
      .insert("tspan")
      .attr("dy", 50)
      .attr("x", 0)
      .attr("font-size", 40)
      .text(`${Math.round(FIDays * 365)}天`);
  }

}

//不同使用者渲染不同頁面資料

const renderUserpageUserData = (userImg, userName, userMail) => {
  userpageName.textContent = userName;
  userpageMail.textContent = userMail;
  if (userImg) {
    userpageImg.style.background = `url("${userImg}") no-repeat center/cover`;
  } else {
    userpageImg.style.background = `url("https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80") no-repeat center/cover`;
  }
}

const userLogout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("accessToken");
  alert("登出成功");
  location.href = "/index.html";
}


//--------登入註冊功能 end--------

//--------抓取後台資料 start--------

const renderBackstageUser = (userImg) => {
  console.log(userImg);
  if (userImg) {
    backstageUserImg.style.background = `url("${userImg}") no-repeat center/cover`;
  } else {
    backstageUserImg.style.background = `url("https://images.unsplash.com/photo-1667925235667-627cf2759b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80") no-repeat center/cover`;
  }
}

const getAllUserData = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    Authorization: `Barer ${localStorage.getItem("accessToken")}`
  }
  axios
    .get(`http://localhost:3000/users`, userheaders)
    .then((res) => {
      if (res.status === 200) {
        // console.log(res);
        callbackFn(res);
      }
    })
    .catch((err) => {
      console.log(err);
      callbackFn();
    })
}

const getAllPostData = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    Authorization: `Barer ${localStorage.getItem("accessToken")}`
  }
  axios
    .get("http://localhost:3000/posts?_expand=user", userheaders)
    .then((res) => {
      if (res.status === 200) {
        // console.log(res);
        callbackFn(res);
      }
    })
    .catch((err) => {
      console.log(err);
      callbackFn();
    })
}


//--------抓取後台資料 end--------


//--------函士宣告 end--------





//--------DOM元素監聽 start--------



//首頁計算機功能
if (clacBtn) {
  clacBtn.addEventListener("click", (e) => {
    const formDataRow = getFormData(formList);
    //getClacDataObj()整理Data這裡要處理，如果欄位未寫入，自動帶入0
    const formData = getClacDataObj(formDataRow);
    console.log(formData);
    //userInputCheck()提領率跟投報率要有預設，並且不得小於1
    const check = userInputCheck(formData, clacConstraints);
    //整合現有值，進行財富自由數字及天數的運算
    const financialIndependenceNumber = Math.round(clacFINum(formData) * 100) / 100;
    const financialIndependenceDays = untilFI(formData, financialIndependenceNumber);
    console.log(financialIndependenceDays);
    //運算完畢後回傳並渲染cs.js
    renderClacChart(financialIndependenceNumber, formData.currentInvestment, financialIndependenceDays);
    fINum.textContent = `${financialIndependenceNumber}萬`;
  })
}

//註冊功能
if (register) {
  register.addEventListener("click", (e) => {
    const data = getFormData(registerForm);
    delete data.passwordCheck;
    console.log(data);
    const check = userInputCheck(registerForm, registerConstraints);
    console.log(check);
    if (check) {
      data["isAdmin"] = false;
      userRegister(data);
      // console.log(data);
    } else {
      console.log("reject");
    }

  })
}

//登入功能
if (login) {
  login.addEventListener("click", (e) => {
    const data = getFormData(loginForm);
    // console.log(data);
    const check = userInputCheck(loginForm, loginConstraints);
    console.log(check);
    if (check) {
      userLogin(data);
    } else {
      console.log("reject");
    }
  })
}


{/* <div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
   ...
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-primary">Save changes</button>
</div> */}


//--------DOM元素監聽 end--------

//畫面載入時，判斷是否是登入狀態
window.onload = () => {
  loginCheck("", (res) => {
    // console.log(res);
    if (res) {
      if (res?.status === 401) {
        console.log(res?.status);
        renderUserNav(401, false);
      } else if (res?.status === 200 && res?.data?.isAdmin) {
        if (location.pathname === "/backstage-users.html" || location.pathname === "/backstage-posts.html") {
          renderBackstageUser(res.data.userImg);
        } else {
          renderNavUserImg(200, res.data.userImg);
        }
        renderUserNav(200, true, res.data.name);
        const logoutBtn = document.querySelector("[data-user-logout]");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", (e) => {
            userLogout();
          })
        }

      } else if (res?.status === 200) {
        renderUserNav(200, false, res.data.name);
        renderNavUserImg(200, res.data.userImg);
        const logoutBtn = document.querySelector("[data-user-logout]");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", (e) => {
            userLogout();
          })
        }
      }
    } else {
      console.log("訪客模式");
      if (navUserImg) {
        renderNavUserImg("", false);
      }

    }

  })
}




//當在會員頁面，進行判斷是否有登入，如果有登入撈資料給他瀏覽，如果沒登入請他登入
if (location.pathname === "/userpage.html") {
  loginCheck("", (res) => {
    if (res) {
      if (res.status === 401) {
        setTimeout(() => {
          location.href = "./login.html"
        }, 500);
        alert("請重新登入");
      }
    } else {
      setTimeout(() => {
        location.href = "./login.html"
      }, 500);
      alert("請重新登入");
    }
    renderUserClacChart(30, 20, "?");
    renderUserpageUserData(res.data.userImg, res.data.name, res.data.email);
    getUserpageFIData();
  })
}
console.log(location.pathname);


if (location.pathname === "/backstage-users.html") {
  loginCheck("", (res) => {
    // console.log(res);
    if (res) {
      if (res.status === 401) {
        location.href = "./login.html"
        alert("請重新登入");
      }
    } else {
      location.href = "./login.html"
      alert("請重新登入");
    }

    // console.log(res);
  })
  getAllUserData("", (res) => {
    const userData = res.data.reduce((acc, crr) => {
      acc += `
      <tr class="align-baseline">
        <th scope="row">${crr.id}</th>
        <td>${crr.name}</td>
        <td>${crr.email}</td>
        <td>${crr.isAdmin}</td>
        <td>
          <button type="button" class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#showAndEdit${crr.id}" data-backstage-showBtn>查看/編輯</button>
        </td>
      </tr>
      <div class="modal fade" id="showAndEdit${crr.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">user data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" class="w-100" data-backstage-edit-list>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userId${crr.id}">id：</label>
                <input type="text" class="w-80" id="userId${crr.id}" name="id" value="${crr.id}" disabled>
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userName${crr.id}">name：</label>
                <input type="text" class="w-80" id="userName${crr.id}" name="name" value="${crr.name}">
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userEmail${crr.id}">email：</label>
                <input type="text" class="w-80" id="userEmail${crr.id}" name="email" value="${crr.email}" disabled>
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userImg${crr.id}">userImg：</label>
                <input type="text" class="w-80" id="userImg${crr.id}" name="userImg" value="${crr.userImg}">
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="isAdmin${crr.id}">isAdmin：</label>
                <input type="text" class="w-80" id="isAdmin${crr.id}" name="isAdmin" value="${crr.isAdmin}">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
      `
      return acc;
    }, "")
    allUserData.innerHTML = userData;
  });

}

if (location.pathname === "/backstage-posts.html") {
  loginCheck("", (res) => {
    if (res) {
      if (res.status === 401) {
        setTimeout(() => {
          location.href = "./login.html"
        }, 500);
        alert("請重新登入");
      }
    } else {
      setTimeout(() => {
        location.href = "./login.html"
      }, 500);
      alert("請重新登入");
    }

  })
  getAllPostData("", (res) => {
    console.log(res);
    const postData = res.data.reduce((acc, crr) => {
      acc += `
      <tr class="align-baseline">
        <th scope="row">${crr.id}</th>
        <td>${crr.user.name}</td>
        <td>${crr.title}</td>
        <td>
          <button type="button" class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#showAndEdit${crr.id}" data-backstage-showBtn>查看/編輯</button>
          <button type="button" class="btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#delete${crr.id}" data-backstage-deleteBtn>刪除</button>
        </td>
      </tr>
      <div class="modal fade" id="delete${crr.id}" tabindex="-1" aria-labelledby="thisPostDelete" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="thisPostDelete">delete post</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否確認要刪除此篇貼文？
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">刪除貼文</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="showAndEdit${crr.id}" tabindex="-1" aria-labelledby="thisPostData" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="thisPostData">post data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="" class="w-100" data-backstage-edit-list>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="postId${crr.id}">id：</label>
                <input type="text" class="w-80" id="postId${crr.id}" name="id" value="${crr.id}" disabled>
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userId${crr.id}">userId：</label>
                <input type="text" class="w-80" id="userId${crr.id}" name="userId" value="${crr.userId}" disabled>
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="userName${crr.id}">userName：</label>
                <input type="text" class="w-80" id="userName${crr.id}" name="userName" value="${crr.user.name}" disabled>
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="title${crr.id}">title：</label>
                <input type="text" class="w-80" id="title${crr.id}" name="email" value="${crr.title}">
              </div>
              <div class="calc-area-form-group mb-2">
                <label class="me-2" for="content${crr.id}">content：</label>
                <textarea type="form-control" rows="6" class="w-100 d-block" id="content${crr.id}" name="userImg">${crr.content}</textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
      

      `
      return acc;
    }, "")

    allPostData.innerHTML = postData;
  })
}


//先渲染畫面
renderClacChart(30, 20, "?");










