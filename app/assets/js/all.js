//bs5 init
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


//--------DOM元素綁定 start--------
const navDropdowmMenu = document.querySelector("[data-nav-dropdowm-menu]");
const navUserImg = document.querySelector("[data-nav-user-img]");

const register = document.querySelector("[data-register]");
const registerForm = document.querySelector("[data-register-form]");
const registerReturnMessage = document.querySelectorAll("[data-register-return-message]");

const login = document.querySelector("[data-login]");
const loginForm = document.querySelector("[data-login-form]");
const loginReturnMessage = document.querySelectorAll("[data-login-return-message]");

const formList = document.querySelector("[data-form-list]");
const clacBtn = document.querySelector("[data-btn-clac]");
const fINum = document.querySelector("[data-FINum]");
const allInputReturnMessage = document.querySelectorAll("[data-input-return-message]");

const userPage = document.querySelector("[data-user-page]");
const userpageImg = document.querySelector("[data-userpage-user-img]");
const userpageName = document.querySelector("[data-userpage-user-name]");
const userpageMail = document.querySelector("[data-userpage-user-mail]");

const backstageUserImg = document.querySelector("[data-backstage-userImg]");
const allUserData = document.querySelector("[data-backstage-users]");
const allPostData = document.querySelector("[data-backstage-posts]");
const backstageUserId = document.querySelectorAll("[data-backstage-user-id]");
const backstageUserSearchOuter = document.querySelector(`[data-backstage-user-search="outer"]`);
const backstageUserSearchKeyword = document.querySelector(`[data-backstage-user-search="keyword"]`);
const backstagePostsAddbtn = document.querySelector(`[data-backstage-posts-addbtn]`);
const backstagePostSearchOuter = document.querySelector(`[data-backstage-post-search="outer"]`);
const backstagePostSearchKeyword = document.querySelector(`[data-backstage-post-search="keyword"]`);


const userpageFINum = document.querySelector("[data-userpage-FINum]");
const userpageClacBtnTop = document.querySelector("[data-userpage-clac-btn-top]");
const userpageClacBtnDown = document.querySelector("[data-userpage-clac-btn-down]");
const userpageSum = document.querySelectorAll("[data-userpage-sum]");
const userpageAnnualExpensesDom = document.querySelector(`[data-userpage-sum="annualExpenses"]`);
const userpageOneTimeExpensesDom = document.querySelector(`[data-userpage-sum="oneTimeExpenses"]`);
const userpageTargetWithdrawalRate = document.querySelector(`[data-userpage-sum="targetWithdrawalRate"]`);
const userpageExpectedInvestmentAnnualReturn = document.querySelector(`[data-userpage-sum="expectedInvestmentAnnualReturn"]`);
const userpageFormAnnualExpenses = document.querySelector(`[data-userpage-form="annualExpenses"]`);
const userpageFINumAnnualExpensesReturnMessage = document.querySelectorAll("[data-userpage-FINum-annualExpenses-return-message]");
const userpageFormOneTimeExpenses = document.querySelector(`[data-userpage-form="oneTimeExpenses"]`);
const userpageFINumOneTimeExpensesReturnMessage = document.querySelectorAll("[data-userpage-FINum-oneTimeExpenses-return-message]");
const userpageFINumOneTimeExpensesValue = document.querySelectorAll("[data-userpage-FINum-oneTimeExpenses]");
const userpageFINumRenderAll = document.querySelectorAll("[data-userpage-FINum-render]");
const userpageBtnWrap = document.querySelector("[data-userpage-btn-wrap]");



//--------DOM元素綁定 end--------






//--------參數宣告 start--------
let freeNum = 0;
let howFarToFree = 0;
let checkLoginstatus = ""; //存放登入後狀態
let checkUserIsAdmin = ""; //存放登入後使用者是否為管理者
let checkUserImg = ""; //存放登入後使用者頭像
let checkUserName = ""; //存放登入後使用者名稱
let checkUserEmail = ""; //存放登入後使用者email
let haveUserFIData = ""; //存放有無使用者fidata的布林值
let userFIDataArr = []; //計算出結果時，將結果存放在全域並post全域並post data到json-server
let userpageChangeTarget = "";
// let selectedUserId = 0; //存放後台被選取的user的id



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
      message: "^密碼為5~12位英文或數字"
    },
    format: {
      pattern: "[a-z0-9]+",
      message: "^密碼為5~12位英文或數字"
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
    presence: {
      message: "^請再次輸入密碼",
    },
    equality: {
      attribute: "password",
      message: "^輸入值與密碼不符，請重新輸入",
    }
  }
};

