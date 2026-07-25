document.addEventListener("DOMContentLoaded", function () {
  // フッター年号
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ハンバーガーメニュー
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // 予約フォーム（mailto 送信）
  var form = document.querySelector("#reservation-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var get = function (key) {
        return (data.get(key) || "").toString().trim();
      };

      var required = ["name", "email", "date", "guests"];
      var missing = required.filter(function (key) {
        return !get(key);
      });

      var msgEl = document.querySelector("#form-msg");

      if (missing.length > 0) {
        if (msgEl) msgEl.textContent = "必須項目をご入力ください。";
        return;
      }

      var toAddress = "tianbenguitai@gmail.com";

      var subject = "【出張和食 ご予約フォーム】" + get("name") + "様より";
      var bodyLines = [
        "お名前: " + get("name"),
        "メールアドレス: " + get("email"),
        "電話番号: " + get("phone"),
        "希望日: " + get("date"),
        "人数: " + get("guests") + "名",
        "ご希望プラン: " + get("plan"),
        "ご住所（会場）: " + get("address"),
        "",
        "ご要望・アレルギー等:",
        get("message")
      ];

      var mailto =
        "mailto:" + toAddress +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      if (msgEl) {
        msgEl.textContent = "メールソフトが起動します。内容をご確認のうえ送信してください。";
      }
    });
  }

  // シェフ応募フォーム（mailto 送信）
  var recruitForm = document.querySelector("#recruit-form");
  if (recruitForm) {
    recruitForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = new FormData(recruitForm);
      var get = function (key) {
        return (data.get(key) || "").toString().trim();
      };

      var required = ["name", "email", "experience"];
      var missing = required.filter(function (key) {
        return !get(key);
      });

      var msgEl = document.querySelector("#recruit-form-msg");

      if (missing.length > 0) {
        if (msgEl) msgEl.textContent = "必須項目をご入力ください。";
        return;
      }

      var toAddress = "tianbenguitai@gmail.com";

      var subject = "【和味-nagomi- シェフ応募】" + get("name") + "様より";
      var bodyLines = [
        "お名前: " + get("name"),
        "メールアドレス: " + get("email"),
        "電話番号: " + get("phone"),
        "年齢: " + get("age"),
        "調理経験年数: " + get("experience"),
        "得意なジャンル: " + get("genre"),
        "ポートフォリオ・SNS: " + get("portfolio"),
        "",
        "自己PR・志望動機:",
        get("message")
      ];

      var mailto =
        "mailto:" + toAddress +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      if (msgEl) {
        msgEl.textContent = "メールソフトが起動します。内容をご確認のうえ送信してください。";
      }
    });
  }
});
