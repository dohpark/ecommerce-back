const { Router } = require("express");
const ctrl = require("./accounts.ctrl");

const router = Router();

// 회원가입
router.get("/signIn", ctrl.getSignIn);
router.post("/signIn", ctrl.postSignIn);

// 로그인
router.get("/login", ctrl.getLogin);
router.post("/login", ctrl.postLogin);

// 로그아웃
router.get("/logout", ctrl.getLogout);

module.exports = router;