const clacConstraints = {
  annualExpenses: {
    presence: {
      message: "^「預估退休時年支出」如果沒有填寫將無法計算"
    },
    numericality: {
      notValid: "^「預估退休時年支出」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估退休時年支出」需要大於等於零"
    }
  },
  oneTimeExpenses1: {
    numericality: {
      notValid: "^「預估一次性大筆支出」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估一次性大筆支出」需要大於等於零"
    }
  },
  oneTimeExpensesTime1: {
    numericality: {
      notValid: "^「預估年數」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估年數」需要大於等於零"
    }
  },
  oneTimeExpenses2: {
    numericality: {
      notValid: "^「預估一次性大筆支出」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估一次性大筆支出」需要大於等於零"
    }
  },
  oneTimeExpensesTime2: {
    numericality: {
      notValid: "^「預估年數」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估年數」需要大於等於零"
    }
  },
  oneTimeExpenses3: {
    numericality: {
      notValid: "^「預估一次性大筆支出」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估一次性大筆支出」需要大於等於零"
    }
  },
  oneTimeExpensesTime3: {
    numericality: {
      notValid: "^「預估年數」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估年數」需要大於等於零"
    }
  },
  annualInvestment: {
    numericality: {
      notValid: "^「預估每年可投資金額」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估每年可投資金額」需要大於等於零"
    }
  },
  currentInvestment: {
    numericality: {
      notValid: "^「目前已進行投資金額」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「目前已進行投資金額」需要大於等於零"
    }
  },
  targetWithdrawalRate: {
    presence: {
      message: "^「預估每年提領率」如果沒有填寫將無法計算"
    },
    numericality: {
      notValid: "^「預估每年提領率」僅能輸入數字",
      greaterThanOrEqualTo: 1,
      notGreaterThanOrEqualTo: "^「預估每年提領率」需要大於等於1%"
    }
  },
  expectedInvestmentAnnualReturn: {
    presence: {
      message: "^「預估平均每年投資報酬率」如果沒有填寫將無法計算"
    },
    numericality: {
      notValid: "^「預估平均每年投資報酬率」僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^「預估平均每年投資報酬率」需要大於等於0%"
    }
  }
}

const userpageAnnualExpensesConstraints = {
  living: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  food: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  entertainment: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  tax: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  transportation: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  medical: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  learning: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  }
}

const userpageOneTimeExpensesConstraints = {
  oneTimeExpensesTime1: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpenses1: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpensesTime2: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpenses2: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpensesTime3: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpenses3: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpensesTime4: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  },
  oneTimeExpenses4: {
    numericality: {
      notValid: "^此欄位僅能輸入數字",
      greaterThanOrEqualTo: 0,
      notGreaterThanOrEqualTo: "^此欄位的輸入數值需要大於等於零"
    }
  }
}

