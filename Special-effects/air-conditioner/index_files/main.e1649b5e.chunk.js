(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([
	[0], {
		104: function(e, t, n) {},
		105: function(e, t, n) {},
		111: function(e, t, n) {},
		114: function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r),
				o = n(33),
				c = n.n(o),
				i = (n(104), n(105), n(139)),
				s = n(116),
				l = n(93),
				d = n(1);

			function u(e) {
				var t = e.children,
					n = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light",
					a = Object(r.useMemo)((function() {
						return Object(l.a)({
							palette: {
								mode: n
							}
						})
					}), [n]);
				return Object(d.jsx)(s.a, {
					theme: a,
					children: t
				})
			}
			var j = n(150),
				b = n(92),
				h = n(14),
				g = n(152),
				m = n(151),
				x = n(142),
				f = n(145),
				O = n(86),
				p = n.n(O),
				v = n(53),
				w = "";


			var k = Object(f.a)((function(e) {
				return {
					root: {
						margin: e.spacing(3, 0),
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}
				}
			}));

			function S() {
				return Object(d.jsx)
			}

			function C() {
				var e = k();
				return Object(d.jsxs)(m.a, {
					align: "center",
					className: e.root,
					color: "textSecondary",
					children: [Object(d.jsx)(p.a, {}), "Tip: 夏日炎炎,有你真甜!!"
					]
				})
			}
			var E = n(32),
				T = n(143),
				N = n(153),
				_ = n(90),
				I = n.n(_),
				R = n(91),
				L = n.n(R),
				A = n(88),
				B = n.n(A),
				D = n(87),
				W = n.n(D),
				P = n(89),
				Y = n.n(P),
				F = n(61),
				J = n(52),
				U = function() {
					return Object(J.b)()
				},
				H = J.c,
				K = n(45),
				M = Object(K.b)({
					name: "toast",
					initialState: {
						open: !1,
						message: ""
					},
					reducers: {
						setMessage: function(e, t) {
							e.message = t.payload
						},
						setOpen: function(e, t) {
							e.open = t.payload
						}
					}
				}),
				V = M.actions,
				z = V.setMessage,
				G = V.setOpen,
				X = M.reducer,
				$ = {
					status: "ac-status",
					mode: "ac-mode",
					temperature: "ac-temperature"
				},
				q = {
					status: !1,
					mode: localStorage.getItem($.mode) || "cold",
					temperature: parseInt(localStorage.getItem($.temperature) || "") || 20
				},
				Q = Object(K.b)({
					name: "ac",
					initialState: q,
					reducers: {
						setStatus: function(e, t) {
							e.status = t.payload
						},
						setTemperature: function(e, t) {
							e.temperature = t.payload
						},
						increment: function(e) {
							e.temperature += 1, localStorage.setItem($.temperature, e.temperature
								.toString())
						},
						decrement: function(e) {
							e.temperature -= 1, localStorage.setItem($.temperature, e.temperature
								.toString())
						},
						setMode: function(e, t) {
							e.mode = t.payload, localStorage.setItem($.mode, e.mode)
						},
						toggleStatus: function(e) {
							e.status = !e.status, localStorage.setItem($.status, e.status
							.toString())
						}
					}
				}),
				Z = function(e) {
					return e.ac.temperature
				},
				ee = Q.actions,
				te = ee.setTemperature,
				ne = ee.increment,
				re = ee.decrement,
				ae = ee.setMode,
				oe = ee.toggleStatus,
				ce = ee.setStatus,
				ie = Q.reducer;

			function se(e) {
				return "https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public" + e
			}
			var le, de, ue, je = Object(f.a)((function(e) {
				return {
					margin: {
						margin: e.spacing(1)
					},
					extendedIcon: {
						marginRight: e.spacing(1)
					}
				}
			}));

			function be(e) {
				return Object(d.jsx)(N.a, Object(E.a)(Object(E.a)({}, e), {}, {
					onClick: function() {
						! function() {
							var e = document.getElementById("di");
							e && e.play()
						}(), e.onClick()
					}
				}))
			}

			function he() {
				var e = document.getElementById("ac-work");
				e.load(), e.play(), le = setTimeout((function() {
					! function() {
						var e = document.getElementById("air-extractor-fan");
						e.load(), e.play(), de = setTimeout((function() {
							ue = setInterval((function() {
								e.currentTime = 2
							}), 56e3)
						}), 2e3)
					}()
				}), 8e3)
			}
			var ge = Object(l.a)({
					palette: {
						primary: F.a
					}
				}),
				me = se("/assets/audio/di.mp3"),
				xe = se("/assets/audio/ac-work.mp3"),
				fe = se("/assets/audio/air-extractor-fan.mp3");

			function Oe() {
				var e = je(),
					t = H((function(e) {
						return e.ac
					})),
					n = U();
				return Object(d.jsxs)(x.a, {
					my: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					children: [Object(d.jsx)("audio", {
						id: "di",
						src: me,
						preload: "auto"
					}), Object(d.jsx)("audio", {
						id: "ac-work",
						src: xe,
						preload: "auto"
					}), Object(d.jsx)("audio", {
						id: "air-extractor-fan",
						src: fe,
						preload: "auto"
					}), Object(d.jsxs)("div", {
						children: [" ", Object(d.jsx)(be, {
							color: "primary",
							"aria-label": "cold",
							className: e.margin,
							onClick: function() {
								n(ae("cold"))
							},
							children: Object(d.jsx)(W.a, {})
						}), Object(d.jsx)(T.a, {
							theme: ge,
							children: Object(d.jsx)(be, {
								color: t.status ? "secondary" :
									"primary",
								"aria-label": "add",
								className: e.margin,
								onClick: function() {
									! function(e, t) {
										if (e) {
											document
												.getElementById(
													"ac-work")
												.load();
											var n = document
												.getElementById(
													"air-extractor-fan"
													);
											le && clearTimeout(
													le), de &&
												clearTimeout(
												de), ue &&
												clearInterval(
													ue), n
												.currentTime =
												58
										} else he();
										t(oe())
									}(t.status, n)
								},
								style: {
									color: "white"
								},
								children: Object(d.jsx)(B.a, {})
							})
						}), Object(d.jsx)(be, {
							"aria-label": "hot",
							className: e.margin,
							style: {
								backgroundColor: "orange",
								color: "white"
							},
							onClick: function() {
								n(ae("hot"))
							},
							children: Object(d.jsx)(Y.a, {})
						})]
					}), Object(d.jsx)(be, {
						"aria-label": "add",
						className: e.margin,
						onClick: function() {
							n((function(e, t) {
								Z(t()) < 31 ? e(ne()) : (e(z(
									"\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01"
									)), e(G(!0)))
							}))
						},
						children: Object(d.jsx)(I.a, {})
					}), Object(d.jsx)(be, {
						"aria-label": "reduce",
						className: e.margin,
						onClick: function() {
							n((function(e, t) {
								Z(t()) > 16 ? e(re()) : (e(z(
									"\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01"
									)), e(G(!0)))
							}))
						},
						children: Object(d.jsx)(L.a, {})
					})]
				})
			}
			var pe = n(15),
				ve = n(149),
				we = n(144),
				ye =  "./index_files/logo.5fb28574.svg",
				ke = n(38),
				Se = (n(111), "#e0e0e0"),
				Ce = "#cccccc",
				Ee = "#bbbbbb",
				Te = Object(f.a)((function(e) {
					return {
						acBorder: {
							borderRadius: 10,
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20
						},
						acDisplay: {
							textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)"
						},
						acLogo: {
							width: 12
						},
						acStatus: {
							backgroundColor: function(e) {
								return e.backgroundColor || "transparent"
							}
						},
						energyLabel: {
							backgroundColor: "#4ea5f5"
						}
					}
				}));

			function Ne(e) {
				return Object(d.jsx)(x.a, Object(E.a)({
					bgcolor: "background.paper",
					height: 150,
					border: 1,
					borderColor: Se,
					borderRadius: 10,
					boxShadow: 3,
					position: "relative"
				}, e))
			}

			function _e() {
				var e = H(Z);
				return Object(d.jsxs)(m.a, {
					variant: "h4",
					align: "center",
					children: [Object(d.jsx)("span", {
						className: "font-digit ac-temperature",
						children: e
					}), Object(d.jsx)("small", {
						className: "font-digit",
						children: "\xb0C"
					})]
				})
			}
			var Ie = a.a.forwardRef((function(e, t) {
				return Object(d.jsxs)(x.a, Object(E.a)(Object(E.a)({}, e), {}, {
					ref: t,
					position: "absolute",
					top: 25,
					right: 30,
					color: Ce,
					children: [Object(d.jsxs)(m.a, {
						align: "left",
						variant: "subtitle2",
						children: [Object(d.jsx)("span", {
							children: "cold" === e.mode ?
								"\u2744" : "\u2600\ufe0f"
						}), "\ufe0f\ufe0f"]
					}), Object(d.jsx)(_e, {})]
				}))
			}));

			function Re(e) {
				return Object(d.jsx)(x.a, {
					textAlign: "center",
					mt: 12,
					children: Object(d.jsx)("a", {
						href: ke.c.url,
						title: ke.b,
						target: "_blank",
						rel: "noreferrer noopener",
						children: Object(d.jsx)("img", {
							className: e.className,
							src: ye,
							alt: "logo"
						})
					})
				})
			}

			function Le() {
				return Object(d.jsx)(x.a, {
					mt: 1,
					border: 1,
					borderColor: Se
				})
			}

			function Ae(e) {
				var t = {
						backgroundColor: e.status ? "#38F709" : Se
					},
					n = Te(t);
				return Object(d.jsx)(x.a, {
					className: n.acStatus,
					position: "absolute",
					height: 4,
					width: 4,
					borderRadius: "50%",
					top: 130,
					right: 10
				})
			}

			function Be(e, t, n, r) {
				var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
					o = Object(pe.a)(new Array(e).keys()),
					c = o.map((function(e) {
						return Object(d.jsx)(x.a, {
							mx: r,
							my: a,
							width: n,
							height: n,
							borderRadius: "50%",
							bgcolor: t
						}, e)
					}));
				return Object(d.jsx)(x.a, {
					display: "flex",
					justifyContent: "center",
					children: c
				})
			}

			function De(e) {
				return Object(d.jsxs)(x.a, {
					className: e.className,
					position: "absolute",
					top: 10,
					left: 10,
					height: 70,
					width: 50,
					borderRadius: 2,
					p: .5,
					children: [Be(6, "white", 4, .25), Object(d.jsxs)(x.a, {
						my: .5,
						px: 1,
						py: .25,
						height: 28,
						width: "100%",
						bgcolor: "background.paper",
						children: [Object(d.jsxs)(ve.a, {
							container: !0,
							children: [Object(d.jsx)(x.a, {
								bgcolor: "green",
								height: 3,
								width: "40%"
							}), Object(d.jsx)(x.a, {
								height: 3,
								marginLeft: "40%",
								style: {
									borderTop: 1.5,
									borderRight: 2,
									borderBottom: 1.5,
									borderLeft: 0,
									borderTopColor: "transparent",
									borderRightColor: "green",
									borderBottomColor: "transparent",
									borderLeftColor: "transparent",
									borderStyle: "solid"
								}
							}), Object(d.jsx)(x.a, {
								bgcolor: "green",
								height: 3,
								width: "10%"
							})]
						}), Object(d.jsx)(x.a, {
							mt: .25,
							bgcolor: "lightGreen",
							height: 3,
							width: "50%"
						}), Object(d.jsx)(x.a, {
							mt: .25,
							bgcolor: "#ffc107",
							height: 3,
							width: "60%"
						}), Object(d.jsx)(x.a, {
							mt: .25,
							bgcolor: "orange",
							height: 3,
							width: "70%"
						}), Object(d.jsx)(x.a, {
							mt: .25,
							bgcolor: "red",
							height: 3,
							width: "80%"
						})]
					}), Object(d.jsxs)(x.a, {
						mb: .25,
						pt: .1,
						height: 20,
						width: "100%",
						bgcolor: "background.paper",
						children: [Be(11, "black", 2, .1, .25), Object(d.jsx)(x.a, {
							my: .1,
							borderTop: 1,
							height: 0,
							width: "100%"
						}), Be(9, "black", 1.5, .1, .25), Be(10, "black", 1.2,
							.1, 0)]
					}), Be(8, "white", 2, .1)]
				})
			}

			function We() {
				return Object(d.jsxs)
			}
			var Pe = a.a.forwardRef((function(e, t) {
				return Object(d.jsxs)(x.a, Object(E.a)(Object(E.a)({}, e), {}, {
					ref: t,
					mt: 3,
					display: "flex",
					justifyContent: "center",
					children: [Object(d.jsx)(x.a, {
						style: {
							transform: "rotate(10deg)"
						},
						bgcolor: Ee,
						width: 5,
						height: 40
					}), Object(d.jsx)(x.a, {
						mx: 10,
						bgcolor: Ee,
						width: 5,
						height: 40
					}), Object(d.jsx)(x.a, {
						style: {
							transform: "rotate(-10deg)"
						},
						bgcolor: Ee,
						width: 5,
						height: 40
					})]
				}))
			}));

			function Ye(e) {
				var t = Te(e);
				return Object(d.jsxs)(x.a, {
					children: [Object(d.jsxs)(Ne, {
						className: t.acBorder,
						children: [Object(d.jsx)(we.a, {
							in: e.status,
							children: Object(d.jsx)(Ie, {
								mode: e.mode
							})
						}), Object(d.jsx)(Re, {
							className: t.acLogo
						}), Object(d.jsx)(Le, {}), Object(d.jsx)(Ae, {
							status: e.status
						}), Object(d.jsx)(De, {
							className: t.energyLabel,
							titleLength: 6
						}), Object({
							NODE_ENV: "production",
							PUBLIC_URL: "",
							WDS_SOCKET_HOST: void 0,
							WDS_SOCKET_PATH: void 0,
							WDS_SOCKET_PORT: void 0,
							FAST_REFRESH: !0
						}).REACT_APP_DISABLE_ADSENSE ? null : Object(d.jsx)(
						We, {})]
					}), Object(d.jsx)(we.a, {
						in: e.status,
						timeout: {
							enter: 2500,
							exit: 1500
						},
						children: Object(d.jsx)(Pe, {})
					})]
				})
			}
			var Fe = n(148),
				Je = n(146);

			function Ue() {
				var e = H((function(e) {
						return e.toast
					})),
					t = U(),
					n = function(e, n) {
						t(G(!1))
					};
				return Object(d.jsx)(Fe.a, {
					open: e.open,
					autoHideDuration: 5e3,
					onClose: n,
					children: Object(d.jsx)(Je.a, {
						onClose: n,
						severity: "error",
						style: {
							width: "100%"
						},
						children: e.message
					})
				})
			}
			var He = n(155);
			var Ke = function() {
				return Object(d.jsxs)("div", {
					children: [Object(d.jsx)(x.a, {
						children: Object(d.jsxs)(m.a, {
							variant: "body2",
							color: "textSecondary",
							align: "center"
						})
					}), Object(d.jsx)(m.a, {
						variant: "body2",
						color: "textSecondary",
						align: "center",
					})]
				})
			};

			function Me() {
				var e = U();
				Object(r.useEffect)((function() {
					function t(t) {
						switch (t.key) {
							case $.status:
								e(ce("true" === t.newValue));
								break;
							case $.temperature:
								e(te(parseInt(t.newValue || "20")));
								break;
							case $.mode:
								e(ae(t.newValue || "cold"))
						}
					}
					return window.addEventListener("storage", t),
						function() {
							window.removeEventListener("storage", t)
						}
				}), [e])
			}
			var Ve = function() {
				var e = H((function(e) {
					return e.ac
				}));
				return Me(), Object(d.jsx)(u, {
					children: Object(d.jsxs)(j.a, {
						maxWidth: "sm",
						className: e.status ? "hot" === e.mode ? "hot-color" :
							"cold-color" : "",
						children: [Object(d.jsxs)(x.a, {
							sx: {
								pt: 4
							},
							bgcolor: "transparent",
							children: [Object(d.jsx)(m.a, {
									color: "textPrimary",
									align: "center",
									variant: "h4",
									component: "h1",
									gutterBottom: !0,
									children: "\u4fbf\u643a\u5c0f\u7a7a\u8c03"
								}), Object(d.jsx)(C, {}), Object(d.jsx)(
									Ye, {
										status: e.status,
										temperature: e.temperature,
										mode: e.mode
									}), Object(d.jsx)("div", {
									className: "text-center",
									children: Object(d.jsx)(x.a, {
										sx: {
											mt: 2
										}
									})
								}), Object(d.jsx)(Oe, {}), Object(d.jsx)
								(Ke, {})
							]
						}), Object(d.jsx)(Ue, {})]
					})
				})
			};

			function ze() {
				return Me(), Object(d.jsxs)("div", {
					children: [Object(d.jsx)(Oe, {}), Object(d.jsx)(Ke, {})]
				})
			}
			var Ge = function() {
					return Object(r.useEffect)((function() {
					}), []), Object(d.jsx)(u, {
						children: Object(d.jsx)(j.a, {
							maxWidth: "sm",
							children: Object(d.jsx)(b.a, {
								children: Object(d.jsxs)(h.c, {
									children: [Object(d.jsx)(h.a, {
										path: "/rc",
										children: Object(d.jsx)(
											ze, {})
									}), Object(d.jsx)(h.a, {
										path: "/",
										children: Object(d.jsx)(
											Ve, {})
									})]
								})
							})
						})
					})
				},
				Xe = Object(K.a)({
					reducer: {
						ac: ie,
						toast: X
					}
				}),
				$e = Boolean("localhost" === window.location.hostname || "[::1]" === window.location
					.hostname || window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

			function qe(e, t) {
				navigator.serviceWorker.register(e).then((function(e) {
					e.onupdatefound = function() {
						var n = e.installing;
						null != n && (n.onstatechange = function() {
							"installed" === n.state && (navigator.serviceWorker
								.controller ? (console.log(
									"New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
									), t && t.onUpdate && t.onUpdate(e)) : (
									console.log(
										"Content is cached for offline use."),
									t && t.onSuccess && t.onSuccess(e)))
						})
					}
				})).catch((function(e) {
					console.error("Error during service worker registration:", e)
				}))
			}
			var Qe = function(e) {
				e && e instanceof Function && n.e(3).then(n.bind(null, 156)).then((function(t) {
					var n = t.getCLS,
						r = t.getFID,
						a = t.getFCP,
						o = t.getLCP,
						c = t.getTTFB;
					n(e), r(e), a(e), o(e), c(e)
				}))
			};
			v.a.initialize("UA-121354150-10"), v.a.pageview(window.location.pathname + window.location
					.search), c.a.render(Object(d.jsx)(a.a.StrictMode, {
					children: Object(d.jsx)(J.a, {
						store: Xe,
						children: Object(d.jsx)(Ge, {})
					})
				}), document.getElementById("root")),
				function(e) {
					if ("serviceWorker" in navigator) {
						if (new URL("", window.location.href).origin !== window.location.origin) return;
						window.addEventListener("load", (function() {
							var t = "".concat("", "/service-worker.js");
							$e ? (! function(e, t) {
								fetch(e, {
									headers: {
										"Service-Worker": "script"
									}
								}).then((function(n) {
									var r = n.headers.get("content-type");
									404 === n.status || null != r && -1 ===
										r.indexOf("javascript") ? navigator
										.serviceWorker.ready.then((function(
											e) {
											e.unregister().then((
												function() {
													window
														.location
														.reload()
												}))
										})) : qe(e, t)
								})).catch((function() {
									console.log(
										"No internet connection found. App is running in offline mode."
										)
								}))
							}(t, e), navigator.serviceWorker.ready.then((function() {
								console.log(
									"This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
									)
							}))) : qe(t, e)
						}))
					}
				}(), Qe()
		},
		38: function(e) {
			e.exports = JSON.parse(
				'{"b":"","a":{"url":"","email":"","name":""},"c":{"type":"","url":"https://cheung-pui-lam.github.io/"}}'
				)
		}
	},
	[
		[114, 1, 2]
	]
]);
//# sourceMappingURL=main.e1649b5e.chunk.js.map