const userEditedDataConstraints = {
  name: {
    presence: {
      message: "^使用者名稱不得為空",
      allowEmpty: false
    },

  },
  userImg: {
    url: {
      message: "^請輸入正確圖片網址"
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

const userInputCheck = (dom, constraints, datasetName) => {
  let dataCheckBool = "";
  const dataCheck = validate(dom, constraints);
  // console.log(dataCheck);
  if (dataCheck) {
    Object.entries(dataCheck).forEach(([key, value]) => {
      let dom = document.querySelector(`[${datasetName}="${key}"]`);
      let str = value.reduce((acc, crr) => {
        acc += crr
        return acc;
      }, "")
      if (dom) { dom.textContent = str; }

    })
    // Object.values(dataCheck).forEach((i) => {
    //   console.log(i);
    // })
    dataCheckBool = false;
  } else {
    dataCheckBool = true;
  }

  return dataCheckBool;

}

const sortoutData = (dataObj) => {
  const result = Object.entries(dataObj).reduce((acc, [key, value]) => {
    !value ? acc[key] = null : acc[key] = parseInt(value, 10);
    return acc;
  }, {})
  return result;
}

const removeReturnMessage = (listDom) => {
  listDom.forEach((i) => {
    i.textContent = "";
  })
}

//--------首頁-財富自由計算機 start--------

//整理formData取得的資料
const getClacDataObj = (obj) => {
  const dataObj = {
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

  const makeDataNoEmpty = sortoutData(dataObj);
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
      // console.log(res.data);
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

//取得使用者FI資料
const getUserpageFIData = () => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  if (userId) {
    axios
      .get(`http://localhost:3000/600/users/${userId}/userFIData`, userheaders)
      .then((res) => {
        if (res.data.length === 0) {
          haveUserFIData = false;
        } else {
          haveUserFIData = true;
          let fINum = Math.round(((res.data[0].annualExpenses / (res.data[0].targetWithdrawalRate / 100)) + res.data[0].oneTimeExpenses) * 100) / 100;
          let fIDays = Math.round(Math.log(((fINum * res.data[0].expectedInvestmentAnnualReturn / 100) + res.data[0].annualInvestment) / (res.data[0].annualInvestment + (res.data[0].currentInvestment * res.data[0].expectedInvestmentAnnualReturn / 100))) / Math.log(1 + res.data[0].expectedInvestmentAnnualReturn / 100) * 100) / 100;
          let crrInv = res.data[0].currentInvestment;
          if (userpageFINumRenderAll.length) {
            userpageFINumRenderAll.forEach((i) => {
              let data = res.data[0][i.dataset.userpageFinumRender];
              if (data) {
                i.value = res.data[0][i.dataset.userpageFinumRender];
                i.textContent = res.data[0][i.dataset.userpageFinumRender];
              } else {
                i.value = "";
                i.textContent = "???";
              }
            })
            if (userpageFINum) {
              if (Number.isFinite(fINum)) {
                userpageFINum.textContent = `${fINum}萬`;
              } else {
                userpageFINum.textContent = "???萬";
              }

            }
            console.log(fINum, crrInv, fIDays);
            if (fINum && crrInv && fIDays) {
              renderUserClacChart(fINum, crrInv, fIDays);

            }


          }
        }
        userFIDataArr = res.data;

      })
      .catch((err) => {
        console.log(err);
      })
  }
}

//新增使用者FI資料
const postUserpageFIData = (data) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  if (userId) {
    axios
      .post(`http://localhost:3000/600/users/${userId}/userFIData`, data, userheaders)
      .then((res) => {
        console.log(res.data);
        userFIDataArr = res.data;

      })
      .catch((err) => {
        console.log(err.response);
      })
  }
}

const patchUserpageFIData = (data) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  if (userId) {
    console.log(userFIDataArr[0].id);
    axios
      .patch(`http://localhost:3000/600/userFIData/${userFIDataArr[0].id}`, data, userheaders)
      .then((res) => {
        console.log(res.data);
        userFIDataArr = res.data;

      })
      .catch((err) => {
        console.log(err.response);
      })
  }
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

  d3.selectAll(".c3-chart-arc path")
    .attr("style", "stroke: #102A48;")


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

const renderBackstageUserData = (data) => {
  const returnData = data.reduce((acc, crr) => {
    acc += `
    <tr class="align-baseline">
      <th scope="row">${crr.id}</th>
      <td>${crr.name}</td>
      <td>${crr.email}</td>
      <td>${crr.isAdmin}</td>
      <td>
        <button type="button" class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#showAndEdit${crr.id}" data-backstage-showBtn data-backstage-user-id="${crr.id}">查看/編輯</button>
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
          <form action="" class="w-100" data-backstage-edit-userlist>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userId${crr.id}">id：</label>
              <input type="text" class="w-80" id="userId${crr.id}" name="id" value="${crr.id}" disabled>
              <span class="backstage-userData-edited-return d-block" data-backstage-userData-edited-return-message-${crr.id}="id"></span>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userName${crr.id}">name：</label>
              <input type="text" class="w-80" id="userName${crr.id}" name="name" value="${crr.name}" data-edited-data-${crr.id}="name">
              <span class="backstage-userData-edited-return d-block" data-backstage-userData-edited-return-message-${crr.id}="name"></span>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userEmail${crr.id}">email：</label>
              <input type="text" class="w-80" id="userEmail${crr.id}" name="email" value="${crr.email}" disabled>
              <span class="backstage-userData-edited-return d-block" data-backstage-userData-edited-return-message-${crr.id}="email"></span>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userImg${crr.id}">userImg：</label>
              <input type="text" class="w-80" id="userImg${crr.id}" name="userImg" value="${crr.userImg}" data-edited-data-${crr.id}="userImg">
              <span class="backstage-userData-edited-return d-block" data-backstage-userData-edited-return-message-${crr.id}="userImg"></span>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="isAdmin${crr.id}">isAdmin：</label>
              <select class="w-80" id="isAdmin${crr.id}" name="isAdmin" data-edited-data-${crr.id}="isAdmin">
                <option value="true" ${(crr.isAdmin) ? "selected" : ""}>true</option>
                <option value="false" ${!(crr.isAdmin) ? "selected" : ""}>false</option>
              </select>
              <span class="backstage-userData-edited-return d-block" data-backstage-userData-edited-return-message-${crr.id}="isAdmin"></span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-danger" data-backstage-user-save="${crr.id}">存檔</button>
        </div>
      </div>
    </div>
    `
    return acc;
  }, "")
  return returnData;
}

const getAllUserData = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
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
    })
}

const patchUserData = (data, selectedUserId) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  axios
    .patch(`http://localhost:3000/users/${selectedUserId}`, data, userheaders)
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
    })
}

const searchUserData = (keyword) => {
  axios
    .get(`http://localhost:3000/users?q=${keyword}`)
    .then((res) => {
      let resData = res.data
      const searchData = renderBackstageUserData(res.data);
      allUserData.innerHTML = searchData;
    })
    .catch((err) => {
      console.error(err);
    })
}

const renderBackstagePostData = (data) => {
  const resData = data.reduce((acc, crr) => {
    acc += `
    <tr class="align-baseline">
      <th scope="row">${crr.id}</th>
      <td>${crr.user.name}</td>
      <td>${crr.title ? crr.title : "無標題"}</td>
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
            <button type="button" class="btn btn-danger" data-backstage-post-delete="${crr.id}">刪除貼文</button>
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
          <form action="" class="w-100" data-backstage-edit-postlist>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="postId${crr.id}">id：</label>
              <input type="text" class="w-80" id="postId${crr.id}" name="id" value="${crr.id}" disabled>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userId${crr.id}">userId：</label>
              <input type="text" class="w-80" id="userId${crr.id}" name="userId" value="${crr.userId}"  disabled>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="userName${crr.id}">userName：</label>
              <input type="text" class="w-80" id="userName${crr.id}" name="userName" value="${crr.user.name}" disabled>
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="title${crr.id}">title：</label>
              <input type="text" class="w-80" id="title${crr.id}" name="title" value="${crr.title ? crr.title : ""}" data-edited-post-${crr.id}="title">
            </div>
            <div class="calc-area-form-group mb-2">
              <label class="me-2" for="content${crr.id}">content：</label>
              <textarea type="form-control" rows="6" class="w-100 d-block" id="content${crr.id}" name="content" data-edited-post-${crr.id}="content">${crr.content ? crr.content : "<p></p>"}</textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" data-backstage-post-save="${crr.id}">儲存</button>
        </div>
      </div>
    </div>
    

    `
    return acc;
  }, "")
  return resData;
}

const getAllPostData = (data, callbackFn) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  axios
    .get(`http://localhost:3000/posts?_expand=user`, userheaders)
    .then((res) => {
      callbackFn(res);

    })
    .catch((err) => {
      console.log(err);

    })
}

const postPostData = (data) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  axios
    .post(`http://localhost:3000/600/users/${userId}/posts`, data, userheaders)
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
    })
}

const patchPostData = (data, selectPostId) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  axios
    .patch(`http://localhost:3000/posts/${selectPostId}`, data, userheaders)
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
    })
}

const deletePostData = (selectPostId) => {
  const userId = localStorage.getItem("userId");
  const userheaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  }
  axios
    .delete(`http://localhost:3000/posts/${selectPostId}`, userheaders)
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
}


const searchPostData = (keyword) =>{
  axios
    .get (`http://localhost:3000/posts?_expand=user&q=${keyword}`)
    .then((res)=>{
      console.log(res);
      const searchData = renderBackstagePostData(res.data);
      allPostData.innerHTML = searchData;

    })
    .catch((err)=>{
      console.log(err);
    })
}

//--------抓取後台資料 end--------


//--------函士宣告 end--------





//--------DOM元素監聽 start--------



//首頁計算機功能
if (clacBtn) {
  clacBtn.addEventListener("click", (e) => {
    const formDataRow = getFormData(formList);
    //getClacDataObj()整理Data這裡要處理，如果欄位未寫入，自動帶入null
    const formData = getClacDataObj(formDataRow);
    allInputReturnMessage.forEach((i) => {
      i.textContent = "";
    })
    //userInputCheck()提領率跟投報率要有預設
    const check = userInputCheck(formData, clacConstraints, "data-input-return-message");
    if (check) {
      //整合現有值，進行財富自由數字及天數的運算
      const financialIndependenceNumber = Math.round(clacFINum(formData) * 100) / 100;
      const financialIndependenceDays = untilFI(formData, financialIndependenceNumber);
      console.log(financialIndependenceDays);
      //運算完畢後回傳並渲染cs.js
      renderClacChart(financialIndependenceNumber, formData.currentInvestment, financialIndependenceDays);
      fINum.textContent = `${financialIndependenceNumber}萬`;
    }
  })
}

//註冊功能
if (register) {
  register.addEventListener("click", (e) => {
    const data = getFormData(registerForm);
    delete data.passwordCheck;
    removeReturnMessage(registerReturnMessage);
    const check = userInputCheck(registerForm, registerConstraints, "data-register-return-message");
    if (check) {
      data["isAdmin"] = false;
      userRegister(data);
    } else {
      console.log("reject");
    }

  })
}

//登入功能
if (login) {
  login.addEventListener("click", (e) => {
    const data = getFormData(loginForm);
    removeReturnMessage(loginReturnMessage);
    const check = userInputCheck(loginForm, loginConstraints, "data-login-return-message");
    check ? userLogin(data) : console.log("reject");
  })
}


//會員頁面功能

//會員頁面使用者輸入後計算並更新
if (userpageFormAnnualExpenses) {
  userpageFormAnnualExpenses.addEventListener("input", (e) => {
    const rowData = getFormData(userpageFormAnnualExpenses);
    const data = sortoutData(rowData);
    removeReturnMessage(userpageFINumAnnualExpensesReturnMessage);
    const check = userInputCheck(userpageFormAnnualExpenses, userpageAnnualExpensesConstraints, "data-userpage-FINum-annualExpenses-return-message");
    if (check) {
      const clac = Object.entries(data).reduce((sum, [key, value]) => {
        value ? sum += value : sum += 0;
        return sum;
      }, 0)
      userpageAnnualExpensesDom.value = clac;
    }

  })
}

if (userpageFormOneTimeExpenses) {
  userpageFormOneTimeExpenses.addEventListener("input", (e) => {
    const rowData = getFormData(userpageFormOneTimeExpenses);
    const data = sortoutData(rowData);
    removeReturnMessage(userpageFINumOneTimeExpensesReturnMessage);
    const check = userInputCheck(userpageFormOneTimeExpenses, userpageOneTimeExpensesConstraints, "data-userpage-FINum-oneTimeExpenses-return-message");
    const num = e.target.dataset.onetimeexpenses;
    const oneTimeExpenses = data[`oneTimeExpenses${num}`];
    let oneTimeExpensesTime = data[`oneTimeExpensesTime${num}`];
    let investmentAnnualReturn = userpageExpectedInvestmentAnnualReturn.value;
    const currentValueDom = document.querySelector(`[data-userpage-FINum-oneTimeExpenses="oneTimeExpenses${num}"]`);
    let sum = 0;
    if (check) {
      if (oneTimeExpenses) {
        oneTimeExpensesTime ? oneTimeExpensesTime : oneTimeExpensesTime = 0;
        const clacData = Math.round(oneTimeExpenses / Math.pow((1 + investmentAnnualReturn / 100), oneTimeExpensesTime) * 100) / 100;
        currentValueDom.textContent = `${clacData}`;
        currentValueDom.value = `${clacData}`;
      } else {
        currentValueDom.textContent = "???";
        currentValueDom.value = "";
      }
    }
    userpageFINumOneTimeExpensesValue.forEach((i) => {
      if (i.value) { sum += parseInt(i.value * 100) / 100; }
    })
    userpageOneTimeExpensesDom.value = sum;
  })
}

if (userpageExpectedInvestmentAnnualReturn) {
  userpageExpectedInvestmentAnnualReturn.addEventListener("input", (e) => {
    console.log(e.target);

  })
}



//會員頁面計算財富自由目標
if (userpageClacBtnTop) {
  userpageClacBtnTop.addEventListener("click", (e) => {
    e.preventDefault();
    let obj = {};
    userpageSum.forEach((i) => {
      i.value ? obj[i.name] = parseInt(i.value * 100) / 100 : obj[i.name] = 0;
    })
    let result = Math.round(((obj.annualExpenses / (obj.targetWithdrawalRate / 100)) + obj.oneTimeExpenses) * 100) / 100;
    if (haveUserFIData) {
      patchUserpageFIData(obj);
    } else {
      postUserpageFIData(obj);
      haveUserFIData = true;
    }
    if (result) {
      userpageFINum.textContent = result;
    } else {
      userpageFINum.textContent = "???";
    }

  })
}

if (userpageClacBtnDown) {
  userpageClacBtnDown.addEventListener("click", (e) => {
    e.preventDefault();
    let obj = {};
    userpageSum.forEach((i) => {
      i.value ? obj[i.name] = parseInt(i.value * 100) / 100 : obj[i.name] = 0;
    })
    let result = Math.round(((obj.annualExpenses / (obj.targetWithdrawalRate / 100)) + obj.oneTimeExpenses) * 100) / 100;
    if (haveUserFIData) {
      patchUserpageFIData(obj);
    } else {
      postUserpageFIData(obj);
      haveUserFIData = true;
    }
    if (result) {
      userpageFINum.textContent = result;
      alert("財富自由目標已計算完成~");
    } else {
      userpageFINum.textContent = "???";
    }

  })
}


if (userpageBtnWrap) {
  userpageBtnWrap.addEventListener("click", (e) => {
    e.preventDefault();
    let saveBtn = e.target.dataset.userpageSavebtn;
    let editBtn = e.target.dataset.userpageEditbtn;
    if (saveBtn) {
      let saveDom = document.querySelector(`[data-userpage-content="${e.target.dataset.userpageSavebtn}"]`);
      let selector = document.querySelector(`[data-userpage-FINum-render="${saveBtn}"]`);
      let updateData = {};
      if (selector.value) {
        updateData[saveBtn] = parseInt(selector.value * 100) / 100;

        if (saveBtn === "expectedInvestmentAnnualReturn" || saveBtn === "targetWithdrawalRate") {
          saveDom.innerHTML = `<span data-userpage-FINum-render="currentInvestment" data-userpage-FINum-render="${saveBtn}" value="${selector.value}">${selector.value}</span>%`
        } else {
          saveDom.innerHTML = `<span data-userpage-FINum-render="currentInvestment" data-userpage-FINum-render="${saveBtn}" value="${selector.value}">${selector.value}</span>萬`
        }
      } else {
        updateData[saveBtn] = 0;
        if (saveBtn === "expectedInvestmentAnnualReturn" || saveBtn === "targetWithdrawalRate") {
          saveDom.innerHTML = `<span data-userpage-FINum-render="currentInvestment" data-userpage-FINum-render="${saveBtn}" value="">???</span>%`
        } else {
          saveDom.innerHTML = `<span data-userpage-FINum-render="currentInvestment" data-userpage-FINum-render="${saveBtn}" value="">???</span>萬`
        }
      }
      if (haveUserFIData) {
        patchUserpageFIData(updateData);
        window.location.reload();
      } else {
        postUserpageFIData(updateData);
        haveUserFIData = true;
        window.location.reload();
      }

    } else if (editBtn) {
      let editDom = document.querySelector(`[data-userpage-content="${e.target.dataset.userpageEditbtn}"]`);
      if (userFIDataArr.length) {
        let fIDatavalue = userFIDataArr[0][e.target.dataset.userpageEditbtn];
        if (!fIDatavalue) { fIDatavalue = ""; }
        editDom.innerHTML = `
        <form action="" name="form">
        <input class="text-center" data-userpage-FINum-render="${editBtn}" value="${fIDatavalue}">
        </form>
        `;
      }
      editDom.innerHTML = `
        <form action="" name="form">
        <input class="text-center" data-userpage-FINum-render="${editBtn}" value="">
        </form>
        `;
    }

  })
}

if (allUserData) {
  allUserData.addEventListener("click", (e) => {
    // selectedUserId = e.target.dataset.backstageUserId;
    let selectedUserSave = e.target.dataset.backstageUserSave;

    if (selectedUserSave) {
      let editedDataDom = document.querySelectorAll(`[data-edited-data-${selectedUserSave}]`);
      let returnMessageDom = document.querySelectorAll(`[data-backstage-userData-edited-return-message-${selectedUserSave}`);
      let editedData = {};
      editedDataDom.forEach((i) => {
        if (i.name === "isAdmin") {
          let bool = i.value === "false" ? false : true;
          editedData["isAdmin"] = bool;
        } else {
          editedData[i.name] = i.value;
        }
      })
      returnMessageDom.forEach((i) => {
        i.textContent = "";
      })
      const check = validate(editedData, userEditedDataConstraints);
      console.log(check);
      if (check) {
        Object.entries(check).forEach(([key, value]) => {
          let dom = document.querySelector(`[data-backstage-userData-edited-return-message-${selectedUserSave}="${key}"]`);
          let str = value.reduce((acc, crr) => {
            acc += crr
            return acc;
          }, "")

          dom.textContent = str;
        })
      } else {
        patchUserData(editedData, selectedUserSave);
      }
      console.log(editedData);
    }
  })
}

if (backstageUserSearchOuter) {
  backstageUserSearchOuter.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.dataset.backstageUserSearch;
    if (target === "btn") {
      const keyword = backstageUserSearchKeyword.value;
      searchUserData(keyword);
    }
  })
}

if (backstagePostsAddbtn) {
  backstagePostsAddbtn.addEventListener("click", (e) => {
    console.log(e);
    postPostData("");

  })
}

if (allPostData) {
  allPostData.addEventListener("click", (e) => {
    const selectedPostSave = e.target.dataset.backstagePostSave;
    const selectedPostDelete = e.target.dataset.backstagePostDelete;
    if (selectedPostSave) {
      let editedDataDom = document.querySelectorAll(`[data-edited-post-${selectedPostSave}]`)
      let editedData = {};
      editedDataDom.forEach((i) => {
        editedData[i.name] = i.value;
      })
      patchPostData(editedData, selectedPostSave);
    }

    if (selectedPostDelete) {
      const deleteDataDom = document.querySelector(`[data-backstage-post-delete="${selectedPostDelete}"]`)
      deletePostData(selectedPostDelete);
    }

  })
}

if (backstagePostSearchOuter) {
  backstagePostSearchOuter.addEventListener("click",(e)=>{
    e.preventDefault();
    const target = e.target.dataset.backstagePostSearch;
    console.log(target);
    if (target === "btn") {
      const keyword = backstagePostSearchKeyword.value;
      searchPostData(keyword);
    }
    
  })
}

//--------DOM元素監聽 end--------

//畫面載入時，判斷是否是登入狀態
window.onload = () => {
  loginCheck("", (res) => {
    // console.log(res);
    if (res) {
      checkLoginstatus = res.status;
      checkUserIsAdmin = res.data.isAdmin;
      checkUserImg = res.data.userImg;
      checkUserName = res.data.name;
      checkUserEmail = res.data.email;

      if (res?.status === 401) {
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
            checkUserIsAdmin = "";
            checkUserImg = "";
            checkUserName = "";
            checkUserEmail = "";
            userLogout();
          })
        }
      } else if (res?.status === 200) {
        renderUserNav(200, false, res.data.name);
        renderNavUserImg(200, res.data.userImg);
        const logoutBtn = document.querySelector("[data-user-logout]");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", (e) => {
            checkUserIsAdmin = "";
            checkUserImg = "";
            checkUserName = "";
            checkUserEmail = "";
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
  //載入就先取userFIData
  getUserpageFIData();
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
  })

}

if (location.pathname === "/userpage-FINum.html") {

  userpageSum.forEach((i) => {
    console.log(i.value);
  })
}

if (location.pathname === "/backstage-users.html") {
  loginCheck("", (res) => {
    if (res) {
      if (res.status === 401) {
        location.href = "./login.html"
        alert("請重新登入");
      }
    } else {
      location.href = "./login.html"
      alert("請重新登入");
    }
  })
  getAllUserData("", (res) => {
    const userData = renderBackstageUserData(res.data);
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
    const resData = res.data;
    let postData = renderBackstagePostData(resData);
    allPostData.innerHTML = postData;
  })
}




//先渲染畫面
renderClacChart(30, 20, "?");

console.log(location.pathname);










