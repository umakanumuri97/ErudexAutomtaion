/**
 * @preserve Copyright 2016-2017 Erudex - All Rights Reserved
 * Unauthorized use, distribution, or modification of this file is strictly prohibited
 */
!function(U, O, M) {
    "use strict";
    var P = null;
    U.module("com.erudex.common.plugins", ["angular-locker", "mm.foundation", "blockUI", "com.erudex.common.constant"]).service("ErudexWebService", ["locker", "$http", "$modal", "$window", "$rootScope", "blockUI", "BUILD_CONFIG", "CONTENT_DISPLAY_CATEGORY", function(e, o, t, s, r, n, i, a) {
        var d = e.driver("session").namespace("com.erudex")
          , c = "/ErudexWebService/rest"
          , u = !1
          , l = !1
          , m = "userKey"
          , p = "userSession"
          , g = "Authorization"
          , S = "ERUDEX-SESSION "
          , f = "sessionId="
          , h = {
            dev: "aHR0cHM6Ly9hcGktcS5lcnVkZXguY29t",
            demo: "aHR0cHM6Ly9hcGktZC5lcnVkZXguY29t",
            prod: "aHR0cHM6Ly9hcGktcC5lcnVkZXguY29t"
        }
          , v = [{
            roleId: 4,
            path: "/competitive-module/startCompetitiveAssessment/"
        }, {
            roleId: 4,
            path: "/competitive-module/submitAssessment"
        }, {
            roleId: 4,
            path: "/competitive-module/getMockTestResult"
        }, {
            roleId: 3,
            path: "/liveClass/addActivity"
        }, {
            roleId: 4,
            path: "/liveClass/addActivity"
        }, {
            roleId: 0,
            path: "/liveClass/getMeetings"
        }, {
            roleId: 0,
            path: "/liveClass/getAttendance"
        }, {
            roleId: 0,
            path: "/liveClass/insertOrUpdateMeeting"
        }, {
            roleId: 3,
            path: "/userActivity/addContentActivity"
        }, {
            roleId: 4,
            path: "/userActivity/addContentActivity"
        }, {
            roleId: 0,
            path: "/userActivity/addPageActivity"
        }, {
            roleId: 3,
            path: "/userActivity/addContentNotes"
        }, {
            roleId: 4,
            path: "/userActivity/addContentNotes"
        }, {
            roleId: 3,
            path: "/userActivity/getUserNotes"
        }, {
            roleId: 4,
            path: "/userActivity/getUserNotes"
        }, {
            roleId: 0,
            path: "/userActivity/getTimelineActivity"
        }, {
            roleId: 0,
            path: "/user/getUsersBySection"
        }, {
            roleId: 0,
            path: "/user/getTeachersBySubject"
        }, {
            roleId: 0,
            path: "/user/getInstitutionsByOrg"
        }, {
            roleId: 5,
            path: "/userActivity/getStudentTimelineActivityForGuardian",
            lambdaPath: "/userActivity/getTimelineActivity"
        }, {
            roleId: 3,
            path: "/user/getUserSubjectsByGradeId",
            lambdaPath: "/user/getUserCurriculum"
        }, {
            roleId: 0,
            path: "/user/getUserSubjectById",
            lambdaPath: "/user/getUserCurriculum"
        }, {
            roleId: 0,
            path: "/user/getStudentCurriculum",
            lambdaPath: "/user/getUserCurriculum"
        }, {
            roleId: 0,
            path: "/user/keepSessionAlive",
            lambdaPath: "/user/validateUser"
        }, {
            roleId: 0,
            path: "/user/userLogout",
            lambdaPath: "/user/userLogout"
        }, {
            roleId: 0,
            path: "/userActivity/addSessionActivity",
            lambdaPath: "/userActivity/addSessionActivity"
        }, {
            roleId: 0,
            path: "/resource-l/getContentUrl",
            lambdaPath: "/content/getContentUrl"
        }, {
            roleId: 0,
            path: "/assignment/getAssignments"
        }, {
            roleId: 0,
            path: "/assignment/getDashboardSubmissions"
        }, {
            roleId: 0,
            path: "/assignment/getStudentsByAssignment"
        }, {
            roleId: 0,
            path: "/assignment/upsert"
        }, {
            roleId: 0,
            path: "/assignment/getUserAssignments"
        }, {
            roleId: 0,
            path: "/assignment/upsertUserAssignment"
        }, {
            roleId: 0,
            path: "/assessment/getAssessments"
        }, {
            roleId: 0,
            path: "/assessment/getMockTests"
        }, {
            roleId: 0,
            path: "/assessment/getDashboardSubmissions"
        }, {
            roleId: 0,
            path: "/assessment/getStudentsByAssessment"
        }, {
            roleId: 0,
            path: "/assessment/upsert"
        }, {
            roleId: 0,
            path: "/assessment/searchQuestions"
        }, {
            roleId: 0,
            path: "/assessment/getUserAssessments"
        }, {
            roleId: 0,
            path: "/assessment/getChapterInfo"
        }, {
            roleId: 0,
            path: "/assessment/downloadXlsx"
        }, {
            roleId: 0,
            path: "/assessment/upsertOmr"
        }, {
            roleId: 0,
            path: "/assessment/getOmrs"
        }, {
            roleId: 0,
            path: "/competitive-module/upsertMcq"
        }, {
            roleId: 0,
            path: "/s3upload/getUploadUrls"
        }, {
            roleId: 0,
            path: "/reports/getStudentTestChapterList"
        }, {
            roleId: 0,
            path: "/reports/getStudentPerformanceReport"
        }, {
            roleId: 0,
            path: "/reports/getTeacherTestReport"
        }, {
            roleId: 0,
            path: "/reports/getTeacherOverviewReport"
        }, {
            roleId: 0,
            path: "/reports/getTeacherOverviewTestStuList"
        }, {
            roleId: 0,
            path: "/reports/getStudentChapterQuestionsList"
        }, {
            roleId: 0,
            path: "/reports/getOrgReportsByCurriculum"
        }, {
            roleId: 0,
            path: "/reports/getDashboardReportData"
        }, {
            roleId: 0,
            path: "/notifications/getNotifications"
        }, {
            roleId: 0,
            path: "/notifications/readNotification"
        }, {
            roleId: 0,
            path: "/notifications/deleteNotification"
        }, {
            roleId: 0,
            path: "/tgsb/getBookByCategory"
        }, {
            roleId: 0,
            path: "/user/getARContent"
        }]
          , T = {
            localhost: "dev",
            "qa-app": "dev",
            qa: "dev",
            "demo-app": "demo",
            demo: "demo",
            app: "prod"
        }
          , E = d.get("apiHost");
        function I() {
            u || (u = !0,
            w.isSessionErrorTriggered = !0,
            n.reset(),
            P ? setTimeout(y, 1e3) : backToLogin())
        }
        function A() {
            l || C()
        }
        function C() {
            d.clean(),
            "undefined" != typeof androidLoginJS && null !== androidLoginJS && "logout"in androidLoginJS ? androidLoginJS.logout() : s.location.href = "../login/index.html"
        }
        function y() {
            U.element("body").append('<div class="relogin-modal-backdrop"></div>'),
            t.open({
                backdrop: "static",
                keyboard: !1,
                windowClass: "relogin-modal",
                controller: ["$scope", "$sce", "$modalInstance", "$timeout", "$window", function(s, e, t, r, n) {
                    var i = !1
                      , o = !1;
                    function a(e) {
                        s.errorMsg = e
                    }
                    function c() {
                        r(function() {
                            s.isAttemptingLogin = i = !1
                        }, 500)
                    }
                    function u(e) {
                        var t = e.sessionId && 0 < e.sessionId.trim().length ? e.sessionId : null;
                        if (e.result && t && e.userInfo) {
                            d.put(m, e.userInfo),
                            d.put(p, t);
                            try {
                                ("undefined" != typeof androidFirebaseJS && null !== androidFirebaseJS ? androidLoginJS : n.location).reload()
                            } catch (e) {
                                c()
                            }
                        } else
                            "activeUserSessionExists" === e.error ? (o = !0,
                            a("You are logged in elsewhere, Re-login again to login here instead.")) : "invalidUsernamePassword" === e.error ? a("Invalid username and/or password.") : "invalidLoginToken" === e.error ? a("Token login failed, login with username and password.") : "noActiveSubjects" === e.error ? a("Login failed, you have no active subjects.") : "userNotActive" === e.error ? a("Login failed, your account is currently disabled.") : a("An unknown error occurred while logging in.");
                        c()
                    }
                    function l(e) {
                        a("Error contacting service, please verify you are online."),
                        c()
                    }
                    U.extend(s, {
                        formData: {
                            userName: P,
                            password: null
                        },
                        message: e.trustAsHtml("Your session has expired or you have logged in elsewhere.<br/>You may re-login below or return to login page."),
                        errorMsg: null,
                        attemptLogin: function() {
                            var e, t;
                            i || (i = !0,
                            e = s.formData.userName,
                            t = s.formData.password,
                            e && "" !== e ? t && "" !== t ? /\s/.test(t) ? (a("Password cannot contain spaces."),
                            i = !1) : (s.isAttemptingLogin = !0,
                            N({
                                username: P,
                                password: t,
                                overrideSession: o
                            }, u, l)) : (a("Password cannot be empty."),
                            i = !1) : (a("Username cannot be empty."),
                            i = !1))
                        },
                        backToLogin: A
                    })
                }
                ],
                template: '<div><div class="text-center logo-wrapper" ng-style="isMauritiusBuild && {\'background-color\':\'#bdd7ee\'}"><img src="' + r.imgPath + '" alt="logo" class="logo"/></div><form class="text-center" ng-submit="attemptLogin()"><p ng-bind-html="message"></p><div role="alert" class="row relogin-alert-row"><span class="error ng-hide" ng-show="errorMsg" style="margin-bottom:0;">{{errorMsg}}</span></div><div class="row collapse relogin-input-row"><div class="column small-12"><input type="text" name="userName" placeholder="Username" class="small-12" ng-model="formData.userName" ng-minlength="1" ng-trim="true" required="" readonly=""/></div></div><div class="row collapse relogin-input-row"><div class="column small-12"><input type="password" name="password" placeholder="Password" class="small-12" ng-model="formData.password" ng-minlength="1" ng-trim="true" required=""/></div></div><div class="row text-center no-select" ng-hide="isAttemptingLogin"><input type="submit" id="submitBtn" name="login" value="Re-login" class="ng-hide no-select" ng-disabled="isAttemptingLogin"/><div class="button alert radius" ng-click="backToLogin()">Back to login</div> <label for="submitBtn" class="button success radius" ng-disabled="isAttemptingLogin">Re-login</label></div><div class="row text-center no-select ng-hide" ng-show="isAttemptingLogin">Logging in...<span class="fa fa-spinner fa-spin"></span></div></form></div>'
            }).result.then(function() {
                A()
            }, function() {
                A()
            })
        }
        function b(a, c, u) {
            var e = M.atob(h[T[E]]) + "/user/validateUser";
            a.useragent = "browser",
            O.ajax({
                url: e,
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(a),
                success: function(e, t) {
                    var r, s, n, i, o = !1;
                    e ? !e.result && "User not found" === e.message ? (r = a,
                    s = c,
                    n = u,
                    i = w.fullHost + "/ErudexWebService/rest/user/validateUser",
                    r.useragent = "browser",
                    O.ajax({
                        url: i,
                        type: "POST",
                        dataType: "json",
                        data: r,
                        success: function(e, t) {
                            s(e, r)
                        },
                        error: function(e, t, s) {
                            n(t, r)
                        }
                    })) : c(e, a) : o = !0,
                    o && u(t, a)
                },
                error: function(e, t, s) {
                    u(t, a)
                }
            })
        }
        function N(e, t, s) {
            b(e, t, s)
        }
        function R(e) {
            return e && (e.responseJSON && "sessionError" === e.responseJSON.status || 401 === e.status || e.responseText && 0 <= e.responseText.indexOf("sessionError"))
        }
        var e = ("localhost" === E ? E : E + ".erudex.com") + (location.port ? ":" + location.port : "")
          , w = {
            userInfo: null,
            sessionId: null,
            contentDisplayCategory: a,
            fullHost: ("undefined" != typeof androidLoginJS && null !== androidLoginJS || "file" === location.protocol ? "https:" : location.protocol) + "//" + e,
            serviceRoot: c,
            isSessionErrorTriggered: !1,
            goToLogin: C,
            getAuthorization: function() {
                return S + f + w.sessionId
            },
            getJson: function(t, e, r, n) {
                var s = {}
                  , i = w.fullHost + c + t;
                w.sessionId && (e.sessionId = w.sessionId,
                s[g] = S + f + w.sessionId,
                0 < _.filter(v, function(e) {
                    if ((0 === e.roleId || e.roleId === w.userInfo.roleId) && t.includes(e.path))
                        return t = e.lambdaPath || t,
                        !0
                }).length) && w.sessionId.startsWith("mdb-") && (i = M.atob(h[T[E]]) + t),
                O.ajax({
                    dataType: "json",
                    url: i,
                    data: e,
                    headers: s,
                    success: function(e, t, s) {
                        R(s) ? I() : r(e)
                    },
                    error: function(e, t, s) {
                        R(e) ? I() : n(e.responseText)
                    }
                })
            },
            postJson: function(t, r, n, i) {
                var e = {}
                  , s = w.fullHost + c + t;
                w.sessionId && (r.sessionId = w.sessionId,
                e[g] = S + f + w.sessionId,
                0 < _.filter(v, function(e) {
                    if ((0 === e.roleId || e.roleId === w.userInfo.roleId) && t.includes(e.path))
                        return t = e.lambdaPath || t,
                        !0
                }).length) && w.sessionId.startsWith("mdb-") && (s = M.atob(h[T[E]]) + t),
                O.ajax({
                    url: s,
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: U.toJson(r),
                    headers: e,
                    success: function(e, t, s) {
                        R(s) ? I() : n(e, r)
                    },
                    error: function(e, t, s) {
                        R(e) ? I() : i(e.responseText)
                    }
                })
            },
            getJson2: function(e, t) {
                return o.get(e, {
                    responseType: "json",
                    params: t
                })
            },
            downloadFile: function(t, e, n, i) {
                var s = {}
                  , r = w.fullHost + c + t;
                w.sessionId && (e.sessionId = w.sessionId,
                s[g] = S + f + w.sessionId,
                0 < _.filter(v, function(e) {
                    if ((0 === e.roleId || e.roleId === w.userInfo.roleId) && t.includes(e.path))
                        return t = e.lambdaPath || t,
                        !0
                }).length) && w.sessionId.startsWith("mdb-") && (r = M.atob(h[T[E]]) + t),
                o({
                    url: r,
                    method: "POST",
                    data: U.toJson(e),
                    headers: s,
                    responseType: "arraybuffer"
                }).success(function(e, t, s, r) {
                    200 === t ? n({
                        result: !0,
                        data: e
                    }) : 204 === t && n({
                        result: !0,
                        data: "No data available"
                    })
                }).error(function(e, t, s, r) {
                    i({
                        result: !1,
                        data: e
                    })
                })
            },
            downloadS3File: function(e, r, n) {
                O.ajax({
                    responseType: "json",
                    url: e,
                    success: function(e, t, s) {
                        e = {
                            result: !0,
                            values: JSON.parse(e)
                        };
                        r(e)
                    },
                    error: function(e, t, s) {
                        n(e.responseText)
                    }
                })
            },
            validateUser: N
        };
        return w
    }
    ]).factory("appPlugin", ["$rootScope", "ErudexWebService", "BUILD_CONFIG", "MESSAGE_STRINGS", function(s, r, e, n) {
        var i = !0;
        function t(t) {
            function e(e) {
                200 === e.status && ((e = (e = e.data) && e.result) === i && !t || s.$broadcast(n.ONLINE_STATUS_CHANGED_EVENT, {
                    oldValue: i,
                    newValue: e
                }),
                i = e)
            }
            r.getJson2("/local/isOnline").then(e, e)
        }
        return "windows" === e.PLATFORM && (t(!0),
        setInterval(t, 1e4)),
        {
            isOnline: function() {
                return i
            },
            getSessionId: function(e, t) {
                e({
                    result: !0,
                    value: r.sessionId,
                    authorization: r.getAuthorization()
                })
            },
            getUploadUrl: function(e, t) {
                e({
                    result: !0,
                    value: r.fullHost + r.serviceRoot + "/resource/upload",
                    authorization: r.getAuthorization()
                })
            },
            getOmrUploadUrl: function(e, t) {
                e({
                    result: !0,
                    value: r.fullHost + r.serviceRoot + "/file/uploadOmrFile",
                    authorization: r.getAuthorization()
                })
            },
            getFilesUploadUrl: function(e, t) {
                return (e = U.isFunction(e) ? e : U.noop)({
                    result: !0,
                    value: r.fullHost + r.serviceRoot + "/file/uploadFiles",
                    authorization: r.getAuthorization()
                }),
                r.fullHost + r.serviceRoot + "/file/uploadFiles"
            },
            viewUserAttachment: function(e, t, s) {
                r.postJson("/file/viewUserFile", e, t, s)
            },
            saveUserAttachment: function(e, t, s) {
                r.postJson("/assignment/annotateStudentAssignmentAttachment", e, t, s)
            }
        }
    }
    ]).factory("v2CommonPlugin", ["ErudexWebService", function(r) {
        return {
            getUserAssessmentById: function(e, t, s) {
                r.postJson("/assessment/getUserAssessments", e, t, s)
            },
            getTimelineUserActivity: function(e, t, s) {
                r.postJson("/userActivity/getTimelineActivity", e, t, s)
            },
            getTeachersBySubject: function(e, t, s) {
                r.postJson("/user/getTeachersBySubject", e, t, s)
            },
            getInstitutionsByOrg: function(e, t, s) {
                r.postJson("/user/getInstitutionsByOrg", e, t, s)
            },
            getUsersBySection: function(e, t, s) {
                r.postJson("/user/getUsersBySection", e, t, s)
            },
            getStudentTestChapterList: function(e, t, s) {
                r.postJson("/reports/getStudentTestChapterList", e, t, s)
            },
            getStudentPerformanceReport: function(e, t, s) {
                r.postJson("/reports/getStudentPerformanceReport", e, t, s)
            },
            getTeacherTestReport: function(e, t, s) {
                r.postJson("/reports/getTeacherTestReport", e, t, s)
            },
            getTeacherOverviewReport: function(e, t, s) {
                r.postJson("/reports/getTeacherOverviewReport", e, t, s)
            },
            getTeacherOverviewTestStuList: function(e, t, s) {
                r.postJson("/reports/getTeacherOverviewTestStuList", e, t, s)
            },
            getStudentChapterQuestionsList: function(e, t, s) {
                r.postJson("/reports/getStudentChapterQuestionsList", e, t, s)
            },
            getDashboardReportData: function(e, t, s) {
                r.postJson("/reports/getDashboardReportData", e, t, s)
            },
            downloadXlsx: function(e, t, s) {
                r.downloadFile("/assessment/downloadXlsx", e, t, s)
            },
            getNotifications: function(e, t, s) {
                r.postJson("/notifications/getNotifications", e, t, s)
            },
            readNotification: function(e, t, s) {
                r.postJson("/notifications/readNotification", e, t, s)
            },
            deleteNotification: function(e, t, s) {
                r.postJson("/notifications/deleteNotification", e, t, s)
            },
            saveMcq: function(e, t, s) {
                r.postJson("/competitive-module/upsertMcq", e, t, s)
            },
            getOrgReportsByCurriculum: function(e, t, s) {
                r.postJson("/reports/getOrgReportsByCurriculum", e, t, s)
            },
            getBookByCategory: function(e, t, s) {
                r.postJson("/tgsb/getBookByCategory", e, t, s)
            },
            getARContent: function(e, t, s) {
                r.postJson("/user/getARContent", e, t, s)
            }
        }
    }
    ]).factory("studentAssignmentPlugin", ["ErudexWebService", function(r) {
        return {
            getUserAssignments: function(e, t, s) {
                r.postJson("/assignment/getUserAssignments", e, t, s)
            },
            submitAssignment: function(e, t, s) {
                r.postJson("/assignment/upsertUserAssignment", e, t, s)
            }
        }
    }
    ]).factory("studentAssessmentPlugin", ["ErudexWebService", function(a) {
        return {
            getUserAssessments: function(e, t, s) {
                a.postJson("/assessment/getUserAssessments", e, t, s)
            },
            getChapterInfo: function(e, t, s) {
                a.postJson("/assessment/getChapterInfo", e, t, s)
            },
            getMockUserAssessmentById: function(s, r, n) {
                function i(e) {
                    var t;
                    e && e.result ? e.partial ? (o += e.value,
                    s.range = e.range,
                    a.postJson("/competitive-module/startCompetitiveAssessment/0000-0000-0000", s, i, n)) : e.final ? (o += e.value,
                    t = {
                        result: e.result,
                        value: JSON.parse(o)
                    },
                    r(t)) : r(e) : e && !e.result && r(e)
                }
                var o = "";
                a.postJson("/competitive-module/startCompetitiveAssessment/0000-0000-0000", s, i, n)
            },
            submitAssessment: function(e, t, s) {
                a.postJson("/competitive-module/submitAssessment", e, t, s)
            }
        }
    }
    ]).factory("teacherAssignmentPlugin", ["ErudexWebService", function(r) {
        return {
            getDashboardSubmissions: function(e, t, s) {
                r.postJson("/assignment/getDashboardSubmissions", e, t, s)
            },
            getAssignments: function(e, t, s) {
                r.postJson("/assignment/getAssignments", e, t, s)
            },
            getStudentsByAssignment: function(e, t, s) {
                r.postJson("/assignment/getStudentsByAssignment", e, t, s)
            },
            upsertAssignment: function(e, t, s) {
                r.postJson("/assignment/upsert", e, t, s)
            },
            gradeAssignment: function(e, t, s) {
                r.postJson("/assignment/upsertUserAssignment", e, t, s)
            }
        }
    }
    ]).factory("teacherAssessmentPlugin", ["ErudexWebService", function(n) {
        return {
            getDashboardSubmissions: function(e, t, s) {
                n.postJson("/assessment/getDashboardSubmissions", e, t, s)
            },
            getAssessments: function(e, t, s) {
                n.postJson("/assessment/getAssessments", e, t, s)
            },
            getAssessmentById: function(e, t, s) {
                n.postJson("/assessment/getAssessments", e, function(e) {
                    e && e.result && !U.isArray(e.values) && e.values.url ? n.downloadS3File(e.values.url, t, s) : t(e)
                }, s)
            },
            getStudentsByAssessment: function(e, t, s) {
                n.postJson("/assessment/getStudentsByAssessment", e, t, s)
            },
            searchQuestions: function(e, t, s) {
                n.postJson("/assessment/searchQuestions", e, t, s)
            },
            upsertAssessment: function(e, t, s) {
                n.postJson("/assessment/upsert", e, t, s)
            },
            getCompetitiveAssessment: function(e, t, s) {
                n.getJson("/competitive-module/getCompetitiveAssessment/" + e, {}, function(e) {
                    e && e.result ? t(e.value) : s("Error retrieving Mock Test/")
                }, s)
            },
            getCompetitiveMockAssessmentsByCurriculum: function(e, t, s, r) {
                n.getJson("/competitive-module/getCompetitiveMockAssessmentsByCurriculum/" + t + "/" + e, {}, function(e) {
                    e && (e.result || U.isArray(e.mock)) ? s(e.mock) : r("Error retrieving Mock Tests.")
                }, r)
            },
            approveMockTest: function(e, t, s) {
                n.postJson("/assessment/approveAssessment", e, t, s)
            }
        }
    }
    ]).factory("teacherUploadPlugin", ["ErudexWebService", function(r) {
        return {
            getTeacherUploads: function(e, t, s) {
                r.postJson("/upload/getTeacherUploads", e, t, s)
            },
            addUploadedContent: function(e, t, s) {
                r.postJson("/upload/addUploadedContent", e, t, s)
            }
        }
    }
    ]).factory("liveClassPlugin", ["ErudexWebService", function(r) {
        return {
            createMeeting: function(e, t, s) {
                U.extend(e, r.lcKeyConfig, r.lcProviderConfig),
                r.postJson("/liveClass/insertOrUpdateMeeting", e, t, s)
            },
            updateMeeting: function(e, t, s) {
                U.extend(e, r.lcKeyConfig),
                r.postJson("/liveClass/insertOrUpdateMeeting", e, t, s)
            },
            getMeetings: function(e, t, s) {
                r.postJson("/liveClass/getMeetings", e, t, s)
            },
            getLiveClassAttendance: function(e, t, s) {
                r.postJson("/liveClass/getAttendance", e, t, s)
            },
            addActivity: function(e, t, s) {
                r.postJson("/liveClass/addActivity", e, t, s)
            },
            getUserList: function(e, t, s) {
                r.postJson("/admin/organization/user/getUserListByRoleForAssessment", e, t, s)
            },
            getSectionsByInstitutionAndGrade: function(e, t, s) {
                r.postJson("/admin/institution/getSectionsByInstitutionAndGrade", e, t, s)
            }
        }
    }
    ]).factory("BaseUserPlugin", ["ErudexWebService", "locker", "$log", "blockUI", "APP_PREFS", function(i, e, t, r, s) {
        var n, o, a = e.driver("session").namespace("com.erudex"), c = a.get("userKey"), u = a.get("userSession"), l = a.get("contentNames"), d = !1, m = !1, p = !1, g = !1, S = !1, f = !1, h = !1, v = null;
        function T(e) {
            function t(e, t) {
                return e.id - t.id
            }
            return U.isArray(e) && (e = e.sort(t),
            U.forEach(e, function(e) {
                U.isArray(e.userSections) && (e.userSections = e.userSections.sort(t))
            })),
            e
        }
        function E() {
            c.sectionIds = [],
            U.isArray(c.userGrades) && c.userGrades.forEach(function(e) {
                e.userSections.forEach(function(e) {
                    c.sectionIds.includes(e.sectionId) || c.sectionIds.push(e.sectionId)
                })
            })
        }
        function I(e, t) {
            function s() {
                r.stop(),
                console.info("Logout finished."),
                i.goToLogin()
            }
            r.start(),
            i.postJson("/user/userLogout", {
                userId: e,
                userName: i.userInfo.userName,
                sessionId: t
            }, s, s),
            a.clean()
        }
        c && c.id ? (P = c.userName,
        c.userGrades = T(c.userGrades),
        E(),
        n = (e = U.isArray(c.userGrades) ? c.userGrades[0] : null) && U.isArray(e.userSections) ? e.userSections[0] : null,
        o = c.person || {
            firstName: "N/A",
            lastName: "N/A"
        },
        i.userInfo = {
            userId: c.id,
            userName: c.userName,
            institutionId: c.institution.id,
            firstName: o.firstName,
            lastName: o.lastName,
            roleId: c.roles[0].id,
            gradeId: -1,
            gradeNumber: -1,
            sectionId: -1,
            sectionName: null
        },
        i.lcKeyConfig = {
            lcK: c.lcK,
            lcS: c.lcS,
            lcT: c.lcT,
            userName: c.userName
        },
        i.lcProviderConfig = {
            lcP: c.userPreferences[s.LIVE_CLASSES_PROVIDER.key],
            lcE: c.userPreferences[s.LIVE_CLASSES_PROVIDER_EMAIL.key]
        },
        e && (i.userInfo.gradeId = e.grade.id,
        i.userInfo.gradeNumber = e.grade.number),
        n && (i.userInfo.sectionId = n.section.id,
        i.userInfo.sectionName = n.section.name)) : I(null, null),
        u && (i.sessionId = u,
        function e() {
            i.postJson("/user/keepSessionAlive", {
                sessionId: u
            }, function(e) {}, function(e) {
                t.error("keep alive err", e)
            }),
            i.isSessionErrorTriggered || setTimeout(e, 9e5)
        }());
        var A = {
            getUserInfo: function() {
                return c
            },
            setValidUser: function(e) {
                d = e
            },
            setIsTeacher: function(e) {
                p = e
            },
            isTeacher: function() {
                return p
            },
            setIsStudent: function(e) {
                m = e
            },
            isStudent: function() {
                return m
            },
            setIsDataEntry: function(e) {
                S = e
            },
            isDataEntry: function() {
                return S
            },
            setIsOrgUser: function(e) {
                g = e
            },
            isOrgUser: function() {
                return g
            },
            setIsGuardian: function(e) {
                f = e
            },
            isGuardian: function() {
                return f
            },
            setIsSupervisor: function(e) {
                h = e
            },
            isSupervisor: function() {
                return h
            },
            setStudentUser: function(e, t) {
                v = e,
                c.userGrades = T(t),
                E()
            },
            getStudentUserId: function() {
                return v
            },
            getCurrentUser: function(e, t) {
                d ? e(c) : (t("No user data or invalid user for app."),
                A.logoutUser())
            },
            getChatInfo: function(e, t) {
                var s, r, n;
                r = e,
                n = t,
                (s = c) && s.id ? i.postJson("/user/getChatInfo", {
                    userId: s.id
                }, function(e) {
                    e && (e.result || e.server) && M.Strophe ? ((e = e.value || e).jid = Strophe.escapeNode(s.userName.toLowerCase()) + "@" + e.server,
                    r(e)) : n("Bad result from server")
                }, n) : n("No user info")
            },
            getContentNames: function(e, t) {
                l ? e(l) : t("Content names not found.")
            },
            getChatUsers: function(e, t, s) {
                i.postJson("/user/getChatUserList", e, t, s)
            },
            getUserIds: function(e, t, s) {
                i.postJson("/user/getOfUserIds", e, t, s)
            },
            getAccessInfo: function(e, t, s) {
                i.postJson("/user/getAccessInfo", e, t, s)
            },
            saveNotifications: function(e) {
                a.put("userNotifications", e)
            },
            triggerSync: function(e, t) {
                t("No sync in browser")
            },
            getNotifications: function() {
                return a.get("userNotifications", [])
            },
            logoutUser: function() {
                I(U.isObject(c) ? c.id : -1, u)
            },
            changePassword: function(e, t, s) {
                i.postJson("/user/changePassword", e, t, s)
            },
            getInstitutionDetails: function(e, t, s) {
                i.postJson("/admin/institution/getInstitutionDetails", e, t, s)
            },
            getCurriculumDetails: function(e, t, s) {
                i.postJson("/admin/curriculum/getCurriculumDetails", e, t, s)
            },
            getUploadUrls: function(e, t, s) {
                i.postJson("/s3upload/getUploadUrls", e, t, s)
            }
        };
        return A
    }
    ]).factory("BaseResourcePlugin", ["ErudexWebService", function(i) {
        return {
            getAugmentedResources: function(e, t, s, r) {
                i.postJson("/userActivity/getAugmentedResources", {
                    userId: e,
                    contentUUID: t
                }, s, r)
            },
            getResourceUrl: function(e, t, s) {
                var r = "/resource/getContentUrl"
                  , n = e.displayCategory || "";
                "00000000-0000-0000-0000-000000000000" === e.uuid ? t("dumm-url") : ((e.storeId && 1 === e.storeId || n === i.contentDisplayCategory.TEACHER || n === i.contentDisplayCategory.RECORDING) && (r = "/resource-l/getContentUrl"),
                n = {
                    userId: i.userInfo.userId,
                    uuid: e.uuid,
                    uri: e.uri,
                    type: e.contentResourceType.type,
                    displayCategory: e.displayCategory,
                    encrypted: e.encrypted
                },
                i.postJson(r, n, function(e) {
                    e && e.result ? e.value.toLowerCase().startsWith("https://") || e.value.toLowerCase().startsWith("file://") ? t(e.value) : t(i.fullHost + e.value) : s("Failed to get resource link")
                }, s))
            },
            getOverlayResourceUrl: function(e, t, s) {
                var r = "/resource/getContentUrl"
                  , n = e.displayCategory || ""
                  , n = ((e.storeId && 1 === e.storeId || n === i.contentDisplayCategory.TEACHER || n === i.contentDisplayCategory.ZOOM || n === i.contentDisplayCategory.RECORDING) && (r = "/resource-l/getContentUrl"),
                {
                    userId: i.userInfo.userId,
                    uuid: e.uuid,
                    uri: e.altLanguage ? e.altUri : e.uri,
                    type: e.contentResourceType.type,
                    displayCategory: e.displayCategory,
                    encrypted: e.encrypted,
                    isOverlay: !0
                });
                i.postJson(r, n, function(e) {
                    e && e.result ? e.value.toLowerCase().startsWith("https://") || e.value.toLowerCase().startsWith("file://") ? t(e.value) : t(i.fullHost + e.value) : s("Failed to get resource link")
                }, s)
            },
            getResourceDetails: function(e, t, s) {
                i.postJson("/resource/getResourceDetails", {
                    contentUUID: e
                }, t, s)
            }
        }
    }
    ]).factory("BaseUserActivityPlugin", ["ErudexWebService", "MESSAGE_STRINGS", function(a, r) {
        return {
            storeSessionActivity: function(e, t, s) {
                (!a.userInfo || a.userInfo.userId < 1) && s("User not available"),
                e.userId = a.userInfo.userId,
                e.isOffline = !1,
                e.sessionId = a.sessionId;
                e = {
                    userInfo: a.userInfo,
                    sessionActivities: [e]
                };
                a.postJson("/userActivity/addSessionActivity", e, function(e) {
                    e && (e.result || "success" === e.status) ? t("Activity store success.") : s("Failed to store activity.")
                }, s)
            },
            storeActivity: function(e, t, s) {
                3 !== a.userInfo.roleId && 4 !== a.userInfo.roleId || e.activityType !== r.ACTIVITY_TYPE_CONTENT_REVIEW || (e.institutionId = a.userInfo.institutionId,
                e.gradeId || (e.gradeId = a.userInfo.gradeId),
                e.sectionId) || (e.sectionId = a.userInfo.sectionId),
                e.isOffline = !1,
                e.mimeType || (e.mimeType = "");
                e = {
                    userInfo: a.userInfo,
                    contentActivities: [e]
                };
                a.postJson("/userActivity/addContentActivity", e, function(e) {
                    e && (e.result || "success" === e.status) ? t("Activity store success.") : s("Failed to store activity.")
                }, s)
            },
            getReviewActivity: function(e, t, s, r, n, i) {
                i("Not available")
            },
            getResourceNotes: function(e, t, s, r, n, i, o) {
                a.postJson("/userActivity/getUserNotes", {
                    userId: e,
                    contentUUID: t,
                    endTime: s,
                    pageNumber: r,
                    limit: n
                }, i, o)
            },
            saveResourceNoteSession: function(e, t, s) {
                e.isOffline = !1;
                e = {
                    userInfo: a.userInfo,
                    contentNotes: [e]
                };
                a.postJson("/userActivity/addContentNotes", e, function(e) {
                    e && (e.result || "success" === e.status) ? t("Note store success.") : s("Failed to store notes.")
                }, s)
            },
            shareItem: function(e, t, s) {
                var r = e.type
                  , e = e.shareItem;
                "SHARE_NOTE" === r ? a.postJson("/userActivity/pushSharedNotes", e, t, s) : "SHARE_CONTENT" === r ? a.postJson("/userActivity/addShareContent", e, t, s) : s("Unknown share type.")
            },
            getSharedNote: function(e, s, r) {
                a.postJson("/userActivity/getSharedNotesByCriteria", e, function(e) {
                    var t;
                    e && e.result && e.values.length ? (t = e.values[0],
                    s(t)) : r(e)
                }, r)
            },
            rateResource: function(e, t, s, r, n, i) {
                r = {
                    userInfo: a.userInfo,
                    contentRatings: [{
                        rating: r,
                        timeStamp: Date.now(),
                        subjectId: s,
                        contentUUID: t,
                        isOffline: !1
                    }]
                };
                a.postJson("/userActivity/addContentRating", r, function(e) {
                    e && (e.result || "success" === e.status) ? n("Rating store success.") : i("Failed to store rating.")
                }, i)
            },
            getUserResourceRating: function(e, t, s, r) {
                a.postJson("/userActivity/getUserResourceRating", {
                    userId: e,
                    contentUUID: t
                }, function(e) {
                    e && e.result ? s(e.value) : s(0)
                }, function(e) {
                    r(e)
                })
            },
            getTimelineUserActivity: function(e, t, s, r, n, i) {
                a.postJson("/userActivity/getTimelineActivity", {
                    userId: e,
                    startTime: t,
                    endTime: s,
                    gradeId: r
                }, n, i)
            },
            storeUserLike: function(e, t, s, r, n, i) {
                r = {
                    userInfo: a.userInfo,
                    contentLikes: [{
                        isLiked: r,
                        timeStamp: Date.now(),
                        subjectId: s,
                        contentUUID: t,
                        isOffline: !1
                    }]
                };
                a.postJson("/userActivity/addContentLikes", r, function(e) {
                    e && (e.result || "success" === e.status) ? n("Like store success.") : i("Failed to store like.")
                }, i)
            },
            getUserLike: function(e, t, s, r) {
                a.postJson("/userActivity/getUserLike", {
                    userId: e,
                    contentUUID: t
                }, function(e) {
                    e && e.result ? s(!0 === e.value || "true" === e.value) : s(!1)
                }, function(e) {
                    r(e)
                })
            },
            storePageActivity: function(e, t, s) {
                !U.isArray(e) && e.pageId && (e = [e]),
                U.forEach(e, function(e) {
                    e.userId = a.userInfo.userId,
                    e.isOffline = !1,
                    e.sessionId = a.sessionId
                });
                e = {
                    userInfo: a.userInfo,
                    pageActivities: e
                };
                a.postJson("/userActivity/addPageActivity", e, t, s)
            }
        }
    }
    ]).factory("questionPlugin", ["ErudexWebService", function(r) {
        return {
            getSelectOptions: function(e, t, s) {
                r.postJson("/question/getSelectOptions", e, t, s)
            },
            addPastExam: function(e, t, s) {
                r.postJson("/question/addPastExam", e, t, s)
            },
            updateQuestionStatus: function(e, t, s) {
                r.postJson("/question/updateQuestionStatus", e, t, s)
            },
            save: function(e, t, s) {
                r.postJson("/question/save", e, t, s)
            },
            search: function(e, t, s) {
                r.postJson("/question/search", e, t, s)
            },
            delete: function(e, t, s) {
                r.postJson("/question/delete", e, t, s)
            },
            getQuestionHistory: function(e, t, s) {
                r.postJson("/question/getMcqHistory", e, t, s)
            },
            updateQuestionApprovalStatus: function(e, t, s) {
                r.postJson("/question/updateQuestionApprovalStatus", e, t, s)
            }
        }
    }
    ]).factory("reportPlugin", ["ErudexWebService", function(r) {
        return {
            getAvailableReports: function(e, t, s) {
                r.postJson("/reports/getAvailableReports", e, t, s)
            },
            getStudentPerformanceReport: function(e, t, s) {
                r.postJson("/reports/getReportDetails", e, t, s)
            }
        }
    }
    ])
}(window.angular, window.jQuery, window),
function(p, g) {
    "use strict";
    p.module("erudex.studentApp.plugins", ["angular-locker", "com.erudex.common.plugins", "com.erudex.common.services"]).factory("userPlugin", ["BaseUserPlugin", "ErudexWebService", "COMPETITIVE_CURRICULUM", "$rootScope", "locker", function(e, n, s, t, r) {
        var i, o, a, c, u, l = {}, d = (p.extend(l, e),
        r.driver("session").namespace("com.erudex")), m = l.getUserInfo();
        return m && m.id && (e = g.apply(".roles{.id == 4}", m),
        r = g.apply(".roles{.id == 3}", m),
        i = g.apply(".roles{.id == 2 || .id == 8}", m),
        o = g.apply(".roles{.id == 7 || .id == 9}", m),
        a = g.apply(".roles{.id == 6 || .id == 12}", m),
        c = g.apply(".roles{.id == 5}", m),
        u = g.apply(".roles{.id == 8 || .id == 9 || .id == 12}", m),
        (e && 0 < e.length || r && 0 < r.length || i && 0 < i.length || o && 0 < o.length || a && 0 < a.length || c && 0 < c.length) && l.setValidUser(!0),
        e && 0 < e.length && l.setIsStudent(!0),
        r && 0 < r.length && l.setIsTeacher(!0),
        c && 0 < c.length && l.setIsGuardian(!0),
        o && 0 < o.length && l.setIsDataEntry(!0),
        u && 0 < u.length && l.setIsOrgUser(!0),
        a) && 0 < a.length && l.setIsSupervisor(!0),
        p.extend(l, {
            setValidUser: p.noop,
            getUserCurriculum: function(t, s) {
                var e = {
                    userId: m.id,
                    storeIds: m.storeIds,
                    sectionIds: m.sectionIds
                };
                l.isGuardian() && (e.studentId = l.getStudentUserId()),
                n.postJson("/user/getStudentCurriculum", e, function(e) {
                    e && (e.result || p.isArray(e.curriculum)) ? t(e.curriculum) : s("Bad curriculum result from service")
                }, s)
            },
            getUserSubjectById: function(e, t, s) {
                e = {
                    userSubjectId: e,
                    storeIds: m.storeIds,
                    sectionIds: m.sectionIds
                };
                l.isGuardian() && (e.studentId = l.getStudentUserId()),
                n.postJson("/user/getUserSubjectById", e, function(e) {
                    e && (e.result || p.isArray(e.curriculum)) ? t(e.curriculum) : s("Bad curriculum result from service")
                }, s)
            },
            getCompetitiveModulePaidUser: function(e, t) {
                e({
                    competitiveModulePaidUser: d.get(s.IS_PAID_USER)
                })
            },
            getUserAssignments: function(t, s) {
                n.postJson("/user/getStudentAssignments", {
                    userId: m.id
                }, function(e) {
                    e && (e.result || p.isArray(e.assignments)) ? t(e.assignments) : s("Bad assignments result from service")
                }, s)
            },
            getUserAssessments: function(e, t, s) {
                e = p.extend(p.isObject(e) ? e : {}, {
                    userId: m.id
                }),
                n.postJson("/user/getStudentAssessments", e, function(e) {
                    e && (e.result || p.isArray(e.assessments)) ? t(e.assessments) : s("Bad assessments result from service")
                }, s)
            },
            getCompetitiveAssessmentsByChapterId: function(e, t, s) {
                n.postJson("/competitive-module/getCompetitiveAssessmentsByChapterId", {
                    chapterId: e
                }, function(e) {
                    e && (e.result || p.isArray(e.values)) ? t(e.values) : s("Bad assessment result from service")
                }, s)
            },
            getMockTests: function(e, t, s) {
                l.isGuardian() && (e.studentId = l.getStudentUserId()),
                n.postJson("/assessment/getMockTests", e, function(e) {
                    e && (e.result || p.isArray(e.values)) ? t(e.values) : s("Bad mock assessment result from service")
                }, s)
            },
            getTestsByGradeAndSection: function(e, t, s, r) {
                n.getJson("/competitive-module/getTestsByGradeAndSection/" + e + "/" + t, {}, function(e) {
                    e && (e.result || p.isArray(e.mock)) ? s(e.mock) : r("Bad mock assessment result from service")
                }, r)
            },
            getCompetitiveStatsBySubjectId: function(e, t, s) {
                n.getJson("/competitive-module/getCompetitiveModuleSubjectStats/" + e, {}, function(e) {
                    e && e.result ? t(e) : s("Bad assessment result from service")
                }, s)
            },
            getMockTestResult: function(e, t, s) {
                n.postJson("/competitive-module/getMockTestResult", {
                    assessmentId: e,
                    curriculumName: null
                }, function(e) {
                    e && (e.result || p.isArray(e.values)) ? t(e.values) : s("Unable to get getMockTestResult")
                }, s)
            },
            getMockTestResults: function(e, t, s) {
                n.postJson("/competitive-module/getMockTestResults", {
                    assessmentId: null,
                    curriculumName: e
                }, function(e) {
                    e && (e.result || p.isArray(e.values)) ? t(e.values) : s("Unable to get getMockTestResults")
                }, s)
            },
            createCompetitiveSelfAssessment: function(e, t, s) {
                e = p.extend(p.isObject(e) ? e : {}, {
                    userId: m.id
                }),
                n.postJson("/competitive-module/createCompetitiveSelfAssessment", e, function(e) {
                    e && (e.result || p.isObject(e.value)) ? t(e.value) : s("could not create self assessment!!")
                }, s)
            },
            getSectionsForTeacherByGrade: function(e, t, s) {
                n.postJson("/user/getSectionsForTeacherByGrade", {
                    gradeId: e
                }, function(e) {
                    e && (e.result || p.isArray(e.values)) ? t(e.values) : s("Could not get result from service")
                }, s)
            },
            isOnline: function(e, t) {
                e({
                    online: !0
                })
            }
        }),
        l
    }
    ]).factory("assignmentPlugin", ["ErudexWebService", function(i) {
        return {
            getStudentAssignmentDetails: function(e, t, s) {
                i.postJson("/assignment/getStudentAssignmentDetails", e, t, s)
            },
            storeAssignmentResponse: function(e, t, s, r) {
                e.isOffline = !1,
                e.isSubmit = !!t,
                i.postJson("/assignment/submitResponse", {
                    assignmentResponses: [e]
                }, s, r)
            },
            getAssignmentResponse: function(e, t, s, r, n) {
                i.postJson("/assignment/getStudentResponse", {
                    userId: e,
                    assignmentUuid: t,
                    studentAssignmentId: s
                }, r, n)
            }
        }
    }
    ]).factory("assessmentPlugin", ["ErudexWebService", "BaseUtilService", "locker", "ASSESSMENT_TYPE", function(a, n, e, i) {
        return {
            startAssessment: function(e, t, s, r) {
                a.postJson("/assessment/startAssessment", {
                    userId: e,
                    studentAssessmentId: t
                }, s, r)
            },
            storeAssessmentAnswers: function(e, t, s) {
                var r = {
                    studentAssessment: e
                };
                e.competitiveModule && e.assessment.assessmentType === i.COMPETITIVE_MOCK_TEST ? a.postJson("/competitive-module/submitAssessment", r, t, s) : a.postJson("/assessment/submitAssessment", r, t, s)
            },
            submitAssessment: function(e, t, s) {
                var r = {
                    studentAssessment: e,
                    finalSubmit: !0
                };
                e.competitiveModule && e.assessment.assessmentType === i.COMPETITIVE_MOCK_TEST ? (n.encodeIds([e.userId, e.assessment.id]),
                a.postJson("/competitive-module/submitAssessment", r, t, s)) : a.postJson("/assessment/submitAssessment", r, t, s)
            },
            getPracticeAssessment: function(e, t, s) {
                a.postJson("/assessment/getPracticeStudentAssessment", e, t, s)
            },
            createSelfAssessment: function(e, t, s) {
                a.postJson("/assessment/createStudentSelfAssessment", e, t, s)
            },
            getQuizAttempts: function(e, t, s) {
                a.postJson("/assessment/getStudentQuizAttempts", e, t, s)
            },
            startQuizAttempt: function(e, t, s) {
                a.postJson("/assessment/startStudentQuizAttempt", e, t, s)
            },
            getStudentAssessmentDetails: function(s, r, n) {
                var i, o;
                s.isCompetitive ? (i = "",
                a.postJson("/competitive-module/startCompetitiveAssessment/" + s.assessmentUuid, s, o = function(e) {
                    var t;
                    e && e.result ? e.partial ? (i += e.value,
                    s.range = e.range,
                    a.postJson("/competitive-module/startCompetitiveAssessment/" + s.assessmentUuid, s, o, n)) : e.final ? (i += e.value,
                    t = {
                        result: e.result,
                        value: JSON.parse(i)
                    },
                    r(t)) : r(e) : e && !e.result && r(e)
                }
                , n)) : a.postJson("/assessment/getStudentAssessmentDetails", s, r, n)
            },
            syncSubjectQuestions: function(e, t, s) {
                a.postJson("/assessment/syncSubjectQuestions", e, t, s)
            },
            getAssessmentMcqChapterList: function(e, t, s) {
                a.getJson("/assessment/getAssessmentMcqChapterList/" + e, {}, t, s)
            },
            getAssessmentMcqSubjectList: function(e, t, s) {
                a.getJson("/assessment/getAssessmentMcqSubjectList/" + e, {}, t, s)
            }
        }
    }
    ]).factory("resourcePlugin", ["BaseResourcePlugin", function(e) {
        return e
    }
    ]).factory("userActivityPlugin", ["BaseUserActivityPlugin", function(e) {
        return e
    }
    ])
}(window.angular, window.JSPath),
function(e) {
    "use strict";
    String.prototype.trunc = String.prototype.trunc || function(e) {
        return this.length > e ? this.substr(0, e - 1) : this
    }
    ,
    String.prototype.capitalize = function(e) {
        return (e ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(e) {
            return e.toUpperCase()
        })
    }
    ,
    e.fn.visible = function() {
        return this.css("visibility", "visible")
    }
    ,
    e.fn.invisible = function() {
        return this.css("visibility", "hidden")
    }
}((window.angular,
window.jQuery)),
function(s) {
    "use strict";
    function e(e, t) {
        try {
            return s.fromJson(e)
        } catch (e) {
            return t
        }
    }
    s.module("com.erudex.common.constant", []).constant("NOTE_COLORS", ["#000000", "#D80000", "#F66A00", "#4CC600", "#0094FF", "#4800FF", "#B200FF"]).constant("BUILD_CONFIG", {
        VERSION: isNaN(parseInt("218")) ? -1 : parseInt("218"),
        VERSION_NAME: "2.1.4",
        BUILD_TYPE: "release",
        BRAND: "erudex",
        BRAND_KEY: "erudex",
        BRAND_KEYS: e("[]", []),
        BUILD_DATE: "2023-06-14T01:41:55.870Z",
        PLATFORM: "browser",
        ALLOW_ALTERNATE_TEMPLATES: !/^false$/.test("true"),
        DISABLED_MODULES: e("[]", []),
        MOBILE_SHOP_LINK: "/",
        BROWSER_SHOP_LINK: "/",
        BROWSER_LOGOUT_REDIRECT: "../login/index.html",
        OFFLINE_ONLY: /^true$/.test("@OFFLINE_ONLY@")
    }).constant("APP_CONFIG", {
        ERUDEX_INSTITUTION_NAME: "Erudex",
        MAX_CHAT_MESSAGES: 50,
        MAX_CHAT_MESSAGE_LENGTH: 255,
        MAX_NOTIFICATION_COUNT: 25,
        KNOWN_ICON_SETS: ["english", "math", "science", "social", "generic", "chapter-item", "arts", "arabic", "health-and-physical-education", "history-and-geography", "french", "mathematics"],
        KNOWN_CHAPTER_ITEM_ICONS: ["concepttree", "definitions", "facts", "faqs", "formulae", "glossary", "imageinfo", "keypoints", "mcqs", "video"],
        KNOWN_GENERIC_ICON_CLASSES: ["assessment", "assignment", "activity"],
        VIEWABLE_MEDIA_TYPES_REGEX: /video|image|audio|pdf/,
        SUBJECT_ICONS: {
            ANIMATION: "animation",
            VIDEO: "video",
            RECORDING: "recording",
            BOOK: "book",
            CHAPTER: "chapter",
            CHAPTER_RESOURCE: "chapter-resource",
            PDF: "pdf",
            IMAGE: "image",
            AUDIO: "audio"
        },
        GENERIC_ICONS: {
            ASSESSMENT: "assessment",
            ASSIGNMENT: "assignment",
            QUIZ: "quiz",
            FRIEND: "friend",
            FRIEND_GROUP: "friend-group",
            UNKNOWN: "unknown"
        },
        ICON_ROOT: "../img/icons/",
        CONTENT_THUMB_ROOT: "/thumb/content/",
        FIXED_CHAT_GROUPS: {
            DEFAULT: "Friends",
            PENDING: "Pending Requests",
            SENT: "Sent Requests"
        },
        CHANGE_PASS: {
            MAX_LENGTH: 32,
            MIN_LENGTH: 8,
            PATTERN: /^(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}$/
        },
        OMR_ID: {
            MAX_LENGTH: 7,
            MIN_LENGTH: 7
        },
        REGEX: {
            WORD: /^\w*$/,
            WORD_SPECIAL: /^[\w#_-]*$/,
            WORD_MULTI: /^[\w ]*$/,
            WORD_MULTI_SPECIAL: /^[\w_ !'",.#&()\/-]*$/,
            NUMBER: /^[0-9]*$/,
            NUMBER_HYPHEN: /^[0-9-]*$/,
            USER_NAME: /^[a-zA-Z]+([._]?[a-zA-Z0-9]+)*$/
        },
        ASSESSMENT: {
            questionCount: {
                min: 5,
                max: 50,
                step: 5,
                default: 20
            },
            totalScore: {
                min: 5,
                max: 100,
                step: 5,
                default: 20
            },
            duration: {
                min: 5,
                max: 100,
                step: 5,
                default: 20
            },
            SUBJECTS_DONOT_SHUFFLE_QUESTIONS: ["English & Logical Reasoning"]
        },
        UPLOAD: {
            TYPE_MIME_LIST: ["video/*", "image/*", "audio/*", "application/pdf", "text/plain"].join(","),
            TYPE_REGEX: /video|image|audio|pdf|text/,
            MAX_SIZE: 52428800,
            OMR_TYPE_MIME_LIST: ["text/plain"].join(","),
            OMR_TYPE_REGEX: /text/
        },
        UPLOAD_STUDENT: {
            TYPE_MIME_LIST: ["video/*", "image/*", "audio/*", "application/pdf"].join(","),
            TYPE_REGEX: /video|image|audio|pdf/,
            MAX_SIZE: 20971520,
            MAX_TOTAL_SIZE: 52428800,
            MAX_ATTACHMENTS: 5
        },
        UPLOAD_FILES_SETTING: {
            method: "POST",
            arrayKey: ""
        },
        UPLOAD_TEACHER: {
            TYPE_MIME_LIST: ["image/*", "application/pdf"].join(","),
            TYPE_REGEX: /image|pdf/,
            MAX_SIZE: 10485760,
            MAX_TOTAL_SIZE: 52428800,
            MAX_ATTACHMENTS: 5
        },
        UPLOAD_OMR: {
            TYPE_MIME_LIST: ["text/plain"].join(","),
            TYPE_REGEX: /csv|txt/,
            MAX_SIZE: 5242880,
            MAX_TOTAL_SIZE: 5242880,
            MAX_ATTACHMENTS: 1
        },
        QUESTION_USAGE_TYPE: {
            REGULAR: "regular",
            PRACTICE: "practice",
            PAST_EXAM: "past_exam"
        },
        QUESTION_DIFFICULTY_LEVELS: [{
            id: 1,
            description: "Easy"
        }, {
            id: 2,
            description: "Medium"
        }, {
            id: 3,
            description: "Difficult"
        }],
        QUESTION_TYPE_ORDER: [{
            value: "MULTI_CHOICE_SINGLE",
            sortOrder: 1
        }, {
            value: "MULTI_CHOICE_MULTI",
            sortOrder: 2
        }, {
            value: "MATRIX_MATCH_TYPE",
            sortOrder: 3
        }, {
            value: "ASSERTION_AND_REASONING",
            sortOrder: 4
        }, {
            value: "NUMERICAL_VALUE",
            sortOrder: 5
        }, {
            value: "TRUE_OR_FALSE",
            sortOrder: 6
        }, {
            value: "INTEGER_SINGLE_SIGNED",
            sortOrder: 7
        }, {
            value: "INTEGER_SINGLE_UNSIGNED",
            sortOrder: 8
        }, {
            value: "MATCHING_SINGLE",
            sortOrder: 9
        }, {
            value: "FILL_IN_THE_BLANK",
            sortOrder: 10
        }],
        QUESTION_TYPES: [{
            value: "MULTI_CHOICE_SINGLE",
            name: "MCQ(Single Answer)",
            display: !0,
            regular: !0,
            adv: !0,
            description: "Select the ONE correct answer from the given options.",
            shortName: "MCQ",
            sortOrder: 1
        }, {
            value: "MULTI_CHOICE_MULTI",
            name: "MCQ(Multiple Answer)",
            display: !0,
            regular: !1,
            adv: !0,
            description: "Select the ONE OR MORE correct answer(s) from the given options.",
            sortOrder: 2
        }, {
            value: "MATRIX_MATCH_TYPE",
            name: "Matrix Matching(Single Answer)",
            display: !0,
            regular: !1,
            adv: !0,
            description: "Select the ONE correct answer from the given matching rows of Colum I and Column II options.",
            sortOrder: 3
        }, {
            value: "ASSERTION_AND_REASONING",
            name: "Assertion And Reasoning",
            display: !0,
            regular: !0,
            adv: !0,
            description: "Select the ONE correct answer from the given options",
            sortOrder: 4
        }, {
            value: "NUMERICAL_VALUE",
            name: "Numerical Value",
            display: !0,
            regular: !0,
            adv: !0,
            description: "Answer should be rounded off to the nearest Integer.",
            shortName: "NUMERICAL",
            sortOrder: 5
        }, {
            value: "TRUE_OR_FALSE",
            name: "True Or False",
            display: !1,
            regular: !1,
            adv: !1,
            description: "Answer is a True or False",
            OPTIONS: [{
                option: "True",
                optionText: "True"
            }, {
                option: "False",
                optionText: "False"
            }],
            sortOrder: 6
        }, {
            value: "INTEGER_SINGLE_SIGNED",
            name: "Integer (Single-digit,signed)",
            display: !1,
            regular: !1,
            adv: !1,
            description: "Answer is a single-digit integer ranging from -9 to 9 (both inclusive).",
            sortOrder: 7
        }, {
            value: "INTEGER_SINGLE_UNSIGNED",
            name: "Integer (Single-digit,unsigned)",
            display: !1,
            regular: !1,
            adv: !1,
            description: "Answer is a single-digit integer ranging from 0 to 9 (both inclusive).",
            sortOrder: 8
        }, {
            value: "MATCHING_SINGLE",
            name: "Matching List",
            display: !1,
            regular: !1,
            adv: !1,
            description: "Two matching lists are given. Select the ONE correct combination of elements from List-I and List-II from the given options.",
            sortOrder: 9
        }, {
            value: "FILL_IN_THE_BLANK",
            name: "Fill In The Blank",
            display: !0,
            regular: !0,
            adv: !0,
            description: "Answer is a single appropriate word.",
            sortOrder: 10
        }],
        QUESTION_TYPE: {
            MULTI_CHOICE_SINGLE: {
                value: "MULTI_CHOICE_SINGLE",
                name: "MCQ(Single Answer)",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Select the ONE correct answer from the given options.",
                shortName: "MCQ",
                sortOrder: 1
            },
            MULTI_CHOICE_MULTI: {
                value: "MULTI_CHOICE_MULTI",
                name: "MCQ(Multiple Answer)",
                display: !0,
                regular: !1,
                adv: !0,
                description: "Select the ONE OR MORE correct answer(s) from the given options.",
                sortOrder: 2
            },
            MATRIX_MATCH_TYPE: {
                value: "MATRIX_MATCH_TYPE",
                name: "Matrix Matching(Single Answer)",
                display: !0,
                regular: !1,
                adv: !0,
                description: "Select the ONE correct answer from the given matching rows of Colum I and Column II options.",
                sortOrder: 3
            },
            ASSERTION_AND_REASONING: {
                value: "ASSERTION_AND_REASONING",
                name: "Assertion And Reasoning",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Select the ONE correct answer from the given options",
                sortOrder: 4
            },
            NUMERICAL_VALUE: {
                value: "NUMERICAL_VALUE",
                name: "Numerical Value",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer should be rounded off to the nearest Integer.",
                shortName: "NUMERICAL",
                sortOrder: 5
            },
            TRUE_OR_FALSE: {
                value: "TRUE_OR_FALSE",
                name: "True Or False",
                display: !1,
                regular: !1,
                adv: !1,
                description: "Answer is a True or False",
                OPTIONS: [{
                    option: "True",
                    optionText: "True"
                }, {
                    option: "False",
                    optionText: "False"
                }],
                sortOrder: 6
            },
            INTEGER_SINGLE_SIGNED: {
                value: "INTEGER_SINGLE_SIGNED",
                name: "Integer (Single-digit,signed)",
                display: !1,
                regular: !1,
                adv: !1,
                description: "Answer is a single-digit integer ranging from -9 to 9 (both inclusive).",
                sortOrder: 7
            },
            INTEGER_SINGLE_UNSIGNED: {
                value: "INTEGER_SINGLE_UNSIGNED",
                name: "Integer (Single-digit,unsigned)",
                display: !1,
                regular: !1,
                adv: !1,
                description: "Answer is a single-digit integer ranging from 0 to 9 (both inclusive).",
                sortOrder: 8
            },
            MATCHING_SINGLE: {
                value: "MATCHING_SINGLE",
                name: "Matching List",
                display: !1,
                regular: !1,
                adv: !1,
                description: "Two matching lists are given. Select the ONE correct combination of elements from List-I and List-II from the given options.",
                sortOrder: 9
            },
            FILL_IN_THE_BLANK: {
                value: "FILL_IN_THE_BLANK",
                name: "Fill In The Blank",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer is a single appropriate word.",
                sortOrder: 10
            },
            VERY_SHORT_ANSWER: {
                value: "VERY_SHORT_ANSWER",
                name: "Subjective Very Short Answer",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer is a description.",
                sortOrder: 11
            },
            SHORT_ANSWER: {
                value: "SHORT_ANSWER",
                name: "Subjective Short Answer",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer is a description.",
                sortOrder: 12
            },
            LONG_ANSWER: {
                value: "LONG_ANSWER",
                name: "Subjective Long Answer",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer is a description.",
                sortOrder: 13
            },
            PARAGRAPH_ANSWER: {
                value: "PARAGRAPH_ANSWER",
                name: "Subjective Paragraph Answer",
                display: !0,
                regular: !0,
                adv: !0,
                description: "Answer is a description.",
                sortOrder: 14
            }
        },
        MCQ_SINGLE_QUESTION_TYPES: ["MULTI_CHOICE_SINGLE", "MATRIX_MATCH_TYPE", "MATCHING_SINGLE"],
        ASSIGNMENT_ATTACHMENT_DISPLAY_ARRAYS: [{
            name: "resources",
            type: ["resourceQuiz", "resource"]
        }, {
            name: "assignments",
            type: "assignment"
        }, {
            name: "assessments",
            type: "assessment"
        }, {
            name: "links",
            type: "externalLink"
        }],
        CKEDITOR_CONFIG: {
            embed_provider: "https://ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}",
            toolbar: null,
            toolbarGroups: [{
                name: "clipboard",
                groups: ["clipboard"]
            }, {
                name: "undo",
                groups: ["undo"]
            }, {
                name: "basicstyles",
                groups: ["basicstyles", "cleanup"]
            }, {
                name: "editing",
                groups: ["find", "selection", "spellchecker", "editing"]
            }, {
                name: "insert",
                groups: ["insert"]
            }, {
                name: "links",
                groups: ["links"]
            }, {
                name: "forms",
                groups: ["forms"]
            }, {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
            }, {
                name: "styles",
                groups: ["styles"]
            }, {
                name: "colors",
                groups: ["colors"]
            }, {
                name: "tools",
                groups: ["tools"]
            }, {
                name: "document",
                groups: ["mode", "document", "doctools"]
            }, {
                name: "others",
                groups: ["others"]
            }, {
                name: "about",
                groups: ["about"]
            }, {
                name: "questions",
                groups: ["questions"]
            }],
            removeButtons: "Save,NewPage,Preview,Templates,Form,Checkbox,Radio,Textarea,TextField,Select,Button,HiddenField,Anchor,Flash,Smiley,Iframe,Image,ShowBlocks,CreateDiv,Styles,About",
            height: "200px",
            extraPlugins: "pastebase64,imageresize,divarea,table_template_matrix"
        },
        SCROLL_BAR_CONFIG: {
            autoHideScrollbar: !0,
            axis: "y",
            theme: "minimal-dark",
            advanced: {
                updateOnContentResize: !0
            },
            alwaysShowScrollbar: 1,
            scrollInertia: 60,
            mouseWheel: {
                scrollAmount: 30
            }
        }
    }).constant("STORAGE_KEYS", {
        REMEMBER_SELECT_CURRICULUM: "rememberSelectCurriculum",
        RESOURCE_SUBJECT_ID: "resourceSubjectId",
        RESOURCE_CHAPTER_ID_PREFIX: "resourceChapterId",
        RESOURCE_CHAPTER_NAME_PREFIX: "resourceChapterName",
        RESOURCE_TOPIC_ID_PREFIX: "resourceTopicId",
        REMEMBER_SELECT_ASSIGNMENTS: "rememberSelectAssignments",
        ASSIGNMENT_SUBJECT_ID: "ASSIGNMENT_SUBJECT_ID",
        ASSIGNMENT_CHAPTER_ID_PREFIX: "ASSIGNMENT_CHAPTER_ID",
        REMEMBER_SELECT_ACTIVITIES: "rememberSelectActivities",
        ACTIVITY_SUBJECT_ID: "ACTIVITY_SUBJECT_ID",
        ACTIVITY_CHAPTER_ID_PREFIX: "ACTIVITY_CHAPTER_ID",
        ACTIVITY_SELECTED_ID: "ACTIVITY_SELECTED_ID",
        ACTIVITY_SELECTED_ID_PREFIX: "ACTIVITY_SELECTED_ID",
        REMEMBER_SELECT_ASSESSMENTS: "rememberSelectAssessments",
        ASSESSMENT_SUBJECT_ID: "ASSESSMENT_SUBJECT_ID",
        VIEW_ASSIGNMENTS_TAB: "VIEW_ASSIGNMENTS_TAB",
        VIEW_ASSESSMENTS_TAB: "VIEW_ASSESSMENTS_TAB",
        VIEW_LESSON_PLAN_DETAIL_TAB_ID: "VIEW_LESSON_PLAN_DETAIL_TAB_ID",
        LOCAL_FRIEND_GROUPS: "LocalFriendGroups",
        GRADE_BOOK_IDS: "GRADE_BOOK_IDS",
        CURRICULUM_LANGUAGE: "curriculumLanguage",
        CURRICULUM_LANGUAGE_OLD: "CURRICULUM_LANGUAGE",
        QUESTION_VIEW_CURRICULUM_ID: "questionViewCurriculumId",
        QUESTION_VIEW_GRADE_ID: "questionViewGradeId",
        ASSESSMENT_LIST_CURRICULUM_ID: "assessmentListCurriculumId",
        ASSESSMENT_LIST_GRADE_ID: "assessmentListGradeId",
        ASSESSMENT_LIST_ASSESSMENT_TYPE: "assessmentListAssessmentType",
        ASSESSMENT_LIST_ASSESSMENT_TEST_TYPE: "assessmentListAssessmentTestType",
        ASSESSMENT_LIST_ASSESSMENT_STATUS: "assessmentListAssessmentStatus",
        ASSESSMENT_LIST_ASSESSMENT_OWNER: "assessmentListAssessmentOwner",
        REPORT_MENU_SUBJECT_ID: "reportMenuSubjectId",
        REPORT_MENU_TASK_TYPE: "reportMenuTaskType",
        REPORT_MENU_COMPARE_SCOPE: "reportMenuCompareScope",
        MOBILE_VIDEO_AUTOPLAY_NEXT: "mobileAutoplayNext",
        V2_SELECTED_GRADE: "erudex.v2.grade",
        V2_SELECTED_COURSE: "erudex.v2.course",
        V2_STUDENT_SELECTED_ASSESSMENT_TYPE: "erudex.v2.s.assessmentType",
        V2_TEACHER_SELECTED_ASSESSMENT_TYPE: "erudex.v2.t.assessmentType",
        V2_SELECTED_ASSESSMENT_TYPE: "erudex.v2.assessmentType",
        V2_SELECTED_TEST_TYPE: "erudex.v2.testtype",
        V2_SELECTED_TEST_TAB: "erudex.v2.testtab",
        DATA_ENTRY_CURRICULUM_ID: "dataEntryCurriculumId",
        DATA_ENTRY_GRADE_ID: "dataEntryGradeId"
    }).constant("MESSAGE_STRINGS", {
        WSS_TRIGGER_EVENT: "erudex:app:wssTriggerEvent",
        LOADING_EVENT: "erudex:app:viewLoadStatus",
        LOADING_FINISHED: "LOADING_FINISHED",
        LOADING_ERROR: "LOADING_ERROR",
        LOADING_SHOW: "LOADING_SHOW",
        USER_RETRIEVED_EVENT: "erudex:app:userRetrieved",
        ORGANIZATION_RETRIEVED_EVENT: "erudex:app:organizationRetrieved",
        INSTITUTION_CHANGED_EVENT: "erudex:app:institutionChanged",
        IDLE_START_EVENT: "erudex:app:idleStart",
        IDLE_STOP_EVENT: "erudex:app:idleStop",
        TIME_SKIP_EVENT: "erudex:app:timeSkip",
        PAUSE_EVENT: "erudex:app:pause",
        RESUME_EVENT: "erudex:app:resume",
        SOFT_KEYBOARD_SHOW_EVENT: "erudex:app:softKeyboardShow",
        SOFT_KEYBOARD_HIDE_EVENT: "erudex:app:softKeyboardHide",
        ONLINE_STATUS_CHANGED_EVENT: "erudex:app:onlineStatusChanged",
        SHOW_ACTIVITY: "erudex:app:showActivity",
        RESIZE_WINDOW_EVENT: "erudex:app:resizeWindow",
        START_SHARE: "erudex:app:startShare",
        RECEIVED_SHARED_NOTE: "erudex:app:receivedSharedNote",
        SHARE_TYPE: {
            SHARE_NOTE: "SHARE_NOTE",
            SHARE_CONTENT: "SHARE_CONTENT"
        },
        NOTIFICATION_TYPE: {
            SHARE_NOTE: "ERUDEX_SHARE_NOTE",
            SHARE_CONTENT: "ERUDEX_SHARE_CONTENT",
            RECOMMEND_RESOURCE: "ERUDEX_RECOMMEND_RESOURCE",
            BROADCAST: "ERUDEX_BROADCAST",
            MUC_INVITE: "ERUDEX_MUC_INVITE",
            NO_LINK: "ERUDEX_NO_LINK",
            ASSIGNMENT: "ERUDEX_ASSIGNMENT",
            ASSESSMENT: "ERUDEX_ASSESSMENT",
            ACTIVITY: "ERUDEX_ACTIVITY"
        },
        ERUDEX_SHARE_BASE: "ErudexShare",
        ERUDEX_SHARE_CONTENT: "ErudexShareContent",
        ERUDEX_SHARE_NOTE: "ErudexShareNote",
        ERUDEX_SHARE_TAG: "erudexshare",
        ERUDEX_BROADCAST: "ErudexBroadcast",
        ERUDEX_BROADCAST_TAG: "erudexbroadcast",
        ERUDEX_NOTIFICATION_TAG: "erudexnotification",
        LINK_ASSIGNMENT: "assignment",
        LINK_ASSESSMENT: "assessment",
        LINK_ASSESSMENT_REGULAR: "regular",
        LINK_ASSESSMENT_COMPETITIVE_PRACTICE: "competitivepractice",
        LINK_ASSESSMENT_COMPETITIVE_MOCK_TEST: "competitivemock",
        LINK_ACTIVITY: "activity",
        REQUEST_JOIN_MUC: "REQUEST_JOIN_MUC",
        CHAT_ROSTER_RETRIEVED: "erudex:app:rosterRetrieved",
        CHAT_ROSTER_UPDATED: "erudex:app:rosterUpdated",
        CHAT_CHANGE_STATE: "erudex:app:changeChatState",
        CHAT_STATE: {
            ENABLE: "enable",
            DISABLE: "disable"
        },
        ACTIVITY_TYPE_ASSIGNMENT: "ASSIGNMENT",
        ACTIVITY_TYPE_ASSIGNMENT_REVIEW: "ASSIGNMENT_REVIEW",
        ACTIVITY_TYPE_ASSESSMENT: "ASSESSMENT",
        ACTIVITY_TYPE_ASSESSMENT_REVIEW: "ASSESSMENT_REVIEW",
        ACTIVITY_TYPE_ASSESSMENT_SELF: "ASSESSMENT_SELF",
        ACTIVITY_TYPE_ASSESSMENT_SELF_REVIEW: "ASSESSMENT_SELF_REVIEW",
        ACTIVITY_TYPE_ASSESSMENT_SELF_OFFLINE: "ASSESSMENT_SELF_OFFLINE",
        ACTIVITY_TYPE_ASSESSMENT_SELF_OFFLINE_REVIEW: "ASSESSMENT_SELF_OFFLINE_REVIEW",
        ACTIVITY_TYPE_ASSESSMENT_PRACTICE: "ASSESSMENT_PRACTICE",
        ACTIVITY_TYPE_ASSESSMENT_PRACTICE_REVIEW: "ASSESSMENT_PRACTICE_REVIEW",
        ACTIVITY_TYPE_CONTENT_REVIEW: "CONTENT_REVIEW",
        ACTIVITY_TYPE_CONTENT_QUIZ: "CONTENT_QUIZ",
        ACTIVITY_TYPE_CONTENT_QUIZ_REVIEW: "CONTENT_QUIZ_REVIEW",
        ACTIVITY_TYPE_USER_FEEDBACK: "USER_FEEDBACK",
        ACTIVITY_TYPE_LIVE_CLASS: "LIVE_CLASS",
        SYSTEM_EVENT: {
            PAUSE: "SYSTEM_PAUSE",
            RESUME: "SYSTEM_RESUME"
        },
        ASSESSMENT_EVENT: {
            SUBMIT: "ASSESSMENT_SUBMITTED",
            SELECT_MCQ_OPTION: "ASSESSMENT_SELECT_MCQ_OPTION",
            DESELECT_MCQ_OPTION: "ASSESSMENT_DESELECT_MCQ_OPTION",
            CHANGE_INTEGER_ANSWER: "CHANGE_INTEGER_ANSWER",
            CHANGE_NUMERIC_ANSWER: "CHANGE_NUMERIC_ANSWER",
            VIEW_SUMMARY: "ASSESSMENT_VIEW_SUMMARY",
            VIEW_QUESTION: "ASSESSMENT_VIEW_QUESTION",
            VIEW_HINT: "ASSESSMENT_VIEW_HINT",
            VIEW_SOLUTION: "ASSESSMENT_VIEW_SOLUTION"
        },
        CONTENT_EVENT: {
            CONTENT_LOADED: "CONTENT_LOADED",
            VIDEO_PLAY: "VIDEO_PLAY",
            VIDEO_PAUSE: "VIDEO_PAUSE",
            VIDEO_STOP: "VIDEO_STOP",
            VIDEO_END: "VIDEO_END"
        },
        CONTENT_LOADED: "erudex:contentLoaded",
        ERROR_ACTIVITY_END_BEFORE_START: "activityEndBeforeStart",
        ERROR_ACTIVITY_SESSION_OVER_HOUR: "activitySessionOverHour",
        DATA_ENTRY: {
            CURRICULUM_LOADED: "erudex:app:dataentry:curriculumLoaded"
        }
    }).constant("LANGUAGE", {
        ENGLISH: 1,
        TELUGU: 2,
        HINDI: 3
    }).constant("STATUS", {
        NEW: "NEW",
        PUSHED: "PUSHED",
        INPROGRESS: "INPROGRESS",
        COMPLETED: "COMPLETED",
        SUBMITTED: "SUBMITTED",
        GRADED: "GRADED",
        EXPIRED: "EXPIRED",
        CANCELED: "CANCELED"
    }).constant("STATUS_ID", {
        NEW: 1,
        INPROGRESS: 2,
        COMPLETED: 3,
        SUBMITTED: 4,
        PUSHED: 5,
        GRADED: 6,
        EXPIRED: 9,
        CANCELED: 10
    }).constant("ASSIGNMENT_TYPE", {
        ASSIGNMENT: "Assignment",
        ACTIVITY: "Activity",
        GRADEBOOK: "gradebook"
    }).constant("ASSESSMENT_TYPE", {
        REGULAR: "regular",
        REGULAR_OFFLINE: "regularOffline",
        PRACTICE: "practice",
        GRADEBOOK: "gradebook",
        SELF: "self",
        SELF_OFFLINE: "selfOffline",
        CONTENT_QUIZ: "contentQuiz",
        COMPETITIVE_PRACTICE: "competitivePractice",
        COMPETITIVE_MOCK_TEST: "competitiveMock",
        CHAPTER_TEST_TYPE: "chapter",
        STATUS: [{
            name: "Pending",
            value: "Pending"
        }, {
            name: "Approved",
            value: "Approved"
        }],
        MOCK_TEST_STATUS: [{
            name: "Available",
            value: "available",
            olUser: !0
        }, {
            name: "Completed",
            value: "completed",
            olUser: !0
        }, {
            name: "Expired",
            value: "expired",
            olUser: !1
        }],
        DATA_ENTRY_OPTIONS: [{
            name: "Regular",
            value: "regular",
            competitive: !1
        }, {
            name: "Quiz (Content)",
            value: "contentQuiz",
            competitive: !1
        }, {
            name: "Competitive Practice",
            value: "competitivePractice",
            competitive: !0
        }, {
            name: "Competitive Mock Test",
            value: "competitiveMock",
            competitive: !0
        }],
        DATA_ENTRY_TEST_TRACK_OPTIONS: [{
            name: "MPC",
            value: "jee"
        }, {
            name: "BiPC",
            value: "neet"
        }, {
            name: "MBiPC",
            value: "jneet"
        }],
        DATA_ENTRY_TEST_TYPE_OPTIONS: [{
            name: "Part Test",
            value: "part",
            competitive: !0,
            olUser: !0,
            curriculum: "all"
        }, {
            name: "Full Test",
            value: "full",
            competitive: !0,
            olUser: !0,
            curriculum: "all"
        }, {
            name: "Grand Test",
            value: "grand",
            competitive: !0,
            olUser: !1,
            curriculum: "all"
        }, {
            name: "Advanced Test",
            value: "adv",
            competitive: !0,
            olUser: !1,
            curriculum: "JEE-Mains"
        }, {
            name: "Subject Test",
            value: "subject",
            competitive: !1,
            olUser: !1,
            curriculum: "all"
        }],
        NEGATIVE_MARKING_OPTIONS: [{
            name: "0",
            value: 0,
            display: !0
        }, {
            name: "1/4",
            value: .25,
            display: !1
        }, {
            name: "1/2",
            value: .5,
            display: !1
        }, {
            name: "3/4",
            value: .75,
            display: !1
        }, {
            name: "1",
            value: 1,
            display: !0
        }],
        ADV_MARKING_OPTIONS: [{
            name: "1",
            value: 1,
            display: !0,
            partial: !1
        }, {
            name: "2",
            value: 2,
            display: !0,
            partial: !1
        }, {
            name: "3",
            value: 3,
            display: !0,
            partial: !1
        }, {
            name: "4",
            value: 4,
            display: !0,
            partial: !0
        }, {
            name: "5",
            value: 5,
            display: !0,
            partial: !1
        }, {
            name: "6",
            value: 6,
            display: !0,
            partial: !1
        }, {
            name: "7",
            value: 7,
            display: !0,
            partial: !1
        }, {
            name: "8",
            value: 8,
            display: !0,
            partial: !0
        }],
        ADV_NEGATIVE_MARKING_OPTIONS: [{
            name: "0",
            value: 0,
            display: !0
        }, {
            name: "1",
            value: 1,
            display: !0
        }, {
            name: "2",
            value: 2,
            display: !0
        }],
        SUBJECT_ADV_EQUAL_MARKING_OPTIONS: [{
            name: "Yes",
            value: !0,
            display: !0
        }, {
            name: "No",
            value: !1,
            display: !0
        }],
        DISPLAY_NAMES: {
            contentQuiz: "Quiz (Content)",
            regular: "Regular",
            regularOffline: "Regular (Offline)",
            gradebook: "GradeBook",
            self: "Self",
            selfOffline: "Self (Offline)",
            practice: "Practice",
            chapter: "Chapter Test",
            part: "Part Test",
            full: "Full Test",
            grand: "Grand Test",
            adv: "Advanced Test"
        }
    }).constant("ASSESSMENT_CONSTANT", {
        QUIZ_MAX_ATTEMPTS: 2,
        QUIZ_HINT_ATTEMPTS: 1,
        QUIZ_SOLUTION_ATTEMPTS: 2
    }).constant("SUBJECT_LEVEL", {
        GRADE: "GRADE",
        SUBJECT: "SUBJECT",
        CHAPTER: "CHAPTER",
        TOPIC: "TOPIC",
        SUBTOPIC: "SUBTOPIC"
    }).constant("OWNER", {
        ERUDEX: "ERUDEX",
        ORGANIZATION: "ORGANIZATION",
        INSTITUTION: "INSTITUTION",
        USER: "USER"
    }).constant("UPLOAD_TYPE", {
        STUDENT_ASSIGNMENT: "studentAssignment",
        TEACHER_ASSIGNMENT: "teacherAssignment",
        ASSESSMENT_OMR: "assessmentOmr"
    }).constant("USER_FILE_TYPE", {
        USER_ASSIGNMENT_ATTACHMENT: "userAssignmentAttachment",
        TEACHER_ASSIGNMENT_ATTACHMENT: "teacherAssignmentAttachment"
    }).constant("ATTACHMENT_TYPE", {
        RESOURCE: "resource",
        RESOURCE_QUIZ: "resourceQuiz",
        ASSESSMENT_PRACTICE: "assessmentPractice",
        EXTERNAL_LINK: "externalLink",
        ASSIGNMENT: "assignment",
        ASSESSMENT: "assessment",
        FILE: "file"
    }).constant("CONTENT_DISPLAY_CATEGORY", {
        VIDEO: "video",
        ANIMATION: "animation",
        DOCUMENT: "document",
        PRESENTATION: "presentation",
        IMAGE: "image",
        AUDIO: "audio",
        QUIZ: "quiz",
        TEACHER: "teacher",
        RECORDING: "recording",
        VLAB: "vlab",
        AR: "ar",
        ZOOM: "zoom",
        OTHER: "other",
        NONE: null,
        OPTIONS: [{
            value: null,
            name: "None (Use resource type)"
        }, {
            value: "video",
            name: "Video"
        }, {
            value: "animation",
            name: "Animation"
        }, {
            value: "document",
            name: "Document"
        }, {
            value: "presentation",
            name: "Presentation"
        }, {
            value: "image",
            name: "Image"
        }, {
            value: "audio",
            name: "Audio"
        }, {
            value: "quiz",
            name: "Quiz"
        }, {
            value: "other",
            name: "Other"
        }]
    }).constant("USER_ACTIVITY_THRESHOLD", {
        video: 3e3,
        pdf: 1e4,
        html: 1e4,
        chapterJson: 1e4,
        audio: 5e3,
        image: 5e3,
        swf: 5e3,
        unknown: 1e4
    }).constant("SESSION_ACTIVITY_TYPE", {
        LOGIN: "LOGIN",
        LOGIN_OFFLINE: "LOGIN_OFFLINE",
        PAUSE: "PAUSE",
        RESUME: "RESUME",
        LOGOUT: "LOGOUT",
        LOGOUT_OFFLINE: "LOGOUT_OFFLINE",
        IDLE_START: "IDLE_START",
        IDLE_STOP: "IDLE_STOP",
        SESSION_ERROR: "SESSION_ERROR"
    }).constant("PAGE_ACTIVITY_TYPE", {
        PAGE_ENTER: "PAGE_ENTER",
        PAGE_LEAVE: "PAGE_LEAVE"
    }).constant("CURRICULUM_LANGUAGE_KEY", {
        PRIMARY: "primary",
        ALTERNATE: "alternate"
    }).constant("REPORT", {
        KEY: {
            MENU_ARGS: "report:menuArgs",
            SUBJECT_OPTIONS: "report:subjectOptions",
            REPORT_OPTIONS: "report:reportOptions",
            PREV_PAGE: "report:prevPage",
            GRADE: "report:grade",
            SUBJECT: "report:subject",
            SECTION: "report:section",
            TASK_TYPE: "report:taskType"
        },
        FIELD: {
            SUBJECT: "subjectId",
            TASK_TYPE: "taskType",
            COMPARE_SCOPE: "compareScope"
        },
        VIEW_TYPE: {
            PERFORMANCE: {
                name: "Performance Reports",
                value: "performance",
                isIframe: !1
            },
            USAGE: {
                name: "Usage Reports",
                value: "usage",
                isIframe: !1
            },
            COMPARATIVE: {
                name: "Comparative Reports",
                value: "comparative",
                isIframe: !1
            },
            AGGREGATE: {
                name: "Aggregate Reports",
                value: "aggregate",
                isIframe: !1
            },
            TEST: {
                name: "Test Reports",
                value: "test",
                isIframe: !0
            }
        },
        FILTER: {
            INSTITUTION: "institutionId",
            CURRICULUM: "curriculumId",
            GRADE: "gradeId",
            SUBJECT: "subjectId",
            CHAPTER: "chapterId",
            TOPIC: "topicId",
            SECTION: "sectionId",
            DATE_RANGE: "dateRange",
            COMPARE_SCOPE: "compareScope"
        },
        CLICK: {
            REQUEST: "request",
            DIALOG: "dialog"
        },
        DIALOG: {
            TABLE: "table",
            ASSESSMENT: "assessment",
            COMPARATIVE: "comparative"
        },
        OPTIONS: {
            TASK_TYPE: [{
                name: "Assignment",
                mauritiusName: "E-Assessment (Subjective)",
                value: "assignment"
            }, {
                name: "Assessment",
                mauritiusName: "E-Assessment (Objective)",
                value: "assessment"
            }, {
                name: "Activity",
                value: "activity"
            }],
            TASK_TYPE_USAGE: [{
                name: "Assignment",
                mauritiusName: "E-Assessment (Subjective)",
                value: "assignment"
            }, {
                name: "Assessment",
                mauritiusName: "E-Assessment (Objective)",
                value: "assessment"
            }, {
                name: "Activity",
                value: "activity"
            }, {
                name: "Content",
                value: "content"
            }, {
                name: "Collaboration",
                value: "collaboration"
            }],
            COMPARE_SCOPE: [{
                name: "Section",
                value: "section"
            }, {
                name: "Grade",
                value: "grade"
            }]
        }
    }).constant("MODULE", {
        CONTENT: {
            key: "content",
            dependencies: []
        },
        ASSIGNMENT: {
            key: "assignment",
            dependencies: []
        },
        ACTIVITY: {
            key: "activity",
            dependencies: ["content", "assignment"]
        },
        ASSESSMENT: {
            key: "assessment",
            dependencies: []
        },
        REPORT: {
            key: "report",
            dependencies: []
        },
        TIMELINE: {
            key: "timeline",
            dependencies: []
        }
    }).constant("APP_PREFS", {
        ROLE: {
            STUDENT: 4,
            TEACHER: 3,
            GUARDIAN: 5
        },
        PREF_LEVEL: {
            USER: 6,
            STUDENT: 5,
            TEACHER: 4,
            INSTITUTION: 3,
            ORGANIZATION: 2,
            ERUDEX: 1
        },
        PRINT_ERUDEX_LOGO: {
            key: "print.erudexLogo",
            name: "Print Erudex logo on assessment, lesson plan prints?",
            description: "Print Erudex logo on assessment, lesson plan prints?",
            default: !0,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        ALLOW_DATA_ENTRY_REGULAR_ASSESSMENTS: {
            key: "de.regularAssessments",
            name: "Enable DataEntry Regular Assessments",
            description: "Enable DataEntry Regular Assessments",
            default: !1,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        ENFORCE_APP_CURRENT_VERSION: {
            key: "app.versionEnforce",
            name: "APK must be current?",
            description: "APK must be current?",
            default: !1,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        EXPIRE_MOCK_TEST: {
            key: "expire.mockTest",
            name: "Expire Mock Test",
            description: "Enabled/Disable Mock Test Expiration.",
            default: !0,
            level: 2,
            type: "booleanOrgAndInst",
            disabled: {
                byBuild: !1
            }
        },
        EXPIRE_MOCK_TEST_AFTER: {
            key: "expire.mockTestAfter",
            name: "Expire Mock Test After (Mins)",
            description: "Expire Mock Test After (Mins).",
            default: 1,
            level: 2,
            type: "selectOrgAndInst",
            options: [{
                value: 5,
                name: "5 Mins"
            }, {
                value: 15,
                name: "15 Mins"
            }, {
                value: 30,
                name: "30 Mins"
            }, {
                value: -1,
                name: "Duration of Test"
            }],
            disabled: {
                byBuild: !1
            }
        },
        SHUFFLE_MCQ_OPTIONS: {
            key: "mock.shuffleOptions",
            name: "Shuffle MCQ options in Mock Test?",
            description: "Shuffle MCQ options in Mock Test?",
            default: !0,
            level: 2,
            type: "booleanOrgAndInst",
            disabled: {
                byBuild: !1
            }
        },
        RESTRICT_TO_SINGLE_MOCK_TEST: {
            key: "restrict.singleMockTest",
            name: "Restrict Students to Single Mock Test at a time?",
            description: "Restrict Students to Single Mock Test at a time?",
            default: !0,
            level: 2,
            type: "booleanOrgAndInst",
            disabled: {
                byBuild: !1
            }
        },
        SHUTDOWN_CHAT_SERVICE: {
            key: "chat.shutdown",
            name: "Shutdown Chat Service",
            description: "Shutdown Chat Service",
            default: !1,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        SUBDOMAIN: {
            key: "subdomain",
            name: "Enter Subdomain Name",
            description: "",
            default: "",
            level: 2,
            type: "text",
            disabled: {
                byBuild: !1
            }
        },
        ORGANIZATION_BW_LOGO: {
            key: "organization.bwlogo",
            name: "Organization Logo (B/W to display on test printout)\nSize: 375(width)x75(height)\nFormat: png\nInstrutions: Convert to base64 and paste into text box on the right.)",
            description: "Organization Logo (B/W to display on test printout)",
            default: "",
            level: 2,
            type: "textarea",
            disabled: {
                byBuild: !1
            }
        },
        ORGANIZATION_PRINT_WATERMARK: {
            key: "organization.watermark",
            name: "Organization Watermark (B/W to display on test printout)\nSize: 2480(width)x2945(height)\nFormat: png\nInstrutions: Convert to base64 and paste into text box on the right.)",
            description: "Organization Watermark (B/W to display on test printout)",
            default: "",
            level: 2,
            type: "textarea",
            disabled: {
                byBuild: !1
            }
        },
        ENABLE_VIRTUAL_KEYBOARD: {
            key: "virtual.keyBoard",
            name: "Enable Virtual Keyboard for Mock Tests",
            description: "Enabled/Disable Virtual Keyboard for Mock Tests.",
            default: !1,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        ALLOW_MOCK_TEST_TIME_CHANGE: {
            key: "assessment.timeChange",
            name: "Allow Mock Test Time Change Until",
            description: "Allow Mock Test Time Change Until",
            default: 20,
            level: 2,
            type: "select",
            options: [{
                value: 10,
                name: "10 mins"
            }, {
                value: 20,
                name: "20 mins"
            }, {
                value: 30,
                name: "30 mins"
            }, {
                value: 40,
                name: "40 mins"
            }, {
                value: 50,
                name: "50 mins"
            }],
            disabled: {
                byBuild: !1
            }
        },
        ASSESSMENT_KEY_RELEASE: {
            key: "assessment.keyRelease",
            name: "Release Mock Test Key",
            description: "Release Key after Mock Test completed.",
            default: 1,
            level: 2,
            type: "selectOrgAndInst",
            options: [{
                value: 0,
                name: "0 Hr"
            }, {
                value: 1,
                name: "1 Hr"
            }, {
                value: 2,
                name: "2 Hrs"
            }, {
                value: 3,
                name: "3 Hrs"
            }, {
                value: 4,
                name: "4 Hrs"
            }, {
                value: 5,
                name: "5 Hrs"
            }, {
                value: 24,
                name: "24 Hrs"
            }],
            disabled: {
                byBuild: !1
            }
        },
        CURRICULUM_VIEW: {
            key: "ui.curriculumView",
            name: "Curriculum View Style",
            description: "Set curriculum view style for students.",
            default: "erudex",
            level: 3,
            type: "select",
            options: [{
                value: "erudex",
                name: "Erudex (default)"
            }, {
                value: "gayatri",
                name: "Meluha"
            }],
            disabled: {
                byBuild: !1
            }
        },
        CONTENT_VIEW: {
            key: "ui.contentView",
            name: "Content View Style",
            description: "Set content view style for students.",
            default: "erudex",
            level: 3,
            type: "select",
            options: [{
                value: "erudex",
                name: "Erudex (default)"
            }, {
                value: "gayatri",
                name: "Meluha"
            }],
            disabled: {
                byBuild: !1
            }
        },
        CURRICULUM_ALT_LANGUAGE: {
            key: "ui.curriculumAltLanguage",
            name: "Curriculum Alternate Language",
            description: "Enabled/Disable language selection in curriculum view.",
            default: !1,
            level: 3,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        CURRICULUM_PRIMARY_LANGUAGE_NAME: {
            key: "ui.curriculumPrimaryLanguageName",
            name: "Curriculum Primary Language Name",
            description: "Name of primary curriculum language.",
            default: "English",
            level: 3,
            type: "select",
            options: [{
                value: "English",
                name: "English (default)"
            }],
            disabled: {
                byBuild: !1
            }
        },
        CURRICULUM_ALT_LANGUAGE_NAME: {
            key: "ui.curriculumAltLanguageName",
            name: "Curriculum Alternate Language Name",
            description: "Name of alternate curriculum language.",
            default: "",
            level: 3,
            type: "select",
            options: [{
                value: "",
                name: "None (default)"
            }, {
                value: "తెలుగు",
                name: "తెలుగు (Telugu)"
            }, {
                value: "हिंदी",
                name: "हिंदी (Hindi)"
            }],
            disabled: {
                byBuild: !1
            }
        },
        CONTENT_VIEW_AUGMENTED: {
            key: "content.augmentation",
            name: "Content Augmentation",
            description: "Enabled/Disable content augmentation.",
            default: !1,
            level: 3,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        CONTENT_VIEW_NEXT_TIMER: {
            key: "content.nextTimer",
            name: "Content Next Timer",
            description: "Enabled/Disable content next timer at end of videos.",
            default: !1,
            level: 3,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        CONTENT_VIEW_NEXT_TIMER_LENGTH: {
            key: "content.nextTimerLength",
            name: "Content Next Timer Length",
            description: "Length of timer at end of video before automatically loading next resource.",
            default: 10,
            level: 3,
            type: "select",
            options: [{
                value: 25,
                name: "25 sec"
            }, {
                value: 20,
                name: "20 sec"
            }, {
                value: 15,
                name: "15 sec"
            }, {
                value: 10,
                name: "10 sec"
            }, {
                value: 5,
                name: "5 sec"
            }],
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_ENABLED: {
            key: "liveclasses",
            name: "Live Classes Enabled?",
            description: "",
            default: !1,
            level: 2,
            type: "boolean",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_PROVIDER: {
            key: "liveclasses.provider",
            name: "Live Classess Provider",
            description: "",
            default: "zoom",
            level: 3,
            type: "liveClassesOrgInstUser",
            subtype: "select",
            options: [{
                value: "meet",
                name: "Google Meet"
            }, {
                value: "microsoft",
                name: "Microsoft Teams"
            }, {
                value: "zoom",
                name: "Zoom"
            }],
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_PROVIDER_API_KEY: {
            key: "liveclasses.providerApiKey",
            name: "Live Classess Provider - API Key",
            description: "",
            default: "",
            level: 3,
            type: "liveClassesOrgInstUser",
            subtype: "text",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_PROVIDER_API_SECRET: {
            key: "liveclasses.providerApiSecret",
            name: "Live Classess Provider - API Secret",
            description: "",
            default: "",
            level: 3,
            type: "liveClassesOrgInstUser",
            subtype: "text",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_PROVIDER_API_TENANT_ID: {
            key: "liveclasses.providerApiTenantId",
            name: "Live Classess Provider - API Tenant Id (Microsoft Teams only)",
            description: "",
            default: "",
            level: 3,
            type: "liveClassesOrgInstUser",
            subtype: "text",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_PROVIDER_EMAIL: {
            key: "liveclasses.providerEmail",
            name: "Live Classess Provider - Email \n Zoom optional \n GMeets and Microsoft required",
            description: "",
            default: "",
            level: 3,
            type: "liveClassesOrgInstUser",
            subtype: "text",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_ADD_STREAM_LINK: {
            key: "liveclasses.streamLink",
            name: "Live Classess - Add Live Stream Link?",
            description: "",
            default: !1,
            level: 2,
            type: "booleanOrgAndInst",
            disabled: {
                byBuild: !1
            }
        },
        LIVE_CLASSES_ALLOW_TEACHER_CREATION: {
            key: "liveclasses.allowTeacherCreation",
            name: "Live Classess - Allow Teacher to Create?",
            description: "",
            default: !0,
            level: 2,
            type: "booleanOrgAndInst",
            disabled: {
                byBuild: !1
            }
        },
        MOBILE_LOGOUT_LINK: {
            key: "mobile.logout",
            name: "Logout link for Mobile",
            description: "",
            default: "",
            level: 2,
            type: "text",
            disabled: {
                byBuild: !1
            }
        },
        MODULE_USER_DISABLE: {
            keyPrefix: "module.disable.",
            name: "User Module Disable",
            description: "Disable certain modules for user(s). Specific build may override setting.",
            default: null,
            level: 3,
            type: "booleanMultiPrefix",
            options: [{
                name: "Student Lessons",
                value: "studentCurriculum",
                isInverse: !0
            }, {
                name: "Spelling Bee",
                value: "spellingBee",
                isInverse: !0
            }, {
                name: "Student Lessons - Lectures",
                value: "studentCurriculumLectures",
                isInverse: !0
            }, {
                name: "Student Lessons - ScholAR",
                value: "studentCurriculumScholar",
                isInverse: !0
            }, {
                name: "Student Lessons - Augmented Reality",
                value: "studentCurriculumAr",
                isInverse: !0
            }, {
                name: "Student Lessons - Common Content",
                value: "studentCurriculumCommon",
                isInverse: !0
            }, {
                name: "Teacher Lessons",
                value: "curriculum",
                isInverse: !0
            }, {
                name: "Teacher Lessons - Lectures",
                value: "curriculumLectures",
                isInverse: !0
            }, {
                name: "Teacher Lessons - ScholAR",
                value: "curriculumScholar",
                isInverse: !0
            }, {
                name: "Teacher Lessons - Augmented Reality",
                value: "curriculumAr",
                isInverse: !0
            }, {
                name: "Teacher Lessons - Common Content",
                value: "curriculumCommon",
                isInverse: !0
            }, {
                name: "Assignment",
                value: "assignment",
                isInverse: !0
            }, {
                name: "Tests",
                value: "assessment",
                isInverse: !0
            }, {
                name: "Reports",
                value: "report",
                isInverse: !0
            }, {
                name: "Student Timeline",
                value: "studentTimeline",
                isInverse: !0
            }, {
                name: "Teacher Timeline",
                value: "teacherTimeline",
                isInverse: !0
            }, {
                name: "Upload Content",
                value: "uploadContent",
                isInverse: !0
            }, {
                name: "Settings",
                value: "userSettings",
                isInverse: !0
            }],
            disabled: {
                byBuild: !1
            }
        },
        MODULE_SECTION_DISABLE: {
            keyPrefix: "module.disable.",
            name: "Section Module Disable",
            description: "Disable certain modules for section. Specific build may override setting.",
            default: null,
            level: 3,
            type: "booleanMultiPrefix",
            options: [{
                name: "Curriculum",
                value: "curriculum",
                isInverse: !0
            }],
            disabled: {
                byBuild: !1
            }
        },
        CURRICULUM_MODULE_KEY: "module.disable.curriculum",
        CURRICULUM_DEPENDENT_MODULES: ["module.disable.assignment", "module.disable.activity", "module.disable.assessment", "module.disable.gradebook", "module.disable.goal", "module.disable.report", "module.disable.uploadContent", "module.disable.pushassessment", "module.disable.userSettings", "module.disable.studentTimeline", "module.disable.teacherTimeline"]
    }).constant("ONLINE_CLASSES_USER", {
        SELECTED_GRADE: "erudex.ol.grade",
        SELECTED_COURSE: "erudex.ol.course",
        SELECTED_TEST_TYPE: "erudex.ol.testtype",
        SELECTED_TEST_TAB: "erudex.ol.testtab"
    }).constant("COMPETITIVE_CURRICULUM", {
        SELECTED: "erudex.competitive.curriculumName",
        CURRICULUM: "erudex.competitive.curriculum",
        USER_CURRICULUM: "competitiveCurriculum",
        SELECTED_SUBJECT: "erudex.competitive.curriculum.selectedSubject",
        SELECTED_CHAPTER: "erudex.competitive.curriculum.selectedChapter",
        SELECTED_CONCEPT: "erudex.competitive.curriculum.selectedConcept",
        COMPETITIVE_TYPE: [{
            name: "IIT",
            dbName: "IIT - JEE Mains"
        }, {
            name: "NEET",
            dbName: "Neet"
        }, {
            name: "EAMCET",
            dbName: "EAMCET"
        }],
        IS_PAID_USER: "competitiveModulePaidUser"
    }).constant("TOOLTIP_MSG", {
        IS_FREE: "Disable/Enable practice test for free subscribers.",
        IS_ACTIVE: "Disable/Enable practice test for all",
        IS_NEG_MARKING: "Apply Negative marking for the assessment",
        NEG_MARKING_VAL: "How much negative marking (0, 1)"
    }).constant("INFORMATION_MSG", {
        CORRECT_QUESTIONS: "There are no correct questions.",
        INCORRECT_QUESTIONS: "There are no incorrect questions.",
        NA_QUESTIONS: "There are no not attempted questions.",
        BOOKMARKED_QUESTIONS: "There are no book marked questions."
    })
}(window.angular),
function(n, r, i) {
    "use strict";
    n.module("com.erudex.common.filters", []).filter("nl2br", function() {
        return function(e) {
            return e && e.replace(/\n\r?/g, "<br/>")
        }
    }).filter("counterFormat", function() {
        return function(e) {
            var t, s;
            return e ? (s = "",
            (t = Math.abs(e)) >= Math.pow(10, 12) ? (e /= Math.pow(10, 12),
            s = "t") : t >= Math.pow(10, 9) ? (e /= Math.pow(10, 9),
            s = "b") : t >= Math.pow(10, 6) ? (e /= Math.pow(10, 6),
            s = "m") : t >= Math.pow(10, 3) && (e /= Math.pow(10, 3),
            s = "k"),
            100 <= e ? e = e.toFixed(0) : "" !== s && (e = e.toFixed(1)),
            e + s) : "0"
        }
    }).filter("trustHtml", ["$sce", function(t) {
        return function(e) {
            return t.trustAsHtml(e)
        }
    }
    ]).filter("trustResUrl", ["$sce", function(t) {
        return function(e) {
            return t.trustAsResourceUrl(e)
        }
    }
    ]).filter("moment", function() {
        return function(e, t) {
            var s = parseInt(e)
              , s = isFinite(s) ? i(s) : i(e);
            return e && s.isValid() ? s.format(t) : "N/A"
        }
    }).filter("decToRoman", function() {
        return function(e) {
            return "I".repeat(e).replace(/I{5}/g, "V").replace(/V{2}/g, "X").replace(/X{5}/g, "L").replace(/L{2}/g, "C").replace(/C{5}/g, "D").replace(/D{2}/g, "M").replace(/DC{4}/g, "CM").replace(/C{4}/g, "CD").replace(/LX{4}/g, "XC").replace(/X{4}/g, "XL").replace(/VI{4}/g, "IX").replace(/I{4}/g, "IV")
        }
    }).filter("durationMin", function() {
        return function(e) {
            var t, s, r;
            return n.isNumber(e) && isFinite(e) ? (s = i.duration(e = (t = e <= 0) ? -1 * e : e),
            r = "",
            r += Math.floor(s.asMinutes()),
            t ? "0" : r) : e
        }
    }).filter("duration", function() {
        return function(e) {
            var t, s, r;
            return n.isNumber(e) && isFinite(e) ? (r = "",
            1 <= (s = i.duration(e = (t = e < 0) ? -1 * e : e)).asHours() && (r += Math.floor(s.asHours()) + " hrs "),
            1 <= s.asMinutes() && (r += Math.floor(s.asMinutes() % 60) + " m "),
            r += Math.floor(s.asSeconds() % 60) + " s ",
            t ? "-" + r : r) : e
        }
    }).filter("durationMinSecs", function() {
        return function(e) {
            var t, s, r;
            return n.isNumber(e) && isFinite(e) ? (r = "",
            1 <= (s = i.duration(e = (t = e < 0) ? -1 * e : e)).asMinutes() && (r += Math.floor(s.asMinutes()) + "m "),
            r += Math.floor(s.asSeconds() % 60) + "s ",
            t ? "-" + r : r) : e
        }
    }).filter("formatDuration", function() {
        return function(e, t, s) {
            return s = s || {},
            i.duration(e).format(t, s)
        }
    }).filter("time12hr", function() {
        return function(e) {
            var t, s;
            return e = parseInt(e),
            isNaN(e) ? "N/A" : ((e = i.duration(e)).hours() % 12 == 0 ? 12 : e.hours() % 12) + ":" + (t = e.minutes(),
            s = 2,
            new Array(Math.max(s - String(t).length + 1, 0)).join("0") + t) + (12 < e.hours() ? " pm" : " am")
        }
    }).filter("capitalize", function() {
        return function(e) {
            return n.isString(e) ? e.capitalize(!0) : e
        }
    }).filter("capitalizeAll", function() {
        return function(e) {
            return n.isString(e) ? e.replace(/\w\S*/g, function(e) {
                return e.capitalize(!0)
            }) : e
        }
    }).filter("capitalizeConstant", function() {
        return function(e) {
            return n.isString(e) ? e.replace(/_/g, " ").capitalize(!0) : e
        }
    }).filter("questionTypeName", ["APP_CONFIG", function(s) {
        return function(e) {
            var t;
            return n.isString(e) && (t = r.apply(".*{.value == $input}", s.QUESTION_TYPE, {
                input: e
            })[0]) ? t.name : e
        }
    }
    ]).filter("percentage", ["$filter", function(s) {
        return function(e, t) {
            return s("number")(100 * e, t) + "%"
        }
    }
    ]).filter("splitCamelCase", function() {
        return function(e) {
            return n.isString(e) ? e.replace(/([A-Z])/g, " $1") : e
        }
    }).filter("getOrdinal", ["UtilService", function(t) {
        return function(e) {
            return n.isNumber(e) ? t.getOrdinalSuffix(e) : e
        }
    }
    ]).filter("limitTo", function() {
        function r(e, t, s) {
            return n.isString(e),
            e.slice(t, s)
        }
        return function(e, t, s) {
            return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : parseInt(t, 10),
            !isNaN(t) && (n.isNumber(e) && (e = e.toString()),
            n.isArray(e) || n.isString(e)) ? (s = (s = !s || isNaN(s) ? 0 : parseInt(s, 10)) < 0 ? Math.max(0, e.length + s) : s,
            0 <= t ? r(e, s, s + t) : 0 === s ? r(e, t, e.length) : r(e, Math.max(0, s + t), s)) : e
        }
    }).filter("convertToWord", function() {
        return function(e) {
            var t = new Array;
            t[0] = "",
            t[1] = "One",
            t[2] = "Two",
            t[3] = "Three",
            t[4] = "Four",
            t[5] = "Five",
            t[6] = "Six",
            t[7] = "Seven",
            t[8] = "Eight",
            t[9] = "Nine",
            t[10] = "Ten",
            t[11] = "Eleven",
            t[12] = "Twelve",
            t[13] = "Thirteen",
            t[14] = "Fourteen",
            t[15] = "Fifteen",
            t[16] = "Sixteen",
            t[17] = "Seventeen",
            t[18] = "Eighteen",
            t[19] = "Nineteen",
            t[20] = "Twenty",
            t[30] = "Thirty",
            t[40] = "Forty",
            t[50] = "Fifty",
            t[60] = "Sixty",
            t[70] = "Seventy",
            t[80] = "Eighty",
            t[90] = "Ninety";
            var s = (e = e.toString()).split(".")[0].split(",").join("")
              , r = s.length
              , n = "";
            if (r <= 9) {
                for (var i = new Array(0,0,0,0,0,0,0,0,0), o = new Array, a = 0; a < r; a++)
                    o[a] = s.substr(a, 1);
                for (var a = 9 - r, c = 0; a < 9; a++,
                c++)
                    i[a] = o[c];
                for (a = 0,
                c = 1; a < 9; a++,
                c++)
                    0 != a && 2 != a && 4 != a && 7 != a || 1 == i[a] && (i[c] = 10 + parseInt(i[c]),
                    i[a] = 0);
                for (var u = "", a = 0; a < 9; a++)
                    0 != (u = 0 == a || 2 == a || 4 == a || 7 == a ? 10 * i[a] : i[a]) && (n += t[u] + " "),
                    6 == a && 0 != u && 0 != i[a + 1] && 0 != i[a + 2] ? n += "Hundred and " : 6 == a && 0 != u && (n += "Hundred ");
                n = n.split("  ").join(" ")
            }
            return n
        }
    }).filter("removeLeadingZeros", function() {
        return function(e) {
            return e.replace(/^0+/, "")
        }
    })
}(window.angular, window.JSPath, window.moment),
function(z, J, K, X) {
    "use strict";
    z.module("com.erudex.common.services", ["com.erudex.common.constant", "angular-locker", "toastr", "blockUI"]).service("BaseUtilService", ["$log", "locker", "toastr", "$modal", "$state", "blockUI", "$timeout", "$parse", "APP_CONFIG", "MESSAGE_STRINGS", "CONTENT_DISPLAY_CATEGORY", "ATTACHMENT_TYPE", "$q", function(n, a, $, r, i, s, o, c, u, l, T, d, G) {
        function e() {
            return "maybe"
        }
        var m, t = !1, p = null, g = null, S = null, f = null, h = null, v = null, E = null, I = null, A = {}, C = {}, x = Math.pow(2, 53) - 1, j = /^@.+@$/i, y = null, b = {}, V = u.GENERIC_ICONS, N = u.SUBJECT_ICONS, R = (m = [],
        z.forEach(N, function(e, t) {
            m.push(e)
        }),
        m), w = X.createElement("video"), U = X.createElement("audio"), O = new RegExp("x-shockwave-flash"), B = new RegExp("video|webm|mp4"), F = new RegExp("audio|mp3|wav|ogg"), q = new RegExp("image|png|jpg|jpeg|tiff"), M = new RegExp("odp|otp|odg|ppt|html"), Y = new RegExp("pdf|html"), Q = new RegExp("json");
        function P(e, t) {
            var s = 0;
            return e === t ? s = 0 : null === e ? s = 1 : null === t ? s = -1 : 0 === (s = 0 === (s = e.description.localeCompare(t.description)) ? e.number - t.number : s) && (s = e.id - t.id),
            s
        }
        function L(e, t) {
            var s = e.sortOrder - t.sortOrder;
            return s = 0 === (s = !isNaN(s) && 0 !== s ? s : e.name.localeCompare(t.name)) ? e.id - t.id : s
        }
        function H(e, t) {
            var s, r, n, i, o = e.sortOrder - t.sortOrder;
            return !isNaN(o) && 0 !== o || (n = e.number.match(i = /(\d+)([a-z]*)/i),
            i = t.number.match(i),
            s = parseInt(n[1]),
            r = parseInt(i[1]),
            n = n[2],
            i = i[2],
            o = s - r),
            o = 0 === (o = 0 === (o = (isNaN(o) || 0 === o) && n ? n.localeCompare(i) : o) ? e.name.localeCompare(t.name) : o) ? e.id - t.id : o
        }
        function W(e, t) {
            return isNaN(e) ? isNaN(t) ? 0 : 1 : isNaN(t) ? -1 : e - t
        }
        function D(e, t) {
            for (var s, r, n, i, o = t.allVideoResources, a = t.videoResources, c = t.animationResources, u = t.recordedResources, l = (t.vlabResources,
            t.arResources,
            t.allDocumentResources), d = t.documentResources, m = t.presentationResources, p = t.imageResources, g = t.audioResources, S = t.quizResources, f = t.teacherResources, h = t.otherResources, v = 0; v < e.length; v++)
                switch ((s = e[v]).v2SortOrder = t.v2SortOrder++,
                i = s.displayCategory || null,
                r = s.contentResourceType.type,
                n = s.contentResourceType.displayType,
                i) {
                case T.VIDEO:
                    o.push(s),
                    a.push(s);
                    break;
                case T.ANIMATION:
                    c.push(s),
                    o.push(s);
                    break;
                case T.RECORDING:
                    u.push(s),
                    o.push(s);
                    break;
                case T.IMAGE:
                    p.push(s);
                    break;
                case T.AUDIO:
                    g.push(s);
                    break;
                case T.DOCUMENT:
                    l.push(s),
                    d.push(s);
                    break;
                case T.PRESENTATION:
                    m.push(s);
                    break;
                case T.QUIZ:
                    S.push(s);
                    break;
                case T.TEACHER:
                    f.push(s);
                    break;
                case T.OTHER:
                    h.push(s);
                    break;
                default:
                    ("video" === n || "animation" === n || B.test(r) || O.test(r) ? (o.push(s),
                    "animation" === n || O.test(r) ? c : a) : Y.test(r) || M.test(r) ? (l.push(s),
                    M.test(r) ? m : d) : F.test(r) ? g : q.test(r) ? p : Q.test(r) ? S : h).push(s)
                }
        }
        a.set = a.put;
        var k = {
            $log: n,
            $storageService: a,
            $sessionStorage: a.driver("session"),
            $toastr: $,
            debounce: Foundation.utils.debounce,
            throttle: Foundation.utils.throttle,
            match: Foundation.utils.match,
            mediaQueries: Foundation.media_queries,
            canPlayType: function(e, t) {
                var s, r;
                return !w.canPlayType || (s = !1,
                r = "",
                (s = t && "video" !== t ? s : "maybe" == (r = w.canPlayType(e)) || "probably" == r) || t && "audio" !== t ? s : "maybe" == (r = U.canPlayType(e)) || "probably" == r)
            },
            canPlayVideoType: w && w.canPlayType ? w.canPlayType : e,
            canPlayAudioType: U && U.canPlayType ? U.canPlayType : e,
            getMaxSafeInt: function() {
                return x
            },
            safeApply: function(e, t) {
                if (!k.isValidScope(e))
                    return !1;
                e.$evalAsync(t)
            },
            isEmptyOrBlank: function(e) {
                return !e || "" === e || /^\s*$/.test(e)
            },
            isNotEmpty: function(e) {
                return z.isString(e) && "" !== e && !/^\s*$/.test(e)
            },
            formatString: function(e) {
                var s;
                return k.isEmptyOrBlank(e) || arguments.length <= 1 ? e : (s = Array.prototype.slice.call(arguments, 1),
                e.replace(/{(\d+)}/g, function(e, t) {
                    return void 0 !== s[t] ? s[t] : e
                }))
            },
            uniqueByField: function(e, t) {
                var s, r;
                return z.isArray(e) && 0 === e.length ? e : z.isArray(e) && t && !z.isUndefined(e[0][t]) ? (s = {},
                r = [],
                z.forEach(e, function(e) {
                    s[e[t]] || (s[e[t]] = e,
                    r.push(e))
                }),
                r) : (n.error("UniqueByField() : invalid input."),
                e)
            },
            uniqueArray: function(e) {
                if (!z.isArray(e))
                    return e;
                for (var t = [], s = 0; s < e.length; s++)
                    -1 == t.indexOf(e[s]) && t.push(e[s]);
                return t
            },
            getFilterUniqueByFieldFn: function(e) {
                var r, n;
                return k.isEmptyOrBlank(e) || /^\.+$/.test(e.trim()) ? z.noop : (r = c(e),
                n = {},
                function(e, t, s) {
                    return 0 === t && k.deleteObjectProperties(n),
                    !n[r(e)] && (n[r(e)] = e,
                    !0)
                }
                )
            },
            arrayCompare: function(e, t) {
                return 0 === K(e).not(t).length && 0 === K(t).not(e).length
            },
            indexOfObj: function(e, t, s) {
                if (e)
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r][s] === t)
                            return r;
                return -1
            },
            sortByField: function(e, s) {
                return !z.isArray(e) || k.isEmptyOrBlank(s) || (e = e.slice()).sort(function(e, t) {
                    e = e[s],
                    t = t[s];
                    return z.isUndefined(e) || null === e ? -1 : z.isString(e) ? e.localeCompare(t) : z.isNumber(e) && isFinite(e) ? e - t : void 0
                }),
                e
            },
            filteredExtend: function(e, t, s) {
                if (t = z.isObject(t) && !z.isArray(t) ? [t] : t,
                z.isObject(e) && z.isArray(t) && z.isFunction(s))
                    for (var r = 0, n = t.length; r < n; ++r) {
                        var i = t[r];
                        if (z.isObject(i) || z.isFunction(i))
                            for (var o = Object.keys(i), a = 0, c = o.length; a < c; a++) {
                                var u = o[a]
                                  , l = i[u];
                                s(l, u, e) && (e[u] = l)
                            }
                    }
                else
                    k.$log.warn("Invalid parameters for filtered extend.");
                return e
            },
            deleteObjectProperties: function(e) {
                if (z.isObject(e))
                    for (var t in e)
                        e.hasOwnProperty(t) && delete e[t];
                return e
            },
            convertNewLinesToHtml: function(e) {
                for (var t = [], s = e.split(/\n/), r = K(X.createElement("div")), n = 0; n < s.length; n++)
                    t.push(r.text(s[n]).html());
                return t.join("<br>")
            },
            isConfigValueSet: function(e) {
                return !z.isString(e) || k.isNotEmpty(e) && !j.test(e)
            },
            initUserStorage: function(e) {
                var t = window.indexedDB.open("mockTestData", 1)
                  , o = (t.onerror = function(e) {
                    console.log("error in idb setup ")
                }
                ,
                t.onsuccess = function(e) {
                    p = t.result,
                    console.log("success: " + p)
                }
                ,
                t.onupgradeneeded = function(e) {
                    (p = e.target.result).createObjectStore("testData", {
                        keyPath: "idbKey"
                    })
                }
                ,
                k.encodeIds(e));
                a.putUserPref = a.setUserPref = function(e, t, s) {
                    s ? k.addIdb(o + "." + e, t) : a.set(o + "." + e, t)
                }
                ,
                a.getUserPref = function(e, t, s) {
                    var r, n, i;
                    return s ? (s = p.transaction(["testData"], "readwrite").objectStore("testData"),
                    r = o + "." + e,
                    s = s,
                    n = G.defer(),
                    (i = s.get(r)).onerror = function(e) {
                        n.resolve(null)
                    }
                    ,
                    i.onsuccess = function(e) {
                        if (i.result)
                            return n.resolve(i.result),
                            i.result;
                        n.resolve(null)
                    }
                    ,
                    n.promise) : a.get(o + "." + e, t)
                }
                ,
                a.removeUserPref = function(e, t) {
                    t ? k.deleteIdb(o + "." + e) : a.forget(o + "." + e)
                }
            },
            initHashIds: function(e, t) {
                e = e || "kljfjvlsajhdflikjhaskldhrf",
                t = t || 32,
                I = new Hashids(e,t,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")
            },
            encodeIds: function(e) {
                return I ? I.encode(e) : (k.$log.error("Hashids not initialized."),
                "")
            },
            decodeIds: function(e) {
                return I ? I.decode(e) : (k.$log.error("Hashids not initialized."),
                [])
            },
            getAttachmentIconUri: function(e, t) {
                var s, r = "", t = k.isNotEmpty((t = t || {}).iconType) ? t.iconType : "generic";
                return !e || k.isEmptyOrBlank(e.type) ? r = "" : e.type === d.RESOURCE ? (s = 0 <= R.indexOf(e.displayType) ? e.displayType : N.BOOK,
                r = u.ICON_ROOT + t + "/" + s + ".png") : "assessment" === e.displayType || e.type === d.ASSESSMENT_PRACTICE || e.type === d.ASSESSMENT || e.type === d.RESOURCE_QUIZ ? r = u.ICON_ROOT + "generic/assessment.png" : e.type === d.ASSIGNMENT && (r = u.ICON_ROOT + "generic/assignment.png"),
                r
            },
            setUserReady: function() {
                t = !0
            },
            isUserReady: function() {
                return t
            },
            checkUserLoaded: function(s, r) {
                k.isValidScope(s) && (k.isUserReady() ? r(s.user) : s.$on(l.USER_RETRIEVED_EVENT, function(e, t) {
                    r(t.user || s.user)
                }))
            },
            setCurrentUser: function(e) {
                g = e
            },
            getCurrentUser: function() {
                return g
            },
            getCurriculums: function() {
                var s;
                return null === S && (s = [],
                S = [],
                g.userGrades.forEach(function(e) {
                    var t = z.copy(e.grade.curriculum);
                    s.includes(t.id) ? (t = _.find(S, function(e) {
                        return e.id === t.id
                    })).grades.push(e.grade) : (s.push(t.id),
                    t.grades = [e.grade],
                    S.push(t))
                })),
                S
            },
            getUserGrades: function() {
                return g.userGrades
            },
            getRegularUserGrades: function() {
                return J.apply(".{.grade.curriculum.regular === true}", g.userGrades)
            },
            getCompetitveUserGrades: function() {
                return J.apply(".{.grade.curriculum.competitive === true}", g.userGrades)
            },
            setUserSubject: function(s) {
                var r = s.userSectionId
                  , n = s.gradeId;
                g.userGrades.forEach(function(e, t) {
                    e.grade.id === n && e.userSections.forEach(function(e, t) {
                        e.id === r && (e.userSubjects || (e.userSubjects = []),
                        0 === J.apply(".{.id == $id}", e.userSubjects, {
                            id: s.id
                        }).length) && e.userSubjects.push(s)
                    })
                })
            },
            setPreferences: function(e) {
                b = z.isObject(e) ? e : b
            },
            getPreferences: function(e) {
                return b
            },
            setPreference: function(e, t) {
                b[e] = t
            },
            getPreference: function(e, t) {
                return t = z.isUndefined(t) ? null : t,
                e in b ? b[e] : t
            },
            getReportsData: function() {
                return y
            },
            setReportsData: function(e) {
                y = e
            },
            blockUiStart: function(e, t) {
                e ? k.safeApply(e, function() {
                    s.start({
                        message: t
                    })
                }) : s.start({
                    message: t
                })
            },
            blockUiStop: function(e) {
                e ? k.safeApply(e, function() {
                    s.stop()
                }) : s.stop()
            },
            blockUiReset: function() {
                s.reset()
            },
            getCurrentResource: function() {
                return f
            },
            setCurrentResource: function(e) {
                f = e
            },
            getCurrentTopic: function() {
                return h
            },
            setCurrentTopic: function(e) {
                h = e
            },
            getCurrentChapter: function() {
                return v
            },
            setCurrentChapter: function(e) {
                v = e
            },
            setCurrentSubject: function(e) {
                E = e
            },
            getCurrentSubject: function() {
                return E
            },
            getViewChapter: function(e) {
                if (!e)
                    return null;
                var t = e.name + e.id;
                if (A[t])
                    return A[t];
                for (var s, r, n, i, o = {
                    v2SortOrder: 1,
                    name: e.name,
                    id: e.id,
                    altName: e.altName,
                    hasContent: !!e.contentResources.length,
                    hasContentType: {},
                    allChapterResources: e.contentResources,
                    chapterResources: J.apply(".{(.displayCategory !== $teacherCategory && .displayCategory !== $recordingCategory) || !.displayCategory}", e.contentResources, {
                        teacherCategory: T.TEACHER,
                        recordingCategory: T.RECORDING
                    }),
                    allVideoResources: [],
                    videoResources: [],
                    animationResources: [],
                    recordedResources: J.apply(".{.displayCategory === $recordingCategory}", e.contentResources, {
                        recordingCategory: T.RECORDING
                    }),
                    vlabResources: J.apply(".{.displayCategory === $vlabCategory}", e.contentResources, {
                        vlabCategory: T.VLAB
                    }),
                    arResources: J.apply(".{.displayCategory === $arCategory}", e.contentResources, {
                        arCategory: T.AR
                    }),
                    onlineClassesVideoResources: [],
                    onlineClassesDocResources: J.apply('.{.uri $= "pdf" && .displayCategory !== $teacherCategory}', e.contentResources, {
                        teacherCategory: T.TEACHER
                    }),
                    onlineClassesChapterResources: J.apply('.{(.displayCategory !== $teacherCategory && .displayCategory !== $recordingCategory && !(.uri ^= "http") && !(.uri $= "pdf")) || !.displayCategory}', e.contentResources, {
                        teacherCategory: T.TEACHER,
                        recordingCategory: T.RECORDING
                    }),
                    imageResources: [],
                    audioResources: [],
                    allDocumentResources: [],
                    documentResources: [],
                    presentationResources: [],
                    quizResources: [],
                    otherResources: [],
                    teacherResources: J.apply('.{(.displayCategory === $teacherCategory || .uri ^= "http") && (.displayCategory !== $vlabCategory) && (.displayCategory !== $arCategory)}', e.contentResources, {
                        teacherCategory: T.TEACHER,
                        vlabCategory: T.VLAB,
                        arCategory: T.AR
                    })
                }, a = o.hasContent, c = 0; c < e.topics.length; c++)
                    for (n = e.topics[c],
                    a = a || !!n.contentResources.length,
                    D(n.contentResources, o),
                    s = 0; s < n.subtopics.length; s++) {
                        if (i = n.subtopics[s],
                        a = a || !!i.contentResources.length,
                        0 < i.contentResources.length)
                            for (r = 0; r < i.contentResources.length; r++)
                                i.contentResources[r].altName = i.altName;
                        D(i.contentResources, o)
                    }
                var u = {
                    v2SortOrder: o.v2SortOrder,
                    allVideoResources: [],
                    videoResources: [],
                    animationResources: [],
                    recordedResources: [],
                    vlabResources: [],
                    arResources: [],
                    onlineClassesVideoResources: [],
                    onlineClassesDocResources: [],
                    onlineClassesChapterResources: [],
                    imageResources: [],
                    audioResources: [],
                    allDocumentResources: [],
                    documentResources: [],
                    presentationResources: [],
                    quizResources: [],
                    otherResources: [],
                    teacherResources: []
                };
                return D(e.contentResources, u),
                z.forEach(u, function(e, t) {
                    0 <= t.indexOf("Resources") && z.isArray(e) && (o.hasContentType[t.replace("Resources", "")] = !(!o[t].length && !u[t].length))
                }),
                o.teacherResources.sort(function(e, t) {
                    return e.sortOrder - t.sortOrder
                }),
                o.recordedResources.sort(function(e, t) {
                    return e.sortOrder - t.sortOrder
                }),
                o.vlabResources.sort(function(e, t) {
                    return e.sortOrder - t.sortOrder
                }),
                o.arResources.sort(function(e, t) {
                    return e.sortOrder - t.sortOrder
                }),
                0 < o.animationResources.length && (o.onlineClassesVideoResources = o.onlineClassesVideoResources.concat(o.animationResources)),
                0 < o.teacherResources.length && (o.onlineClassesVideoResources = o.onlineClassesVideoResources.concat(o.teacherResources)),
                0 < o.recordedResources.length && (o.onlineClassesVideoResources = o.onlineClassesVideoResources.concat(o.recordedResources)),
                0 < o.documentResources.length && (o.onlineClassesDocResources = o.onlineClassesDocResources.concat(o.documentResources)),
                o.hasContentType.onlineClasses = 0 < o.onlineClassesVideoResources.length || 0 < o.onlineClassesDocResources.length || 0 < o.onlineClassesChapterResources.length,
                o.hasContent = a,
                A[t] = o
            },
            clearViewChapter: function(e) {
                e = e.name + e.id;
                A[e] && (A[e] = null)
            },
            clearViewChapters: function() {
                A = {},
                k.clearViewTopics()
            },
            getViewTopic: function(e) {
                if (!e)
                    return null;
                var t = e.name + e.id;
                if (C[t])
                    return C[t];
                var s = {
                    v2SortOrder: 1,
                    id: e.id,
                    name: e.name,
                    altName: e.altName,
                    allVideoResources: [],
                    videoResources: [],
                    animationResources: [],
                    recordedResources: [],
                    vlabResources: [],
                    arResources: [],
                    onlineClassesVideoResources: [],
                    onlineClassesDocResources: [],
                    onlineClassesChapterResources: [],
                    imageResources: [],
                    audioResources: [],
                    allDocumentResources: [],
                    documentResources: [],
                    presentationResources: [],
                    quizResources: [],
                    otherResources: [],
                    teacherResources: []
                };
                D(e.contentResources, s);
                for (var r = 0; r < e.subtopics.length; r++)
                    D(e.subtopics[r].contentResources, s);
                return 0 < (C[t] = s).otherResources.length && k.$log.warn("getViewTopic(): Unable to categorize " + s.otherResources.length + " resources in topic " + e.name),
                s
            },
            clearViewTopics: function() {
                C = {}
            },
            getContentNames: function(e, t, s) {
                s("Not available")
            },
            isValidScope: function(e) {
                return z.isObject(e) && e.$root
            },
            finishLoadSuccess: function(e, t) {
                k.isValidScope(e) && (t = z.extend({
                    status: l.LOADING_FINISHED,
                    delay: 1e3
                }, t),
                o(function() {
                    e.$emit(l.LOADING_EVENT, t)
                }, t.delay))
            },
            finishLoadError: function(e, t) {
                k.isValidScope(e) && (t = z.extend({
                    status: l.LOADING_ERROR,
                    delay: 1e3
                }, t),
                o(function() {
                    e.$emit(l.LOADING_EVENT, t)
                }, t.delay))
            },
            showLoadScreen: function(e, t) {
                k.isValidScope(e) && (t = z.extend({
                    status: l.LOADING_SHOW,
                    delay: 100
                }, t),
                o(function() {
                    e.$emit(l.LOADING_EVENT, t)
                }, t.delay))
            },
            goToResource: function(e, t, s) {
                e && e.uuid ? (t = t || {},
                s = z.extend({}, s = s || {}),
                e.displayCategory === T.QUIZ ? i.get("resource.quiz") ? (this.setCurrentResource(e),
                s.assessmentUuid = e.uuid,
                i.go("resource.quiz", s, t)) : this.$toastr.error("Unable to view quizzes at this time.") : e.viewer ? i.go(e.viewer, {
                    conceptUuid: e.uuid
                }) : (e.id && e.contentResourceType ? (e.views++,
                this.setCurrentResource(e)) : this.setCurrentResource(null),
                s.contentUUID = e.uuid,
                i.go("resource.viewer", s, t))) : n.error("Invalid resource passed to goToResource")
            },
            getResourceDetailsFromCurriculum: function(e, t, s, r) {
                var n, i, o, t = {
                    uuid: t
                }, a = J.apply(".subject{..contentResources.uuid === $uuid}", e, t), a = (a && 0 < a.length && (e = n = a[0]),
                J.apply("..chapters{..contentResources.uuid === $uuid}", e, t)), a = (a && 0 < a.length && (e = i = a[0]),
                i && (o = J.apply(".topics{..contentResources.uuid === $uuid}", e, t)[0]) && (e = o),
                J.apply("..contentResources{.uuid === $uuid}", e, t));
                a && 0 < a.length ? (e = a[0],
                n && (e.subjectId = n.id,
                e.subjectIconDir = n.iconType),
                s(e, i, n, o)) : r("Failed to find resource.")
            },
            getResourceDisplayIcon: function(e) {
                e.displayCategory;
                e = (e = e.contentResourceType.displayType || N.CHAPTER_RESOURCE) === N.CHAPTER ? N.CHAPTER_RESOURCE : e;
                return e = R.indexOf(e) < 0 ? N.CHAPTER_RESOURCE : e
            },
            getCurriculumShortName: function(e) {
                return e ? e.shortName || e.name : ""
            },
            openPreviewOverlay: function(e, t) {
                r.open({
                    templateUrl: "../student/modal/preview-overlay.html",
                    windowClass: "preview-overlay",
                    controller: "PreviewOverlayController",
                    resolve: {
                        details: function() {
                            return e
                        },
                        user: function() {
                            return t
                        }
                    }
                })
            },
            openPreviewOverlayV2: function(e, t, s) {
                r.open({
                    templateUrl: "../student/modal/preview-overlay.html",
                    windowClass: "preview-overlay",
                    controller: "PreviewOverlayControllerV2",
                    resolve: {
                        details: function() {
                            return e
                        },
                        user: function() {
                            return t
                        },
                        resources: function() {
                            return s
                        }
                    }
                })
            },
            getSubjectIconsObj: function() {
                return z.copy(N)
            },
            getGenericIconsObj: function() {
                return z.copy(V)
            },
            getMapToOptionFn: function(e) {
                var t;
                return k.isEmptyOrBlank(e) || /^\.+$/.test(e.trim()) ? z.noop : (t = c(e),
                function(e) {
                    return {
                        name: t(e),
                        value: e
                    }
                }
                )
            },
            deleteIdb: function(e) {
                p.transaction(["testData"], "readwrite").objectStore("testData").delete(e).onsuccess = function(e) {}
            },
            addIdb: function(e, t) {
                t.idbKey = e;
                e = p.transaction(["testData"], "readwrite").objectStore("testData").put(t);
                e.onsuccess = function(e) {}
                ,
                e.onerror = function(e) {}
            },
            mapCurriculum: function(e) {
                return {
                    value: e,
                    name: e.name + "-" + e.language,
                    key: e.id
                }
            },
            mapGrade: function(e) {
                return {
                    value: e,
                    name: e.description + " " + e.number,
                    key: e.id
                }
            },
            mapSubject: function(e) {
                return {
                    value: e,
                    name: e.name,
                    key: e.id
                }
            },
            mapChapter: function(e) {
                return {
                    value: e,
                    name: e.number + ". " + e.name,
                    altName: e.number + ". " + (e.altName || e.name),
                    key: e.id
                }
            },
            mapChapterWithOutNumber: function(e) {
                return {
                    value: e,
                    name: e.name,
                    key: e.id
                }
            },
            sortCurriculumOptions: function(e, t) {
                var s = e.name.localeCompare(t.name);
                return s = 0 === s ? e.value.id - t.value.id : s
            },
            sortGradeOptions: function(e, t) {
                return P(e.value, t.value)
            },
            sortSubjectOptions: function(e, t) {
                return L(e.value, t.value)
            },
            sortChapterOptions: function(e, t) {
                return H(e.value, t.value)
            },
            sortSectionOptions: function(e, t) {
                var s = e.value.name.localeCompare(t.value.name);
                return s = 0 === s ? e.value.id - t.value.id : s
            },
            sortGrades: P,
            sortSubjects: L,
            sortChapters: H,
            sortUserSubjects: function(e, t) {
                var s = P(e.subject.grade, t.subject.grade);
                return s = !isNaN(s) && 0 !== s ? s : L(e.subject, t.subject)
            },
            sortPrimaryUserGradeFirst: function(e) {
                function t(e, t) {
                    var s = 0;
                    return e.grade && t.grade && (s = t.grade.number - e.grade.number),
                    isFinite(s) && 0 != s ? s : e.id - t.id
                }
                var s;
                return z.isArray(e) && (s = (new Date).getTime(),
                (e = J.apply(".{.userSections.endDate > $currentTime}", e, {
                    currentTime: s
                })).sort(t),
                z.forEach(e, function(e) {
                    z.isArray(e.userSections) && (e.userSections = e.userSections.sort(t))
                })),
                e
            },
            getOrdinalSuffix: function(e) {
                var t = e % 10
                  , s = e % 100;
                return 1 == t && 11 != s ? e + "st" : 2 == t && 12 != s ? e + "nd" : 3 == t && 13 != s ? e + "rd" : e + "th"
            },
            sortObjectArray: function(e, a) {
                if (z.isArray(e) && z.isArray(a) && 0 !== e.length && 0 !== a.length) {
                    for (var t = 0; t < a.length; t++)
                        a[t].getter = c(a[t].field);
                    e.sort(function(e, t) {
                        for (var s = 0, r = 0; r < a.length && 0 === s; r++) {
                            var n = a[r]
                              , i = n.getter(e)
                              , o = n.getter(t);
                            0 <= n.type.indexOf("int") ? s = W(i = parseInt(i, 10), o = parseInt(o, 10)) : 0 <= n.type.indexOf("string") ? z.isString(i) && z.isString(o) ? s = i.toLowerCase().localeCompare(o.toLowerCase()) : z.isString(i) ? s = -1 : z.isString(o) && (s = 1) : 0 <= n.type.indexOf("float") && (s = W(i = parseFloat(i), o = parseFloat(o))),
                            0 === s || n.isAscending || (s = 0 - s)
                        }
                        return s
                    })
                } else
                    k.$log.info("Nothing to sort")
            }
        };
        return k
    }
    ]).factory("PrintService", ["$rootScope", "$compile", "$q", "$timeout", "$http", "$templateCache", "$log", function(u, l, t, d, m, s, r) {
        var p = {};
        return z.extend(p, {
            printTemplate: function(e, i) {
                var o = t.defer()
                  , a = {
                    result: !1
                };
                return e && i ? m.get(e, {
                    cache: s
                }).then(function(e) {
                    var t, s, r, n = Date.now();
                    (e && e.data ? (e = e.data,
                    t = z.extend(u.$new(), i),
                    s = l(z.element("<div>" + e + "</div>"))(t),
                    r = function() {
                        t.$$phase || m.pendingRequests.length ? d(r) : 0 < s.find(".mathjax-bind-loading").length && Date.now() - n <= 6e4 ? d(r, 250) : (p.printHtml(s.html()),
                        t.$destroy(),
                        a.result = !0,
                        o.resolve(a))
                    }
                    ) : c)()
                }, c) : (r.error("PrintService.printTemplate(): Missing templateUrl or data"),
                o.reject(a)),
                o.promise;
                function c(e) {
                    a.message = "Error retrieving template",
                    o.reject(a)
                }
            },
            printHtml: function(e) {
                var t, s, r, e = '<!DOCTYPE html><html><body class="erudex-print">' + e + "</body></html>";
                window.cordova ? window.plugins.printer.print({
                    content: e
                }, function() {}, function() {}) : (t = z.element('<iframe style="visibility:hidden;"></iframe>').appendTo("body"),
                s = t[0],
                t.on("load", function() {
                    d(function() {
                        s.contentDocument.execCommand("print", !1, null) || (s.contentWindow.focus(),
                        s.contentWindow.print()),
                        t.remove()
                    }, 500, !1)
                }),
                (r = s.contentWindow.document.open("text/html", "replace")).write(e),
                r.close())
            }
        }),
        p
    }
    ]).service("GraphingService", [function() {
        z.extend(this, {
            drawBarChart: function(e, t) {
                var s, r, n;
                if (t)
                    return (s = z.copy(t)).outWidth = e.length * (3 * s.barWidth) + s.right + s.left,
                    s.inWidth = s.outWidth - s.left - s.right,
                    s.inHeight = s.outHeight - s.top - s.bottom,
                    d3.select(s.selectorId).selectAll("*").remove(),
                    t = d3.select(s.selectorId),
                    "Overall Performance" !== s.reportName && t.append("h5").append("text").attr("y", 0).attr("x", s.inHeight / 2).attr("dy", "1em").style("chartVisualDims", "auto").style("text-align", "left").style("text-anchor", "middle").text(s.reportName),
                    t = t.append("svg").attr("width", s.outWidth).attr("height", s.outHeight),
                    r = d3.scale.linear().domain([0, 100]).range([s.inHeight, 0]),
                    n = d3.svg.axis().scale(r).orient("left").ticks(5),
                    t.append("g").attr("id", "yAxisG").attr("transform", "translate(" + s.chartX + "," + s.chartY + ")").call(n),
                    n = d3.scale.ordinal().rangeBands([0, s.inWidth]).domain(e.map(function(e) {
                        return e.performanceCriteria
                    })),
                    n = d3.svg.axis().scale(n).orient("bottom"),
                    t.append("g").attr("id", "xAxisG").attr("transform", "translate(" + s.chartX + "," + (s.outHeight - s.chartY) + ")").call(n),
                    t.append("g").attr("class", "grid horizontal").attr("transform", "translate(" + s.chartX + "," + s.chartY + ")").attr("stroke", "lightgray").attr("opacity", "0.3").call(d3.svg.axis().scale(r).orient("left").tickSize(-s.inWidth, 0, 0).tickFormat("")),
                    d3.select(s.selectorId).selectAll("path.domain").style("fill", "none").style("stroke", "black"),
                    d3.select(s.selectorId).selectAll("path").style("stroke", "black"),
                    (n = t.append("g").attr("width", s.inWidth).attr("height", s.inHeight).attr("transform", "translate(" + s.chartX + "," + s.chartY + ")").style("border", "1px").selectAll(".bar").data(e).enter().append("g").attr("class", "bar")).append("rect").attr("width", s.barWidth).attr("height", function() {
                        return s.inHeight - r(100)
                    }).attr("x", function(e, t) {
                        return t * (3 * s.barWidth) + s.barWidth / 2
                    }).attr("y", function() {
                        return r(100)
                    }).style("fill", "skyblue").style("stroke-width", "1px"),
                    n.append("text").attr("transform", "rotate(-90)").attr("y", function(e, t) {
                        return t * (3 * s.barWidth) + s.barWidth / 2
                    }).attr("x", function() {
                        return 0 - r(50)
                    }).attr("dy", "1em").style("text-anchor", "middle").style("font-size", "15").text(function(e) {
                        return " 100 %"
                    }),
                    n.append("rect").attr("width", s.barWidth).attr("height", function(e) {
                        return s.inHeight - r(100 * e.attainedScore / e.totalScore)
                    }).attr("x", function(e, t) {
                        return t * (3 * s.barWidth) + s.barWidth / 2 + s.barWidth
                    }).attr("y", function(e) {
                        return r(100 * e.attainedScore / e.totalScore)
                    }).style("fill", "gold").style("stroke-width", "1px"),
                    n.append("text").attr("transform", "rotate(-90)").attr("y", function(e, t) {
                        return t * (3 * s.barWidth) + s.barWidth / 2 + s.barWidth
                    }).attr("x", function(e) {
                        return 0 - r(100 * (e.attainedScore || 0) / (e.totalScore || 0) / 2)
                    }).attr("dy", "1em").style("text-anchor", "middle").style("font-size", "15").text(function(e) {
                        return d3.round(100 * (e.attainedScore || 0) / (e.totalScore || 0)) + " %"
                    }),
                    {}
            },
            drawLineChart: function(e, t) {
                var s, i, o, r, n, a, c, u;
                e && t && ((t = z.copy(t)).inWidth = t.outWidth - t.left - t.right,
                t.inHeight = t.outHeight - t.top - t.bottom,
                s = d3.select(t.selectorId),
                i = d3.scale.ordinal().rangeBands([0, t.inWidth]).domain(e.xDomain),
                o = d3.scale.linear().range([t.inHeight, 0]),
                r = d3.svg.axis().scale(i).orient("bottom"),
                n = d3.svg.axis().scale(o).orient("left").ticks(5),
                a = s.select("svg"),
                c = (a = a.empty() ? s.append("svg") : a).attr("width", t.outWidth).attr("height", t.outHeight).append("g").attr("transform", "translate(" + t.chartX + "," + t.chartY + ")"),
                o.domain([0, 100]),
                c.append("g").attr("class", "xAxisC").attr("transform", "translate(0, " + t.inHeight + ")").call(r).selectAll("path").style("fill", "none").style("stroke", "black"),
                c.append("g").attr("class", "yAxisG").call(n).selectAll("path").style("fill", "none").style("stroke", "black"),
                u = t.inWidth / (2 * e.xDomain.length),
                z.forEach(e.lines, function(e) {
                    var t = e.data
                      , s = e.color
                      , e = e.dotColor
                      , r = d3.max(t, function(e) {
                        return e.attainedScore
                    })
                      , n = d3.svg.line().x(function(e) {
                        return i(e.performanceCriteria) + u
                    }).y(function(e) {
                        return o(100 * e.attainedScore / r)
                    });
                    c.append("g").append("path").attr("d", n(t)).attr("fill", "none").attr("stroke", s).attr("stroke-width", 2),
                    c.append("g").selectAll("graph.point").data(t).enter().append("circle").attr("class", "performacepoint").attr("r", 2).attr("cx", function(e) {
                        return i(e.performanceCriteria) + u
                    }).attr("cy", function(e) {
                        return o(100 * e.attainedScore / r)
                    }).attr("fill", e)
                }),
                c.insert("g", ".bar").attr("class", "grid horizontal").attr("stroke", "lightgray").attr("opacity", "0.3").call(d3.svg.axis().scale(o).orient("left").tickSize(-t.inWidth, 0, 0).tickFormat("")))
            },
            drawPieChart: function(e, t) {}
        })
    }
    ]).factory("JSPath", [function() {
        return J
    }
    ]).factory("c3", [function() {
        return window.c3
    }
    ])
}(window.angular, window.JSPath, window.jQuery, window.document),
function(e, u, l) {
    "use strict";
    e.module("com.erudex.common.services").factory("WSSService", ["$rootScope", "UtilService", "MESSAGE_STRINGS", function(r, n, i) {
        var o = {
            localhost: "dev",
            "qa-app": "dev",
            qa: "dev",
            "demo-app": "demo",
            demo: "demo",
            app: "prod"
        }
          , a = {
            dev: "d3NzOi8vd3NzLXEuZXJ1ZGV4LmNvbT9rPQ==",
            demo: "d3NzOi8vd3NzLWQuZXJ1ZGV4LmNvbT9rPQ==",
            prod: "d3NzOi8vd3NzLXAuZXJ1ZGV4LmNvbT9rPQ=="
        }
          , c = {
            ts: 0,
            userId: null,
            wssKey: null,
            socket: null,
            apiHost: null,
            uri: null,
            connect: function(e, t, s) {
                null === c.socket && (c.userId = t,
                c.wssKey = s,
                c.ts = (new Date).getTime(),
                c.apiHost = e,
                c.uri = l.atob(a[o[e]]),
                c.socket = new u(c.uri + encodeURIComponent(s))),
                c.socket.onopen = function(e) {
                    console.log("[open] Connection established", c.ts)
                }
                ,
                c.socket.onmessage = function(e) {
                    n.$log.info("[message] Data received from server: ", e.data),
                    r.$broadcast(i.WSS_TRIGGER_EVENT, {
                        user: null
                    })
                }
                ,
                c.socket.onclose = function(e) {
                    var t = (new Date).getTime();
                    e.wasClean ? n.$log.info("[close] Connection closed cleanly, code=" + e.code + ", reason=", e.reason) : n.$log.info("[close] Connection closed", t - c.ts),
                    c.socket = null,
                    c.ts = 0,
                    c.connect(c.apiHost, c.userId, c.wssKey)
                }
            }
        };
        return c
    }
    ])
}(window.angular, (window.JSPath,
window.jQuery,
window.moment,
window.WebSocket), window),
function(N) {
    "use strict";
    N.module("com.erudex.common.services").service("ResourceCollaborationService", ["UtilService", "CURRICULUM_LANGUAGE_KEY", "APP_PREFS", "STORAGE_KEYS", "ATTACHMENT_TYPE", function(i, s, e, t, o) {
        var r, n, a, c = this, u = {
            show: {}
        }, l = {
            content: !1
        }, d = null, m = null, p = null, g = !1, S = null, f = null, h = {
            enabled: i.getPreference(e.CONTENT_VIEW_AUGMENTED.key, e.CONTENT_VIEW_AUGMENTED.default)
        }, v = {
            enabled: i.getPreference(e.CURRICULUM_ALT_LANGUAGE.key, !1),
            primary: i.getPreference(e.CURRICULUM_PRIMARY_LANGUAGE_NAME.key, "English"),
            alternate: i.getPreference(e.CURRICULUM_ALT_LANGUAGE_NAME.key, "")
        }, T = v.enabled ? i.$storageService.getUserPref(t.CURRICULUM_LANGUAGE, s.PRIMARY) : s.PRIMARY, E = null, I = null, A = ["relatedContent", "chapterFeatures", "augmentedContent", "notes", "activityResources"], C = [{
            arrayName: "animationResources"
        }, {
            arrayName: "recordedResources"
        }, {
            arrayName: "vlabResources"
        }, {
            arrayName: "arResources"
        }, {
            arrayName: "onlineClassesVideoResources"
        }, {
            arrayName: "onlineClassesDocResources"
        }, {
            arrayName: "videoResources"
        }, {
            arrayName: "quizResources"
        }, {
            arrayName: "allDocumentResources"
        }, {
            arrayName: "audioResources"
        }, {
            arrayName: "imageResources"
        }, {
            arrayName: "otherResources"
        }], y = [];
        function b() {
            N.extend(u, {
                isLoaded: !1,
                relatedContentHeading: "Related Content"
            }),
            i.deleteObjectProperties(u.show),
            N.extend(u.show, {
                relatedContent: !1,
                chapterFeatures: !1,
                augmentedContent: !1,
                notes: !1,
                activityResources: !1,
                nextResource: !1,
                prevResource: !1,
                selectLanguage: v.enabled
            }),
            i.deleteObjectProperties(l),
            g = !1,
            a = n = r = I = E = f = S = p = m = d = null,
            y = [],
            T = v.enabled ? i.$storageService.getUserPref(t.CURRICULUM_LANGUAGE, s.PRIMARY) : s.PRIMARY
        }
        N.extend(c, {
            options: u,
            chapterContentCategories: C,
            loadOptions: function(e) {
                b();
                var t = e.show || {};
                N.extend(u.show, t),
                u.show.augmentedContent = u.show.augmentedContent && h.enabled,
                u.show.selectLanguage = u.show.selectLanguage && v.enabled,
                u.relatedContentHeading = e.relatedContentHeading || "Related Content",
                u.isLoaded = !0,
                r && r(u)
            },
            resetOptions: b,
            getOptions: function(e) {
                e = N.isFunction(e) ? e : N.noop,
                r = e,
                u.isLoaded && e(u)
            },
            setContentLoaded: function(e) {
                m = (p = e).content,
                g = m && i.isNotEmpty(m.altUri),
                m && (l.content = !0),
                n && n(p)
            },
            getContentDetails: function(e) {
                e = N.isFunction(e) ? e : N.noop,
                n = e,
                l.content && e(p)
            },
            setIsLoaded: function(e, t) {
                l[e] = !!t
            },
            getIsLoaded: function(e) {
                return !!l[e]
            },
            setVideoApi: function(e) {
                d = e
            },
            getVideoTime: function() {
                var e = 0;
                return e = d ? d.currentTime : e
            },
            pauseContent: function() {
                d && d.pause()
            },
            setDefaultTrackId: function(e) {
                f = e
            },
            setCurrentActivity: function(e) {
                (S = e) && (l.activity = !0,
                a) && a(S)
            },
            getCurrentActivity: function(e) {
                e = N.isFunction(e) ? e : N.noop,
                a = e,
                l.activity && e(S)
            },
            setSelectedLanguage: function(e) {
                T = v.enabled && e === s.ALTERNATE && g ? e : s.PRIMARY;
                for (var t = 0; t < y.length; t++)
                    y[t](T)
            },
            getCurrentSelectedLanguage: function() {
                return v.enabled ? T : s.PRIMARY
            },
            getSelectedLanguageOptions: function() {
                return N.copy(v)
            },
            registerSelectedLanguageUpdateListener: function(e) {
                N.isFunction(e) && y.push(e)
            },
            goToContent: function(e, t) {
                var s, r, n;
                t = N.isObject(t) ? t : {},
                e && e.uuid && (s = N.extend({
                    trackId: f
                }, p),
                r = t.subject || s.subject,
                n = t.chapter || s.chapter,
                t = t.topic || s.topic,
                r && (i.setCurrentSubject(r),
                i.setCurrentChapter(n),
                i.setCurrentTopic(t)),
                e.type === o.ASSESSMENT_PRACTICE ? $state.go("assessmentPractice", {
                    assessmentUuid: e.uuid,
                    track: s.trackId
                }, {
                    location: "replace"
                }) : i.goToResource(e, {
                    location: "replace"
                }, {
                    track: s.trackId
                }))
            },
            findNextPrevContent: function(e, t, s) {
                if (s = s || C,
                !N.isObject(e) || !N.isString(t) || !N.isArray(s))
                    return {
                        next: null,
                        previous: null
                    };
                for (var r, n, i, o, a, c = 0; c < s.length; c++)
                    for (var u = s[c].arrayName, l = 0; l < e[u].length; l++)
                        e[u][l].uuid === t && (r = l,
                        n = e[u],
                        i = c);
                if (n) {
                    for (var d = r + 1, m = n, p = i; !o && m; )
                        m[d] ? o = m[d] : (m = e[s[++p] ? s[p].arrayName : "noArray"],
                        d = 0);
                    for (d = r - 1,
                    m = n,
                    p = i; !a && m; )
                        m[d] ? a = m[d] : d = (m = e[s[--p] ? s[p].arrayName : "noArray"]) ? Math.max(m.length - 1, 0) : 0
                }
                return {
                    next: o,
                    previous: a
                }
            },
            setNextPrevContent: function(e, t) {
                E = e,
                I = t,
                u.show.nextResource = u.show.nextContent = !!e,
                u.show.prevResource = u.show.prevContent = !!t
            },
            goToNextContent: function() {
                E && c.goToContent(E)
            },
            goToPrevContent: function() {
                I && c.goToContent(I)
            },
            getActiveAccordionsCount: function() {
                var t = 0;
                return N.forEach(A, function(e) {
                    u.show[e] && t++
                }),
                t
            },
            registerCollaborationController: function(e) {
                0
            },
            unregisterCollaborationController: function() {
                n = r = null
            }
        })
    }
    ])
}(window.angular, (window.JSPath,
window.jQuery,
window)),
function(e) {
    "use strict";
    e.module("com.erudex.common.services").factory("NotificationsSharedService", ["UtilService", "v2CommonPlugin", function(s, r) {
        var n = {
            scope: null,
            userId: null,
            showNotificationsSheet: !1,
            showToastMessage: !1,
            unreadNotificationsCount: 0,
            notifications: [],
            processNotifications: function(e) {
                n.notifications = e;
                e = _.filter(n.notifications, {
                    isRead: !1
                });
                n.unreadNotificationsCount = e ? e.length : 0,
                0 < n.unreadNotificationsCount && n.showToastMessage && (n.showToastMessage = !1,
                s.$toastr.info("You have " + n.unreadNotificationsCount + " unread notifications."))
            },
            getNotifications: function(e, t) {
                e && s.blockUiStart(n.scope),
                r.getNotifications({
                    userId: n.userId
                }, function(e) {
                    s.blockUiStop(n.scope),
                    e.result ? (n.showNotificationsSheet = t,
                    n.processNotifications(e.values)) : s.$toastr.error("Error while retrieving Notifications.")
                }, function(e) {
                    s.$toastr.error("Error while retrieving Notifications."),
                    s.blockUiStop(n.scope)
                })
            },
            readNotification: function(e) {
                e.isRead = !0,
                r.readNotification({
                    id: e._id,
                    userId: n.userId
                }, function(e) {}, function(e) {})
            },
            deleteNotification: function(e, t) {
                e.stopPropagation(),
                s.blockUiStart(n.scope),
                r.deleteNotification({
                    id: t,
                    userId: n.userId
                }, function(e) {
                    s.blockUiStop(n.scope),
                    e.result ? n.processNotifications(e.values) : s.$toastr.error("Error while deleting Notification.")
                }, function(e) {
                    s.$toastr.error("Error while deleting Notification."),
                    s.blockUiStop(n.scope)
                })
            },
            deleteAllNotification: function() {
                s.blockUiStart(n.scope),
                r.deleteNotification({
                    type: "all"
                }, function(e) {
                    s.blockUiStop(n.scope),
                    e.result ? (n.processNotifications(e.values),
                    n.showNotificationsSheet = !1) : s.$toastr.error("Error while clearing Notifications.")
                }, function(e) {
                    s.$toastr.error("Error while clearing Notifications."),
                    s.blockUiStop(n.scope)
                })
            },
            showNotifications: function(e, t, s, r) {
                n.scope = e,
                n.userId = t,
                n.getNotifications(s, r)
            },
            closeNotificationsSheet: function() {
                var e = _.filter(n.notifications, {
                    isRead: !1
                });
                n.unreadNotificationsCount = e ? e.length : 0,
                n.showNotificationsSheet = !1
            }
        };
        return n
    }
    ])
}(window.angular, (window.JSPath,
window.jQuery,
window)),
function(y, g) {
    "use strict";
    y.module("com.erudex.common.directive", ["ngSanitize"]).directive("errSrc", function() {
        return {
            restrict: "A",
            link: function(e, t, s) {
                t.bind("error", function() {
                    s.src != s.errSrc && s.$set("src", s.errSrc)
                })
            }
        }
    }).directive("datePickerE", ["UtilService", function(i) {
        return {
            restrict: "E",
            transclude: !0,
            template: '<div class="small-9 columns"><input type="text" class="form-control" ng-model="formattedDate" disabled></div><span class="small-3 columns"><button class="btn button postfix radius" type="button"><i class="fa fa-calendar"></i></button></span>',
            scope: {
                options: "@",
                dateChangeCallback: "&onDateChange",
                dateMsModel: "=?",
                disabled: "=?ngDisabled",
                startDate: "=?dateStart",
                endDate: "=?dateEnd"
            },
            link: function(t, s, e) {
                var r = t.options ? t.$eval(t.options) : {}
                  , n = ("now" === r.startDate && (r.startDate = new Date),
                s.addClass("date date-picker row collapse"),
                s.datepicker(r));
                n.on("changeDate", function(e) {
                    i.safeApply(t, function() {
                        t.dateMsModel = e.date.getTime()
                    }),
                    t.dateChangeCallback && t.dateChangeCallback({
                        event: e
                    })
                }),
                e.dateMsModel && t.$watch("dateMsModel", function(e, t) {
                    e = parseInt(e),
                    isFinite(e) ? n.datepicker("update", new Date(e)) : n.datepicker("update", "")
                }),
                e.ngDisabled && t.$watch("disabled", function(e) {
                    s.find(".button").prop("disabled", e)
                }),
                e.dateStart && t.$watch("startDate", function(e) {
                    e ? n.datepicker("setStartDate", new Date(e)) : n.datepicker("setStartDate", !1)
                }),
                e.dateEnd && t.$watch("endDate", function(e) {
                    e ? n.datepicker("setEndDate", new Date(e)) : n.datepicker("setEndDate", !1)
                })
            }
        }
    }
    ]).directive("mathjaxBind", ["$sanitize", function(d) {
        return {
            restrict: "A",
            link: function(e, u, l) {
                u.addClass("mathjax-bind"),
                e.$watch(l.mathjaxBind, function(t) {
                    if (y.isNumber(t) || "boolean" == typeof t)
                        u.text(t);
                    else {
                        var s, e = !1, r = null;
                        if (-1 < (t = y.isString(t) ? t : "").indexOf("<iframe") && -1 < t.indexOf("youtube.com"))
                            if ((r = t.match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/g)) && 0 < r.length) {
                                for (var n = 0; n < r.length; n++)
                                    t = t.replace(r[n], "EDXIFRAME-" + n);
                                e = !0
                            }
                        if (t = d(t),
                        e)
                            for (n = 0; n < r.length; n++) {
                                var i = r[n].replace("absolute", "relative");
                                t = t.replace("EDXIFRAME-" + n, i)
                            }
                        if (/\\\[([^\]]*)\\\]/.test(t)) {
                            var o = t.match(/\\\[([^\]]*)\\\]/g);
                            if (o && 0 < o.length)
                                for (n = 0; n < o.length; n++)
                                    t = t.replace(o[n], '<p class="mathjax-bind-sqr-p">' + o[n].replace(/<br\/>/g, "") + "</p>")
                        }
                        if (u.html(t),
                        /.*\$.+\$.*/.test(u.text()) || 0 !== u.find(".math-tex").length)
                            if ("true" === l.resultViewerQuestion)
                                renderMathInElement(u[0]);
                            else
                                try {
                                    renderMathInElement(u[0])
                                } catch (e) {
                                    if (e instanceof katex.ParseError)
                                        try {
                                            var a = t
                                              , c = a.match(/\$.*?\$/g);
                                            if (c && 0 < c.length)
                                                for (n = 0; n < c.length; n++)
                                                    a = a.replace(c[n], "\\[" + c[n].substring(1, c[n].length - 1) + "\\]");
                                            a = a.replace(/{align}/g, "{aligned}").replace(/&nbsp;/g, " ").replace(/&#160;/g, " ").replace(/&#10;/g, " ").replace(/&amp;/g, "&"),
                                            u.html(a),
                                            renderMathInElement(u[0])
                                        } catch (e) {
                                            e instanceof katex.ParseError && (u.css("display", "none"),
                                            u.html(t),
                                            (s = $('<div class="mathjax-bind-loading"><img src="../img/icons/input-spinner.gif"/></div>')).addClass(u.attr("class")),
                                            u.after(s),
                                            g.Hub.Queue(["Typeset", g.Hub, u[0]]),
                                            g.Hub.Queue(function() {
                                                u[0].innerHTML = u[0].innerHTML.replace(/&nbsp;/g, " "),
                                                s.remove(),
                                                u.css("display", "")
                                            }))
                                        }
                                }
                    }
                })
            }
        }
    }
    ]).directive("scrollToTopWhen", function() {
        return {
            restrict: "A",
            link: function(e, t, s) {
                e.$watch(s.scrollToTopWhen, function() {
                    t[0].scrollTop = 0
                })
            }
        }
    }).directive("pdfViewer", ["$window", "UtilService", function(I, A) {
        function C(e) {
            e = e.getContext("2d");
            return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
        }
        return {
            restrict: "EA",
            scope: {
                pdfOptions: "=",
                pdfReady: "&"
            },
            link: function(a, c, e) {
                var t, s, u, l, r, d, m, p, n, g, i, S, f, o = I.PDFJS;
                function h(o) {
                    g && g.cancel(),
                    S.isRendering = !0,
                    o = parseInt(o),
                    isNaN(o) || (o = n < (o = o <= 0 ? 1 : o) ? n : o,
                    r.getPage(o).then(function(e) {
                        p = o,
                        A.safeApply(a, function() {
                            S.pageNum = o
                        }),
                        u && (t = e.getViewport(1),
                        s = c[0].getBoundingClientRect(),
                        s = Math.min(s.width - 30, f) / t.width,
                        l = 0 < s ? s : 1),
                        l = l <= 0 ? .1 : l,
                        t = e.getViewport(l),
                        s = d[0],
                        i = t.width,
                        r = t.height,
                        n = C(s),
                        s.width = Math.floor(i * n),
                        s.height = Math.floor(r * n),
                        s.style.width = Math.floor(i) + "px",
                        s.style.height = Math.floor(r) + "px";
                        var t, s, r, n = C(d[0]), i = {
                            canvasContext: m,
                            viewport: t,
                            transform: 1 != n ? [n, 0, 0, n, 0, 0] : null
                        };
                        g = e.render(i),
                        S.isRendering = !0,
                        g.promise.then(function() {
                            A.$log.info("Finished render of ", o),
                            S.isRendering = !1,
                            A.safeApply(a, y.noop)
                        }).catch(function(e) {
                            A.$log.info("Render stopped: ", e)
                        })
                    }))
                }
                function v(e) {
                    n = (r = e).numPages,
                    A.safeApply(a, function() {
                        S.totalPages = n,
                        S.isPdfReady = !0
                    }),
                    h(s)
                }
                function T(e) {
                    A.$log.error("Error loading pdf: ", e)
                }
                function E(e) {
                    m && m.clearRect(0, 0, d.width, d.height),
                    S.isPdfReady = !1,
                    e && e.length && (i = o.getDocument({
                        url: e,
                        withCredentials: !1
                    })).then(v, T)
                }
                o ? (t = a.pdfOptions,
                s = isFinite(t.page) ? parseInt(t.page) : 1,
                u = "fit-page" === t.scale,
                l = isFinite(t.scale) && 0 < t.scale ? t.scale : 1,
                r = null,
                d = y.element('<canvas class="pdf-canvas"></canvas>'),
                m = d[0].getContext("2d"),
                p = s,
                n = 0,
                S = i = g = null,
                f = 800,
                c.css({
                    width: "100%",
                    display: "block"
                }),
                c.append(d),
                o.disableWorker = !0,
                S = {
                    goToPage: h,
                    goNextPage: function() {
                        h(p + 1)
                    },
                    goPrevPage: function() {
                        h(p - 1)
                    },
                    zoomIn: function() {
                        u = !1,
                        l += .1,
                        h(p)
                    },
                    zoomOut: function() {
                        u = !1,
                        l -= .1,
                        h(p)
                    },
                    fitPage: function() {
                        u = !0,
                        h(p)
                    },
                    loadPdf: E,
                    pageNum: 0,
                    totalPages: 0,
                    isPdfReady: !1
                },
                a.pdfViewer = S,
                function e() {
                    1 == u && c.width() <= 100 ? setTimeout(e, 100) : (a.$watch("pdfViewer.pageNum", function(e) {
                        e && isFinite(e) && (e = parseInt(e)) !== p && h(parseInt(e))
                    }),
                    a.$watch("pdfOptions.url", function(e) {
                        e && 0 < e.length && (i ? i.destroy().then(function() {
                            E(e)
                        }) : E(e))
                    }),
                    A.safeApply(a, function() {
                        a.pdfReady({
                            pdfViewer: S
                        })
                    }))
                }()) : A.$log.error("pdfViewer: PDFJS not defined.")
            }
        }
    }
    ]).directive("pdfViewerScrollWatcher", ["$timeout", function(r) {
        return {
            restrict: "A",
            scope: {
                pdfViewer: "=pdfViewerScrollWatcher"
            },
            link: function(e, s, t) {
                e.$watch("pdfViewer.pageNum", function(e, t) {
                    (e = parseInt(e)) !== (t = parseInt(t)) && r(function() {
                        y.element(s)[0].scrollTop = 0
                    })
                })
            }
        }
    }
    ]).directive("mathjaxMcqBind", ["$sanitize", "APP_CONFIG", function(p, e) {
        return {
            restrict: "E",
            scope: {
                mcq: "=",
                showCorrect: "=?",
                showOptions: "=?",
                showAnswer: "=?",
                showSolution: "=?",
                isCompactPrint: "=?"
            },
            link: function(c, u, l) {
                var d = e.QUESTION_TYPE
                  , m = {
                    a: 1,
                    b: 2,
                    c: 3,
                    d: 4
                };
                null != c.showCorrect && void 0 !== c.showCorrect || (c.showCorrect = !0),
                null != c.showOptions && void 0 !== c.showOptions || (c.showOptions = !0),
                null != c.showSolution && void 0 !== c.showSolution || (c.showSolution = !1),
                null != c.showAnswer && void 0 !== c.showAnswer || (c.showAnswer = !1),
                null != c.isCompactPrint && void 0 !== c.isCompactPrint || (c.isCompactPrint = !1);
                c.isCompactPrint,
                c.$watch("mcq", function(e) {
                    var t = (e = c.mcq || {}).answer
                      , s = e.numericalRoundedAnswer
                      , r = l.student
                      , i = null;
                    if ((e = r ? (i = e).mcq : e) && e.description) {
                        e.options = e.options || [],
                        e.options.sort(function(e, t) {
                            return (e = e.option.toLowerCase()) == (t = t.option.toLowerCase()) ? 0 : t < e ? 1 : -1
                        }),
                        u.html(""),
                        c.showAnswer || (r = $('<div class="print-question">' + p(e.description) + "</div>"),
                        u.append(r)),
                        !i || i.answer && "" !== i.answer || u.append($('<div style="color:red;">Question not answered</div>'));
                        var n, r = e.questionType || "", o = e.answer || "", a = i && i.answer ? i.answer : "";
                        c.showOptions && !c.showAnswer ? r === d.MULTI_CHOICE_SINGLE.value || r === d.MULTI_CHOICE_MULTI.value || r === d.MATRIX_MATCH_TYPE.value || r === d.MATCHING_SINGLE.value || r === d.ASSERTION_AND_REASONING.value ? (t = r === d.MULTI_CHOICE_MULTI.value ? (t = "",
                        (e.answer || "").toLowerCase().split("").forEach(function(e) {
                            t += m[e] + ", "
                        }),
                        0 < t.length ? t.slice(0, -2) : t) : m[(e.answer || "").toLowerCase()] ? m[(e.answer || "").toLowerCase()] : e.answer,
                        y.forEach(e.options, function(e, t) {
                            var s = $('<div class="print-opt"></div>')
                              , r = -1 < o.indexOf(e.option)
                              , n = -1 < a.indexOf(e.option);
                            s.html('<div class="ques-opt">(' + String.fromCharCode(65 + t) + ')</div><div class="print-opt-text">' + p(e.optionText) + "</div>"),
                            c.showCorrect && r && s.addClass("correct-mcq-option"),
                            c.showCorrect && i && !r && n && s.addClass("incorrect-mcq-option"),
                            u.append(s)
                        })) : r === d.INTEGER_SINGLE_SIGNED.value || r === d.INTEGER_SINGLE_UNSIGNED.value ? c.showCorrect ? u.append(y.element("<div><label>Integer answer:</label>" + t + "</div>")) : u.append(y.element("<div><label>Integer answer:</label>____</div>")) : r === d.NUMERICAL_VALUE.value ? c.showCorrect ? u.append(y.element('<div><div class="flex flex-row" style="gap: 1rem"><label>Answer:</label>' + t + '</div><div class="flex flex-row" style="gap: 1rem"><label>Rounded Answer:</label>' + s + "</div></div>")) : u.append(y.element("<div>Numerical Value answer:  __________</div>")) : r === d.TRUE_OR_FALSE.value && (c.showCorrect ? u.append(y.element("<div><label>Correct answer:</label>" + t + "</div>")) : u.append(y.element("<div>True or False answer:  __________</div>"))) : c.isCompactPrint || u.append(y.element("<div><br/><br/><br/><br/></div>")),
                        c.showAnswer && u.append(y.element("<div><label>" + t + "</label></div>")),
                        c.showSolution && (s ? u.append(y.element("<label>Answer: " + t + "  , Rounded Answer: " + s + "</label>")) : u.append(y.element("<label>Answer: " + t + "</label>")),
                        u.append(y.element("<div><label>Solution:</label>" + (e.solution || "Solution Not Available") + "</div>")));
                        try {
                            renderMathInElement(u[0])
                        } catch (e) {
                            e instanceof katex.ParseError && (u.css("display", "none"),
                            (n = $('<div class="mathjax-bind-loading"><img src="../img/icons/input-spinner.gif"/></div>')).addClass(u.attr("class")),
                            u.after(n),
                            g.Hub.Queue(["Typeset", g.Hub, u[0]]),
                            g.Hub.Queue(function() {
                                u[0].innerHTML = u[0].innerHTML.replace(/&nbsp;/g, " "),
                                n.remove(),
                                u.css("display", "")
                            }))
                        }
                    } else
                        u.text("Invalid MCQ provided.")
                })
            }
        }
    }
    ]).directive("multiSelect", function() {
        return {
            restrict: "A",
            require: "select",
            link: function(e, r, t) {
                var n, i;
                function s(e) {
                    "refresh" !== e && "number" != typeof e || r.multiSelect("refresh")
                }
                y.isFunction(r.multiSelect) ? (r.multiSelect({
                    selectableOptgroup: !0,
                    keepOrder: !0
                }),
                n = -1,
                i = null,
                e.$watch(function() {
                    var e = r[0].length
                      , t = e ? r[0][0].value : -1
                      , s = e;
                    return e == n && t != i && (s = -Date.now()),
                    n = e,
                    i = t,
                    s
                }, s),
                e.$watch(t.ngModel, s),
                e.$watch(t.eChangeWatch, s)) : window.console.error("Multiselect is not loaded.")
            }
        }
    }).directive("invalidInputClass", ["UtilService", function(a) {
        return {
            restrict: "A",
            require: "^form",
            link: function(e, t, s, r) {
                var n = s.name
                  , i = s.invalidInputClass
                  , o = s.invalidInputClassPending;
                t.removeClass(i),
                o = o !== window.undefined && !1 !== o,
                a.isNotEmpty(i) && a.isNotEmpty(n) && r[n] && e.$watch(function() {
                    return r[n] && (r[n].$invalid && (r.$submitted || r[n].$dirty) || o && r[n].$pending)
                }, function(e) {
                    e ? t.addClass(i) : t.removeClass(i)
                })
            }
        }
    }
    ]).directive("invalidInputShow", ["UtilService", function(o) {
        return {
            restrict: "A",
            require: "^form",
            link: function(e, t, s, r) {
                var n = "ng-hide"
                  , i = s.invalidInputShow;
                t.addClass(n),
                o.isNotEmpty(i) && r[i] && e.$watch(function() {
                    return r[i] && r[i].$invalid && (r.$submitted || r[i].$dirty)
                }, function(e) {
                    e ? t.removeClass(n) : t.addClass(n)
                })
            }
        }
    }
    ]).directive("erudexTableSort", ["UtilService", "MESSAGE_STRINGS", function(u, i) {
        return {
            restrict: "A",
            priority: 1111,
            compile: function(e, t) {
                var r = {
                    itemsPerPage: 8,
                    pageNum: 1
                }
                  , a = {
                    field: t.erudexTableSort,
                    isAscending: !0
                }
                  , c = t.tableSortDefaults || "defaultTableSorts"
                  , n = t.tableItemsPerPage || "tableItemsPerPage";
                return {
                    pre: function(o, e, t) {
                        function s(e) {
                            var t = 7
                              , s = y.isObject(o[n]) ? o[n] : {}
                              , s = y.extend({
                                xxlarge: 15,
                                xlarge: 12,
                                "tab-10": 7,
                                default: 5
                            }, s)
                              , t = e.xxlarge ? s.xxlarge : e.xlarge ? s.xlarge : e["tab-10"] ? s["tab-10"] : s.default;
                            r.itemsPerPage != t && (r.itemsPerPage = t,
                            u.safeApply(o, y.noop))
                        }
                        y.extend(o, {
                            sort: a,
                            pagination: r,
                            sortTableCollection: function(e, t, s, r) {
                                var n, i;
                                a.field === t ? a.isAscending = !a.isAscending : a.isAscending = !0,
                                r && (a.isAscending = y.isDefined(r.isAscending) ? !!r.isAscending : a.isAscending),
                                r = e,
                                n = t,
                                e = s,
                                i = [{
                                    field: a.field = n,
                                    type: e,
                                    isAscending: a.isAscending
                                }],
                                y.isArray(o[c]) && y.forEach(o[c], function(e) {
                                    e && e.field != n && i.push(e)
                                }),
                                i.push({
                                    field: "id",
                                    type: "int",
                                    isAscending: !0
                                }),
                                u.sortObjectArray(r, i)
                            }
                        }),
                        s(o.mediaQueryStatus),
                        o.$on(i.RESIZE_WINDOW_EVENT, function(e, t) {
                            s(t)
                        })
                    }
                }
            }
        }
    }
    ]).directive("tableSortHeader", [function() {
        return {
            restrict: "A",
            compile: function(t, e) {
                t.addClass("erudex-sort-header");
                var s = e.tableSortHeader;
                function r(e) {
                    e.field === s ? e.isAscending ? (t.addClass("erudex-sort-asc"),
                    t.removeClass("erudex-sort-desc")) : (t.addClass("erudex-sort-desc"),
                    t.removeClass("erudex-sort-asc")) : (t.removeClass("erudex-sort-asc"),
                    t.removeClass("erudex-sort-desc"))
                }
                return function(s, e, t) {
                    y.isObject(s.sort) ? (s.$watch(function() {
                        return s.sort.field
                    }, function(e, t) {
                        r(s.sort)
                    }),
                    s.$watch(function() {
                        return s.sort.isAscending
                    }, function(e, t) {
                        r(s.sort)
                    })) : e.removeClass("erudex-sort-header")
                }
            }
        }
    }
    ]).directive("contentThumb", ["APP_CONFIG", function(n) {
        return {
            restrict: "A",
            scope: {
                content: "=contentThumb"
            },
            link: function(e, t, s) {
                var r = s.altSrc;
                r && t.on("error", function() {
                    r && t.attr("src", r),
                    r = null
                }),
                e.content && e.content.thumbnailUri ? t.attr("src", n.CONTENT_THUMB_ROOT + e.content.thumbnailUri) : t.attr("src", r)
            }
        }
    }
    ]).directive("cbIndeterminate", function() {
        return {
            restrict: "A",
            compile: function(e, t) {
                return t.type && "checkbox" === t.type.toLowerCase() ? function(e, t, s) {
                    e.$watch(s.cbIndeterminate, function(e) {
                        t[0].indeterminate = !!e
                    })
                }
                : y.noop
            }
        }
    }).directive("ePreventScroll", [function() {
        return {
            restrict: "A",
            link: function(e, t, s) {
                t.scroll(function() {
                    0 !== this.scrollTop && (this.scrollTop = 0)
                })
            }
        }
    }
    ]).directive("disableRightClick", function() {
        return {
            restrict: "A",
            link: function(e, t, s) {
                t.bind("contextmenu", function(e) {
                    e.preventDefault()
                })
            }
        }
    }).directive("tabScroll", function() {
        return {
            restrict: "A",
            link: function(e, t, s) {
                var r = $(window).height();
                $(".pre-scrollable").css({
                    height: r - 60
                }),
                $(".pre-scrollable-1").css({
                    height: r - 140
                })
            }
        }
    }).directive("uiNiceSelect", ["$interval", "UtilService", function(u, l) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                ngModel: "="
            },
            link: function(e, t, s, r) {
                var n, i;
                function o() {
                    t.niceSelect("update")
                }
                function a(e) {
                    n !== e && (n = e,
                    o())
                }
                function c() {
                    return t[0].length + t[0].innerText
                }
                t.niceSelect ? (t.niceSelect(),
                i = n = null,
                e.$watch(s.update, function(e) {
                    setTimeout(o, 100)
                }),
                e.$watch(s.reset, function(e) {
                    setTimeout(o, 100)
                }),
                s.$observe("disabled", function() {
                    t.next(".nice-select").removeClass("disabled").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0")
                }),
                t.on("change", o),
                e.$on("$destroy", function() {
                    t.off("change", o),
                    u.cancel(i)
                }),
                e.$watch(c, a),
                e.$watch("ngModel", function() {
                    setTimeout(o, 100)
                }),
                i = u(function() {
                    a(c())
                }, 750, 0, !1)) : l.$log.error("uiNiceSelect: Nice select not loaded.")
            }
        }
    }
    ]).directive("optionsDisabled", function(c) {
        function u(e, t, s, r, n) {
            for (var i = s.find("option"), o = 0, a = 0; o < i.length; o++) {
                var c, u = y.element(i[o]);
                "" != u.val() && ((c = {})[t] = r[a],
                u.attr("disabled", n(e, c)),
                a++)
            }
        }
        return {
            priority: 0,
            require: "ngModel",
            link: function(r, n, e, t) {
                var i = e.optionsDisabled.match(/^\s*(.+)\s+for\s+(.+)\s+in\s+(.+)?\s*/)
                  , o = i[3]
                  , a = c(i[1]);
                r.$watch(o, function(e, t) {
                    e && u(r, i[2], n, e, a)
                }, !0),
                r.$watch(e.ngModel, function(e, t) {
                    var s = c(o)(r);
                    e && u(r, i[2], n, s, a)
                })
            }
        }
    }).directive("enableMockTest", ["$interval", function(i) {
        return {
            restrict: "AE",
            link: function(e, t, s) {
                var r, n;
                s.itemDisabled && (0 < (r = s.time) ? n = i(function() {
                    var e = Math.floor(r / 1e3);
                    r -= 1e3,
                    e <= 0 && (i.cancel(n),
                    s.$set("itemDisabled", "false"),
                    s.$set("class", "exam-status"))
                }, 1e3) : (s.$set("itemDisabled", "false"),
                s.$set("class", "exam-status")))
            }
        }
    }
    ]).directive("timerCheck", ["$interval", function(o) {
        return {
            restrict: "AE",
            link: function(e, t, s) {
                var r = null
                  , n = s.enableBefore || 5
                  , i = s.time - ((new Date).getTime() + 60 * n * 1e3);
                0 < i ? r = o(function() {
                    var e = Math.floor(i / 1e3);
                    i -= 1e3,
                    e <= 0 && (o.cancel(r),
                    r = null,
                    s.editItemDisabled ? (s.$set("editItemDisabled", "true"),
                    t.addClass("edx-disabled")) : (s.$set("itemDisabled", "false"),
                    t.removeClass("edx-disabled")))
                }, 1e3) : s.editItemDisabled ? (s.$set("editItemDisabled", "true"),
                t.addClass("edx-disabled")) : (s.$set("itemDisabled", "false"),
                t.removeClass("edx-disabled")),
                t.on("$destroy", function() {
                    r && o.cancel(r)
                })
            }
        }
    }
    ]).directive("timeRemaining", ["$interval", "UtilService", function(i, o) {
        return {
            restrict: "AE",
            require: "^ngModel",
            scope: {
                ngModel: "="
            },
            link: function(t, e, s) {
                var r, n = t.ngModel;
                0 < n && (r = i(function() {
                    var e = Math.floor(n / 1e3);
                    n -= 1e3,
                    o.safeApply(t, function() {
                        t.ngModel = n
                    }),
                    e <= 0 && i.cancel(r)
                }, 1e3))
            }
        }
    }
    ]).directive("tabScrollHorizontally", ["$compile", function(t) {
        return {
            restrict: "A",
            replace: !0,
            link: function(s, r, e) {
                r.addClass("limit");
                r.before(t('<a ng-disabled=\'previous\' ng-click="scrollToLeft()" class="left-scroll-btn left" ><i class="fa fa-caret-left"></i> </a><a ng-disabled=\'next\' ng-click="scrollToRight()" class="right-scroll-btn right"><i class="fa fa-caret-right"></i></a>')(s)),
                s.previous = !0,
                s.next = !1,
                setTimeout(function() {
                    var e = y.element(document.querySelector(".limit"))[0].offsetWidth
                      , t = y.element(document.querySelector(".limit"))[0].scrollWidth - e;
                    0 == t && (s.next = !0),
                    s.scrollToRight = function() {
                        r[0].scrollLeft += Number(e),
                        s.previous = !1,
                        r[0].scrollLeft >= t ? (s.previous = !1,
                        s.next = !0) : (s.previous = !1,
                        s.next = !1)
                    }
                    ,
                    s.scrollToLeft = function() {
                        r[0].scrollLeft -= Number(e),
                        0 == r[0].scrollLeft ? s.previous = !0 : s.previous = !1,
                        s.next = !1
                    }
                }, 3e3)
            }
        }
    }
    ]).directive("zoomInOut", ["$compile", "$window", function(r, e) {
        return {
            restrict: "A",
            replace: !0,
            link: function(e, t, s) {
                t.addClass("limit");
                t.before(r('<div style="margin: .5rem 0"><a ng-disabled=\'previous\' ng-click="zoomIn()" class="zoomin"><i class="fa fa-minus-square fa-2x"></i> </a><a ng-disabled=\'next\' ng-click="zoomOut()" class="zoomout"><i class="fa fa-plus-square fa-2x"></i></a></div>')(e)),
                setTimeout(function() {
                    e.zoomOut = function() {
                        var e = y.element(document.querySelector(".limit img"))[0]
                          , t = e.style.width ? e.style.width.replace("px", "") : e.offsetWidth;
                        e.style.width = parseInt(t) + 100 + "px"
                    }
                    ,
                    e.zoomIn = function() {
                        var e = y.element(document.querySelector(".limit img"))[0]
                          , t = e.style.width ? e.style.width.replace("px", "") : e.offsetWidth;
                        e.style.width = parseInt(t) - 100 + "px"
                    }
                }, 2e3)
            }
        }
    }
    ]).directive("cardActionDropdown", ["$compile", function(n) {
        return {
            link: function(e, t, s) {
                var r = s.elemId;
                t.before(n('<div id="ddActions-' + r + '" class="dropdown-bg" ></div>')(e)),
                $(".action-list").addClass("menu-closed"),
                $(t).click(function(e) {
                    $(".action-list").addClass("menu-closed"),
                    $("#ul-" + r).removeClass("menu-closed"),
                    $("#ddActions-" + r).addClass("active"),
                    e.stopPropagation()
                }),
                $(".action-list, .dropdown-bg").click(function(e) {
                    $(".action-list").addClass("menu-closed"),
                    $(".dropdown-bg").removeClass("active"),
                    e.stopPropagation()
                })
            }
        }
    }
    ]).directive("numericQuestion", ["$timeout", function(e) {
        return {
            restrict: "AE",
            require: "^ngModel",
            scope: {
                ngModel: "=",
                isJee: "@"
            },
            link: function(e, t, s, r) {
                var n = "";
                e.$watch("isJee", function() {
                    n = "true" === e.isJee ? /^(0|[-]|[-][1-9][0-9]*|[1-9][0-9]*)$/ : /^(0|[-]|[-][1-9][0-9]*|[1-9][0-9]*)(\.[0-9]{0,2})?$/
                }),
                r.$parsers.push(function(e) {
                    return e && !n.test(e) && (e = e.substring(0, e.length - 1),
                    r.$setViewValue(e),
                    r.$render()),
                    e
                })
            }
        }
    }
    ])
}(window.angular, (window.jQuery,
window.MathJax));
var erudexApp = {
    lazy: {}
};
!function(g, a, S) {
    "use strict";
    g.module("com.erudex.common", ["com.erudex.common.plugins", "com.erudex.common.constant", "com.erudex.common.filters", "com.erudex.common.services", "com.erudex.common.directive", "ui.router", "mm.foundation", "blockUI", "templates"]).run(["$rootScope", "STATUS", "ASSIGNMENT_TYPE", "ASSESSMENT_TYPE", "APP_CONFIG", "REPORT", "CURRICULUM_LANGUAGE_KEY", "BUILD_CONFIG", "APP_PREFS", "MESSAGE_STRINGS", function(n, e, t, s, r, i, o, a, c, u) {
        n.STATUS = e,
        n.ASSIGNMENT_TYPE = t,
        n.ASSESSMENT_TYPE = s,
        n.GENERIC_ICONS = r.GENERIC_ICONS,
        n.SUBJECT_ICONS = r.SUBJECT_ICONS,
        n.CHANGE_PASS = r.CHANGE_PASS,
        n.OMR_ID = r.OMR_ID,
        n.QUESTION_TYPE = r.QUESTION_TYPE,
        n.QUESTION_USAGE_TYPE = r.QUESTION_USAGE_TYPE,
        n.REGEX = r.REGEX,
        n.FIXED_CHAT_GROUPS = r.FIXED_CHAT_GROUPS,
        n.REPORT = i,
        n.CURRICULUM_LANGUAGE_KEY = o,
        n.BUILD_CONFIG = a,
        n.SCROLL_BAR_CONFIG = r.SCROLL_BAR_CONFIG,
        n.disableModule = {},
        g.isArray(a.DISABLED_MODULES) && g.forEach(a.DISABLED_MODULES, function(e, t) {
            n.disableModule[e] = !0
        }),
        n.$on(u.USER_RETRIEVED_EVENT, function(e, t) {
            var s = t.user.userPreferences
              , r = {
                liveclasses: !0,
                "module.disable.studentCurriculum": !1,
                "module.disable.spellingBee": !0,
                "module.disable.studentCurriculumLectures": !0,
                "module.disable.studentCurriculumCommon": !1,
                "module.disable.studentCurriculumScholar": !0,
                "module.disable.studentCurriculumAr": !0,
                "module.disable.curriculumLectures": !0,
                "module.disable.CurriculumCommon": !1,
                "module.disable.curriculumScholar": !0,
                "module.disable.curriculumAr": !0
            };
            g.forEach(Object.keys(r), function(e) {
                e in s || (n.disableModule[e.replace("module.disable.", "")] = r[e])
            }),
            g.forEach(s, function(e, t) {
                var s;
                0 === t.indexOf(c.MODULE_USER_DISABLE.keyPrefix) ? (s = t.replace(c.MODULE_USER_DISABLE.keyPrefix, ""),
                n.disableModule[s] = n.disableModule[s] || e) : "liveclasses" === t && (n.disableModule[t] = void 0 !== e && !1 === e)
            })
        }),
        n.MENU_TOOLTIP = {
            DASHBOARD: "Dashboard",
            CURRICULUM: "Curriculum",
            FRIENDS: "Friend Groups",
            ASSIGNMENTS: "Assignments",
            ACTIVITIES: "Activities",
            ASSESSMENTS: "Assessments",
            E_ASSESSMENTS: "E-Assessments",
            ASSESSMENTS_COMPETITIVE: "Entrance Exams Practice",
            ASSESSMENTS_COMPETITIVE_MOCK: "Mock Tests",
            GOALS_DEMO: "Reports(Demo)",
            GOALS: "Goals",
            TIMELINE: "Timeline",
            SETTINGS: "Settings",
            GRADE_BOOK: "Grade Book",
            UPLOAD_CONTENT: "Upload Content",
            STUDENT_REPORTS: "Student Reports",
            LIVE_CLASSES: "Live Classes",
            REPORTS_DASHBOARD: "Reports"
        },
        n.TOP_BAR_TOOLTIP = {
            LOGOUT: "Logout",
            HELP: "Help",
            NOTIFICATIONS: "Notifications",
            FRIENDS: "Friends",
            CHAT: "Chat",
            SYNC: "Sync",
            SHARE_CONTENT: "Share Content",
            RATE_CONTENT: "Rate Content",
            FAVORITE_CONTENT: "Favorite",
            MESSAGE: "Message",
            BROADCAST: "Broadcast",
            GROUP_CHAT: "Group Chat",
            CLEAR_ALL: "Clear All",
            FEEDBACK: "Feedback"
        },
        n.CONTENT_TOOLTIP = {
            VIEW_CONCEPT: "click to view concept"
        },
        n.NUMERIVAL_VALUE_VALIDATION_PATTERN = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/,
        n.NUMERIVAL_VALUE_VALIDATION_ALLOW_PLUS_SIGN = !0,
        g.isString(a.BRAND) && a.BRAND.indexOf("@") < 0 ? g.element("body").addClass(a.BRAND) : g.element("body").addClass("erudex"),
        g.forEach(a.BRAND_KEYS, function(e) {
            g.element("body").addClass(e)
        }),
        "gayatri" !== a.BRAND_KEY && "mauritius" !== a.BRAND_KEY || (c.CONTENT_VIEW.disabled.byBuild = !0,
        c.CONTENT_VIEW_AUGMENTED.disabled.byBuild = !0,
        c.CURRICULUM_ALT_LANGUAGE.disabled.byBuild = !0,
        c.CURRICULUM_ALT_LANGUAGE_NAME.disabled.byBuild = !0,
        c.CURRICULUM_PRIMARY_LANGUAGE_NAME.disabled.byBuild = !0,
        c.CURRICULUM_VIEW.disabled.byBuild = !0,
        c.PRINT_ERUDEX_LOGO.disabled.byBuild = !0),
        "gayatri" !== a.BRAND_KEY && "srigayatri" !== a.BRAND_KEY || (c.RESTRICT_TO_SINGLE_MOCK_TEST.default = !1,
        n.NUMERIVAL_VALUE_VALIDATION_PATTERN = /^[-]?((\d+(\.\d{0,2})?)|(\.\d{0,2}))$/,
        n.NUMERIVAL_VALUE_VALIDATION_ALLOW_PLUS_SIGN = !1)
    }
    ]).run(["$rootScope", "STORAGE_KEYS", "UtilService", "BUILD_CONFIG", function(e, t, s, r) {
        var e = e.context = g.isObject(e.context) ? e.context : {}
          , n = s.isConfigValueSet(r.BROWSER_SHOP_LINK)
          , i = s.isConfigValueSet(r.BROWSER_LOGOUT_REDIRECT)
          , o = null;
        s.isEmptyOrBlank(o) && (o = "english"),
        g.extend(e, {
            language: o,
            device: null,
            role: null,
            showShopLink: !1,
            browserShopLink: n ? r.BROWSER_SHOP_LINK : null,
            allowLogoutOverride: !1,
            browserLogoutLink: i ? r.BROWSER_LOGOUT_REDIRECT : null,
            isCordovaApp: g.isObject(S.cordova),
            isWindowsApp: /Erudex\/Windows/i.test(S.navigator.userAgent),
            isBrowser: !1
        }),
        e.isBrowser = !(e.isCordovaApp || e.isWindowsApp),
        e.isBrowser && (e.showShopLink = n,
        e.allowLogoutOverride = i)
    }
    ]).run(["$rootScope", "$timeout", "$state", "$window", "UtilService", "MESSAGE_STRINGS", "PAGE_ACTIVITY_TYPE", "BaseUserActivityPlugin", function(u, t, l, e, d, s, c, m) {
        var r = S.Foundation
          , n = (r.utils.register_media("mobile-only", "erudex-mq-mobile-only"),
        r.utils.register_media("tab-10", "erudex-mq-tab-10"),
        r.utils.throttle(function() {
            a(document).foundation()
        }, 300));
        function p(e, t, s, r) {
            var n, i = e.data || {}, o = g.isArray(i.excludedParams) ? i.excludedParams : [], a = g.isArray(i.encodedIdParams) ? i.encodedIdParams : [], c = null;
            return i.pageCategory && i.pageId && (n = {},
            g.forEach(t, function(e, t) {
                o.indexOf(t) < 0 && (0 <= a.indexOf(t) && e && (1 == (e = d.decodeIds(e)).length ? e = e[0] : 0 === e.length && (e = null)),
                e) && (n[t] = e)
            }),
            c = {
                activityTime: r,
                activityType: s,
                pageId: i.pageId,
                pageCategory: i.pageCategory,
                pageModule: u.context.module,
                pageUrl: l.href(e.name),
                pageState: e.name,
                pageParams: n
            }),
            c
        }
        u.$on("$viewContentLoaded", function() {
            n()
        }),
        u.$on("$includeContentLoaded", function(e, t) {
            n()
        }),
        S.CKEDITOR && u.$on("$stateChangeStart", function(e, t, s, r, n) {
            g.forEach(CKEDITOR.instances, function(e) {
                e.commands.maximize && 1 === e.commands.maximize.state && e.commands.maximize.exec()
            })
        }),
        u.$on("$stateChangeSuccess", function(e, s, r, n, i) {
            g.element(".e-icon-side-nav .tooltip").addClass("ng-hide");
            var o = []
              , a = Date.now();
            t(function() {
                var e, t;
                u.context.module && (e = p(n, i, c.PAGE_LEAVE, a),
                t = p(s, r, c.PAGE_ENTER, a),
                e && o.push(e),
                t && o.push(t),
                m.storePageActivity(o, function(e) {
                    e && e.result || d.$log.error("Error saving page activity")
                }, function(e) {
                    d.$log.error("Error saving page activity")
                }))
            }, 50, !1)
        });
        var i = {}
          , o = (u.mediaQueryStatus = i,
        r.utils.throttle(function() {
            g.forEach(r.media_queries, function(e, t) {
                i[t] = r.utils.match(e)
            }),
            u.$broadcast(s.RESIZE_WINDOW_EVENT, i)
        }, 300));
        o(),
        g.element(e).on("resize.erudexCommon", o)
    }
    ]).run(["$rootScope", "$document", "$log", "MESSAGE_STRINGS", "SESSION_ACTIVITY_TYPE", "BaseUserActivityPlugin", function(t, e, s, r, n, i) {
        var o = !1
          , a = 0
          , c = Date.now();
        setInterval(function() {
            var e = Date.now();
            (a += e - c) < 0 && (a = 0);
            37500 < Math.abs(e - c) && (t.$broadcast(r.TIME_SKIP_EVENT, {
                oldTime: c,
                newTime: e
            }),
            s.info("Time skip detected! lastTime: " + c + ", new: " + e));
            !o && 15e5 < a && (o = !0,
            t.$broadcast(r.IDLE_START_EVENT),
            s.info("Idle start"),
            i.storeSessionActivity({
                sessionActivity: n.IDLE_START,
                timeStamp: Date.now()
            }, g.noop, g.noop));
            c = e
        }, 15e3);
        e.on("mousemove keydown mousedown touchstart touchmove", function(e) {
            a = 0,
            o && (o = !1,
            t.$broadcast(r.IDLE_STOP_EVENT),
            s.info("Idle stop"),
            i.storeSessionActivity({
                sessionActivity: n.IDLE_STOP,
                timeStamp: Date.now()
            }, g.noop, g.noop))
        })
    }
    ]).run(function() {
        S.CKEDITOR && (CKEDITOR.config.mathJaxLib = "../js/libs/mathjax-2.7/MathJax.js?config=custom-TeX-AMS_HTML,custom")
    }).run([function() {
        var e, t;
        e = S.navigator.userAgent,
        (0 < (t = e.indexOf("MSIE ")) ? parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) : 0 < e.indexOf("Trident/") ? (t = e.indexOf("rv:"),
        parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)) : 0 < (t = e.indexOf("Edge/")) && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10)) && g.element("body").addClass("ie")
    }
    ]).config(["blockUIConfig", function(e) {
        e.message = "",
        e.delay = 100,
        e.autoBlock = !1,
        e.autoInjectBodyBlock = !1,
        e.template = '<div class="block-ui-overlay"></div><div class="block-ui-message-container" aria-live="assertive" aria-atomic="true"><div class="block-ui-message block-ui-content-erudex"><img ng-src="{{invertImgPath}}" class="top-bar-logo"/><div>Loading...<i class="fa fa-spinner fa-spin"></i></div></div></div>'
    }
    ]).run(["$rootScope", "$state", "$q", "$location", function(i, o, a, e) {
        var c = o.transitionTo;
        o.transitionTo = function(e, t, s) {
            var r = o.$current
              , n = o.params;
            return e = e.name ? e : o.get(e),
            !1 !== s.notify && i.$broadcast("$beforeStateChange", e, t, r, n).defaultPrevented ? (S.location.href,
            S.history.forward(),
            setTimeout(function() {
                S.location.href.indexOf(r.url.prefix) < 0 && S.history.back()
            }, 400),
            a.reject(new Error("transition prevented"))) : c(e, t, s)
        }
    }
    ]).config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide", function(e, t, s, r) {
        erudexApp.lazy.controller = e.register,
        erudexApp.lazy.compileProvider = t,
        erudexApp.lazy.filterProvider = s,
        erudexApp.lazy.provide = r
    }
    ]).config(["$tooltipProvider", function(e) {
        !!S.cordova ? e.options({
            trigger: "none"
        }) : Modernizr.touch ? e.options({
            trigger: function(s, r, e) {
                return r.data("eTipBound") || (r.data("isTouched", !1),
                r.bind("touchstart mouseenter mouseleave", function(e) {
                    var t;
                    e && 0 <= e.type.indexOf("touch") ? (r.data("isTouched", !0),
                    (t = r.data("touchTimeOut")) && clearTimeout(t),
                    t = setTimeout(function() {
                        r.data("isTouched", !1)
                    }, 1050),
                    r.data("touchTimeOut", t)) : e && 0 <= e.type.indexOf("enter") ? r.data("mouseEntered", !r.data("isTouched")) : r.data("mouseEntered", !1),
                    s.$apply()
                }),
                r.data("eTipBound", !0)),
                !r.data("isTouched") && r.data("mouseEntered")
            }
        }) : e.options({
            appendToBody: !0
        })
    }
    ])
}(window.angular, window.jQuery, window),
function(z, J) {
    "use strict";
    z.module("com.erudex.common").controller("BaseResourceCtrl", ["$scope", "$timeout", "$rootScope", "$state", "$interval", "$modal", "NOTE_COLORS", "STORAGE_KEYS", "$stateParams", "UtilService", "ResourceCollaborationService", "MESSAGE_STRINGS", "APP_CONFIG", "APP_PREFS", "CURRICULUM_LANGUAGE_KEY", "USER_ACTIVITY_THRESHOLD", "resourcePlugin", "userActivityPlugin", "$sce", function(l, k, $, G, e, x, j, V, t, d, m, s, B, r, p, F, g, q, S) {
        m.loadOptions({
            relatedContentHeading: "Chapter Content",
            show: {
                relatedContent: !0,
                chapterFeatures: !0,
                recordedResources: !0,
                vlabResources: !0,
                arResources: !0,
                augmentedContent: !0,
                notes: !0,
                activityResources: !1,
                selectLanguage: !0
            }
        });
        var f = this
          , n = t.contentUUID
          , i = t.track
          , o = (o = l.user || {}).id ? o : null
          , h = d.getCurrentSubject()
          , v = h ? h.id : -1
          , T = -1
          , E = null
          , I = null
          , Y = s.ACTIVITY_TYPE_CONTENT_REVIEW
          , A = ""
          , C = h ? h.iconType : "generic"
          , a = 0
          , c = s.CONTENT_EVENT
          , u = !0
          , y = m.getCurrentSelectedLanguage()
          , b = F
          , Q = {
            video: "video",
            pdf: "book",
            html: "book",
            chapterJson: "book"
        }
          , N = {
            swfLoadFail: 'Error loading Flash content.<br/>Please ensure that you have <a target="_blank" href="https://helpx.adobe.com/flash-player.html">Adobe Flash Player installed and enabled</a> for your browser.',
            swfObjectMissing: "Flash playback is not available on this device.",
            altUriNotAvailable: d.getPreference(r.CURRICULUM_ALT_LANGUAGE_NAME.key, "") + " not available."
        };
        function _() {
            d.finishLoadSuccess(l, {
                status: l.resource ? s.LOADING_FINISHED : s.LOADING_ERROR,
                title: l.resource ? l.resource.name : "Unknown Resource",
                resource: l.resource,
                subjectId: v
            })
        }
        function R(e, t) {
            var s = (t = t || {}).resourceType || "video";
            A = A.replace("video/webm", "video/mp4"),
            d.canPlayType(A) ? g.getResourceUrl(e, function(e) {
                u = !1;
                e = S.trustAsResourceUrl(e);
                l.config.sources = [{
                    src: e,
                    type: A
                }],
                d.safeApply(l, function() {
                    l.resourceType = s
                })
            }, f.resourceError) : l.resourceType = "cannotPlay"
        }
        function w() {
            g.getResourceUrl({
                uuid: "00000000-0000-0000-0000-000000000000",
                contentResourceType: {}
            }, z.noop, z.noop)
        }
        function U() {
            !l.resource || I && I.contentUUID == n || ("chapter" === (I = {
                userId: o ? o.id : -1,
                subjectId: T,
                contentUUID: n,
                contentName: l.resource ? l.resource.name : "Review Activity",
                mimeType: l.resource.contentResourceType.type || "",
                contentType: {
                    thumbnailUri: l.resource.thumbnailUri,
                    subjectType: C,
                    displayType: l.resource.contentResourceType.displayType || Q[l.resourceType]
                },
                activityStartTime: Date.now(),
                activityEndTime: -1,
                activityType: Y,
                trackId: i ? d.decodeIds(i)[0] : null,
                events: []
            }).contentType.displayType && (I.contentType.displayType = "book"),
            d.$log.log("BaseResourceCtrl: startActivityTracking"))
        }
        function O() {
            var e, t;
            d.$log.log("endActivityTracking"),
            I && (I.activityEndTime = Date.now(),
            0 < a && (I.timeSkipDifference = a,
            I.originalEndTime = I.activityEndTime,
            I.activityEndTime -= a),
            I.error = {},
            e = b[l.resourceType] || b.unknown,
            t = Math.abs(I.activityEndTime - I.activityStartTime),
            I.activityEndTime < I.activityStartTime && (I.hasError = !0,
            I.error[s.ERROR_ACTIVITY_END_BEFORE_START] = !0,
            I.recordedActivityEndTime = I.activityEndTime,
            I.recordedActivityStartTime = I.activityStartTime,
            I.activityEndTime = I.activityStartTime + e,
            t = e + 1),
            36e5 < t && (I.hasError = !0,
            I.error[s.ERROR_ACTIVITY_SESSION_OVER_HOUR] = !0,
            I.recordedActivityEndTime = I.activityEndTime,
            I.recordedActivityStartTime = I.activityStartTime,
            I.activityEndTime = I.activityStartTime + 36e5),
            e && e < t ? q.storeActivity(I, function(e) {
                d.$log.log(e)
            }, function(e) {
                d.$log.error(e)
            }) : d.$log.log("Review time (" + t + "ms) less than threshold " + e)),
            I = null,
            a = 0
        }
        function M(e, t) {
            I && z.isArray(I.events) ? (t = t || {},
            I.events.push({
                type: e,
                datetime: Date.now(),
                details: t
            })) : d.$log.warn("Activity object has not been initialized")
        }
        function P() {
            d.$log.log("onPause: Pausing review activity tracking."),
            O()
        }
        function L() {
            d.$log.log("onResume: Resuming review activity tracking."),
            U()
        }
        function H() {
            l.timer.enabled ? (l.timer.value -= 1e3,
            l.timer.value <= 0 && (e.cancel(l.timer.promise),
            l.timer.promise = null,
            m.goToNextContent())) : l.timer.promise && (e.cancel(l.timer.promise),
            l.timer.promise = null)
        }
        function D() {
            m.setContentLoaded({
                content: l.resource,
                subject: l.subject,
                chapter: l.chapter,
                topic: l.topic,
                trackId: i
            }),
            m.setIsLoaded("content", !0),
            M(c.CONTENT_LOADED)
        }
        function W() {
            var e;
            f.videoApi && !u && (u = !0,
            e = f.videoApi,
            setTimeout(function() {
                function t(e) {
                    r || (r = !0,
                    s.removeEventListener("playing", t, !1),
                    e && "playing" === e.type || 0 !== s.currentTime ? d.$log.info("Video autoplay working.") : (d.$log.info("Video could not autoplay"),
                    f.videoApi.pause()))
                }
                var s = e.mediaElement[0]
                  , r = !1;
                f.videoApi.play();
                s.addEventListener("playing", t, !1),
                setTimeout(t, 1e3)
            }, 500))
        }
        z.extend(l, {
            resource: d.getCurrentResource(),
            topic: d.getCurrentTopic(),
            chapter: d.getCurrentChapter(),
            subject: d.getCurrentSubject(),
            show: m.options.show,
            fullResource: !1,
            resourceType: "",
            chapterItems: [],
            timer: {
                enabled: d.getPreference(r.CONTENT_VIEW_NEXT_TIMER.key, !1),
                length: 1e3 * parseInt(d.getPreference(r.CONTENT_VIEW_NEXT_TIMER_LENGTH.key, r.CONTENT_VIEW_NEXT_TIMER_LENGTH.default)),
                value: 1e3 * parseInt(d.getPreference(r.CONTENT_VIEW_NEXT_TIMER_LENGTH.key, r.CONTENT_VIEW_NEXT_TIMER_LENGTH.default))
            },
            config: {
                preload: "'auto'",
                autoHide: !0,
                autoHideTime: 3e3,
                autoPlay: !1,
                sources: [],
                tracks: [],
                theme: {
                    url: "../css/libs/videogular/videogular.6b628b9e.css"
                }
            },
            swfErrorMsg: N.swfLoadFail,
            swf: {
                params: {
                    wmode: "opaque"
                }
            },
            pdfOptions: {
                url: null,
                scale: "fit-page",
                page: 1
            }
        }),
        this.onUserReady = function() {
            o = l.user,
            I && (I.userId = o.id)
        }
        ,
        this.loadResource = function() {
            var e, t, s, r, n, i, o, a, c, u = y;
            y || (u = p.PRIMARY),
            l.resource ? (E && E.uuid === l.resource.uuid ? d.safeApply(l, function() {
                l.resourceType = "",
                l.resourceUrl = "",
                l.pdfViewer = null,
                l.pdfOptions.url = null
            }) : (E = l.resource,
            l.resource = z.copy(l.resource)),
            e = l.resource,
            u === p.ALTERNATE ? d.isEmptyOrBlank(e.altUri) ? (z.extend(e, E),
            y = p.PRIMARY,
            m.setSelectedLanguage(y)) : (e.name = e.altName,
            e.uri = e.altUri,
            e.contentResourceType = e.altContentResourceType) : z.extend(e, E),
            u = e,
            u = {
                uuid: (u = z.isObject(u) ? u : {}).uuid
            },
            t = n = c = !1,
            i = l.topic,
            s = l.chapter,
            r = l.subject,
            i && (c = 0 != J.apply("..contentResources{.uuid == $uuid}", i, u).length),
            s && (c ? n = 0 != J.apply(".topics{.id == $id}", s, {
                id: i.id
            }).length : ((n = 0 != J.apply(".contentResources{.uuid == $uuid}", s, u).length) ? i = null : (i = J.apply(".topics{..contentResources.uuid == $uuid}", s, u)[0],
            n = !!i),
            c = !(!i || !n))),
            r && (n ? t = 0 != J.apply(".chapters{.id == $id}", r, {
                id: s.id
            }).length : (s = J.apply(".chapters{..contentResources.uuid == $uuid}", r, u)[0],
            (n = t = !!s) && !c && (i = J.apply(".topics{..contentResources.uuid == $uuid}", s, u)[0],
            c = !!i))),
            l.topic = c ? i : null,
            l.chapter = n ? s : null,
            l.subject = t ? r : null,
            h = t ? r : null,
            A = e.contentResourceType.type,
            T = e.subjectId || (h ? h.id : -1),
            C = e.subjectIconDir || C) : (T = -1,
            C = null,
            A = "error"),
            C = C || "generic",
            I && (I.contentType.subjectType = C),
            v = T,
            l.config.autoPlay = !1,
            l.isSwfLoaded = !1,
            -1 < A.indexOf("video") ? R(e, {
                resourceType: "video"
            }) : -1 < A.indexOf("audio") ? R(e, {
                resourceType: "audio"
            }) : -1 < A.indexOf("image") ? (u = e,
            g.getResourceUrl(u, function(e) {
                d.safeApply(l, function() {
                    l.resourceUrl = S.trustAsResourceUrl(e),
                    l.resourceType = "image",
                    U(),
                    D()
                })
            }, f.resourceError)) : -1 < A.indexOf("html") ? (c = e,
            g.getResourceUrl(c, function(e) {
                d.safeApply(l, function() {
                    l.resourceUrl = S.trustAsResourceUrl(e),
                    l.resourceType = "html",
                    U(),
                    D()
                })
            }, f.resourceError)) : -1 < A.indexOf("json") && l.resource.chapterItemType ? (o = e,
            l.chapterItems = [],
            a = !1,
            l.getUserCurriculum(function(e) {
                for (var t = 0; t < e.length && !a; t++)
                    z.forEach(e[t].subject.chapters, function(e, t) {
                        a || (z.forEach(e.contentResources, function(e, t) {
                            e.uuid === o.uuid && (a = !0)
                        }),
                        a && z.forEach(e.chapterItems, function(e, t) {
                            e.type === o.chapterItemType && l.chapterItems.push(e)
                        }))
                    });
                a ? (l.resourceType = "chapterJson",
                U(),
                D()) : l.resourceType = "error"
            }, f.resourceError)) : "application/x-shockwave-flash" === A ? (i = e,
            window.swfobject ? g.getResourceUrl(i, function(e) {
                d.safeApply(l, function() {
                    l.resourceUrl = e
                }),
                k(function() {
                    l.resourceType = "swf"
                }, 100)
            }, f.resourceError) : d.safeApply(l, function() {
                l.resourceType = "swfError",
                l.swfErrorMsg = N.swfObjectMissing
            })) : -1 < A.indexOf("pdf") ? (n = e,
            g.getResourceUrl(n, function(e) {
                d.safeApply(l, function() {
                    l.pdfOptions.url = e,
                    l.resourceType = "pdf"
                })
            }, f.resourceError)) : l.resourceType = "error" === A ? "error" : "unknown",
            _()
        }
        ,
        this.resourceError = function(e) {
            d.$log.error(e),
            d.safeApply(l, function() {
                l.resourceType = "error"
            }),
            _()
        }
        ,
        this.clearCurrentSubject = function() {
            h = null
        }
        ,
        this.loadActivity = function(e) {
            I && e && (I.trackId = e.id),
            m.setCurrentActivity(e)
        }
        ,
        z.extend(l, {
            goToNextResource: m.goToNextContent,
            onPlayerReady: function(e) {
                d.$log.log("videogular onPlayerReady"),
                f.videoApi = e,
                m.setVideoApi(e)
            },
            onPlayerCanPlay: function(e) {
                console.info("Video can play: "),
                W()
            },
            onPlayerStateChange: function(e) {
                switch (d.$log.log("New player state " + e),
                "play" !== e || I || (U(),
                D()),
                e) {
                case "play":
                    M(c.VIDEO_PLAY, {
                        videoTime: f.videoApi.currentTime
                    });
                    break;
                case "pause":
                    M(c.VIDEO_PAUSE, {
                        videoTime: f.videoApi.currentTime
                    });
                    break;
                case "stop":
                    M(c.VIDEO_STOP, {
                        videoTime: f.videoApi.currentTime
                    })
                }
            },
            pauseVideo: function(e) {
                "link" === e && d.$log.log("Pausing video due to link click"),
                f.videoApi && f.videoApi.pause()
            },
            toggleEndTimer: function() {
                l.timer.enabled ? l.timer.promise ? (e.cancel(l.timer.promise),
                l.timer.promise = null) : (l.timer.value <= 0 && (l.timer.value = l.timer.length),
                l.timer.promise = e(H, 1e3)) : l.timer.promise && (e.cancel(l.timer.promise),
                l.timer.promise = null)
            },
            replayVideo: function() {
                l.timer.promise && (e.cancel(l.timer.promise),
                l.timer.promise = null),
                l.showEndScreen = !1,
                f.videoApi.seekTime(0),
                f.videoApi.play()
            },
            onVideoEnded: function() {
                M(c.VIDEO_END, {
                    videoTime: f.videoApi.currentTime
                }),
                O(),
                f.videoApi.isFullScreen && f.videoApi.toggleFullScreen(),
                l.timer.enabled && l.show.nextResource && (l.timer.value = l.timer.length,
                l.timer.promise = e(H, 1e3)),
                l.showEndScreen = !0
            },
            onSwfLoaded: function(e) {
                d.$log.info("Swf loaded: ", e),
                e && e.success ? (l.isSwfLoaded = !0,
                U(),
                D()) : (l.resourceType = "swfError",
                l.swfErrorMsg = N.swfLoadFail)
            },
            onPdfReady: function(e) {
                l.pdfViewer = e,
                U(),
                D()
            },
            getUserCurriculum: function(e, t) {
                t("ResourceController.getUserCurriculum(): Default nop")
            }
        }),
        l.$on("$destroy", function() {
            d.$log.log("resourceController $destroy"),
            O(),
            m.resetOptions(),
            l.timer.promise && (e.cancel(l.timer.promise),
            l.timer.promise = null),
            document.removeEventListener("pause", P, !1),
            document.removeEventListener("resume", L, !1),
            window.onbeforeunload = null
        }),
        l.$on("$beforeStateChange", function(e, t, s, r, n) {
            t.name !== r.name && w()
        }),
        window.onbeforeunload = function() {
            w()
        }
        ,
        l.$on(s.TIME_SKIP_EVENT, function(e, t) {
            a += Math.abs(t.newTime - t.oldTime)
        }),
        document.addEventListener("pause", P, !1),
        document.addEventListener("resume", L, !1),
        m.registerSelectedLanguageUpdateListener(function(e) {
            e !== y && (y = e,
            f.loadResource())
        }),
        f.resourceId = n,
        f.trackId = i
    }
    ]).directive("resourceChapterContent", ["APP_CONFIG", "CURRICULUM_LANGUAGE_KEY", "UtilService", function(C, y, b) {
        return {
            restrict: "E",
            scope: {
                resources: "=",
                clickCallback: "&",
                iconType: "=",
                defaultIcon: "@",
                selectedUuid: "=",
                autoPickIcon: "@?",
                language: "=",
                useGenericIcon: "@?"
            },
            link: function(p, t, e) {
                var s, g = "related-resource no-select", S = !0 === p.autoPickIcon || "true" === p.autoPickIcon, f = !0 === p.useGenericIcon || "true" === p.useGenericIcon, h = "/" + p.defaultIcon + ".png", v = "/" + C.SUBJECT_ICONS.ANIMATION + ".png", T = "/" + C.SUBJECT_ICONS.VIDEO + ".png", E = "/" + C.SUBJECT_ICONS.PDF + ".png", I = "/" + C.SUBJECT_ICONS.IMAGE + ".png", A = "/" + C.SUBJECT_ICONS.AUDIO + ".png";
                function r(e, r) {
                    var n, i = "", o = "", a = C.ICON_ROOT + p.iconType + h, c = C.ICON_ROOT + (f ? "generic" : p.iconType) + v, u = C.ICON_ROOT + (f ? "generic" : p.iconType) + T, l = C.ICON_ROOT + "generic" + E, d = C.ICON_ROOT + "generic" + I, m = C.ICON_ROOT + "generic" + A;
                    s = e || [],
                    z.forEach(s, function(e, t) {
                        o = e.uuid === p.selectedUuid ? "related-resource no-select resource-highlight" : g,
                        n = r !== y.ALTERNATE || b.isEmptyOrBlank(e.altName) ? e.name : e.altName,
                        i += '<div class="' + o + '" index="' + t + '">';
                        var t = null
                          , s = "";
                        e.thumbnailUri && (t = C.CONTENT_THUMB_ROOT + e.thumbnailUri),
                        s = e.chapterItemType && 0 <= C.KNOWN_CHAPTER_ITEM_ICONS.indexOf(e.chapterItemType) ? C.ICON_ROOT + "chapter-item/" + e.chapterItemType + ".png" : S && "animation" === e.contentResourceType.displayType ? c : S && "video" === e.contentResourceType.displayType ? u : S && e.contentResourceType.type.startsWith("image/") ? d : S && e.contentResourceType.type.startsWith("audio/") ? m : S && "application/pdf" === e.contentResourceType.type ? l : a,
                        i = i + ('<div class="related-resource-img-wrapper"><img src="' + (t = t || s)) + '" data-alt-src="' + s + '"/></div>&nbsp;' + n + "</div>"
                    }),
                    t.html(i),
                    t.find("img").on("error", function() {
                        var e = z.element(this).data("altSrc");
                        e && this.src !== e && (this.src = e)
                    })
                }
                t.on("click", ".related-resource", function(e) {
                    console.info("related-resource click");
                    var t = z.element(this)
                      , t = parseInt(t.attr("index"));
                    !isNaN(t) && 0 <= t && t < s.length && p.clickCallback({
                        resource: s[t]
                    })
                }),
                p.$watchCollection("resources", function(e, t) {
                    r(e, p.language)
                }),
                p.$watch("language", function(e, t) {
                    r(p.resources, e)
                })
            }
        }
    }
    ]).controller("PreviewOverlayController", ["$scope", "$sce", "$stateParams", "ResourceCollaborationService", "UtilService", "APP_CONFIG", "MESSAGE_STRINGS", "USER_ACTIVITY_THRESHOLD", "resourcePlugin", "userActivityPlugin", "appPlugin", "details", "user", function(i, n, e, t, o, s, r, a, c, u, l, d, m) {
        var p, g, S, f = this, h = "", v = "", T = !0, E = null, I = r.ACTIVITY_TYPE_CONTENT_REVIEW, A = e.track, C = r.CONTENT_EVENT, y = 0, b = a, N = /((http|https):\/\/)?(www\.)?(youtube\.com|youtu\.be)(\/)?([a-zA-Z0-9\-\.]+)\/?/;
        function _() {
            t.setContentLoaded({
                content: i.resource,
                subject: i.subject,
                chapter: i.chapter,
                topic: i.topic,
                trackId: A
            }),
            t.setIsLoaded("content", !0),
            U(C.CONTENT_LOADED)
        }
        function R() {
            !i.resource || E && E.contentUUID == i.resource.uuid || ("chapter" === (E = {
                userId: m ? m.id : -1,
                subjectId: i.resource.subjectId,
                contentUUID: i.resource.uuid,
                contentName: i.resource ? i.resource.name : "Review Activity",
                mimeType: i.resource.contentResourceType.type || "",
                contentType: {
                    thumbnailUri: i.resource.thumbnailUri,
                    subjectType: i.resource.subjectIconDir,
                    displayType: i.resource.contentResourceType.displayType || resource2DisplayType[i.resourceType]
                },
                activityStartTime: Date.now(),
                activityEndTime: -1,
                activityType: I,
                trackId: A ? o.decodeIds(A)[0] : null,
                events: []
            }).contentType.displayType && (E.contentType.displayType = "book"),
            o.$log.log("PreviewOverlayController: startActivityTracking"))
        }
        function w() {
            var e, t;
            o.$log.log("PreviewOverlayController: endActivityTracking"),
            E && (E.activityEndTime = Date.now(),
            0 < y && (E.timeSkipDifference = y,
            E.originalEndTime = E.activityEndTime,
            E.activityEndTime -= y),
            E.error = {},
            e = b[i.resourceType] || b.unknown,
            t = Math.abs(E.activityEndTime - E.activityStartTime),
            E.activityEndTime < E.activityStartTime && (E.hasError = !0,
            E.error[r.ERROR_ACTIVITY_END_BEFORE_START] = !0,
            E.recordedActivityEndTime = E.activityEndTime,
            E.recordedActivityStartTime = E.activityStartTime,
            E.activityEndTime = E.activityStartTime + e,
            t = e + 1),
            36e5 < t && (E.hasError = !0,
            E.error[r.ERROR_ACTIVITY_SESSION_OVER_HOUR] = !0,
            E.recordedActivityEndTime = E.activityEndTime,
            E.recordedActivityStartTime = E.activityStartTime,
            E.activityEndTime = E.activityStartTime + 36e5),
            e && e < t ? u.storeActivity(E, function(e) {
                o.$log.log(e)
            }, function(e) {
                o.$log.error(e)
            }) : o.$log.log("Review time (" + t + "ms) less than threshold " + e)),
            E = null,
            y = 0
        }
        function U(e, t) {
            E && z.isArray(E.events) ? (t = t || {},
            E.events.push({
                type: e,
                datetime: Date.now(),
                details: t
            })) : o.$log.warn("PreviewOverlayController: Activity object has not been initialized")
        }
        function O(e) {
            var r = null;
            h = o.isEmptyOrBlank((e = e || {}).mediaType) ? "error" : e.mediaType,
            /image/.test(h) && (r = e.annotatedImage),
            s.VIEWABLE_MEDIA_TYPES_REGEX.test(h) ? l.viewUserAttachment(e, function(e) {
                var t, s;
                e && e.result ? (e = e.value.uri,
                t = n.trustAsResourceUrl(e),
                s = "error",
                /video/.test(h) ? (i.config.sources = [{
                    src: t,
                    type: h
                }],
                s = "video") : /audio/.test(h) ? (i.config.sources = [{
                    src: t,
                    type: h
                }],
                s = "audio") : /image/.test(h) ? (i.resourceUrl = r || t,
                s = "image") : /pdf/.test(h) && (i.pdfOptions.url = e,
                s = "pdf"),
                o.safeApply(i, function() {
                    i.resourceType = s
                })) : i.resourceType = "error"
            }, f.resourceError) : i.resourceType = "error" === h ? "error" : "unknown"
        }
        function M() {
            var r;
            f.videoApi && !T && (T = !0,
            r = f.videoApi,
            setTimeout(function() {
                function e(e) {
                    s || (s = !0,
                    e && "playing" === e.type || 0 !== t.currentTime ? o.$log.info("Video autoplay working.") : (o.$log.info("Video could not autoplay"),
                    f.videoApi.pause()))
                }
                var t = r.mediaElement[0]
                  , s = !1;
                f.videoApi.play();
                t.addEventListener("playing", e, !1),
                setTimeout(e, 1e3)
            }, 500))
        }
        switch (this.videoApi = null,
        z.extend(i, {
            resourceUrl: "",
            resourceType: "",
            chapterItems: [],
            showNewWindowBtn: !1,
            config: {
                preload: "'auto'",
                autoHide: !1,
                autoHideTime: 3e3,
                autoPlay: !1,
                sources: [],
                tracks: [],
                theme: {
                    url: "../css/libs/videogular/videogular.6b628b9e.css"
                }
            },
            pdfOptions: {
                url: null,
                scale: "fit-page",
                page: 1
            },
            showPlaylist: !1
        }),
        this.resourceError = function(e) {
            o.$log.error(e),
            o.safeApply(i, function() {
                i.resourceType = "error"
            })
        }
        ,
        this.resourceUrlSuccess = function(e) {
            var t = n.trustAsResourceUrl(e);
            switch (v) {
            case "video":
            case "audio":
                T = !1,
                i.config.sources = [{
                    src: t,
                    type: h
                }];
                break;
            case "html":
            case "image":
                i.resourceUrl = t,
                _(),
                R();
                break;
            case "pdf":
                i.pdfOptions.url = e,
                _(),
                R();
                break;
            default:
                v = "error"
            }
            o.safeApply(i, function() {
                i.resourceType = v
            })
        }
        ,
        i.togglePlaylist = function() {
            i.showPlaylist = !i.showPlaylist
        }
        ,
        i.closePlaylist = function() {
            i.showPlaylist = !1
        }
        ,
        z.extend(i, {
            onPlayerReady: function(e) {
                o.$log.info("Overlay player ready."),
                f.videoApi = e
            },
            onPlayerCanPlay: function(e) {
                o.$log.info("Overlay player can play.", e),
                M()
            },
            onPlayerStateChange: function(e) {
                switch (o.$log.log("New player state " + e),
                "play" !== e || E || (R(),
                _()),
                e) {
                case "play":
                    U(C.VIDEO_PLAY, {
                        videoTime: f.videoApi.currentTime
                    });
                    break;
                case "pause":
                    U(C.VIDEO_PAUSE, {
                        videoTime: f.videoApi.currentTime
                    }),
                    w();
                    break;
                case "stop":
                    U(C.VIDEO_STOP, {
                        videoTime: f.videoApi.currentTime
                    }),
                    w()
                }
            },
            openInNewTab: function() {
                "external" === d.type && d.link && window.open(d.link.uri, "_blank")
            },
            onPdfReady: function(e) {
                i.pdfViewer = e
            },
            closeModal: function() {
                E && w(),
                i.$dismiss("User Closed")
            },
            rotateImage: function(e) {
                var t;
                e.target.style.transform && "" !== e.target.style.transform ? (t = parseInt(e.target.style.transform.replace(/^\D+/g, "")) + 90,
                e.target.style.transform = "rotate(" + (t = 360 === t ? 0 : t) + "deg)") : e.target.style.transform = "rotate(90deg)"
            }
        }),
        i.$on("$beforeStateChange", function(e, t, s, r, n) {
            e.preventDefault(),
            i.$dismiss("Closed by navigation away."),
            o.finishLoadSuccess(i)
        }),
        d && d.type && m || i.$dismiss("Missing details."),
        d.type) {
        case "resource":
            d.subject,
            p = d.chapter,
            g = d.resource,
            i.resource = g,
            -1 < (h = g ? g.contentResourceType.type : "error").indexOf("video") ? (v = "video",
            c.getOverlayResourceUrl(g, f.resourceUrlSuccess, f.resourceError)) : -1 < h.indexOf("html") ? (v = "html",
            c.getOverlayResourceUrl(g, f.resourceUrlSuccess, f.resourceError)) : -1 < h.indexOf("audio") ? (v = "audio",
            c.getOverlayResourceUrl(g, f.resourceUrlSuccess, f.resourceError)) : -1 < h.indexOf("image") ? (v = "image",
            c.getOverlayResourceUrl(g, f.resourceUrlSuccess, f.resourceError)) : -1 < h.indexOf("json") && g.chapterItemType ? ((S = J.apply(".{.type == $itemType}", p.chapterItems, {
                uuid: g.uuid,
                itemType: g.chapterItemType
            })).length ? i.resourceType = "chapterJson" : i.resourceType = "error",
            o.safeApply(i, function() {
                i.chapterItems = S
            })) : -1 < h.indexOf("pdf") ? (v = "pdf",
            c.getOverlayResourceUrl(g, f.resourceUrlSuccess, f.resourceError)) : i.resourceType = "error" === h ? "error" : "unknown";
            break;
        case "assignment":
            d.assignment,
            o.$log.error("Unable to preview assignments.");
            break;
        case "assessment":
            d.assessment,
            o.$log.error("Unable to preview assessments.");
            break;
        case "external":
            p = d.link,
            g = n.trustAsResourceUrl(p.uri),
            N.test(p.uri) || p.type && "video" === p.type ? p.uri.includes("vlabs.erudex.com") ? (i.resourceUrl = p.uri,
            i.resourceType = "html") : (i.config.sources = [{
                src: p.uri
            }],
            i.resourceType = "video") : p.type && -1 < p.type.indexOf("image") ? (i.resourceUrl = g,
            i.resourceType = "image") : p.type && -1 < p.type.indexOf("video") ? (i.config.sources = [{
                src: p.uri
            }],
            i.resourceType = "video") : p.type && -1 < p.type.indexOf("pdf") ? (i.pdfOptions.url = p.uri,
            i.resourceType = "pdf") : (i.resourceUrl = p.uri,
            i.resourceType = "html",
            i.showNewWindowBtn = !0);
            break;
        case "userAttachment":
            O(d.attachment);
            break;
        default:
            o.$log.error("Unknown overlay type:", d.type),
            i.$dismiss("Unknown type.")
        }
    }
    ]).controller("PreviewOverlayControllerV2", ["$scope", "$rootScope", "$sce", "$stateParams", "STORAGE_KEYS", "$interval", "ResourceCollaborationService", "UtilService", "APP_CONFIG", "APP_PREFS", "CURRICULUM_LANGUAGE_KEY", "MESSAGE_STRINGS", "USER_ACTIVITY_THRESHOLD", "resourcePlugin", "userActivityPlugin", "appPlugin", "details", "user", "resources", function(i, e, n, t, s, r, o, a, c, u, l, d, m, p, k, $, g, S, G) {
        var f, h, v = this, T = "", E = "", I = !0, A = null, C = d.ACTIVITY_TYPE_CONTENT_REVIEW, y = t.track, b = d.CONTENT_EVENT, N = 0, _ = m, R = {
            enabled: a.getPreference(u.CURRICULUM_ALT_LANGUAGE.key, !1),
            primary: a.getPreference(u.CURRICULUM_PRIMARY_LANGUAGE_NAME.key, "English"),
            alternate: a.getPreference(u.CURRICULUM_ALT_LANGUAGE_NAME.key, "")
        }, x = /((http|https):\/\/)?(www\.)?(youtube\.com|youtu\.be)(\/)?([a-zA-Z0-9\-\.]+)\/?/;
        function w(e, t, s) {
            var r;
            i.resourceType = "",
            i.showEndScreen = !1,
            i.resource = s,
            i.resource.altLanguage = g.altLanguage,
            i.show.nextResource = i.resource.v2SortOrder < i.resources.length,
            T = s ? s.contentResourceType.type : "error",
            i.teacherUploads = "teacher" === s.displayCategory,
            -1 < T.indexOf("video") ? (E = "video",
            p.getOverlayResourceUrl(s, v.resourceUrlSuccess, v.resourceError)) : -1 < T.indexOf("html") ? (E = "html",
            p.getOverlayResourceUrl(s, v.resourceUrlSuccess, v.resourceError)) : -1 < T.indexOf("audio") ? (E = "audio",
            p.getOverlayResourceUrl(s, v.resourceUrlSuccess, v.resourceError)) : -1 < T.indexOf("image") ? (E = "image",
            p.getOverlayResourceUrl(s, v.resourceUrlSuccess, v.resourceError)) : -1 < T.indexOf("json") && s.chapterItemType ? ((r = J.apply(".{.type == $itemType}", t.chapterItems, {
                uuid: s.uuid,
                itemType: s.chapterItemType
            })).length ? i.resourceType = "chapterJson" : i.resourceType = "error",
            a.safeApply(i, function() {
                i.chapterItems = r
            })) : -1 < T.indexOf("pdf") ? (E = "pdf",
            p.getOverlayResourceUrl(s, v.resourceUrlSuccess, v.resourceError)) : i.resourceType = "error" === T ? "error" : "unknown"
        }
        function U() {
            i.timer.enabled ? (i.timer.value -= 1e3,
            i.timer.value <= 0 && (r.cancel(i.timer.promise),
            i.timer.promise = null,
            o.goToNextContent())) : i.timer.promise && (r.cancel(i.timer.promise),
            i.timer.promise = null)
        }
        function O() {
            i.timer.enabled ? (i.timer.value -= 1e3,
            i.timer.value <= 0 && i.goToNextResource()) : i.timer.promise && (r.cancel(i.timer.promise),
            i.timer.promise = null)
        }
        function M() {
            o.setContentLoaded({
                content: i.resource,
                subject: i.subject,
                chapter: i.chapter,
                topic: i.topic,
                trackId: y
            }),
            o.setIsLoaded("content", !0),
            D(b.CONTENT_LOADED),
            i.resource.altUri || i.teacherUploads || a.$toastr.warning(a.getPreference(u.CURRICULUM_ALT_LANGUAGE_NAME.key, "") + " not available.")
        }
        function P() {
            !i.resource || A && A.contentUUID == resourceId || ("chapter" === (A = {
                userId: S ? S.id : -1,
                gradeId: i.resource.gradeId,
                sectionId: i.resource.sectionId,
                contentUUID: i.resource.uuid,
                contentName: i.resource ? i.resource.name : "Review Activity",
                mimeType: i.resource.contentResourceType.type || "",
                contentType: {
                    thumbnailUri: i.resource.thumbnailUri,
                    subjectType: i.resource.subjectIconDir,
                    displayType: i.resource.contentResourceType.displayType || resource2DisplayType[i.resourceType]
                },
                activityStartTime: Date.now(),
                activityEndTime: -1,
                activityType: C,
                groupType: C,
                trackId: y ? a.decodeIds(y)[0] : null,
                events: []
            }).contentType.displayType && (A.contentType.displayType = "book"),
            a.$log.log("PreviewOverlayControllerV2: startActivityTracking"))
        }
        function L() {
            var e, t;
            a.$log.log("PreviewOverlayControllerV2: endActivityTracking"),
            A && (A.activityEndTime = Date.now(),
            0 < N && (A.timeSkipDifference = N,
            A.originalEndTime = A.activityEndTime,
            A.activityEndTime -= N),
            A.error = {},
            e = _[i.resourceType] || _.unknown,
            t = Math.abs(A.activityEndTime - A.activityStartTime),
            A.activityEndTime < A.activityStartTime && (A.hasError = !0,
            A.error[d.ERROR_ACTIVITY_END_BEFORE_START] = !0,
            A.recordedActivityEndTime = A.activityEndTime,
            A.recordedActivityStartTime = A.activityStartTime,
            A.activityEndTime = A.activityStartTime + e,
            t = e + 1),
            36e5 < t && (A.hasError = !0,
            A.error[d.ERROR_ACTIVITY_SESSION_OVER_HOUR] = !0,
            A.recordedActivityEndTime = A.activityEndTime,
            A.recordedActivityStartTime = A.activityStartTime,
            A.activityEndTime = A.activityStartTime + 36e5),
            e && e < t ? k.storeActivity(A, function(e) {
                a.$log.log(e)
            }, function(e) {
                a.$log.error(e)
            }) : a.$log.log("Review time (" + t + "ms) less than threshold " + e)),
            A = null,
            N = 0
        }
        function D(e, t) {
            A && z.isArray(A.events) ? (t = t || {},
            A.events.push({
                type: e,
                datetime: Date.now(),
                details: t
            })) : a.$log.warn("PreviewOverlayController: Activity object has not been initialized")
        }
        function j(e) {
            var r = null;
            T = a.isEmptyOrBlank((e = e || {}).mediaType) ? "error" : e.mediaType,
            /image/.test(T) && (r = e.annotatedImage),
            c.VIEWABLE_MEDIA_TYPES_REGEX.test(T) ? $.viewUserAttachment(e, function(e) {
                var t, s;
                e && e.result ? (e = e.value.uri,
                t = n.trustAsResourceUrl(e),
                s = "error",
                /video/.test(T) ? (i.config.sources = [{
                    src: t,
                    type: T
                }],
                s = "video") : /audio/.test(T) ? (i.config.sources = [{
                    src: t,
                    type: T
                }],
                s = "audio") : /image/.test(T) ? (i.resourceUrl = r || t,
                s = "image") : /pdf/.test(T) && (i.pdfOptions.url = e,
                s = "pdf"),
                a.safeApply(i, function() {
                    i.resourceType = s
                })) : i.resourceType = "error"
            }, v.resourceError) : i.resourceType = "error" === T ? "error" : "unknown"
        }
        function V() {
            var r;
            v.videoApi && !I && (I = !0,
            r = v.videoApi,
            setTimeout(function() {
                function e(e) {
                    s || (s = !0,
                    e && "playing" === e.type || 0 !== t.currentTime ? a.$log.info("Video autoplay working.") : (a.$log.info("Video could not autoplay"),
                    v.videoApi.pause()))
                }
                var t = r.mediaElement[0]
                  , s = !1;
                v.videoApi.play();
                t.addEventListener("playing", e, !1),
                setTimeout(e, 1e3)
            }, 500))
        }
        switch (this.videoApi = null,
        z.extend(i, {
            resourceUrl: "",
            resourceType: "",
            chapterItems: [],
            showNewWindowBtn: !1,
            teacherUploads: !1,
            selectedLanguage: o.getCurrentSelectedLanguage(),
            selectedLanguageOptions: R,
            timer: {
                enabled: a.getPreference(u.CONTENT_VIEW_NEXT_TIMER.key, !1),
                length: 1e3 * parseInt(a.getPreference(u.CONTENT_VIEW_NEXT_TIMER_LENGTH.key, u.CONTENT_VIEW_NEXT_TIMER_LENGTH.default)),
                value: 1e3 * parseInt(a.getPreference(u.CONTENT_VIEW_NEXT_TIMER_LENGTH.key, u.CONTENT_VIEW_NEXT_TIMER_LENGTH.default))
            },
            config: {
                preload: "'auto'",
                autoHide: !1,
                autoHideTime: 3e3,
                autoPlay: !1,
                sources: [],
                tracks: [],
                theme: {
                    url: "../css/libs/videogular/videogular.6b628b9e.css"
                }
            },
            pdfOptions: {
                url: null,
                scale: "fit-page",
                page: 1
            },
            showPlaylist: !1
        }),
        this.resourceError = function(e) {
            a.$log.error(e),
            a.safeApply(i, function() {
                i.resourceType = "error"
            })
        }
        ,
        this.resourceUrlSuccess = function(e) {
            i.showPlaylistIcon = i.resources && 1 < i.resources.length,
            i.closePlaylist();
            var t = n.trustAsResourceUrl(e);
            switch (i.resourceType = E) {
            case "video":
            case "audio":
                I = !1,
                i.config.sources = [{
                    src: t,
                    type: T
                }];
                break;
            case "html":
            case "image":
                i.resourceUrl = t,
                M(),
                P();
                break;
            case "pdf":
                i.pdfOptions.url = e,
                M(),
                P();
                break;
            default:
                E = "error"
            }
            a.safeApply(i, function() {
                i.resourceType = E
            })
        }
        ,
        i.trustSrc = function(e) {
            return "string" == typeof e ? n.trustAsResourceUrl(e) : e
        }
        ,
        i.togglePlaylist = function() {
            i.showPlaylist = !i.showPlaylist,
            i.showPlaylist && i.resource && document.querySelector("#PL-" + i.resource.id) && document.querySelector("#PL-" + i.resource.id).scrollIntoView()
        }
        ,
        i.closePlaylist = function() {
            a.safeApply(i, function() {
                i.showPlaylist = !1
            })
        }
        ,
        z.extend(i, {
            onPlayerReady: function(e) {
                a.$log.info("Overlay player ready."),
                v.videoApi = e
            },
            onPlayerCanPlay: function(e) {
                a.$log.info("Overlay player can play.", e),
                V()
            },
            onPlayerStateChange: function(e) {
                switch (a.$log.log("New player state " + e),
                "play" !== e || A || (P(),
                M()),
                e) {
                case "play":
                    D(b.VIDEO_PLAY, {
                        videoTime: v.videoApi.currentTime
                    });
                    break;
                case "pause":
                    D(b.VIDEO_PAUSE, {
                        videoTime: v.videoApi.currentTime
                    }),
                    L();
                    break;
                case "stop":
                    D(b.VIDEO_STOP, {
                        videoTime: v.videoApi.currentTime
                    }),
                    L()
                }
            },
            openInNewTab: function() {
                "external" === g.type && g.link && window.open(g.link.uri, "_blank")
            },
            onPdfReady: function(e) {
                i.pdfViewer = e
            },
            closeModal: function() {
                A && L(),
                i.$dismiss("User Closed")
            },
            rotateImage: function(e) {
                var t;
                e.target.style.transform && "" !== e.target.style.transform ? (t = parseInt(e.target.style.transform.replace(/^\D+/g, "")) + 90,
                e.target.style.transform = "rotate(" + (t = 360 === t ? 0 : t) + "deg)") : e.target.style.transform = "rotate(90deg)"
            },
            setCurriculumLanguage: function(e) {
                R.enabled ? R.options || (R.options = [{
                    name: R.primary,
                    value: l.PRIMARY
                }, {
                    name: R.alternate,
                    value: l.ALTERNATE
                }]) : e = l.PRIMARY,
                e === l.ALTERNATE ? (i.selectedLanguage = l.ALTERNATE,
                i.resource.altUri ? g.altLanguage = !0 : a.$toastr.warning(a.getPreference(u.CURRICULUM_ALT_LANGUAGE_NAME.key, "") + " not available.")) : (i.selectedLanguage = l.PRIMARY,
                g.altLanguage = !1),
                w(i.details.subject, i.details.chapter, i.resource),
                a.$storageService.setUserPref(s.CURRICULUM_LANGUAGE, e),
                a.safeApply(i, z.noop)
            }
        }),
        i.$on("$beforeStateChange", function(e, t, s, r, n) {
            e.preventDefault(),
            i.$dismiss("Closed by navigation away."),
            a.finishLoadSuccess(i)
        }),
        g && g.type && S || i.$dismiss("Missing details."),
        z.extend(i, {
            toggleEndTimer: function() {
                i.timer.enabled ? i.timer.promise ? (r.cancel(i.timer.promise),
                i.timer.promise = null) : (i.timer.value <= 0 && (i.timer.value = i.timer.length),
                i.timer.promise = r(e.useV2Ux ? O : U, 1e3)) : i.timer.promise && (r.cancel(i.timer.promise),
                i.timer.promise = null)
            },
            toggleEndTimerV2: function() {
                i.timer.enabled ? i.timer.promise ? (r.cancel(i.timer.promise),
                i.timer.promise = null) : (i.timer.value <= 0 && (i.timer.value = i.timer.length),
                i.timer.promise = r(O, 1e3)) : i.timer.promise && (r.cancel(i.timer.promise),
                i.timer.promise = null)
            },
            replayVideo: function() {
                i.timer.promise && (r.cancel(i.timer.promise),
                i.timer.promise = null),
                i.showEndScreen = !1,
                i.show.nextResource = !1,
                v.videoApi.seekTime(0),
                v.videoApi.play()
            },
            onVideoEnded: function() {
                D(b.VIDEO_END, {
                    videoTime: v.videoApi.currentTime
                }),
                L(),
                v.videoApi.isFullScreen && v.videoApi.toggleFullScreen(),
                i.timer.enabled && i.show.nextResource && (i.timer.value = i.timer.length,
                i.timer.promise = r(e.useV2Ux ? O : U, 1e3)),
                i.showEndScreen = !0,
                i.show.nextResource = i.resource.v2SortOrder < i.resources.length
            },
            goToNextResource: function() {
                r.cancel(i.timer.promise),
                i.timer.promise = null;
                var e = J.apply(".{.v2SortOrder > $sortOrder}", i.resources, {
                    sortOrder: i.resource.v2SortOrder
                });
                e && 0 < e.length && (i.resource = e[0],
                w(i.details.subject, i.details.chapter, i.resource))
            },
            resources: G,
            details: g,
            showEndScreen: !1,
            show: {
                nextResource: !1
            },
            loadResource: w,
            endActivityTracking: L
        }),
        g.type) {
        case "resource":
            w(g.subject, g.chapter, g.resource);
            break;
        case "assignment":
            g.assignment,
            a.$log.error("Unable to preview assignments.");
            break;
        case "assessment":
            g.assessment,
            a.$log.error("Unable to preview assessments.");
            break;
        case "external":
            f = g.link,
            h = n.trustAsResourceUrl(f.uri),
            x.test(f.uri) || f.type && "video" === f.type ? f.uri.includes("vlabs.erudex.com") ? (i.resourceUrl = f.uri,
            i.resourceType = "html") : (i.config.sources = [{
                src: f.uri
            }],
            i.resourceType = "video") : f.type && -1 < f.type.indexOf("image") ? (i.resourceUrl = h,
            i.resourceType = "image") : f.type && -1 < f.type.indexOf("video") ? (i.config.sources = [{
                src: f.uri
            }],
            i.resourceType = "video") : f.type && -1 < f.type.indexOf("pdf") ? (i.pdfOptions.url = f.uri,
            i.resourceType = "pdf") : (i.resourceUrl = f.uri,
            i.resourceType = "html",
            i.showNewWindowBtn = !0);
            break;
        case "userAttachment":
            j(g.attachment);
            break;
        default:
            a.$log.error("Unknown overlay type:", g.type),
            i.$dismiss("Unknown type.")
        }
    }
    ]).controller("BaseResourceCollaborationController", ["$scope", "$rootScope", "$stateParams", "$timeout", "$modal", "UtilService", "ResourceCollaborationService", "MESSAGE_STRINGS", "APP_PREFS", "NOTE_COLORS", "APP_CONFIG", "CURRICULUM_LANGUAGE_KEY", "ATTACHMENT_TYPE", "CONTENT_DISPLAY_CATEGORY", "resourcePlugin", "userActivityPlugin", function(n, i, e, t, o, a, r, c, s, u, l, d, m, p, k, g) {
        var S = this
          , f = null
          , h = e.contentUUID || e.assessmentUuid
          , e = e.track
          , v = a.getCurrentSubject()
          , T = null
          , E = null
          , I = null
          , A = null
          , C = null
          , y = r.options
          , b = {
            augmentedContent: !1,
            notes: !1
        }
          , N = {}
          , _ = null
          , R = r.getSelectedLanguageOptions()
          , w = {
            noNoteContentUnavailable: "Creating notes not allowed until content and existing notes are loaded.",
            unableToLoadNotes: "Unable to load notes, note taking disabled",
            altUriNotAvailable: a.getPreference(s.CURRICULUM_ALT_LANGUAGE_NAME.key, "") + " not available."
        };
        function $() {
            f = n.user,
            N.userId = f.id,
            y.show.notes && (U(),
            g.getResourceNotes(f.id, h, -1, -1, 10, G, j)),
            y.show.augmentedContent ? (n.enabled.augmented = !0,
            k.getAugmentedResources(f.id, h, V, B)) : (n.enabled.augmented = !1,
            b.augmentedContent = !0)
        }
        function U() {
            N = {
                notes: [],
                timeStamp: Date.now(),
                color: "",
                userId: f ? f.id : -1,
                type: "self",
                subjectId: v ? v.id : -1,
                contentUUID: h,
                pageNumber: 1
            }
        }
        function G(e) {
            var t = []
              , e = (e && e.result && (t = e.values),
            n.noteSessions = t.sort(x),
            b.notes = !0,
            P(),
            "");
            O(e = 0 < t.length ? t[t.length - 1].color : e),
            M(),
            a.safeApply(n, z.noop)
        }
        function x(e, t) {
            return e.timeStamp - t.timeStamp
        }
        function j(e) {
            n.noteSessions = [],
            b.notes = !0,
            O(""),
            a.$log.error(e),
            a.$toastr.error(w.unableToLoadNotes)
        }
        function O(e) {
            for (N.color = u[Math.floor(Math.random() * u.length)]; N.color == e; )
                N.color = u[Math.floor(Math.random() * u.length)]
        }
        function M() {
            _ && t.cancel(_),
            _ = t(function() {
                var e = z.element(".note-scroll-container");
                e.length && (e[0].scrollTop = e[0].scrollHeight)
            }, 250)
        }
        function P() {
            n.enabled.newNote = b.notes && b.content
        }
        function V(e) {
            var t = {};
            e && e.result && (t = e.value),
            n.augmentedResources = t,
            b.augmentedContent = !0,
            a.safeApply(n, z.noop)
        }
        function B(e) {
            n.augmentedResources = {},
            b.augmentedContent = !0,
            a.$log.error(e)
        }
        function L(e) {
            e.viewheight;
            a.safeApply(n, function() {
                n.keyboardVisible = !0
            })
        }
        function D(e) {
            a.safeApply(n, function() {
                n.keyboardVisible = !1
            })
        }
        z.extend(n, {
            activeAccordionCount: 3,
            show: y.show,
            enabled: {
                newNote: !1,
                augmented: !1
            },
            accordionOpen: {
                notes: !0,
                augmentedContent: !1,
                relatedContent: !1,
                activity: !1,
                chapterFeatures: !1,
                recordedResources: !1,
                vlabResources: !1,
                arResources: !1
            },
            newNote: {},
            noteSessions: null,
            creatingNote: !1,
            augmentedResources: null,
            selectedLanguage: r.getCurrentSelectedLanguage(),
            selectedLanguageOptions: R,
            currentUuid: h,
            nextResource: null,
            prevResource: null,
            selectedChapter: null,
            selectedTopic: null,
            genericIconType: "generic"
        }),
        z.extend(n, {
            startNewNote: function() {
                b.content && n.enabled.newNote ? b.notes && !n.creatingNote && (-1 === N.userId && f && (N.userId = f.id),
                n.newNote = {
                    text: "",
                    timeStamp: 0,
                    videoTime: 0
                },
                n.creatingNote = !0) : a.$toastr.warning(w.noNoteContentUnavailable)
            },
            saveNote: function() {
                var e = n.newNote.text
                  , t = {
                    text: e,
                    timeStamp: Date.now(),
                    videoTime: 0
                };
                e && "" !== e && !/^\s*$/.test(e) && (t.videoTime = r.getVideoTime(),
                t.videoTime = t.videoTime / 1e3,
                N.notes.push(t),
                g.saveResourceNoteSession(N, function(e) {
                    a.$log.log(e)
                }, function(e) {
                    a.$log.error(e)
                }),
                1 === N.notes.length && n.noteSessions.push(N),
                n.newNote = {},
                M()),
                n.creatingNote = !1
            },
            cancelNote: function() {
                n.creatingNote = !1
            },
            shareSession: function(e) {
                var t = f.userGrades[0]
                  , s = t.grade
                  , t = t.userSections[0].section
                  , r = {
                    userInfo: {
                        gradeNumber: s.number,
                        gradeId: s.id,
                        institutionId: f.institution ? f.institution.id : -1,
                        sectionId: t.id,
                        sectionName: t.name,
                        userId: f.id,
                        firstName: f.person.firstName,
                        lastName: f.person.lastName
                    },
                    recipients: [],
                    contentName: I.name
                };
                z.extend(r, e),
                e.timeStamp == N.timeStamp ? o.open({
                    templateUrl: "../student/modal/confirm-modal.html",
                    controller: "ConfirmModalController",
                    windowClass: "confirm-modal",
                    resolve: {
                        message: function() {
                            return "Sharing your current note group will start a new group, are you sure you want to share now?"
                        }
                    }
                }).result.then(function() {
                    U();
                    var e = "";
                    O(e = 0 < n.noteSessions.length ? n.noteSessions[n.noteSessions.length - 1].color : e),
                    i.$broadcast(c.START_SHARE, {
                        type: c.SHARE_TYPE.SHARE_NOTE,
                        shareItem: r
                    })
                }, function() {
                    a.$toastr.info("Share cancelled.")
                }) : i.$broadcast(c.START_SHARE, {
                    type: c.SHARE_TYPE.SHARE_NOTE,
                    shareItem: r
                })
            },
            setCurriculumLanguage: function(e) {
                var t = n.selectedLanguage
                  , s = (e = R.enabled ? e : d.PRIMARY) === d.PRIMARY || e === d.ALTERNATE;
                t && e === t || (s || (e = d.PRIMARY),
                (n.selectedLanguage = e) !== d.ALTERNATE || I && !a.isEmptyOrBlank(I.altUri) ? r.setSelectedLanguage(e) : (a.$toastr.warning(w.altUriNotAvailable),
                n.selectedLanguage = d.PRIMARY))
            },
            goToNextResource: function() {
                r.goToNextContent()
            },
            goToPreviousResource: function() {
                r.goToPrevContent()
            },
            setResource: r.goToContent,
            showExternalLink: function(e) {
                var t;
                e.uri = e.uri || e.url,
                t = {
                    type: "external",
                    link: e
                },
                r.pauseContent(),
                o.open({
                    templateUrl: "../student/modal/preview-overlay.html",
                    windowClass: "preview-overlay",
                    controller: "PreviewOverlayController",
                    resolve: {
                        details: function() {
                            return t
                        },
                        user: function() {
                            return n.user
                        }
                    }
                })
            }
        }),
        n.$on(c.RECEIVED_SHARED_NOTE, function(e, t) {
            var s, r = t || {}, t = 0 === J.apply(".{.sharedId == $sharedId || .sharedTime == $sharedTime}", n.noteSessions, {
                sharedId: r.sharedId,
                sharedTime: r.sharedTime
            }).length;
            r.contentUUID === h && t && (s = !1,
            n.noteSessions.length && n.noteSessions[n.noteSessions.length - 1].timeStamp === N.timeStamp && (s = !0),
            a.safeApply(n, function() {
                s ? n.noteSessions.splice(n.noteSessions.length - 2, 0, r) : n.noteSessions.push(r)
            }))
        }),
        n.$on("$destroy", function() {
            a.$log.log("ResourceCollaborationController $destroy"),
            r.unregisterCollaborationController(),
            r.resetOptions(),
            _ && t.cancel(_),
            document.removeEventListener("softkeyboardshow", L, !1),
            document.removeEventListener("softkeyboardhide", D, !1)
        }),
        document.addEventListener("softkeyboardshow", L, !1),
        document.addEventListener("softkeyboardhide", D, !1),
        z.extend(S, {
            createNextPrev: function() {
                var e, t = null, s = null;
                A && A.length ? ((e = a.indexOfObj(A, h, "uri")) < 0 && a.$log.warn("Resource not part of given activity"),
                s = 0 < e ? {
                    name: A[e - 1].name,
                    uuid: A[e - 1].uri,
                    type: A[e - 1].type,
                    displayCategory: A[e - 1].displayCategory
                } : null,
                t = 0 <= e && e < A.length - 1 ? {
                    name: A[e + 1].name,
                    uuid: A[e + 1].uri,
                    type: A[e + 1].type,
                    displayCategory: A[e + 1].displayCategory
                } : null,
                v && z.forEach(A, function(e) {
                    var t = J.apply("..contentResources{.uuid === $uuid}", v, {
                        uuid: e.uri
                    })[0];
                    t && a.isNotEmpty(t.thumbnailUri) && (e.thumbnailUri = l.CONTENT_THUMB_ROOT + t.thumbnailUri)
                })) : s = I && n.selectedChapter ? (t = (e = r.findNextPrevContent(n.selectedChapter, I.uuid, r.chapterContentCategories)).next,
                e.previous) : (t = n.nextResource,
                n.prevResource),
                n.nextResource = t,
                (n.prevResource = s) && (y.show.prevResource = !0),
                t && (y.show.nextResource = !0),
                r.setNextPrevContent(t, s)
            },
            onOptionsLoaded: function() {
                a.checkUserLoaded(n, $),
                n.relatedContentHeading = y.relatedContentHeading,
                n.activeAccordionCount = r.getActiveAccordionsCount()
            },
            onContentDetailsLoaded: function(e) {
                b.content = !0,
                (I = e.content) && (n.currentUuid = I.uuid);
                var t = e.subject
                  , s = e.chapter
                  , e = e.topic;
                T = s,
                E = e,
                s = -1,
                (v = t) && (s = v.id,
                v.iconType),
                I.subjectId && (s = I.subjectId),
                N && (N.subjectId = s),
                E && (n.selectedTopic = a.getViewTopic(E)),
                T && (n.selectedChapter = a.getViewChapter(T)),
                n.subject = v,
                n.chapter = T,
                n.topic = E,
                S.createNextPrev(),
                P(),
                n.$emit(c.CONTENT_LOADED, {
                    isLoaded: b.content
                })
            },
            onActivityLoaded: function(e) {
                e && e.id && (C = e.assignment.assignmentSubject,
                A = J.apply(".{.type == $type}", e.assignment.assignmentAttachments, {
                    type: [m.RESOURCE, m.RESOURCE_QUIZ, m.ASSESSMENT_PRACTICE]
                }),
                z.forEach(A, function(e) {
                    e.type === m.RESOURCE_QUIZ && (e.displayCategory = p.QUIZ),
                    e.iconUri = a.getAttachmentIconUri(e, C),
                    e.thumbnailUri = e.iconUri
                }),
                y.show.relatedContent = !1,
                y.show.chapterFeatures = !1,
                y.show.activityResources = !0,
                n.activeAccordionCount = r.getActiveAccordionsCount(),
                n.activityResources = A,
                S.createNextPrev())
            },
            onChangeSelectedLanguage: function(e) {
                n.selectedLanguage = e
            }
        }),
        r.setDefaultTrackId(e),
        r.registerCollaborationController(S)
    }
    ]).controller("ResourceCollaborationController", ["$scope", "$rootScope", "$controller", "ResourceCollaborationService", function(e, t, s, r) {
        var n = this;
        z.extend(n, s("BaseResourceCollaborationController", {
            $scope: e,
            $rootScope: t
        })),
        r.getOptions(n.onOptionsLoaded),
        r.getContentDetails(n.onContentDetailsLoaded),
        r.getCurrentActivity(n.onActivityLoaded),
        r.registerSelectedLanguageUpdateListener(n.onChangeSelectedLanguage)
    }
    ]).controller("GayatriResourceCollaborationController", ["$scope", "$rootScope", "$stateParams", "$controller", "ResourceCollaborationService", "UtilService", function(g, e, t, s, S, r) {
        var f = this
          , s = s("BaseResourceCollaborationController", {
            $scope: g,
            $rootScope: e
        })
          , n = (z.extend(f, s),
        t.contentUUID || t.assessmentUuid)
          , i = null
          , o = null
          , h = [{
            arrayName: "allVideoResources",
            key: "video"
        }, {
            arrayName: "documentResources",
            key: "document"
        }, {
            arrayName: "presentationResources",
            key: "presentation"
        }, {
            arrayName: "quizResources",
            key: "quiz"
        }]
          , a = "Unable to switch topic, missing content.";
        function c(e) {
            for (var t = 0; t < h.length; t++) {
                var s = h[t].arrayName;
                if (e[s].length)
                    return e[s][0]
            }
            return null
        }
        z.extend(g, {
            prevTopic: null,
            nextTopic: null,
            nextTopicHasContent: !1,
            prevTopicHasContent: !1,
            nextTopicWithContent: null,
            prevTopicWithContent: null,
            nextResource: null,
            prevResource: null,
            isResourceInTopicArray: {},
            relatedAccordionOpen: {}
        }),
        z.extend(g, {
            goToPreviousTopic: function() {
                var e;
                g.prevTopicWithContent && ((e = c(i = i || r.getViewTopic(g.prevTopicWithContent))) ? (r.setCurrentTopic(g.prevTopicWithContent),
                S.goToContent(e, {
                    topic: g.prevTopicWithContent
                })) : r.$toastr.error(a))
            },
            goToNextTopic: function() {
                var e;
                g.nextTopicWithContent && ((e = c(o = o || r.getViewTopic(g.nextTopicWithContent))) ? (r.setCurrentTopic(g.nextTopicWithContent),
                S.goToContent(e, {
                    topic: g.nextTopicWithContent
                })) : r.$toastr.error(a))
            },
            isResourceInArray: function(e) {
                var t = !1;
                return t = z.isArray(e) ? !!J.apply(".{.uuid == $uuid}", e, {
                    uuid: n
                }).length : t
            }
        }),
        s.createNextPrev = function() {
            var e = null
              , t = null
              , s = g.currentUuid;
            if (g.topic && g.selectedTopic) {
                for (var r, n, i, o = g.selectedTopic, a = 0; a < h.length; a++)
                    for (var c = h[a].arrayName, u = 0; u < o[c].length; u++)
                        o[c][u].uuid === s && (r = u,
                        n = o[c],
                        i = a);
                if (n) {
                    for (var l = r + 1, d = n, m = i; !e && d; )
                        d[l] ? e = d[l] : (d = o[h[++m] ? h[m].arrayName : "noArray"],
                        l = 0);
                    for (l = r - 1,
                    d = n,
                    m = i; !t && d; )
                        d[l] ? t = d[l] : (d = o[h[--m] ? h[m].arrayName : "noArray"],
                        l = 0)
                }
            } else if (g.chapter && g.selectedChapter) {
                var p = g.selectedChapter.allChapterResources;
                for (u = 0; u < p.length; u++)
                    p[u].uuid === s && (r = u);
                z.isNumber(r) && (e = p[r + 1],
                t = p[r - 1])
            }
            g.nextResource = e,
            g.prevResource = t,
            S.setNextPrevContent(e, t)
        }
        ,
        S.getOptions(function(e) {
            e.show.augmentedContent = !1,
            e.show.selectLanguage = !1,
            f.onOptionsLoaded(e),
            e.show.notes || (g.accordionOpen = {
                relatedContent: !0
            })
        }),
        S.getContentDetails(function(e) {
            e.subject;
            var t = e.chapter
              , s = e.topic
              , r = -1;
            if (s && t) {
                for (var n = z.isArray(t.topics) ? t.topics : [], i = 0; i < n.length; i++)
                    s.id === n[i].id && (r = i);
                if (0 <= r) {
                    var o, t = n[r - 1], a = n[r + 1], c = null, u = !1, l = !!J.apply("..contentResources", t).length, d = !!J.apply("..contentResources", a).length, m = d ? a : null, p = l ? t : null;
                    if (!d && a) {
                        for (c = n[r + (o = 2)]; c && !u; )
                            (u = !!J.apply("..contentResources", c).length) || (c = n[r + ++o]);
                        u && (m = c)
                    }
                    if (!l && t) {
                        for (c = n[r + (o = -2)]; c && !u; )
                            (u = !!J.apply("..contentResources", c).length) || (c = n[r + --o]);
                        u && (p = c)
                    }
                    g.nextTopic = a,
                    g.prevTopic = t,
                    g.nextTopicHasContent = d,
                    g.prevTopicHasContent = l,
                    g.nextTopicWithContent = m,
                    g.prevTopicWithContent = p
                }
            }
            f.onContentDetailsLoaded(e),
            g.selectedTopic && z.forEach(h, function(e) {
                var t = e.arrayName
                  , e = e.key
                  , r = g.selectedTopic[t]
                  , n = {};
                g.isResourceInArray(r) && (g.isResourceInTopicArray[t] = !0,
                g.relatedAccordionOpen[e] = !0),
                z.forEach(g.selectedTopic[t], function(e, t) {
                    var s = r[t + 1];
                    s && s.name === e.name && (n[t] = !0,
                    n[t + 1] = !0)
                }),
                z.forEach(n, function(e, t) {
                    r[t].name = r[t].name + " " + (parseInt(t) + 1)
                })
            })
        }),
        S.getCurrentActivity(f.onActivityLoaded),
        S.registerSelectedLanguageUpdateListener(f.onChangeSelectedLanguage)
    }
    ])
}(window.angular, window.JSPath),
function(e, t) {
    "use strict";
    e.module("erudex.studentApp.filters", []).filter("timeAgo", function() {
        return function(e) {
            return null == e ? "" : t.timeago(e)
        }
    })
}(window.angular, (window.JSPath,
window.jQuery)),
function(a) {
    "use strict";
    a.module("erudex.studentApp.directives", []).directive("scroll", ["$timeout", function(r) {
        return {
            restrict: "A",
            link: function(e, t, s) {
                e.$watchCollection(s.scroll, function(e) {
                    r(function() {
                        t[0].scrollTop = t[0].scrollHeight
                    })
                })
            }
        }
    }
    ]).directive("chatOptionsClass", ["$parse", function(o) {
        return {
            require: "select",
            link: function(t, n, e, s) {
                var r = e.ngOptions.split(" ").pop()
                  , i = o(e.chatOptionsClass);
                t.$watch(r, function(e) {
                    var r = !1;
                    a.forEach(e, function(e, t) {
                        var e = i(e)
                          , s = n.find("option[value='" + t + "']");
                        a.forEach(e, function(e, t) {
                            e ? (a.element(s).addClass(t),
                            r = !0) : a.element(s).removeClass(t)
                        })
                    }),
                    t.setHasUnreadChat(r)
                }, !0)
            }
        }
    }
    ])
}(window.angular, window.JSPath),
function(A, C) {
    "use strict";
    A.module("erudex.studentApp.services", ["erudex.studentApp.plugins"]).service("UtilService", ["BaseUtilService", "STATUS", "userPlugin", "assessmentPlugin", "assignmentPlugin", "$rootScope", "locker", "COMPETITIVE_CURRICULUM", "ASSESSMENT_TYPE", "USER_ASSESSMENT", function(o, c, e, a, r, h, t, s, u, l) {
        var v, n = null, i = null, d = null, T = t.driver("session").namespace("com.erudex"), m = [], E = {}, p = (A.extend(E, o),
        E.$log);
        return A.extend(E, {
            getAssignmentViewChapter: function(e) {
                if (!e)
                    return null;
                var t, s = {
                    name: e.name,
                    id: e.id,
                    pendingAssignments: [],
                    completedAssignments: []
                };
                var r = e.assignments
                  , n = s.pendingAssignments
                  , i = s.completedAssignments;
                if (r)
                    for (t = 0; t < r.length; t++) {
                        var o = r[t];
                        (o.status === c.SUBMITTED || o.status === c.GRADED ? i : n).push(o)
                    }
                function a(e, t) {
                    return e.assignment.id - t.assignment.id
                }
                return s.pendingAssignments.sort(a),
                s.completedAssignments.sort(a),
                s
            },
            getUserSubjectById: function(t, s, r) {
                m[t] ? s(m[t]) : e.getUserSubjectById(t, function(e) {
                    e = e[0];
                    e.subject.chapters = _.sortBy(e.subject.chapters, "sortOrder"),
                    A.forEach(e.subject.chapters, function(e) {
                        e.contentResources && 0 < e.contentResources.length && (e.contentResources = _.sortBy(e.contentResources, "sortOrder")),
                        e.topics && 0 < e.topics.length && (e.topics = _.sortBy(e.topics, "sortOrder")),
                        A.forEach(e.topics, function(e) {
                            e.contentResources && 0 < e.contentResources.length && (e.contentResources = _.sortBy(e.contentResources, "sortOrder")),
                            e.subtopics && 0 < e.subtopics.length && (e.subtopics = _.sortBy(e.subtopics, "sortOrder")),
                            A.forEach(e.subtopics, function(e) {
                                e.contentResources && 0 < e.contentResources.length && (e.contentResources = _.sortBy(e.contentResources, "sortOrder"))
                            })
                        })
                    }),
                    m[t] = e,
                    s(e)
                }, function(e) {
                    r(e)
                })
            },
            getUserCurriculum: function(t, s) {
                n ? t(n) : e.getUserCurriculum(function(e) {
                    t(n = e)
                }, function(e) {
                    s(e)
                })
            },
            clearUserCurriculum: function() {
                E.clearViewChapters(),
                n = null,
                m = []
            },
            clearUserSubject: function(e) {
                m[e] && (m[e] = null)
            },
            buildStudentCurriculumGradeSelect: function(s, e, t, r, n, i) {
                n = n || {};
                var o = {};
                function a(e) {
                    var t;
                    o[e] && (t = C.apply(".{.id == $id}", s.gradeOptions, {
                        id: e
                    })[0],
                    h.isCompetitiveForMobile = t.curriculum.competitive,
                    t = n[e] = n[e] || {},
                    n.last = e,
                    T.put("currentGrade", e),
                    r(o[e], t))
                }
                A.extend(s, {
                    selectedGradeObj: {
                        curriculumId: null,
                        gradeId: null
                    },
                    gradeId: null,
                    curriculumOptions: [],
                    reportCurriculumOptions: [],
                    gradeOptions: [],
                    reportGradeOptions: [],
                    onChangeCurriculum: function(e) {
                        e = C.apply(".{.curriculum.id == $id}", s.gradeOptions, {
                            id: e
                        })[0];
                        s.gradeId = e.id,
                        s.selectedGradeObj.gradeId = e.id,
                        s.onChangeGrade(e.id)
                    },
                    onChangeGrade: function(e) {
                        s.gradeId = e,
                        h.selectedGradeId = e,
                        h.useV2Ux && (h.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", h.courseGrades, {
                            gradeId: h.selectedGradeId
                        })[0]),
                        a(e)
                    },
                    onChangeCourse: function(e) {
                        var t = null
                          , t = h.isECUser ? e.gradeId : e;
                        h.selectedGradeId = t,
                        h.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", h.courseGrades, {
                            gradeId: h.selectedGradeId
                        })[0],
                        a(t)
                    }
                });
                var c = {}
                  , u = (A.forEach(t, function(e) {
                    var t;
                    A.isObject(e.subject) && (c[e.subject.id] ? (E.$log.info("Duplicate subject " + e.subject.name + " found for student in grade " + e.subject.grade.number),
                    t = c[e.subject.id],
                    e.studentAssignments && (t.studentAssignments = t.studentAssignments.concat(e.studentAssignments)),
                    e.studentAssessments && (t.studentAssessments = t.studentAssessments.concat(e.studentAssessments))) : (e = A.extend({}, e, {
                        studentAssignments: e.studentAssignments ? e.studentAssignments.slice() : [],
                        studentAssessments: e.studentAssessments ? e.studentAssessments.slice() : []
                    }),
                    c[e.subject.id] = e,
                    (t = (t = o[e.subject.grade.id]) || []).push(e),
                    o[e.subject.grade.id] = t))
                }),
                A.forEach(n, function(e, t) {
                    t = parseInt(t),
                    A.isNumber(t) && isFinite(t) && !o[t] && delete n[t]
                }),
                n.last)
                  , l = null
                  , d = []
                  , m = []
                  , p = []
                  , g = []
                  , S = []
                  , f = []
                  , t = (A.forEach(e, function(e) {
                    e.isCurriculumEnabled = !0,
                    h.isECUser && !h.courseGradeIds.includes(e.id) && (e.isCurriculumEnabled = !1),
                    o[e.id] && o[e.id].length && (h.isECUser && h.courseGradeIds.includes(e.id) && g.push(e),
                    e.id !== u || h.isECUser && !h.courseGradeIds.includes(e.id) && e.id !== (i || 0) || (l = e),
                    p.push(e),
                    d.includes(e.curriculum.id) || (d.push(e.curriculum.id),
                    m.push(e.curriculum)),
                    s.user.reportsAvailableCurriculums.includes(e.curriculum.competitiveName)) && (f.push(e.id),
                    S.push(e),
                    C.apply(".{.id == $id}", s.reportCurriculumOptions, {
                        id: e.curriculum.id
                    })[0] || s.reportCurriculumOptions.push(e.curriculum))
                }),
                s.curriculumOptions = _.sortBy(m, "shortName"),
                s.reportCurriculumOptions = _.sortBy(s.reportCurriculumOptions, "shortName"),
                s.gradeOptions = p,
                s.reportGradeOptions = S,
                s.onlineClassesUserGradeOptions = g,
                l = l || s.gradeOptions[0],
                s.currentState.name.toLowerCase().includes("reports") || s.currentState.name.toLowerCase().includes("dashboard"));
                (l = l && !f.includes(l.id) && t ? S[0] : l) ? (s.curriculumId = l.curriculum.id,
                s.selectedGradeObj.curriculumId = s.curriculumId,
                s.gradeId = l.id,
                h.selectedGradeId = s.gradeId,
                v = l.id,
                s.selectedGradeObj.gradeId = v,
                a(l.id)) : r([])
            },
            getResourceDetails: function(t, s, r) {
                this.getUserCurriculum(function(e) {
                    E.getResourceDetailsFromCurriculum(e, t, s, r)
                }, r)
            },
            getAssignmentDetails: function(e, t, s) {
                e.assignmentUUID && E.isEmptyOrBlank(e.assignmentUuid) && (e.assignmentUuid = e.assignmentUUID),
                !e || !e.studentAssignmentId && E.isEmptyOrBlank(e.assignmentUuid) ? s("Id or uuid must be given for assignment") : r.getStudentAssignmentDetails(e, t, s)
            },
            getContentNames: function(t, s, r) {
                var n = [];
                d ? (A.forEach(t, function(e, t) {
                    n.push(d[e])
                }),
                s(n)) : e.getContentNames(function(e) {
                    d = e,
                    A.forEach(t, function(e, t) {
                        n.push(d[e])
                    }),
                    s(n)
                }, function(e) {
                    p.error("Failed to get contentNames"),
                    r()
                })
            },
            setCurrentActivity: function(e) {
                i = e
            },
            getCurrentActivity: function() {
                return i
            },
            getPracticeAssessmentDetails: function(e, t, s) {
                a.getPracticeAssessment(e, t, s)
            },
            getQuizAttempts: function(e, t, s) {
                a.getQuizAttempts(e, t, s)
            },
            startQuizAttempt: function(e, t, s) {
                a.startQuizAttempt(e, t, s)
            },
            storeAssessmentAnswers: function(e, t, s) {
                var r, n, i = !1;
                e.hasOwnProperty("isAssessment") && e.isAssessment && (i = !0,
                delete e.isAssessment);
                e.assessment.assessmentType === u.COMPETITIVE_MOCK_TEST ? (r = {
                    studentAssessment: e,
                    result: !0,
                    timestamp: Date.now()
                },
                n = o.encodeIds(e.id),
                o.$storageService.setUserPref(l.MOCK_TEST_KEY + n, r, !!i),
                t(r)) : a.storeAssessmentAnswers(e, t, s)
            },
            submitAssessment: function(e, t, s) {
                a.submitAssessment(e, t, s)
            }
        }),
        E
    }
    ]).service("AssessmentHelperService", ["APP_CONFIG", "MESSAGE_STRINGS", "UtilService", "assessmentPlugin", function(e, t, h, r) {
        var s = e.QUESTION_TYPE
          , n = (t.ASSESSMENT_EVENT,
        null);
        function v(e) {
            return !!A.isObject(e) && (e.questionType === s.MATCHING_SINGLE.value || e.questionType === s.MATRIX_MATCH_TYPE.value || e.questionType === s.MULTI_CHOICE_SINGLE.value)
        }
        function T(e) {
            return !!A.isObject(e) && e.questionType === s.MULTI_CHOICE_MULTI.value
        }
        function E(e) {
            return !!A.isObject(e) && (e.questionType === s.INTEGER_SINGLE_UNSIGNED.value || e.questionType === s.INTEGER_SINGLE_SIGNED.value)
        }
        function I(e) {
            return !!A.isObject(e) && e.questionType === s.NUMERICAL_VALUE.value
        }
        A.extend(this, {
            isMcqQuestion: v,
            isMcqSingleQuestion: function(e) {
                return !!A.isObject(e) && (e.questionType === s.MULTI_CHOICE_SINGLE.value || e.questionType === s.MATRIX_MATCH_TYPE.value || e.questionType === s.MATCHING_SINGLE.value)
            },
            isMcqMultiQuestion: T,
            isIntegerQuestion: E,
            isNumericQuestion: I,
            isBooleanQuestion: function(e) {
                return !!A.isObject(e) && e.questionType === s.TRUE_OR_FALSE.value
            },
            getIntegerMinMax: function(e) {
                return {
                    min: e === s.INTEGER_SINGLE_SIGNED.value ? -9 : 0,
                    max: 9
                }
            },
            getQuestionInstructions: function(e) {
                var t = "";
                return t = A.isObject(e) && A.isString(e.questionType) && (e = s[e.questionType],
                A.isObject(e)) ? e.description : t
            },
            createSummary: function(e, m, p) {
                if (!A.isArray(e))
                    return {};
                m = !!m;
                var g = 0
                  , S = 0
                  , f = !0
                  , e = e.map(function(e, t) {
                    var s, r = (p ? C.apply(".{.id == $id}", p.mcqs, {
                        id: e.mcq.id
                    })[0] : e.mcq) || e.mcq, n = h.isNotEmpty(r.answer), i = n ? r.answer : null, o = v(r), a = T(r), c = E(r), u = I(r), r = r.options, l = !h.isEmptyOrBlank(e.answer), e = e.answer || "", d = !1;
                    return n ? o ? a ? d = h.arrayCompare(e.split(""), i.split("")) : (d = e === i,
                    n = s = C.apply(".{.option == $option}", r, {
                        option: e
                    })[0],
                    i && e != i && (n = C.apply(".{.option == $option}", r, {
                        option: i
                    })[0]),
                    e = e + ". " + (s = s || {
                        optionText: ""
                    }).optionText,
                    i = i + ". " + (n = n || {
                        optionText: ""
                    }).optionText) : c ? (i = parseInt(i),
                    e = parseInt(e),
                    d = !isNaN(e) && i === e) : u && (i = parseFloat(i),
                    e = parseFloat(e),
                    d = !isNaN(e) && i === e) : (f = !(i = "N/A"),
                    o && (s = C.apply(".{.option == $option}", r, {
                        option: e
                    })[0]) && (e = e + ". " + s.optionText)),
                    l && g++,
                    m && d && S++,
                    {
                        index: t,
                        isAnswered: l,
                        isCorrect: d,
                        studentAnswer: l ? e : "Not Answered",
                        answer: m ? i : ""
                    }
                });
                return {
                    hasCorrectAnswers: f,
                    summaryMcqs: e,
                    numAnswered: g,
                    numCorrect: S
                }
            },
            getStudentAssessmentDetails: function(e, t, s) {
                n && n.assessment && n.assessment.uuid === e.assessmentUuid && A.isNumber(n.id) && (e.studentAssessmentId = n.id),
                r.getStudentAssessmentDetails(e, t, s)
            },
            setCurrentStudentAssessment: function(e) {
                n = e
            },
            getCurrentStudentAssessment: function() {
                return n
            }
        })
    }
    ])
}(window.angular, window.JSPath),
function(t, e, s) {
    "use strict";
    function r() {
        void 0 !== s.cordova ? (console.log("Cordova found, waiting until device ready."),
        document.addEventListener("deviceready", function() {
            console.log("Device ready, bootstrapping angular module."),
            t.bootstrap(e("body"), ["erudex.studentApp"])
        }, !1)) : console.log("Cordova not found, assuming angular module already loaded.")
    }
    var n = ["erudex.v2App.constants", "erudex.studentApp.services", "erudex.studentApp.filters", "erudex.studentApp.directives", "erudex.studentApp.plugins", "com.erudex.common", "com.erudex.common.constant", "com.erudex.common.services", "ui.router", "ngSanitize", "ngAnimate", "ngFileSaver", "com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls", "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.buffering", "info.vietnamcode.nampnq.videogular.plugins.youtube", "mm.foundation", "ui.calendar", "colorpicker.module", "wysiwyg.module", "toastr", "rzSlider", "angular-locker", "ngDragDrop", "ngFileUpload", "ngMessages", "ngScrollbars", "angular-useragent-parser", "angular-virtual-keyboard", "ui.bootstrap.datetimepicker", "pickadate", "angular-svg-round-progressbar", "apexcharts"];
    s.swfobject && n.push("swfobject"),
    t.module("erudex.v2App", n).config(["lockerProvider", function(e) {
        e.defaults({
            driver: "local",
            namespace: "com.erudex.v2App",
            separator: ".",
            eventsEnabled: !0,
            extend: {}
        })
    }
    ]).config(["VKI_CONFIG", function(e) {
        e.layout["Português Brasileiro"] = {
            name: "Portuguese (Brazil)",
            keys: [[["'", '"'], ["1", "!", "¹"], ["2", "@", "²"], ["3", "#", "³"], ["4", "$", "£"], ["5", "%", "¢"], ["6", "¨", "¬"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+", "§"], ["Bksp", "Bksp"]], [["Tab", "Tab"], ["q", "Q", "/"], ["w", "W", "?"], ["e", "E", "€"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["´", "`"], ["[", "{", "ª"], ["Enter", "Enter"]], [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], ["ç", "Ç"], ["~", "^"], ["]", "}", "º"], ["/", "?"]], [["Shift", "Shift"], ["\\", "|"], ["z", "Z"], ["x", "X"], ["c", "C", "₢"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], [":", ":"], ["Shift", "Shift"]], [[" ", " ", " ", " "], ["AltGr", "AltGr"]]],
            lang: ["pt-BR"]
        },
        e.layout.Numerico = {
            name: "Numerico",
            keys: [[["1", "1"], ["2", "2"], ["3", "3"]], [["4", "4"], ["5", "5"], ["6", "6"]], [["7", "7"], ["8", "8"], ["9", "9"]], [["0", "0"], ["-"], ["DEL", "Bksp"]]],
            lang: ["pt-BR-num"]
        },
        e.relative = !0,
        e.sizeAdj = !1,
        e.customClass = "customKeyboard"
    }
    ]).run(["$rootScope", function(e) {
        e.context || (e.context = {}),
        t.extend(e.context, {
            module: "student",
            isStudent: !0,
            role: "student",
            roleId: 4
        })
    }
    ]).config(["$stateProvider", "$urlRouterProvider", "BUILD_CONFIG", function(e, t, s) {
        var i = "../student/template/"
          , r = "../v2/template/";
        e.state("v2-dashboard", {
            url: "/dashboard",
            controller: "DashboardController",
            templateUrl: r + "common/dashboard.html",
            data: {
                pageCategory: "dashboard",
                pageId: "view"
            }
        }).state("v2-curriculum", {
            url: "/view-lessons",
            controller: "CurriculumViewController",
            templateUrl: r + "common/curriculum-view.html",
            data: {
                pageCategory: "curriculum",
                pageId: "view"
            }
        }).state("v2-liveClasses", {
            url: "/view-live-classes",
            controller: "LiveClassesController",
            templateUrl: r + "common/live-classes.html",
            data: {
                pageCategory: "live-classes",
                pageId: "list",
                title: "Live Classes"
            }
        }).state("v2-s-tests", {
            url: "/view-s-tests",
            controller: "StudentAssessmentsController",
            templateUrl: r + "student/tests/tests-list.html",
            data: {
                pageCategory: "tests",
                pageId: "tests"
            }
        }).state("v2-s-test-viewer", {
            url: "/view-s-test-viewer/:c/:t/:id",
            controller: "AssessmentViewerController",
            templateUrl: r + "student/tests/test-viewer.html",
            data: {
                pageCategory: "testViewer",
                pageId: "testViewer"
            }
        }).state("v2-t-tests", {
            url: "/view-t-tests",
            controller: "TeacherAssessmentsController",
            templateUrl: r + "teacher/tests/tests-list.html",
            data: {
                pageCategory: "tests",
                pageId: "tests"
            }
        }).state("v2-t-view-test", {
            url: "/view-test/:id",
            controller: "TeacherAssessmentViewController",
            templateUrl: r + "teacher/tests/view-test.html",
            data: {
                pageCategory: "t-view-test",
                pageId: "t-view-test"
            }
        }).state("v2-s-assignments", {
            url: "/view-s-assignments",
            controller: "StudentAssignmentsController",
            templateUrl: r + "student/assignments/assignments-list.html",
            data: {
                pageCategory: "s-assignments",
                pageId: "s-assignments"
            }
        }).state("v2-t-assignments", {
            url: "/view-t-assignments",
            controller: "TeacherAssignmentsController",
            templateUrl: r + "teacher/assignments/assignments-list.html",
            data: {
                pageCategory: "t-assignments",
                pageId: "t-assignments"
            }
        }).state("v2-t-view-assignment", {
            url: "/view-assignment/:id",
            controller: "TeacherAssignmentViewController",
            templateUrl: r + "teacher/assignments/view-assignment.html",
            data: {
                pageCategory: "t-view-assignment",
                pageId: "t-view-assignment"
            }
        }).state("v2-t-uploads", {
            url: "/view-t-uploads",
            controller: "TeacherUploadsController",
            templateUrl: r + "teacher/uploads/uploads-list.html",
            data: {
                pageCategory: "t-uploads",
                pageId: "t-uploads"
            }
        }).state("v2-s-timeline", {
            url: "/timeline",
            templateUrl: r + "student/timeline/timeline.html",
            controller: "TimelineController",
            data: {
                pageCategory: "timeline",
                pageId: "timeline"
            }
        }).state("v2-t-timeline", {
            url: "/t-timeline",
            templateUrl: r + "teacher/timeline/students-list.html",
            controller: "TimelineController",
            data: {
                pageCategory: "t-timeline",
                pageId: "t-timeline"
            }
        }).state("ar-resources", {
            url: "/ar-resources",
            templateUrl: r + "common/augmented-resources.html",
            controller: "AugmentedResources",
            data: {
                pageCategory: "ar-resources",
                pageId: "ar-resources"
            }
        }).state("v2-questions", {
            url: "/view-questions",
            controller: "QuestionsListController",
            templateUrl: r + "common/questions/questions-list.html",
            data: {
                pageCategory: "questions",
                pageId: "questions-list"
            }
        }).state("assessmentViewer", {
            url: "/assessment/viewer/:contentUUID/:c",
            templateUrl: i + "assessment-viewer.html",
            controller: "AssessmentViewerController",
            params: {
                studentAssessmentId: null
            },
            data: {
                disableFlags: ["assessment"],
                pageCategory: "assessment",
                pageId: "view"
            }
        }).state("bitsatAssessmentCompetitiveViewer", {
            url: "/bitsatassessment/viewer/:contentUUID/:id/:c/:subject",
            templateProvider: ["$http", "$templateCache", "$rootScope", "UtilService", function(e, t, s, r) {
                var n = i + "assessment-bitsat-viewer.html";
                return s.isMobile && (n = i + "assessment-attempt-viewer.html"),
                e.get(n, {
                    cache: t
                }).then(function(e) {
                    return e.data
                }, function(e) {
                    return r.$log.error("Error retrieving template " + n),
                    r.finishLoadError(s, {
                        delay: 3e3
                    }),
                    "<h1>Error retrieving template:" + e.status + "</h1>"
                })
            }
            ],
            controller: "BitsatAssessmentViewerController",
            params: {
                studentAssessmentId: null,
                publishedDateTime: null,
                subject: null
            },
            data: {
                disableFlags: ["mockTest"],
                pageCategory: "mockAssessment",
                pageId: "view"
            }
        }).state("assessmentCompetitiveViewerAdv", {
            url: "/assessment-adv/viewer/:contentUUID/:id/:c",
            templateUrl: i + "assessment-viewer-adv.html",
            controller: "AssessmentViewerController",
            params: {
                studentAssessmentId: null,
                publishedDateTime: null,
                subject: null
            },
            data: {
                disableFlags: ["mockTest"],
                pageCategory: "mockAssessmentAdv",
                pageId: "view"
            }
        }).state("assessmentCompetitiveViewer", {
            url: "/assessment/viewer/:contentUUID/:id/:c",
            templateProvider: ["$http", "$templateCache", "$rootScope", "UtilService", function(e, t, s, r) {
                var n = i + "assessment-viewer.html";
                return s.isMobile && (n = i + "assessment-attempt-viewer.html"),
                e.get(n, {
                    cache: t
                }).then(function(e) {
                    return e.data
                }, function(e) {
                    return r.$log.error("Error retrieving template " + n),
                    r.finishLoadError(s, {
                        delay: 3e3
                    }),
                    "<h1>Error retrieving template:" + e.status + "</h1>"
                })
            }
            ],
            controller: "AssessmentViewerController",
            params: {
                studentAssessmentId: null,
                publishedDateTime: null
            },
            data: {
                disableFlags: ["mockTest"],
                pageCategory: "mockAssessment",
                pageId: "view"
            }
        }).state("assessmentCompetitiveViewerResult", {
            url: "/assessment-result/viewer/:contentUUID/:id/:c",
            templateUrl: i + "assessment-result-viewer.html",
            controller: "AssessmentViewerController",
            params: {
                studentAssessmentId: null,
                publishedDateTime: null
            },
            data: {
                disableFlags: ["mockTest"],
                pageCategory: "mockAssessment",
                pageId: "view"
            }
        }).state("assessmentCompetitiveViewerResultAdv", {
            url: "/assessment-result-adv/viewer/:contentUUID/:id/:c",
            templateUrl: i + "assessment-result-viewer-adv.html",
            controller: "AssessmentViewerController",
            params: {
                studentAssessmentId: null,
                publishedDateTime: null
            },
            data: {
                disableFlags: ["mockTest"],
                pageCategory: "mockAssessmentAdv",
                pageId: "view"
            }
        }).state("studentReports", {
            url: "/student-reports",
            templateUrl: r + "common/test-report/student-report.html",
            controller: "UserAssessmentViewController",
            data: {
                pageCategory: "student-reports",
                pageId: "studentReports"
            }
        }).state("performanceReports", {
            url: "/performance-reports",
            templateUrl: r + "common/performance-overview/test-details-list.html",
            controller: "TestOverviewController",
            data: {
                pageCategory: "performance-reports",
                pageId: "performanceReports"
            }
        }).state("student-performance-reports", {
            url: "/student-performance-report/:userId/:sectionId/:grade/:track",
            templateUrl: r + "common/performance-overview/test-details-list.html",
            controller: "TestOverviewController",
            data: {
                pageCategory: "student-performance-reports",
                pageId: "student-performance-reports"
            }
        }).state("teacherReports", {
            url: "/reports",
            templateUrl: r + "common/teacher-overview/overview/main.html",
            controller: "teacherReportOverviewController",
            data: {
                pageCategory: "teacher-reports",
                pageId: "teacherReports"
            }
        }).state("teacher-reports", {
            url: "/teacher-reports/:type/:allInstitution/:institutionId/:gradeId/:track",
            templateUrl: r + "common/teacher-overview/overview/main.html",
            controller: "teacherReportOverviewController",
            data: {
                pageCategory: "teacher-reports",
                pageId: "teacher-reports"
            }
        }).state("v2-sb-home", {
            url: "/v2-sb-home",
            templateUrl: r + "spelling-bee/home.html",
            controller: "SBHomeController",
            data: {
                pageCategory: "spelling-bee-home",
                pageId: "spelling-bee-home"
            }
        }).state("v2-sb-learn", {
            url: "/v2-sb-learn",
            templateUrl: r + "spelling-bee/learn.html",
            controller: "SBLearnController",
            data: {
                pageCategory: "spelling-bee-learn",
                pageId: "spelling-bee-learn"
            }
        }).state("v2-sb-quiz", {
            url: "/v2-sb-quiz",
            templateUrl: r + "spelling-bee/quiz-list.html",
            controller: "SBQuizListController",
            data: {
                pageCategory: "spelling-bee-quiz-list",
                pageId: "spelling-bee-quiz-list"
            }
        }).state("v2-sb-quiz-viewer", {
            url: "/v2-sb-quiz-viewer/:id",
            templateUrl: r + "spelling-bee/quiz.html",
            controller: "SBQuizController",
            data: {
                pageCategory: "spelling-bee-quiz",
                pageId: "spelling-bee-quiz"
            }
        }).state("v2-sb-tests", {
            url: "/v2-sb-tests",
            templateUrl: r + "spelling-bee/test-list.html",
            controller: "StudentAssessmentsController",
            data: {
                pageCategory: "spelling-bee-test-list",
                pageId: "spelling-bee-test-list"
            }
        }).state("v2-sb-test-viewer", {
            url: "/view-sb-test-viewer/:c/:t/:id",
            controller: "AssessmentViewerController",
            templateUrl: r + "spelling-bee/test-viewer.html",
            data: {
                pageCategory: "testViewer",
                pageId: "testViewer"
            }
        }),
        t.otherwise("/")
    }
    ]);
    e(function() {
        r()
    })
}(window.angular, (window.JSPath,
window.jQuery), window),
function(N, R) {
    "use strict";
    N.module("erudex.v2App").controller("MainController", ["$rootScope", "$scope", "$state", "$stateParams", "$controller", "$modal", "$window", "userPlugin", "userActivityPlugin", "UtilService", "WSSService", "FileSaver", "v2CommonPlugin", "MESSAGE_STRINGS", "APP_CONFIG", "APP_PREFS", "COMPETITIVE_CURRICULUM", "STORAGE_KEYS", "locker", "$timeout", function(m, p, t, e, s, r, n, i, o, g, S, a, c, f, u, l, d, h, v, T) {
        N.extend(this, s("BaseMainCtrl", {
            $rootScope: m,
            $scope: p,
            userPlugin: i,
            userActivityPlugin: o,
            UtilService: g
        })),
        m.disableBackButton = !1,
        m.selectedGradeId = null,
        m.$state = t,
        m.user = {
            person: {
                firstName: "",
                lastName: ""
            },
            grade: {
                number: ""
            },
            userGrades: [{
                grade: {
                    number: ""
                }
            }]
        },
        p.gradeNumber = "",
        p.toggleMobileNav = !1,
        p.toggleModal = [],
        p.populateUserDetails = y,
        m.institutionList = [],
        p.getInstitutions = function() {
            var e;
            0 < m.institutionList.length || !i.isOrgUser() || (g.blockUiStart(p),
            e = {
                organizationId: m.user.institution.organization.id,
                institutionId: null
            },
            c.getInstitutionsByOrg(e, function(e) {
                g.blockUiStop(p),
                e.result ? m.institutionList = e.values : g.$toastr.error("Error while retrieving dashboard report")
            }, function(e) {
                g.$toastr.error("Error while retrieving dashboard report"),
                g.blockUiStop(p)
            }))
        }
        ,
        p.showDownloadResultSheet = !1;
        var E = this
          , I = {
            localhost: "http://localhost:8000/profile/",
            qa: "https://qa-classes.erudex.com/profile/",
            demo: "https://demo-classes.erudex.com/profile/",
            app: "https://classes.erudex.com/profile/"
        }
          , A = "apiHost"
          , C = v.driver("session").namespace("com.erudex");
        function y() {
            var o, t, a, c = m.user, e = (c.userGrades = E.sortPrimaryUserGrade(c.userGrades),
            R.apply(".grade{.curriculum.regular === true}", c.userGrades)[0]), u = (e && e.curriculum && (s = g.getCurriculumShortName(e.curriculum),
            p.gradeNumber = ", " + s + "-" + e.description + " " + e.number),
            m.enableMockTests = 0 < R.apply(".grade{.curriculum.competitive === true}", p.user.userGrades).length,
            []), l = [], d = "~UID" + c.id + "~OID" + c.institution.organization.id + "~IID" + c.institution.id + "~", s = (m.useV2Ux && (o = [],
            t = [],
            a = [],
            m.user.userGrades && 0 < m.user.userGrades.length && m.user.userGrades.forEach(function(s) {
                var r = !0
                  , n = 0
                  , i = !1
                  , e = (m.competitiveCurriculumExists || (m.competitiveCurriculumExists = s.grade.curriculum.competitive),
                s.userSections.forEach(function(e) {
                    d += "RID" + c.roles[0].id + "GID" + s.grade.id + "SID" + e.section.id + "~",
                    l.includes(e.section.id) || l.push(e.section.id),
                    m.isTeacher && (t = {
                        key: s.grade.id + "-" + e.section.id,
                        id: e.section.id,
                        gradeId: s.grade.id,
                        name: e.section.name,
                        institutionName: c.institution.name
                    },
                    u.includes(t.key) || (p.teacherSections.push(t),
                    u.push(t.key))),
                    i = !(m.isECUser && !i && e.section.preferences && "module.disable.studentCurriculum"in e.section.preferences && e.section.preferences["module.disable.studentCurriculum"]);
                    var t = m.isECUser ? e.section.displayName || e.section.name : (s.grade.curriculum.competitive ? s.grade.curriculum.competitiveName : s.grade.curriculum.shortName) + (12 !== s.grade.number || !1 === s.grade.curriculum.competitive ? "-" + s.grade.number : "")
                      , t = {
                        userSectionId: e.id,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        displayName: t,
                        sectionId: e.section.id,
                        gradeId: e.gradeId,
                        curriculum: s.grade.curriculum.competitive ? s.grade.curriculum.competitiveName : s.grade.curriculum.shortName,
                        isPaid: !m.isECUser || "paid" === (e.paymentStatus || "paid").toLowerCase(),
                        paymentAmount: e.paymentAmount
                    };
                    o.push(t),
                    m.isECUser && r && "unpaid" === (e.paymentStatus || "paid").toLowerCase() && (r = !1,
                    n = e.paymentAmount)
                }),
                (s.grade.curriculum.competitive ? s.grade.curriculum.competitiveName : s.grade.curriculum.shortName) + (12 !== s.grade.number || !1 === s.grade.curriculum.competitive ? "-" + s.grade.number : ""))
                  , e = {
                    gradeId: s.grade.id,
                    gradeNumber: s.grade.number,
                    gradeDescription: s.grade.description,
                    isPaid: r,
                    displayName: e,
                    curriculumId: s.grade.curriculum.id,
                    curriculumFullName: s.grade.curriculum.name,
                    curriculum: s.grade.curriculum.competitive ? s.grade.curriculum.competitiveName : s.grade.curriculum.shortName,
                    isCompetitive: s.grade.curriculum.competitive,
                    paymentAmount: n,
                    paymentUrl: null,
                    userSections: s.userSections
                };
                t.push(e),
                i && a.push(s.grade.id)
            }),
            m.courseGrades = t,
            m.courseGradeIds = a,
            m.courseSections = _.sortBy(o, "displayName"),
            t) && 0 < t.length && (s = (C.get(h.V2_SELECTED_GRADE) ? C.get(h.V2_SELECTED_GRADE) : m.courseGrades[0]).gradeId,
            e = (C.get(h.V2_SELECTED_COURSE) ? C.get(h.V2_SELECTED_COURSE) : m.courseSections[0]).userSectionId,
            s = R.apply(".{.gradeId === $id}", m.courseGrades, {
                id: s
            }),
            e = R.apply(".{.userSectionId === $id}", m.courseSections, {
                id: e
            }),
            m.selectedCourseGrade = (0 < s.length ? s : m.courseGrades)[0],
            m.selectedCourse = (0 < e.length ? e : m.courseSections)[0],
            C.put(h.V2_SELECTED_GRADE, m.selectedCourseGrade),
            C.put(h.V2_SELECTED_COURSE, m.selectedCourse)),
            p.notificationsSharedService.showNotifications(p, c.id, !1),
            C.get(A));
            S.connect(s, c.id, n.btoa(d)),
            g.setUserReady(),
            m.$broadcast(f.USER_RETRIEVED_EVENT, {
                user: c
            }),
            m.$broadcast(f.LOADING_EVENT, {
                status: f.LOADING_FINISHED
            })
        }
        function b(e) {
            g.blockUiStop(p),
            e.result ? "string" == typeof e.data ? g.$toastr.info(e.data) : (e = new Blob([e.data],{
                type: '"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"'
            }),
            a.saveAs(e, p.downloadFileName)) : g.$toastr.error("Unable to download results.")
        }
        i.getCurrentUser(function(e) {
            var t;
            console.log("user info retrieved."),
            g.initHashIds(e.userName, 16),
            g.initUserStorage(e.id),
            m.user = e,
            g.setCurrentUser(m.user),
            g.setPreferences(e.userPreferences),
            m.isStudent = i.isStudent(),
            m.isTeacher = i.isTeacher(),
            m.isGuardian = i.isGuardian(),
            m.isDataEntry = i.isDataEntry(),
            m.isOrgUser = i.isOrgUser(),
            m.isSupervisor = i.isSupervisor(),
            m.isECUser = null !== m.user.route && m.user.route.includes("ec-"),
            m.isOrgTgsbUser = !m.user.userPreferences["module.disable.spellingBee"],
            m.isTgsbUser = null !== m.user.route && m.user.route.includes("tgsb"),
            m.isTgsbUser && (m.tgsbCategory = m.user.userGrades[0].userSections[0].section.name),
            m.isOrgTgsbUser && (t = _.find(m.user.userGrades, function(e) {
                return "The Global Spelling Bee" === e.grade.curriculum.name
            })) && !m.isTeacher && (m.tgsbGradeId = t.grade.id,
            m.tgsbSectionId = t.userSections[0].sectionId,
            m.user.userGrades = _.filter(m.user.userGrades, function(e) {
                return e.id !== t.id
            }),
            m.tgsbCategory = t.userSections[0].section.name),
            m.orgPrintLogo = g.getPreference(l.ORGANIZATION_BW_LOGO.key, ""),
            m.orgPrintWatermark = g.getPreference(l.ORGANIZATION_PRINT_WATERMARK.key, ""),
            m.printErudexLogo = g.getPreference(l.PRINT_ERUDEX_LOGO.key, !l.PRINT_ERUDEX_LOGO.disabled.byBuild),
            m.assessmentKeyReleaseAfter = g.getPreference(l.ASSESSMENT_KEY_RELEASE.key, 1),
            m.restrictToSingleMockTest = g.getPreference(l.RESTRICT_TO_SINGLE_MOCK_TEST.key, !1),
            m.enableVirtualKeyboard = g.getPreference(l.ENABLE_VIRTUAL_KEYBOARD.key, !1),
            m.shuffleMcqOptions = g.getPreference(l.SHUFFLE_MCQ_OPTIONS.key, !1),
            m.allowLiveClassCreation = g.getPreference(l.LIVE_CLASSES_ALLOW_TEACHER_CREATION.key, !0),
            m.isApk = "undefined" != typeof androidLoginJS && null !== androidLoginJS,
            m.isApk && p.$emit(f.ONLINE_STATUS_CHANGED_EVENT, {
                newValue: androidLoginJS.getNetworkStatus()
            }),
            p.setLogoPath(),
            m.userAssessmentResultId = null,
            m.userAssignmentResultId = null,
            m.competitiveCurriculumExists = !1,
            m.useV2Ux = !0,
            m.selectedCourse = null,
            m.selectedCourseGrade = null,
            p.teacherSections = [],
            m.isGuardian && e.studentRelations && 0 < e.studentRelations.length && (i.setStudentUser(e.studentRelations[0].studentUserId, e.studentRelations[0].userGrades),
            p.selectedStudentRelation = e.studentRelations[0]),
            y(),
            g.setUserReady(),
            m.$broadcast(f.USER_RETRIEVED_EVENT, {
                user: e
            }),
            m.$broadcast(f.LOADING_EVENT, {
                status: f.LOADING_FINISHED
            }),
            p.getNotifications()
        }, function(e) {
            console.error(e),
            m.$broadcast(f.LOADING_EVENT, {
                status: f.LOADING_FINISHED
            })
        }),
        p.onChangeStudentRelation = function(e) {
            g.clearUserCurriculum(),
            p.selectedStudentRelation = e,
            i.setStudentUser(e.studentUserId, e.userGrades),
            y(),
            t.go(t.current, {}, {
                reload: !0
            })
        }
        ,
        p.toggleSheetBtn = function() {
            p.toggleMobileNav = !p.toggleMobileNav
        }
        ,
        p.pageSlideClose = function() {
            p.toggleMobileNav = !1
        }
        ,
        p.scrollSelected = function(e) {
            document.querySelector("#S-" + e).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            })
        }
        ,
        p.nameFilter = "",
        p.searchFilter = function(t) {
            return t = t.toLowerCase(),
            function(e) {
                return -1 !== e.fullName.toLowerCase().indexOf(t)
            }
        }
        ,
        p.toggleSectionModal = function(e) {
            p.toggleModal[e] = !p.toggleModal[e]
        }
        ,
        p.downloadResultSheet = function(e, t, s) {
            p.showDownloadResultSheet = !0,
            p.assessmentId = e,
            p.assessmentName = t,
            p.institutionIds = s
        }
        ,
        p.closeDownloadResultSheet = function() {
            p.showDownloadResultSheet = !1
        }
        ,
        p.classForOptions = function(e, t, s, r) {
            return "MULTI_CHOICE_MULTI" === r ? t.includes(e) ? "correct" : "" : e === t ? "correct" : e === s && s !== t ? "wrong" : ""
        }
        ,
        p.isNumericQuestionCorrect = function(e) {
            return 1 === e.c ? "correct" : 1 === e.ic ? "wrong" : "na"
        }
        ,
        p.questionStatus = function(e) {
            return e.c ? "correct-ques" : e.ic ? "incorrect-ques" : "unattended-ques"
        }
        ,
        p.questionTypeColor = function(e) {
            return "Medium" === e.difficultyLevel ? "medium" : "Difficult" === e.difficultyLevel ? "difficult" : "easy"
        }
        ,
        p.getCurriculumGradeDisplay = function() {
            return m.selectedCourseGrade ? m.selectedCourseGrade.displayName + " - " : ""
        }
        ,
        p.getSections = function(e) {
            var e = R.apply(".{.gradeId === $id}", p.teacherSections, {
                id: e
            })
              , t = [];
            return e.forEach(function(e) {
                t.push({
                    id: e.id,
                    name: e.name,
                    institutionName: e.institutionName
                })
            }),
            t
        }
        ,
        p.handleStateChangeSuccess = function(e, t, s, r, n) {
            "v2-s-test-viewer" === t.name ? (p.hideLeftNav = !0,
            p.showBackArrow = !1) : "v2-sb-quiz-viewer" === t.name || "v2-sb-test-viewer" === t.name ? (p.hideLeftNav = !0,
            p.showBackArrow = !0) : (p.hideLeftNav = !1,
            p.showBackArrow = !1)
        }
        ,
        p.getThumbnailUri = function(e) {
            return m.isApk ? "https://app.erudex.com/thumb/content/" + e.thumbnailUri : "../thumb/content/" + e.thumbnailUri
        }
        ,
        p.goToCourses = function() {
            var e = C.get(A)
              , e = I[e] + "?userToken=" + m.user.token + "&un=" + m.user.userName;
            n.location.href = e
        }
        ,
        m.getTeacherResourceIcon = function(e) {
            var t = "../img/icons/generic/"
              , e = e.contentResourceType.type;
            if (e) {
                if (e.includes("image"))
                    return "image";
                if (e.includes("audio"))
                    return "audio";
                if (e.includes("video"))
                    return "video";
                if (e.includes("pdf"))
                    return "pdf"
            } else
                t += "unknown.png";
            return t
        }
        ,
        p.getQuestionTypeDesc = function(e) {
            return "MULTI_CHOICE_MULTI" === e.questionType ? "MCQ Multi" : "NUMERICAL_VALUE" === e.questionType ? "Numerical" : "MULTI_CHOICE_SINGLE" === e.questionType ? "MCQ Single" : "MATRIX_MATCH_TYPE" === e.questionType ? "Matrix Matching Single" : "ASSERTION_AND_REASONING" === e.questionType ? "Assertion And Reasoning" : "FILL_IN_THE_BLANK" === e.questionType ? "Fill in the blank" : void 0
        }
        ,
        p.openChangePasswordDialog = function() {
            r.open({
                templateUrl: "../student/modal/change-password.html",
                windowClass: "confirm-modal",
                controller: "SelfChangePasswordController",
                resolve: {
                    user: function() {
                        return p.user
                    }
                }
            })
        }
        ,
        p.downloadResult = function(e, t, s, r) {
            g.blockUiStart(p),
            p.downloadFileName = t.replace(/\s+/g, "_") + "-" + r + ".xlsx";
            var n = []
              , t = (N.isArray(s) ? s.forEach(function(e) {
                n.push(e.institutionId)
            }) : n.push(s),
            {
                assessmentId: e,
                institutionId: n,
                roleId: p.user.roles[0].id,
                type: r
            });
            c.downloadXlsx(t, b)
        }
        ,
        p.progressPercentage = function(e, t) {
            return e / t * 100 + "%"
        }
        ,
        p.studentPercentage = function(e, t) {
            return parseFloat((e / t * 100).toFixed(1))
        }
        ,
        m.$watch("selectedGradeId", function() {
            var e, t;
            null !== m.selectedGradeId && (e = R.apply(".grade{.id === $id}", g.getCurrentUser().userGrades, {
                id: m.selectedGradeId
            })[0]) && e.curriculum && (t = g.getCurriculumShortName(e.curriculum),
            p.gradeNumber = ", " + t + "-" + e.description + " " + e.number)
        }),
        p.$on("$stateChangeStart", function(e, t, s, r, n) {
            p.toggleMobileNav && (p.toggleMobileNav = !1,
            g.finishLoadSuccess(p),
            e.preventDefault())
        }),
        n.receiveNetworkStatus = function(e) {}
    }
    ])
}(window.angular, window.JSPath),
function(h, v) {
    "use strict";
    h.module("erudex.v2App").factory("TeacherUploadSharedService", [function() {
        var n = {
            uploadContent: {},
            subject: null,
            selectedChapter: null,
            sections: [],
            files: [],
            showUploadSheet: !1,
            reloadUploads: !1,
            validForm: !1,
            forReset: {
                grade: null,
                subject: null,
                chapter: null,
                sections: null
            },
            reset: function() {
                n.validForm = !1,
                n.subject = null,
                n.selectedChapter = null,
                n.files = [],
                n.createEmptyUpload(n.forReset.grade, n.forReset.subject, n.forReset.chapter, n.forReset.sections)
            },
            closeCreateSheet: function() {
                n.showCreateSheet = !1
            },
            createEmptyUpload: function(e, t, s, r) {
                n.forReset.grade = e,
                n.forReset.subject = t,
                n.forReset.chapter = s,
                n.forReset.sections = r,
                n.showCreateSheet = !0,
                n.subject && n.subject.id === t.id && n.selectedChapter && n.selectedChapter.id === s.id || (n.subject = t,
                n.selectedChapter = s,
                n.uploadContent = {
                    chapterId: s.id,
                    chapterName: s.name,
                    name: null,
                    sections: []
                }),
                n.populateAndCheckSections(r)
            },
            populateAndCheckSections: function(e) {
                e.forEach(function(e) {
                    var t = _.find(n.uploadContent.sections, {
                        id: e.id
                    });
                    t ? _.has(t, "isChecked") || (t.isChecked = !1) : n.uploadContent.sections.push(h.extend(e, {
                        isChecked: !1
                    }))
                }),
                n.uploadContent.sections = _.sortBy(n.uploadContent.sections, "name")
            }
        };
        return n
    }
    ]).controller("TeacherUploadsController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "teacherUploadPlugin", "TeacherUploadSharedService", "locker", "STORAGE_KEYS", "APP_PREFS", "OWNER", function(i, t, e, s, r, o, n, a, c, u, l, d, m) {
        h.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        })),
        h.extend(i, {
            sharedService: c,
            uploads: []
        });
        var p = this
          , g = null
          , S = 0;
        function f() {
            t.selectedCourseGrade = v.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        i.storeSelections = function() {
            g && o.$storageService.setUserPref(l.REMEMBER_SELECT_CURRICULUM, g)
        }
        ,
        i.onViewUpload = function(e) {
            o.openPreviewOverlayV2({
                type: "resource",
                resource: e,
                link: e,
                chapter: null,
                subject: i.subject
            }, i.user, [])
        }
        ,
        i.onCreateUpload = function() {
            var e = i.getSections(t.selectedCourseGrade.gradeId);
            i.sharedService.createEmptyUpload(t.selectedCourseGrade, i.subject, e)
        }
        ,
        i.getTeacherUploads = function() {
            o.blockUiStart(i);
            var e = {
                teacherId: S,
                subjectId: i.subject.id
            };
            a.getTeacherUploads(e, function(e) {
                o.blockUiStop(i),
                e.result ? o.safeApply(i, function() {
                    i.uploads = e.values
                }) : o.$toastr.error("Error while retrieving uploaded content.")
            }, function(e) {
                o.blockUiStop(i),
                o.$toastr.error("Error while uploaded content.")
            })
        }
        ,
        o.checkUserLoaded(i, function() {
            S = i.user.id,
            i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                g = o.$storageService.getUserPref(l.REMEMBER_SELECT_CURRICULUM, {});
                var t = v.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, p.onSubjectsLoaded, g),
                f()
            }, function(e) {
                f()
            })
        }),
        i.$watch("subject", function() {
            i.subject && i.subject.id && 0 < i.subject.id && o.safeApply(i, function() {
                i.uploads = [],
                i.getTeacherUploads()
            })
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showCreateSheet && (i.sharedService.closeCreateSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("TeacherCreateUploadController", ["$scope", "$rootScope", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "OWNER", "APP_CONFIG", "CONTENT_DISPLAY_CATEGORY", "userPlugin", "teacherUploadPlugin", "TeacherUploadSharedService", function(o, e, t, s, a, c, u, r, l, d, m, p, n) {
        m.getUserInfo();
        var g = l.UPLOAD_TEACHER;
        function i() {
            var e, t, s, r, n, i;
            u.blockUiStart(o),
            i = o.sharedService.files,
            s = t = 0,
            r = e = !1,
            h.forEach(i, function(e) {
                t += e.size,
                s = s < e.size ? e.size : s,
                l.UPLOAD.TYPE_REGEX.test(e.type) || (r = !0)
            }),
            i.length > g.MAX_ATTACHMENTS ? u.$toastr.error("Too many attachments. Maximum of " + g.MAX_ATTACHMENTS + " allowed.") : s > g.MAX_SIZE ? u.$toastr.error("Each file attachment must be less than " + (g.MAX_SIZE / 1024 / 1024).toFixed(2) + "MB.") : t > g.MAX_TOTAL_SIZE ? u.$toastr.error("Total size of attachments must be less than " + (g.MAX_TOTAL_SIZE / 1024 / 1024).toFixed(2) + "MB.") : r ? u.$toastr.error("Only image and pdf file attachments are allowed.") : e = !0,
            e ? (n = [],
            h.forEach(o.sharedService.files, function(e) {
                n.push({
                    fileName: e.name,
                    fileSize: e.size,
                    type: e.type
                })
            }),
            i = {
                type: "teacher",
                files: n
            },
            m.getUploadUrls(i, function(e) {
                var t, s, r;
                e.result && (n = e.values,
                s = n,
                r = !0,
                h.forEach(o.sharedService.files, function(e, t) {
                    c.http({
                        url: s[t].uploadUrl,
                        method: "PUT",
                        headers: {
                            "Content-Type": e.type
                        },
                        data: e
                    }).then(function(e) {
                        a(function() {
                            o.result = e.data
                        })
                    }, function(e) {
                        0 < e.status && (o.errorMsg = e.status + ": " + e.data,
                        r = r && !1)
                    }, function(e) {
                        o.progress = Math.min(100, parseInt(100 * e.loaded / e.total))
                    })
                }),
                r) ? (e = n,
                t = [],
                o.sharedService.uploadContent.sections.forEach(function(e) {
                    e.isChecked && t.push(e.id)
                }),
                e = {
                    name: o.sharedService.uploadContent.name,
                    fileName: e[0].fileName + "|" + e[0].fileSize,
                    uri: e[0].uri,
                    contentType: e[0].type,
                    displayCategory: d.TEACHER,
                    chapterId: o.sharedService.uploadContent.chapterId,
                    sectionIds: 0 < t.length ? t.join() : null
                },
                p.addUploadedContent(e, function(e) {
                    u.blockUiStop(o),
                    e.result ? (u.$toastr.info("Content Uploaded Successfully."),
                    u.blockUiStop(o),
                    o.sharedService.closeCreateSheet(),
                    o.sharedService.reloadUploads = !0) : u.safeApply(o, function() {
                        o.msg = "Unable to upload Content (" + e.message + ")."
                    })
                }, function(e) {
                    console.error(e),
                    u.$toastr.error("Error Uploading Content", e.errorMessage),
                    u.blockUiStop(o)
                })) : (u.blockUiStop(o),
                u.$toastr.error("Error uploading attachments"))
            }, function(e) {
                u.blockUiStop(o),
                console.error(e),
                u.$toastr.error("Error uploading attachments", e.errorMessage)
            })) : u.blockUiStop(o)
        }
        o.sharedService = n,
        o.selectedChapter = o.sharedService.selectedChapter,
        o.sharedService.validForm = !1,
        o.showPublishDatePicker = !1,
        o.showDueDatePicker = !1,
        o.upload = {
            pattern: l.UPLOAD.TYPE_MIME_LIST,
            accept: l.UPLOAD.TYPE_MIME_LIST,
            maxSize: g.MAX_SIZE,
            maxFiles: 1,
            maxTotalSize: g.MAX_TOTAL_SIZE
        },
        o.onChangeChapter = function(e) {
            o.sharedService.uploadContent.chapterId = e.id,
            o.sharedService.uploadContent.chapterName = e.name,
            o.validateForm()
        }
        ,
        o.validateForm = function() {
            return o.sharedService.uploadContent.chapterId && o.sharedService.uploadContent.name && 0 < o.sharedService.files.length ? o.sharedService.validForm = !0 : o.sharedService.validForm = !1,
            !0
        }
        ,
        o.onFilesSelected = function(e) {
            o.sharedService.files = e,
            o.validateForm()
        }
        ,
        o.removeAttachment = function(s) {
            h.forEach(o.sharedService.files, function(e, t) {
                e.name === s.name && o.sharedService.files.splice(t, 1)
            }),
            o.validateForm()
        }
        ,
        o.onSubmit = function() {
            o.validateForm() && o.sharedService.validForm ? i() : u.$toastr.info("Enter all required fields.")
        }
        ,
        o.$on("$stateChangeStart", function(e, t, s, r, n) {
            o.sharedService.showCreateSheet && (o.sharedService.closeCreateSheet(),
            u.finishLoadSuccess(o),
            e.preventDefault())
        }),
        u.checkUserLoaded(o, function() {})
    }
    ])
}(window.angular, window.JSPath, window),
function(T, E) {
    "use strict";
    T.module("erudex.v2App").factory("TeacherAssignmentSharedService", [function() {
        var r = _.range(5, 101, 5)
          , n = {
            assignment: {},
            subject: null,
            selectedChapter: null,
            chapters: [],
            sections: [],
            files: [],
            marks: [],
            showCreateSheet: !1,
            showViewSheet: !1,
            reloadAssignments: !1,
            publishDateTime: null,
            dueDateTime: null,
            validForm: !1,
            resetNiceSelect: !0,
            forReset: {
                grade: null,
                subject: null,
                sections: null
            },
            closeCreateSheet: function() {
                n.chapters = [],
                n.marksOptions = [],
                n.showCreateSheet = !1,
                n.showViewSheet = !1
            },
            reset: function() {
                n.resetNiceSelect = !n.resetNiceSelect,
                n.validForm = !1,
                n.subject = null,
                n.chapters = [],
                n.files = [],
                n.marksOptions = [],
                n.createEmptyAssignment(n.forReset.grade, n.forReset.subject, n.forReset.sections)
            },
            createEmptyAssignment: function(e, t, s) {
                n.forReset.grade = e,
                n.forReset.subject = t,
                n.forReset.sections = s,
                n.showCreateSheet = !0,
                n.chapters = t.chapters,
                n.marksOptions = r,
                n.subject && n.subject.id === t.id || (n.subject = t,
                n.selectedChapter = null,
                n.publishDateTime = null,
                n.dueDateTime = null,
                n.assignment = {
                    id: null,
                    curriculumId: e.curriculumId,
                    curriculumName: e.curriculum,
                    gradeId: e.gradeId,
                    gradeNumber: e.gradeNumber,
                    subjectId: t.id,
                    subjectName: t.name,
                    chapterId: null,
                    chapterName: null,
                    totalScore: null,
                    name: null,
                    description: null,
                    publishDateTime: null,
                    dueDateTime: null,
                    sections: []
                }),
                n.populateAndCheckSections(s)
            },
            populateAndCheckSections: function(e) {
                e.forEach(function(e) {
                    var t = _.find(n.assignment.sections, {
                        id: e.id
                    });
                    t ? _.has(t, "isChecked") || (t.isChecked = !1) : n.assignment.sections.push(T.extend(e, {
                        isChecked: !1
                    }))
                }),
                n.assignment.sections = _.sortBy(n.assignment.sections, "name")
            }
        };
        return n
    }
    ]).controller("TeacherAssignmentsController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "teacherAssignmentPlugin", "TeacherAssignmentSharedService", "locker", "STORAGE_KEYS", "APP_PREFS", "OWNER", function(i, t, e, s, r, o, n, a, c, u, l, d, m) {
        T.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        })),
        T.extend(i, {
            sharedService: c,
            submissions: [],
            assignments: [],
            assignmentMetaData: null,
            pageNum: 0,
            moreAssignmentLoading: !0,
            showNoDataMessage: !1
        });
        var p = this
          , g = null
          , S = 0
          , f = 0;
        function h() {
            t.selectedCourseGrade = E.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        function v() {
            o.safeApply(i, function() {
                var e;
                i.pageNum = 0,
                i.assignments = [],
                i.getAssignments(),
                o.blockUiStart(i),
                e = {
                    teacherId: S,
                    subjectId: i.subject.id
                },
                a.getDashboardSubmissions(e, function(e) {
                    i.submissions = e.values,
                    o.blockUiStop(i)
                }, function(e) {
                    o.$toastr.error("Error while retrieving submissions."),
                    o.blockUiStop(i)
                })
            })
        }
        i.storeSelections = function() {
            g && o.$storageService.setUserPref(l.REMEMBER_SELECT_CURRICULUM, g)
        }
        ,
        i.onCreateAssignment = function() {
            var e = i.getSections(t.selectedCourseGrade.gradeId);
            i.sharedService.createEmptyAssignment(t.selectedCourseGrade, i.subject, e)
        }
        ,
        i.onSubmissionSelect = function(e) {
            t.userAssignmentResultId = e.id,
            s.go("v2-t-view-assignment", {
                id: e.assignmentId
            })
        }
        ,
        i.onViewAssignment = function(e) {
            t.userAssignmentResultId = null,
            s.go("v2-t-view-assignment", {
                id: e.assignmentId
            })
        }
        ,
        i.getAssignments = function() {
            i.moreAssignmentLoading = !0,
            i.showNoDataMessage = !1,
            i.pageNum++;
            var e = {
                organizationId: f,
                roleId: 3,
                teacherId: S,
                subjectId: i.subject.id,
                pageSize: 10,
                pageNum: i.pageNum
            };
            a.getAssignments(e, function(e) {
                i.moreAssignmentLoading = !1,
                e.result ? (i.assignmentMetaData = e.values[0].metadata,
                o.safeApply(i, function() {
                    i.assignments = i.assignments.concat(e.values[0].assignments),
                    i.showNoDataMessage = 0 === i.assignments.length
                })) : o.$toastr.error("Error while retrieving assignments.")
            }, function(e) {
                o.$toastr.error("Error while retrieving assignments.")
            })
        }
        ,
        i.assignmentStateClass = function(e) {
            return e.assigned === e.graded ? "graded-submissions" : 0 < e.submitted || 0 < e.graded ? "partial-submissions" : "no-submissions"
        }
        ,
        i.whenSubmitted = function(e) {
            return moment(e).fromNow()
        }
        ,
        o.checkUserLoaded(i, function() {
            S = i.user.id,
            f = i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                g = o.$storageService.getUserPref(l.REMEMBER_SELECT_CURRICULUM, {});
                var t = E.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, p.onSubjectsLoaded, g),
                h()
            }, function(e) {
                h()
            })
        }),
        i.$watch("subject", function() {
            i.subject && i.subject.id && 0 < i.subject.id && v()
        }),
        i.$watch("sharedService.reloadAssignments", function(e, t) {
            e && (i.sharedService.subject = null,
            i.sharedService.files = [],
            i.sharedService.reloadAssignments = !1,
            v())
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showCreateSheet && (i.sharedService.closeCreateSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("TeacherAssignmentViewController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "studentAssignmentPlugin", "teacherAssignmentPlugin", "UserAssignmentSharedService", "locker", "STATUS_ID", function(i, t, e, s, r, o, n, a, c, u, l, d) {
        function m() {
            o.blockUiStart(i);
            var e = {
                assignmentId: i.assignmentId
            };
            c.getStudentsByAssignment(e, function(e) {
                o.blockUiStop(i),
                e.result ? (i.students = e.values,
                i.loadUserAssignment && i.userAssignmentId && (i.loadUserAssignment = !1,
                p({
                    id: i.userAssignmentId
                }))) : o.$toastr.error("Error while retrieving Student Submission details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Student Submission details."),
                o.blockUiStop(i)
            })
        }
        function p(e) {
            o.blockUiStart(i);
            var t = {
                id: e.id
            }
              , s = _.find(i.students, {
                id: e.id
            });
            s.userAssignment ? (o.blockUiStop(i),
            i.sharedService.viewAssignment(s.userAssignment, i.isTeacher)) : a.getUserAssignments(t, function(e) {
                o.blockUiStop(i),
                e.result ? (s.userAssignment = e.value,
                i.sharedService.viewAssignment(s.userAssignment, i.isTeacher)) : o.$toastr.error("Error while retrieving student assignment(s).")
            }, function(e) {
                o.$toastr.error("Error while retrieving student assignment(s)."),
                o.blockUiStop(i)
            })
        }
        T.extend(i, {
            sharedService: u,
            STATUS_ID: d,
            loadUserAssignment: !1,
            students: [],
            assignmentId: null,
            userAssignmentId: null,
            assignment: {},
            all: {},
            pending: {},
            submitted: {},
            graded: {},
            getStudents: m,
            assignmentStateClass: function(e) {
                return e.statusId === d.INPROGRESS || e.statusId === d.PUSHED ? "no-submissions" : e.statusId === d.SUBMITTED ? "partial-submissions" : "graded-submissions"
            },
            onGrade: p
        }),
        i.viewAttachment = function(e) {
            o.openPreviewOverlay({
                type: "external",
                link: {
                    uri: e.signedUrl,
                    type: e.type
                }
            }, i.user)
        }
        ,
        i.pendingFilter = function(e) {
            return 2 === e.statusId || 5 === e.statusId
        }
        ,
        i.assignmentActionName = function(e) {
            return e.statusId === d.SUBMITTED ? "Grade" : e.statusId === d.GRADED ? "View" : void 0
        }
        ,
        o.checkUserLoaded(i, function() {
            var e;
            o.finishLoadSuccess(i),
            r.id ? (i.assignmentId = r.id,
            i.userAssignmentId = t.userAssignmentResultId,
            t.userAssignmentResultId = null,
            e = i.assignmentId,
            o.blockUiStart(i),
            c.getAssignments({
                id: e
            }, function(e) {
                o.blockUiStop(i),
                e.result ? i.assignment = e.value : o.$toastr.error("Error while retrieving Assignment details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Assignment details."),
                o.blockUiStop(i)
            }),
            i.loadUserAssignment = null !== i.userAssignmentId,
            m()) : o.$toastr.error("Unable to load assignment details.")
        }),
        i.$watch("sharedService.updateUserAssignment", function(e, t) {
            var s;
            e && (i.sharedService.updateUserAssignment = !1,
            s = _.find(i.students, {
                id: i.sharedService.userAssignment.id
            }),
            o.safeApply(i, function() {
                s.statusId = d.GRADED,
                s.score = i.sharedService.userAssignment.score
            }))
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showViewSheet && (i.sharedService.closeViewSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("TeacherCreateAssignmentController", ["$scope", "$rootScope", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "OWNER", "APP_CONFIG", "userPlugin", "teacherAssignmentPlugin", "TeacherAssignmentSharedService", function(o, e, t, s, a, c, u, r, n, l, i, d) {
        var m = l.getUserInfo()
          , p = n.UPLOAD_TEACHER;
        function g(e) {
            var t = o.sharedService.assignment
              , s = (0 < e.length && T.forEach(e, function(e) {
                e.uploadUrl && delete e.uploadUrl
            }),
            T.extend(o.sharedService.assignment, {
                instituteId: m.institution.id,
                instituteName: m.institution.name,
                orgId: m.institution.organization.id,
                orgName: m.institution.organization.name,
                userId: m.id,
                roleId: 3,
                owner: r.USER,
                teacherId: m.id,
                teacherName: m.userName,
                teacherFullName: m.fullName,
                attachments: e
            }),
            []);
            t.sections.forEach(function(e) {
                e.isChecked && s.push({
                    startDateTime: t.publishDateTime,
                    dueDateTime: t.dueDateTime,
                    id: e.id,
                    name: e.name,
                    institutionName: e.institutionName
                })
            }),
            t.sections = s,
            delete t.publishDateTime,
            delete t.dueDateTime,
            i.upsertAssignment(t, function(e) {
                u.blockUiStop(o),
                e.result ? (u.$toastr.info("Assignment Created Successfully."),
                u.blockUiStop(o),
                o.sharedService.closeCreateSheet(),
                o.sharedService.reloadAssignments = !0) : u.safeApply(o, function() {
                    o.msg = "Unable to create Assignment (" + e.message + ")."
                })
            }, function(e) {
                console.error(e),
                u.$toastr.error("Error Creating Assignment", e.errorMessage),
                u.blockUiStop(o)
            })
        }
        function S() {
            var t, e, s, r, n, i;
            0 < o.sharedService.files.length ? (u.blockUiStart(o),
            e = o.sharedService.files,
            n = r = 0,
            i = s = !1,
            T.forEach(e, function(e) {
                r += e.size,
                n = n < e.size ? e.size : n,
                p.TYPE_REGEX.test(e.type) || (i = !0)
            }),
            e.length > p.MAX_ATTACHMENTS ? u.$toastr.error("Too many attachments. Maximum of " + p.MAX_ATTACHMENTS + " allowed.") : n > p.MAX_SIZE ? u.$toastr.error("Each file attachment must be less than " + (p.MAX_SIZE / 1024 / 1024).toFixed(2) + "MB.") : r > p.MAX_TOTAL_SIZE ? u.$toastr.error("Total size of attachments must be less than " + (p.MAX_TOTAL_SIZE / 1024 / 1024).toFixed(2) + "MB.") : i ? u.$toastr.error("Only image and pdf file attachments are allowed.") : s = !0,
            s ? (t = [],
            T.forEach(o.sharedService.files, function(e) {
                t.push({
                    fileName: e.name,
                    fileSize: e.size,
                    type: e.type
                })
            }),
            e = {
                type: "assignment",
                files: t
            },
            l.getUploadUrls(e, function(e) {
                var s, r;
                e.result && (t = e.values,
                s = t,
                r = !0,
                T.forEach(o.sharedService.files, function(e, t) {
                    c.http({
                        url: s[t].uploadUrl,
                        method: "PUT",
                        headers: {
                            "Content-Type": e.type
                        },
                        data: e
                    }).then(function(e) {
                        a(function() {
                            o.result = e.data
                        })
                    }, function(e) {
                        0 < e.status && (o.errorMsg = e.status + ": " + e.data,
                        r = r && !1)
                    }, function(e) {
                        o.progress = Math.min(100, parseInt(100 * e.loaded / e.total))
                    })
                }),
                r) ? g(t) : (u.blockUiStop(o),
                u.$toastr.error("Error uploading attachments"))
            }, function(e) {
                u.blockUiStop(o),
                console.error(e),
                u.$toastr.error("Error uploading attachments", e.errorMessage)
            })) : u.blockUiStop(o)) : g([])
        }
        o.sharedService = d,
        o.selectedChapter = o.sharedService.selectedChapter,
        o.sharedService.validForm = !1,
        o.showPublishDatePicker = !1,
        o.showDueDatePicker = !1,
        o.upload = {
            pattern: p.TYPE_MIME_LIST,
            accept: p.TYPE_MIME_LIST,
            maxSize: p.MAX_SIZE,
            maxFiles: p.MAX_ATTACHMENTS,
            maxTotalSize: p.MAX_TOTAL_SIZE
        },
        o.openPublishDatePckr = function(e) {
            o.showPublishDatePicker = !o.showPublishDatePicker,
            o.showDueDatePicker = !1,
            e && event.stopPropagation()
        }
        ,
        o.openDueDatePckr = function(e) {
            o.showDueDatePicker = !o.showDueDatePicker,
            o.showPublishDatePicker = !1,
            e && event.stopPropagation()
        }
        ,
        o.onPublishDateSet = function(e, t, s) {
            o.showPublishDatePicker = !1,
            o.sharedService.assignment.publishDateTime = e.getTime(),
            o.validateForm()
        }
        ,
        o.onDueDateSet = function(e, t, s) {
            o.showDueDatePicker = !1,
            o.sharedService.assignment.dueDateTime = e.getTime(),
            o.validateForm()
        }
        ,
        o.publishStartDateBeforeRender = function(e, t) {
            var s = moment();
            t.filter(function(e) {
                return !(e.current || e.localDateValue() >= s.valueOf())
            }).forEach(function(e) {
                e.selectable = !1
            })
        }
        ,
        o.dueStartDateBeforeRender = function(t, e) {
            var s = (o.sharedService.publishDateTime ? moment(o.sharedService.publishDateTime) : moment()).add(5, "hours");
            e.filter(function(e) {
                return !("day" === t && s.format("YYYYMMDD") === moment(e.localDateValue()).format("YYYYMMDD") || e.localDateValue() >= s.valueOf())
            }).forEach(function(e) {
                e.selectable = !1
            })
        }
        ,
        o.onChangeChapter = function(e) {
            o.sharedService.assignment.chapterId = e.id,
            o.sharedService.assignment.chapterName = e.name,
            o.validateForm()
        }
        ,
        o.validateForm = function() {
            var e = E.apply(".{.isChecked == true}", o.sharedService.assignment.sections);
            return o.sharedService.assignment.chapterId && o.sharedService.assignment.publishDateTime && o.sharedService.assignment.dueDateTime && o.sharedService.assignment.name && o.sharedService.assignment.description && 0 < o.sharedService.assignment.totalScore && 0 < e.length ? o.sharedService.validForm = !0 : o.sharedService.validForm = !1,
            !0
        }
        ,
        o.onFilesSelected = function(e) {
            o.sharedService.files = e.splice(0, o.upload.maxFiles)
        }
        ,
        o.removeAttachment = function(s) {
            T.forEach(o.sharedService.files, function(e, t) {
                e.name === s.name && o.sharedService.files.splice(t, 1)
            })
        }
        ,
        o.onSubmit = function() {
            o.validateForm() && o.sharedService.validForm ? (u.safeApply(o, function() {
                o.msg = ""
            }),
            o.sharedService.assignment.id || S()) : u.$toastr.info("Enter all required fields.")
        }
        ,
        u.checkUserLoaded(o, function() {}),
        o.$watch("sharedService.showCreateSheet", function(e, t) {
            e && (o.showPublishDatePicker = !1,
            o.showDueDatePicker = !1)
        }),
        o.$watch("sharedService.assignment.sections.length", function(e, t) {
            o.validateForm()
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(b, N, p) {
    "use strict";
    b.module("erudex.v2App").factory("TeacherAssessmentSharedService", ["$rootScope", "UtilService", "PrintService", "APP_CONFIG", "ASSESSMENT_TYPE", function(T, E, I, A, e) {
        var i = _.range(1, 6, 1)
          , t = _.range(5, 61, 5)
          , s = _.range(90, 181, 30)
          , o = t.concat(s)
          , a = _.range(5, 51, 5)
          , C = {
            isPrinting: !1,
            mockTestId: null,
            mockTest: {},
            isMockTestApproved: !0,
            premadeTestsMetaData: null,
            premadeTests: [],
            premadeTestsPageNum: 0,
            morePremadeTestsLoading: !1,
            assessment: {},
            searchedAssessment: {},
            assessmentToPrint: {},
            userAssessment: {},
            subject: null,
            chapters: [],
            sections: [],
            marks: [],
            excludeIds: [],
            showCreateSheet: !1,
            showMockTestSheet: !1,
            showSearchTestsSheet: !1,
            showSearchTestQuestionsSheet: !1,
            reloadAssessments: !1,
            publishDateTime: null,
            dueDateTime: null,
            validForm: !1,
            validQuestionsSelect: !1,
            resetNiceSelect: !0,
            fontSizes: [{
                fontSize: "10px",
                fontValue: "s"
            }, {
                fontSize: "12px",
                fontValue: "n"
            }, {
                fontSize: "14px",
                fontValue: "l"
            }, {
                fontSize: "16px",
                fontValue: "xl"
            }, {
                fontSize: "18px",
                fontValue: "xxl"
            }],
            fontSizeSelect: "s",
            forReset: {
                grade: null,
                subject: null,
                sections: null
            },
            closeCreateSheet: function() {
                C.marksOptions = [],
                C.durationOptions = [],
                C.questionCountOptions = [],
                C.showCreateSheet = !1
            },
            closeSearchTestQuestionsSheet: function() {
                C.showSearchTestQuestionsSheet = !1
            },
            closeSearchTestsSheet: function() {
                C.premadeTests = [],
                C.premadeTestsMetaData = null,
                C.premadeTestsPageNum = 0,
                C.morePremadeTestsLoading = !1,
                C.showSearchTestQuestionsSheet = !1,
                C.showSearchTestsSheet = !1
            },
            closeMockTestSheet: function() {
                C.mockTest = {},
                C.showMockTestSheet = !1
            },
            reset: function() {
                C.resetNiceSelect = !C.resetNiceSelect,
                C.validForm = !1,
                C.subject = null,
                C.chapters = [],
                C.marksOptions = [],
                C.durationOptions = [],
                C.questionCountOptions = [],
                C.createEmptyAssessment(C.forReset.grade, C.forReset.subject, C.forReset.sections)
            },
            createEmptyAssessment: function(e, t, s) {
                C.forReset.grade = e,
                C.forReset.subject = t,
                C.forReset.sections = s,
                C.showCreateSheet = !0,
                C.marksOptions = i,
                C.durationOptions = o,
                C.questionCountOptions = a,
                C.subject && C.subject.id === t.id || (C.chapters = [],
                t.chapters.forEach(function(e) {
                    C.chapters.push(b.extend(e, {
                        isChecked: !1
                    }))
                }),
                C.subject = t,
                C.publishDateTime = null,
                C.dueDateTime = null,
                C.marksPerQuestion = null,
                C.assessment = {
                    id: null,
                    curriculumId: e.curriculumId,
                    curriculumName: e.curriculum,
                    gradeId: e.gradeId,
                    gradeNumber: e.gradeNumber,
                    subjectId: t.id,
                    subjectName: t.name,
                    assessmentSubject: {
                        id: t.id,
                        name: t.name,
                        description: t.description
                    },
                    subjects: [{
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        sortOrder: t.sortOrder,
                        questionCount: null,
                        totalScore: null
                    }],
                    assessmentType: "regular",
                    testType: "subject",
                    status: "Approved",
                    negativeMarkingValue: 0,
                    totalScore: null,
                    jeeNewPattern: !1,
                    duration: null,
                    questionCount: null,
                    name: null,
                    publishDateTime: null,
                    dueDateTime: null,
                    sections: [],
                    mcqs: []
                }),
                C.populateAndCheckSections(s)
            },
            copyAssessment: function(e, t, s, r) {
                C.forReset.grade = t,
                C.forReset.subject = s,
                C.forReset.sections = r,
                C.showCreateSheet = !0,
                C.marksOptions = i,
                C.durationOptions = o,
                C.questionCountOptions = a;
                var n = [];
                _.uniq(e.mcqs, function(e) {
                    return e.chapterId
                }).map(function(e) {
                    n.push(e.chapterId)
                }),
                C.chapters = [],
                s.chapters.forEach(function(e) {
                    C.chapters.push(b.extend(e, {
                        isChecked: n.includes(e.id)
                    }))
                }),
                C.subject = s,
                C.publishDateTime = null,
                C.dueDateTime = null,
                C.marksPerQuestion = e.totalScore / e.questionCount,
                C.assessment = {
                    id: null,
                    curriculumId: t.curriculumId,
                    curriculumName: t.curriculum,
                    gradeId: t.gradeId,
                    gradeNumber: t.gradeNumber,
                    subjectId: s.id,
                    subjectName: s.name,
                    assessmentSubject: {
                        id: s.id,
                        name: s.name,
                        description: s.description
                    },
                    subjects: [{
                        id: s.id,
                        name: s.name,
                        description: s.description,
                        sortOrder: s.sortOrder,
                        questionCount: null,
                        totalScore: null
                    }],
                    assessmentType: "regular",
                    testType: "subject",
                    status: "Approved",
                    negativeMarkingValue: 0,
                    totalScore: e.totalScore,
                    jeeNewPattern: !1,
                    duration: e.duration,
                    questionCount: e.questionCount,
                    name: "Copy of " + e.name,
                    publishDateTime: null,
                    dueDateTime: null,
                    sections: [],
                    mcqs: e.mcqs
                },
                C.populateAndCheckSections(r)
            },
            searchTestViewQuestions: function(e) {
                C.searchedAssessment = e,
                C.showSearchTestQuestionsSheet = !0
            },
            searchTests: function(e, t, s, r) {
                C.premadeTestsMetaData = e,
                C.premadeTests = C.premadeTests.concat(t),
                C.searchTestsSubject = r,
                C.showSearchTestsSheet = !0
            },
            populateAndCheckSections: function(e) {
                e.forEach(function(e) {
                    var t = _.find(C.assessment.sections, {
                        id: e.id
                    });
                    t ? _.has(t, "isChecked") || (t.isChecked = !1) : C.assessment.sections.push(b.extend(e, {
                        isChecked: !1
                    }))
                }),
                C.assessment.sections = _.sortBy(C.assessment.sections, "name")
            },
            showMockTest: function(e) {
                C.showMockTestSheet = !0,
                C.isMockTestApproved = !0,
                C.mockTestId = e.assessmentId
            },
            getSubjectDisplayName: function(e, t, s, r, n, i, o) {
                return e && !o && (e = _.find(i, function(e) {
                    return e.subjectId === s && e.number === parseInt(r)
                })) ? n + " Sec " + e.letter : t
            },
            printTest: function(e, s, t, r, n, i) {
                var o, a, c, u, l, d, m, p, g, S, f, h, v;
                E.blockUiStart(),
                s.name = s[0].name,
                s.totalScore = s[0].totalScore,
                s.testType = s[0].testType,
                s.assessmentType = s[0].assessmentType,
                s.assessmentSections = s[0].assessmentSections,
                C.isPrinting || (C.isPrinting = !0,
                o = "adv" === (s.testType || ""),
                a = s[0].neet,
                c = [],
                b.forEach(s, function(e) {
                    c = c.concat(e.mcqs)
                }),
                s.assessmentMcqs = c,
                v = _.uniq(c, function(e) {
                    return e.mcqSubject.description
                }).map(function(e) {
                    return {
                        subjectId: a ? e.mcqSubject.id : 0,
                        name: e.mcqSubject.description,
                        sortOrder: e.mcqSubject.sortOrder,
                        questionCount: 0,
                        questionStart: 0,
                        mcqStart: 0,
                        mcqEnd: 0,
                        assertionStart: 0,
                        assertionEnd: 0,
                        numericStart: 0,
                        numericEnd: 0,
                        class: ""
                    }
                }),
                u = [],
                e.subjectCount = _.sortBy(v, "sortOrder"),
                l = e.subjectCount,
                o || (d = [],
                h = 1,
                _.forEach(e.subjectCount, function(t) {
                    var e = _.filter(c, function(e) {
                        return e.mcqSubject.description === t.name
                    })
                      , s = _.filter(e, function(e) {
                        return e.questionType == A.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value || e.questionType == A.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value
                    })
                      , r = _.filter(e, function(e) {
                        return e.questionType == A.QUESTION_TYPE.NUMERICAL_VALUE.value || e.hint == A.QUESTION_TYPE.NUMERICAL_VALUE.value
                    })
                      , n = _.filter(e, function(e) {
                        return e.questionType == A.QUESTION_TYPE.ASSERTION_AND_REASONING.value
                    });
                    d = d.concat(_.sortBy(s, "id")).concat(_.sortBy(r, "id")).concat(_.sortBy(n, "id")),
                    t.questionCount = e.length,
                    g = h + s.length - 1,
                    f = (p = 1 + g) + n.length - 1,
                    S = (m = 1 + f) + r.length - 1,
                    t.questionStart = h,
                    t.mcqStart = h,
                    t.mcqEnd = g,
                    t.numericStart = m,
                    t.numericEnd = S,
                    t.assertionStart = p,
                    t.assertionEnd = f,
                    h = 1 + S
                }),
                s.questions = d,
                e.originalQuestions = d,
                u = _.uniq(s.questions, function(e) {
                    return e.questionType
                }).map(function(e) {
                    return e.questionType === A.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value || e.questionType === A.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value ? {
                        questionType: A.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value,
                        section: "A",
                        instructionSuffix: " contains questions with 4 options (1), (2), (3) and (4), of which only one is correct. Mark the most appropriate choice."
                    } : e.questionType === A.QUESTION_TYPE.ASSERTION_AND_REASONING.value ? {
                        questionType: A.QUESTION_TYPE.ASSERTION_AND_REASONING.value,
                        section: "B",
                        instructionSuffix: " contains questions with 4 options (1), (2), (3) and (4), of which only one is correct. Mark the most appropriate choice."
                    } : e.questionType === A.QUESTION_TYPE.MATRIX_MATCH_TYPE.value ? {
                        questionType: A.QUESTION_TYPE.MATRIX_MATCH_TYPE.value,
                        section: "C",
                        instructionSuffix: " contains questions with 4 options (1), (2), (3) and (4), of which only one is correct. Mark the most appropriate choice."
                    } : e.questionType === A.QUESTION_TYPE.NUMERICAL_VALUE.value ? {
                        questionType: A.QUESTION_TYPE.NUMERICAL_VALUE.value,
                        section: "C",
                        instructionSuffix: " contains questions of which, the answer would be a numerical value."
                    } : void 0
                })),
                a && (h = 1,
                b.forEach(_.sortBy(v, "sortOrder"), function(t) {
                    var e = _.filter(s.assessmentSections, function(e) {
                        return e.subjectId === t.subjectId
                    })
                      , e = _.sortBy(e, "letter");
                    b.forEach(e, function(e) {
                        0 < e.questionCount && (e.mcqStart = h,
                        h += e.questionCount)
                    })
                })),
                v = {
                    allMcqs: s.questions,
                    curriculumName: T.selectedCourseGrade.curriculum,
                    assessmentType: s.assessmentType,
                    institution: e.user.institution,
                    showOptions: t,
                    showAnswer: r,
                    showSolution: n,
                    uniqueSubjects: l,
                    uniqueQuestionTypes: u,
                    isCompactPrint: i,
                    orgPrintLogo: T.orgPrintLogo,
                    printErudexLogo: T.printErudexLogo,
                    assessmentName: s.name,
                    assessmentSections: s.assessmentSections,
                    assessment: s,
                    totalScore: s.totalScore,
                    totalQuestionCount: s[0].questionCount,
                    MCQ_SINGLE_QUESTION_TYPES: A.MCQ_SINGLE_QUESTION_TYPES,
                    fontSizeSelect: C.fontSizeSelect,
                    convertNumToAlphabet: function(e) {
                        return String.fromCharCode(65 + e)
                    },
                    getNeetSectionQuestions: function(t, e) {
                        e = _.find(e, function(e) {
                            return e.subjectId === t.subjectId && parseInt(e.sectionNumber) === t.number
                        });
                        return e ? e.mcqs : []
                    }
                },
                I.printTemplate(o ? "../v2/template/teacher/tests/print/print-adv.html" : a ? "../v2/template/teacher/tests/print/print-neet.html" : "../v2/template/teacher/tests/print/print.html", v).then(function() {}, function() {
                    E.$toastr.error("Error creating printable page.")
                }).finally(function() {
                    E.blockUiStop(),
                    C.isPrinting = !1
                }))
            }
        };
        return C
    }
    ]).controller("TeacherAssessmentsController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$modal", "UtilService", "userPlugin", "teacherAssessmentPlugin", "TeacherAssessmentSharedService", "locker", "STORAGE_KEYS", "APP_PREFS", "OWNER", function(i, o, e, t, s, a, c, r, u, n, l, d, m, p) {
        b.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: c
        }));
        var g = l.driver("session").namespace("com.erudex")
          , S = "subject"
          , f = (b.extend(i, {
            sharedService: n,
            getAssessments: C,
            submissions: [],
            assessments: [],
            mockTests: [],
            assessmentMetaData: null,
            pageNum: 0,
            assessmentTab: 1,
            moreAssessmentLoading: !0,
            showNoDataMessage: !1,
            showMockTests: "mock" === (g.get(d.V2_TEACHER_SELECTED_ASSESSMENT_TYPE) || S)
        }),
        this)
          , h = null
          , v = 0
          , T = 0
          , E = 0;
        function I() {
            o.selectedCourseGrade = N.apply(".{.gradeId == $gradeId}", o.courseGrades, {
                gradeId: o.selectedGradeId
            })[0],
            c.finishLoadSuccess(i)
        }
        function A(e, s, r, n) {
            c.blockUiStart(i),
            u.getAssessments({
                id: e
            }, function(e) {
                var t;
                c.blockUiStop(i),
                e.result ? n ? i.sharedService.searchTestViewQuestions(e.values[0]) : r ? (i.sharedService.assessmentToPrint = e.values,
                a.open({
                    templateUrl: "../v2/template/teacher/tests/print/show-print-options.html",
                    windowClass: "confirm-modal",
                    controller: ["$scope", "TeacherAssessmentSharedService", "$modalInstance", function(n, e, t) {
                        n.showOptions = !1,
                        n.showAnswer = !1,
                        n.showSolution = !1,
                        n.isCompactPrint = !1,
                        n.positiveResponse = function() {
                            t.dismiss("print"),
                            e.printTest(n, e.assessmentToPrint, n.showOptions, n.showAnswer, n.showSolution, n.isCompactPrint)
                        }
                        ,
                        n.negativeResponse = function() {
                            t.dismiss("cancel")
                        }
                        ,
                        n.selectPrintOption = function(e, t, s, r) {
                            n.showOptions = e,
                            n.showAnswer = t,
                            n.showSolution = s,
                            n.isCompactPrint = r
                        }
                    }
                    ],
                    backdrop: "static",
                    keyboard: !0
                })) : (t = i.getSections(o.selectedCourseGrade.gradeId),
                i.sharedService.copyAssessment(e.values[0], o.selectedCourseGrade, s, t)) : c.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                c.$toastr.error("Error while retrieving Test details."),
                c.blockUiStop(i)
            })
        }
        function C(t) {
            c.blockUiStart(i),
            i.showNoDataMessage = !1,
            t ? (i.sharedService.morePremadeTestsLoading = !0,
            i.sharedService.premadeTestsPageNum++) : (i.moreAssessmentLoading = !0,
            i.pageNum++);
            var e = {
                organizationId: T,
                institutionId: E,
                roleId: 3,
                teacherId: v,
                subjectId: i.subject.id,
                pageSize: 10,
                pageNum: t ? i.sharedService.premadeTestsPageNum : i.pageNum,
                isPremadeSearch: t
            };
            u.getAssessments(e, function(e) {
                c.blockUiStop(i),
                t ? i.sharedService.morePremadeTestsLoading = !1 : i.moreAssessmentLoading = !1,
                e.result ? t ? i.sharedService.searchTests(e.values[0].metadata, e.values[0].assessments, o.selectedCourseGrade, i.subject) : (i.assessmentMetaData = e.values[0].metadata,
                c.safeApply(i, function() {
                    i.assessments = i.assessments.concat(e.values[0].assessments),
                    i.showNoDataMessage = 0 == i.assessments.length
                })) : c.$toastr.error("Error while retrieving tests.")
            }, function(e) {
                c.blockUiStop(i),
                c.$toastr.error("Error while retrieving tests.")
            })
        }
        function y() {
            c.safeApply(i, function() {
                var e, t;
                i.pageNum = 0,
                i.assessments = [],
                i.mockTests = [],
                i.showMockTests ? (i.showNoDataMessage = !1,
                c.blockUiStart(i),
                e = o.selectedCourseGrade.curriculumFullName,
                t = o.selectedCourseGrade.gradeId,
                u.getCompetitiveMockAssessmentsByCurriculum(e, t, function(e) {
                    c.blockUiStop(i),
                    i.$apply(function() {
                        i.mockTests = e,
                        i.showNoDataMessage = 0 === i.mockTests.length
                    })
                }, function(e) {
                    c.blockUiStop(i),
                    c.$toastr.error("Error while retrieving mock tests.")
                })) : (C(!1),
                c.blockUiStart(i),
                e = {
                    teacherId: v,
                    subjectId: i.subject.id
                },
                u.getDashboardSubmissions(e, function(e) {
                    i.submissions = e.values,
                    c.blockUiStop(i)
                }, function(e) {
                    c.$toastr.error("Error while retrieving submissions."),
                    c.blockUiStop(i)
                }))
            })
        }
        i.storeSelections = function() {
            h && c.$storageService.setUserPref(d.REMEMBER_SELECT_CURRICULUM, h)
        }
        ,
        i.toggleAssessmentType = function(e) {
            i.showMockTests = "mock" === e,
            g.put(d.V2_TEACHER_SELECTED_ASSESSMENT_TYPE, e),
            y()
        }
        ,
        i.onSearchAssessment = function() {
            C(!0)
        }
        ,
        i.onCreateAssessment = function() {
            var e = i.getSections(o.selectedCourseGrade.gradeId);
            i.sharedService.createEmptyAssessment(o.selectedCourseGrade, i.subject, e)
        }
        ,
        i.onSubmissionSelect = function(e) {
            o.userAssessmentResultId = e.id,
            t.go("v2-t-view-test", {
                id: c.encodeIds(e.assessmentId)
            })
        }
        ,
        i.onViewAssessment = function(e) {
            o.userAssessmentResultId = null,
            t.go("v2-t-view-test", {
                id: c.encodeIds(e.assessmentId)
            })
        }
        ,
        i.onPrintAssessment = function(e) {
            A(e.assessmentId, i.subject, !0, !1)
        }
        ,
        i.onSearchAssessmentViewQuestions = function(e) {
            A(e.assessmentId, i.subject, !1, !0)
        }
        ,
        i.onCopyAssessment = function(e) {
            var t = i.subject;
            i.sharedService.showSearchTestsSheet && (t = i.sharedService.searchTestsSubject,
            i.sharedService.closeSearchTestsSheet()),
            A(e.assessmentId, t, !1, !1)
        }
        ,
        i.onViewMockTest = function(e) {
            i.sharedService.showMockTest(e)
        }
        ,
        i.setTab = function(e) {
            i.assessmentTab = e
        }
        ,
        i.isSet = function(e) {
            return i.assessmentTab === e
        }
        ,
        i.availableFilter = function(e) {
            return !e.approvedDateTime
        }
        ,
        i.approvedFilter = function(e) {
            return e.approvedDateTime
        }
        ,
        i.assessmentStateClass = function(e) {
            return e.assessmentType && "competitiveMock" === e.assessmentType ? e.approvedDateTime ? "graded-submissions" : "no-submissions" : e.assigned === e.graded ? "graded-submissions" : 0 < e.submitted || 0 < e.graded ? "partial-submissions" : "no-submissions"
        }
        ,
        i.whenSubmitted = function(e) {
            return moment(e).fromNow()
        }
        ,
        c.checkUserLoaded(i, function() {
            v = i.user.id,
            T = i.user.institution.organization.id,
            E = i.user.institution.id,
            c.getUserCurriculum(function(e) {
                h = c.$storageService.getUserPref(d.REMEMBER_SELECT_CURRICULUM, {});
                var t = N.apply(".grade", i.user.userGrades).sort(c.sortGrades);
                c.buildStudentCurriculumGradeSelect(i, t, e, f.onSubjectsLoaded, h),
                I()
            }, function(e) {
                I()
            })
        }),
        i.$watch("subject", function() {
            var e;
            i.subject && i.subject.id && 0 < i.subject.id && (e = g.get(d.V2_TEACHER_SELECTED_ASSESSMENT_TYPE) || S,
            o.selectedCourseGrade.isCompetitive || (e = "subject"),
            i.toggleAssessmentType(e))
        }),
        i.$watch("sharedService.reloadAssessments", function(e, t) {
            e && (i.sharedService.subject = null,
            i.sharedService.chapters = [],
            i.sharedService.excludeIds = [],
            i.sharedService.reloadAssessments = !1,
            y())
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showCreateSheet && (i.sharedService.closeCreateSheet(),
            c.finishLoadSuccess(i),
            e.preventDefault()),
            i.sharedService.showCreateSheet && (i.sharedService.closeCreateSheet(),
            c.finishLoadSuccess(i),
            e.preventDefault()),
            i.sharedService.showSearchTestsSheet && (i.sharedService.closeSearchTestsSheet(),
            c.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("TeacherAssessmentViewController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$modal", "UtilService", "userPlugin", "teacherAssessmentPlugin", "TeacherAssessmentSharedService", "UserAssessmentSharedService", "PrintService", "locker", "STATUS_ID", "ASSESSMENT_TYPE", "APP_CONFIG", function(i, s, e, t, r, n, o, a, c, u, l, d, m, p, g, S) {
        b.extend(i, {
            sharedService: u,
            sharedUAService: l,
            STATUS_ID: p,
            loadUserAssessment: !1,
            students: [],
            assessmentId: null,
            userAssessmentId: null,
            assessment: {},
            all: {},
            pending: {},
            graded: {},
            getStudents: v,
            onViewUserAssessment: T,
            assessmentStateClass: function(e) {
                return e.statusId === p.INPROGRESS || e.statusId === p.PUSHED ? "no-submissions" : e.statusId === p.SUBMITTED ? "partial-submissions" : "graded-submissions"
            },
            getMockTest: f,
            onApproveMockTest: function() {
                n.open({
                    templateUrl: "../student/modal/confirm-modal.html",
                    controller: "ConfirmModalController",
                    windowClass: "confirm-modal",
                    resolve: {
                        message: function() {
                            return "You are about to approve Mock Test - " + i.sharedService.mockTest[0].name + ". Please confirm?"
                        }
                    }
                }).result.then(h, function() {
                    o.$log.log("Modal dismissed.")
                })
            },
            onShowPrintOptions: function() {
                n.open({
                    templateUrl: "../v2/template/teacher/tests/print/show-print-options.html",
                    windowClass: "confirm-modal",
                    controller: ["$scope", "TeacherAssessmentSharedService", "$modalInstance", function(n, e, t) {
                        n.showOptions = !1,
                        n.showAnswer = !1,
                        n.showSolution = !1,
                        n.isCompactPrint = !1,
                        n.positiveResponse = function() {
                            t.dismiss("print"),
                            e.printTest(n, e.mockTest, n.showOptions, n.showAnswer, n.showSolution, n.isCompactPrint)
                        }
                        ,
                        n.negativeResponse = function() {
                            t.dismiss("cancel")
                        }
                        ,
                        n.selectPrintOption = function(e, t, s, r) {
                            n.showOptions = e,
                            n.showAnswer = t,
                            n.showSolution = s,
                            n.isCompactPrint = r
                        }
                    }
                    ],
                    backdrop: "static",
                    keyboard: !0
                })
            }
        });
        function f(e) {
            o.blockUiStart(i),
            c.getAssessmentById({
                id: e
            }, function(e) {
                o.blockUiStop(i),
                i.sharedService.mockTest = e.values,
                i.sharedService.isMockTestApproved = "Approved" === i.sharedService.mockTest[0].status
            }, function(e) {
                o.blockUiStop(i),
                o.$toastr.error("Error printing test."),
                o.$log.error(e)
            })
        }
        function h() {
            o.blockUiStart(i);
            var e = {
                assessmentId: i.sharedService.mockTestId
            };
            c.approveMockTest(e, function(t) {
                o.blockUiStop(i),
                t && t.result ? (o.$toastr.info("Mock Test approved successfully."),
                s.$apply(function() {
                    var e = _.find(i.mockTests, {
                        assessmentId: i.sharedService.mockTestId
                    });
                    o.safeApply(i, function() {
                        e.approvedDateTime = t.value.approvedDateTime,
                        i.sharedService.closeMockTestSheet()
                    })
                })) : o.$toastr.error("Error approving Mock Test/Practice Test.")
            }, function(e) {
                o.blockUiStop(i),
                o.$toastr.error("Error approving Mock Test/Practice Test.")
            })
        }
        function v() {
            o.blockUiStart(i);
            var e = {
                assessmentId: parseInt(i.assessmentId)
            };
            c.getStudentsByAssessment(e, function(e) {
                o.blockUiStop(i),
                e.result ? i.students = e.values : o.$toastr.error("Error while retrieving Student Submission details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Student Submission details."),
                o.blockUiStop(i)
            })
        }
        function T(e) {
            i.sharedUAService.showUserAssessment(e, 0)
        }
        i.pendingFilter = function(e) {
            return 2 === e.statusId || 5 === e.statusId
        }
        ,
        o.checkUserLoaded(i, function() {
            o.finishLoadSuccess(i),
            r.id && (i.assessmentId = o.decodeIds(r.id)[0],
            i.userAssessmentId = s.userAssessmentResultId,
            s.userAssessmentResultId = null,
            i.loadUserAssessment = null !== i.userAssessmentId,
            v(),
            i.loadUserAssessment) && (i.loadUserAssessment = !1,
            T(i.userAssessmentId))
        }),
        i.$watch("sharedService.showMockTestSheet", function(e, t) {
            e && f(i.sharedService.mockTestId)
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showMockTestSheet && (i.sharedService.closeMockTestSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault()),
            i.sharedUAService.showUserAssessmentViewSheet && (i.sharedUAService.closeUserAssessmentViewSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("TeacherCreateAssessmentController", ["$scope", "$rootScope", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "OWNER", "userPlugin", "teacherAssessmentPlugin", "TeacherAssessmentSharedService", function(r, e, t, s, n, i, o, a, c, u, l) {
        var d = c.getUserInfo();
        function m() {
            r.sharedService.assessment.questionCount && r.sharedService.marksPerQuestion && (r.sharedService.assessment.totalScore = r.sharedService.marksPerQuestion * r.sharedService.assessment.questionCount)
        }
        r.sharedService = l,
        r.sharedService.validForm = !1,
        r.showPublishDatePicker = !1,
        r.showDueDatePicker = !1,
        r.openPublishDatePckr = function(e) {
            r.showPublishDatePicker = !r.showPublishDatePicker,
            r.showDueDatePicker = !1,
            e && event.stopPropagation()
        }
        ,
        r.openDueDatePckr = function(e) {
            r.showDueDatePicker = !r.showDueDatePicker,
            r.showPublishDatePicker = !1,
            e && event.stopPropagation()
        }
        ,
        r.onPublishDateSet = function(e, t, s) {
            r.showPublishDatePicker = !1,
            r.sharedService.assessment.publishDateTime = e.getTime(),
            r.validateForm()
        }
        ,
        r.onDueDateSet = function(e, t, s) {
            r.showDueDatePicker = !1,
            r.sharedService.assessment.dueDateTime = e.getTime(),
            r.validateForm()
        }
        ,
        r.publishStartDateBeforeRender = function(e, t) {
            var s = moment();
            t.filter(function(e) {
                return !(e.current || e.localDateValue() >= s.valueOf())
            }).forEach(function(e) {
                e.selectable = !1
            })
        }
        ,
        r.dueStartDateBeforeRender = function(t, e) {
            var s = (r.sharedService.publishDateTime ? moment(r.sharedService.publishDateTime) : moment()).add(5, "hours");
            e.filter(function(e) {
                return !("day" === t && s.format("YYYYMMDD") === moment(e.localDateValue()).format("YYYYMMDD") || e.localDateValue() >= s.valueOf())
            }).forEach(function(e) {
                e.selectable = !1
            })
        }
        ,
        r.onChangeChapter = function(e) {
            r.sharedService.assessment.chapterId = e.id,
            r.sharedService.assessment.chapterName = e.name,
            r.validateForm()
        }
        ,
        r.onchangeMarks = function() {
            m(),
            r.validateForm()
        }
        ,
        r.onChangeQuestionCount = function() {
            r.sharedService.assessment.mcqs && r.sharedService.assessment.questionCount && 0 < r.sharedService.assessment.mcqs.length && r.sharedService.assessment.questionCount < r.sharedService.assessment.mcqs.length && (r.sharedService.assessment.mcqs = []),
            m(),
            r.validateForm()
        }
        ,
        r.validateForm = function() {
            var e = N.apply(".{.isChecked == true}", r.sharedService.assessment.sections)
              , e = (r.sharedService.assessment.publishDateTime && r.sharedService.assessment.dueDateTime && r.sharedService.assessment.name && r.sharedService.assessment.questionCount && r.sharedService.assessment.totalScore && r.sharedService.assessment.duration && r.sharedService.assessment.mcqs.length === r.sharedService.assessment.questionCount && 0 < e.length ? r.sharedService.validForm = !0 : r.sharedService.validForm = !1,
            N.apply(".{.isChecked == true}", r.sharedService.chapters));
            return r.sharedService.assessment.questionCount && 0 < e.length && r.sharedService.assessment.mcqs.length < r.sharedService.assessment.questionCount ? r.sharedService.validQuestionsSelect = !0 : r.sharedService.validQuestionsSelect = !1,
            !0
        }
        ,
        r.removeQuestion = function(s) {
            b.forEach(r.sharedService.assessment.mcqs, function(e, t) {
                (e.id || e.mcqId) === s && (r.sharedService.assessment.mcqs.splice(t, 1),
                r.sharedService.excludeIds.push(s))
            }),
            r.validateForm(),
            r.sharedService.validQuestionsSelect && r.onAutoSelectQuestions()
        }
        ,
        r.onAutoSelectQuestions = function() {
            var t = []
              , e = (r.sharedService.chapters.forEach(function(e) {
                e.isChecked && t.push(e.id)
            }),
            r.sharedService.assessment.mcqs.forEach(function(e) {
                r.sharedService.excludeIds.push(e.id)
            }),
            {
                type: "assessments",
                roleId: 3,
                storeIds: d.storeIds,
                chapterIds: t,
                excludeIds: r.sharedService.excludeIds,
                questionCount: r.sharedService.assessment.questionCount - r.sharedService.assessment.mcqs.length
            });
            r.sharedService.validQuestionsSelect ? (o.blockUiStart(r),
            u.searchQuestions(e, function(e) {
                o.blockUiStop(r),
                e.result ? (r.sharedService.assessment.mcqs = r.sharedService.assessment.mcqs.concat(e.values),
                r.sharedService.assessment.mcqs = _.sortBy(r.sharedService.assessment.mcqs, "id"),
                r.validateForm(),
                n(function() {
                    p.document.getElementById("questions-wrapper").scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }),
                o.blockUiStop(r)) : o.$toastr.error("Unable to auto select questions", e.errorMessage)
            }, function(e) {
                o.$toastr.error("Unable to auto select questions", e.errorMessage),
                o.blockUiStop(r)
            })) : o.$toastr.info("You must select Question Count and Chapters for auto selecting questions.")
        }
        ,
        r.onSubmit = function() {
            var t, s;
            r.validateForm() && r.sharedService.validForm ? (o.safeApply(r, function() {
                r.msg = ""
            }),
            r.sharedService.assessment.id || (o.blockUiStart(r),
            t = b.copy(r.sharedService.assessment),
            b.extend(t, {
                instituteId: d.institution.id,
                instituteName: d.institution.name,
                orgId: d.institution.organization.id,
                orgName: d.institution.organization.name,
                userId: d.id,
                roleId: 3,
                owner: a.USER,
                teacherId: d.id,
                teacherName: d.userName,
                teacherFullName: d.fullName
            }),
            s = [],
            t.sections.forEach(function(e) {
                e.isChecked && s.push({
                    startDateTime: t.publishDateTime,
                    dueDateTime: t.dueDateTime,
                    sectionId: e.id,
                    name: e.name,
                    institutionName: e.institutionName
                })
            }),
            t.sections = s,
            t.mcqs = _.map(r.sharedService.assessment.mcqs, function(e) {
                return {
                    mcqId: e.id || e.mcqId,
                    sectionNumber: 1
                }
            }),
            delete t.publishDateTime,
            delete t.dueDateTime,
            u.upsertAssessment(t, function(e) {
                o.blockUiStop(r),
                e.result ? (o.$toastr.info("Test Created Successfully."),
                o.blockUiStop(r),
                r.sharedService.closeCreateSheet(),
                r.sharedService.reloadAssessments = !0) : o.safeApply(r, function() {
                    r.msg = "Unable to create Test (" + e.message + ")."
                })
            }, function(e) {
                o.$toastr.error("Error Creating Test", e.errorMessage),
                o.blockUiStop(r)
            }))) : o.$toastr.info("Enter all required fields.")
        }
        ,
        o.checkUserLoaded(r, function() {}),
        r.$watch("sharedService.showCreateSheet", function(e, t) {
            e && (r.showPublishDatePicker = !1,
            r.showDueDatePicker = !1)
        }),
        r.$watch("sharedService.assessment.sections", function(e, t) {
            r.validateForm()
        }),
        r.$watch("sharedService.assessment.mcqs", function(e, t) {
            r.validateForm()
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(e) {
    "use strict";
    e.module("erudex.v2App.constants", []).constant("USER_ASSESSMENT", {
        TEST_KEY: "edx.test.",
        TEST_SHUFFLED_QUES_KEY: "edx.test.shuffled.",
        TEST_ACTIVITY_KEY: "edx.test.activity."
    })
}(window.angular, window.JSPath),
function(v, T) {
    "use strict";
    v.module("erudex.v2App").controller("StudentAssignmentsController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "studentAssignmentPlugin", "UserAssignmentSharedService", "locker", "STATUS_ID", "STORAGE_KEYS", function(i, r, e, t, s, o, n, a, c, u, l, d) {
        v.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        })),
        v.extend(i, {
            sharedService: c,
            userAssignments: [],
            metadata: {},
            assessmentTab: 1
        });
        var m = this
          , p = null
          , g = null
          , S = 0;
        function f() {
            r.selectedCourseGrade = T.apply(".{.gradeId == $gradeId}", r.courseGrades, {
                gradeId: r.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        function h(s) {
            o.blockUiStart(i);
            var t = []
              , e = (r.isECUser ? t.push(i.selectedCourse.sectionId) : null !== (e = _.find(i.user.userGrades, function(e) {
                return e.grade.id == i.gradeId
            }).userSections) && 0 < e.length && e.forEach(function(e) {
                t.push(e.section.id)
            }),
            {
                userId: S,
                sectionIds: t,
                subjectId: i.subject.id
            });
            s && v.extend(e, {
                id: s.id,
                assignmentId: s.assignmentId,
                sectionId: s.sectionId,
                institutionId: g.institution.id,
                organizationId: g.institution.organization.id,
                gradeId: i.gradeId
            }),
            n.isGuardian() && (e.studentId = n.getStudentUserId()),
            a.getUserAssignments(e, function(e) {
                var t;
                o.blockUiStop(i),
                e.result ? s ? (t = e.value,
                s.id || (s.id = t.id,
                s.statusId = t.statusId,
                s.startDateTime = t.startDateTime),
                i.sharedService.viewAssignment(t, i.isTeacher)) : (i.metadata = e.values[0].metadata,
                i.userAssignments = e.values[0].userAssignments) : o.$toastr.error("Error while retrieving assignment(s).")
            }, function(e) {
                o.$toastr.error("Error while retrieving assignment(s)."),
                o.blockUiStop(i)
            })
        }
        i.storeSelections = function() {
            p && o.$storageService.setUserPref(d.REMEMBER_SELECT_CURRICULUM, p)
        }
        ,
        i.onViewAssignment = function(e) {
            h(e)
        }
        ,
        i.now = Date.now(),
        i.availableFilter = function(e) {
            return e.statusId === l.INPROGRESS || e.statusId === l.PUSHED
        }
        ,
        i.completedFilter = function(e) {
            return e.statusId === l.SUBMITTED || e.statusId === l.GRADED
        }
        ,
        i.setTab = function(e) {
            i.assessmentTab = e
        }
        ,
        i.isSet = function(e) {
            return i.assessmentTab === e
        }
        ,
        i.assignmentStateClass = function(e) {
            return e.statusId === l.INPROGRESS || e.statusId === l.PUSHED ? "no-submissions" : e.statusId === l.SUBMITTED ? "partial-submissions" : "graded-submissions"
        }
        ,
        i.assignmentActionName = function(e) {
            return e.statusId === l.INPROGRESS ? "Continue" : e.statusId === l.PUSHED ? "Start" : "View"
        }
        ,
        o.checkUserLoaded(i, function() {
            g = i.user,
            S = i.user.id,
            i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                p = o.$storageService.getUserPref(d.REMEMBER_SELECT_CURRICULUM, {});
                var t = T.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, m.onSubjectsLoaded, p),
                f()
            }, function(e) {
                f()
            })
        }),
        i.$watch("subject", function() {
            i.subject && i.subject.id && 0 < i.subject.id && h(null)
        }),
        i.$watch("sharedService.reloadAssignments", function(e, t) {
            e && (i.sharedService.reloadAssignments = !1,
            h(null))
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showViewSheet && (i.sharedService.closeViewSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ])
}(window.angular, window.JSPath, window),
function() {
    "use strict";
    function e(t, s, r, n, i, e, o, a) {
        this.startMockTest = function() {
            o.dismiss();
            var e = i.encodeIds(r.id);
            s.go("v2-s-test-viewer", {
                id: e,
                c: n,
                t: "c"
            })
        }
        ,
        this.assessmentDto = r,
        t.assessmentDto = r,
        t.termsAccepted = !1,
        t.instructionsShown = !1,
        t.selectedSubject = null,
        t.assessmentMcqSubjectList = null,
        t.numberToWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        t.MCQ_SINGLE_QUESTION_TYPES = a.MCQ_SINGLE_QUESTION_TYPES,
        t.onAgree = function() {
            t.termsAccepted = !0
        }
        ,
        t.onTermsAccepted = function() {
            t.instructionsShown = !0
        }
        ,
        t.onSelectSubject = function(e) {
            t.selectedSubject = e
        }
        ,
        !t.assessmentMcqSubjectList && n.toLowerCase().includes("bitsat") && e.getAssessmentMcqSubjectList(r.assessmentId, function(e) {
            i.safeApply(t, function() {
                t.assessmentMcqSubjectList = e.values,
                t.selectedSubject = e.values[0].subject
            })
        })
    }
    window.angular.module("erudex.v2App").controller("AssessmentInstructionsController", e),
    e.$inject = ["$scope", "$state", "assessmentDto", "selectedCurriculum", "UtilService", "assessmentPlugin", "$modalInstance", "APP_CONFIG"]
}(),
function(R, w) {
    "use strict";
    R.module("erudex.v2App").controller("StudentAssessmentsController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$modal", "UtilService", "userPlugin", "studentAssessmentPlugin", "v2CommonPlugin", "UserAssessmentSharedService", "locker", "ASSESSMENT_TYPE", "STATUS_ID", "STORAGE_KEYS", function(i, n, e, o, t, a, c, u, l, r, s, d, m, p, g) {
        R.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: c
        }));
        var S = d.driver("session").namespace("com.erudex")
          , f = (R.extend(i, {
            STATUS_ID: p,
            sharedUAService: s,
            testTypes: [],
            userAssessments: [],
            mockTests: [],
            allowMultipleMockTests: !0,
            metadata: {},
            showMockTests: "mock" === (S.get(g.V2_STUDENT_SELECTED_ASSESSMENT_TYPE) || "mock"),
            assessmentTab: 1,
            selectedTestType: S.get(g.V2_SELECTED_TEST_TYPE) || "full",
            filterByTestType: function(e, t, s) {
                i.selectedTestType === e && !t || (i.selectedTestType = e,
                document.querySelector("#T-" + s).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                }),
                S.put(g.V2_SELECTED_TEST_TYPE, i.selectedTestType))
            },
            getChapters: function(e) {
                c.blockUiStart(i);
                e = {
                    id: e
                };
                i.showChaptersList = !1,
                l.getChapterInfo(e, function(e) {
                    c.blockUiStop(i),
                    i.chaptersList = e.values,
                    i.showChaptersList = !0
                }, function(e) {
                    c.$toastr.error("Error while retrieving Mock tests(s)."),
                    c.blockUiStop(i)
                })
            },
            toggleChaptersList: function() {
                i.showChaptersList = !i.showChaptersList
            },
            getScore: function(e) {
                return e.statusId === p.SUBMITTED || e.statusId === p.GRADED ? e.score + "/" + e.totalScore : e.totalScore
            }
        }),
        this)
          , h = "../student/template/"
          , v = null
          , T = 0
          , E = 0
          , I = null
          , A = null
          , C = "v2-sb-tests" === o.current.name;
        function y() {
            n.isTgsbUser || C ? i.setPageTitle("The Global Spelling Bee - Test") : i.setPageTitle(""),
            n.selectedCourseGrade = w.apply(".{.gradeId == $gradeId}", n.courseGrades, {
                gradeId: n.selectedGradeId
            })[0],
            c.finishLoadSuccess(i)
        }
        function b(e) {
            var t, s, r = "regular" === e.assessmentType ? "r" : "c";
            "c" == r && e.statusId === p.NEW ? i.allowMultipleMockTests && (s = e,
            I = a.open({
                templateUrl: i.selectedCurriculum.toLowerCase().includes("bitsat") ? h + "assessment-competitive/modal/bitsat-instructions.html" : "adv" === i.selectedTestType ? h + "assessment-competitive/modal/mock-test-instruction-adv.html" : h + "assessment-competitive/modal/mock-test-instruction.html",
                windowClass: "instructions-modal",
                controller: "AssessmentInstructionsController",
                controllerAs: "mockTestInstructions",
                backdrop: "static",
                keyboard: !1,
                resolve: {
                    assessmentDto: function() {
                        return s
                    },
                    selectedCurriculum: function() {
                        return i.selectedCurriculum
                    }
                }
            })) : (e = c.encodeIds(e.id),
            t = n.isTgsbUser || C ? "v2-sb-test-viewer" : "v2-s-test-viewer",
            o.go(t, {
                id: e,
                c: i.selectedCurriculum,
                t: r
            }))
        }
        function N() {
            n.isECUser ? i.testTypes = w.apply(".{.competitive == true && .olUser == true}", m.DATA_ENTRY_TEST_TYPE_OPTIONS) : i.testTypes = w.apply('.{.competitive == true && (.curriculum == "all" || .curriculum == $curriculum) }', m.DATA_ENTRY_TEST_TYPE_OPTIONS, {
                curriculum: n.selectedCourseGrade.curriculum
            }),
            "subject" !== i.selectedTestType && S.put(g.V2_SELECTED_TEST_TYPE, i.selectedTestType)
        }
        i.storeSelections = function() {
            v && c.$storageService.setUserPref(g.REMEMBER_SELECT_CURRICULUM, v)
        }
        ,
        i.now = Date.now(),
        i.availableFilter = function(e) {
            var t = i.showMockTests && !C ? i.selectedTestType : "subject";
            return (e.statusId === p.NEW || e.statusId === p.INPROGRESS || e.statusId === p.PUSHED) && e.testType === t && !e.expiredDateTime
        }
        ,
        i.completedFilter = function(e) {
            var t = i.showMockTests && !C ? i.selectedTestType : "subject";
            return (e.statusId === p.SUBMITTED || e.statusId === p.GRADED) && e.testType === t
        }
        ,
        i.expiredFilter = function(e) {
            var t = i.showMockTests ? i.selectedTestType : "subject";
            return e.expiredDateTime && e.testType === t
        }
        ,
        i.toggleAssessmentType = function(e) {
            i.showMockTests = "mock" === e,
            S.put(g.V2_STUDENT_SELECTED_ASSESSMENT_TYPE, e);
            e = S.get(g.V2_SELECTED_TEST_TYPE) || "full";
            {
                var t, s, r;
                (i.selectedTestType = i.showMockTests ? e : "subject",
                i.showMockTests && !C) ? (c.blockUiStart(i),
                i.selectedCurriculum = (n.isECUser ? n.selectedCourse : n.selectedCourseGrade).curriculum,
                i.selectedGradeId = (n.isECUser ? n.selectedCourse : n.selectedCourseGrade).gradeId,
                e = n.isECUser ? n.selectedCourse.sectionId : 0,
                e = {
                    gradeId: i.selectedGradeId,
                    sectionId: e
                },
                u.getMockTests(e, function(t) {
                    c.blockUiStop(i),
                    c.safeApply(i, function() {
                        var e;
                        i.mockTests = t,
                        i.mockTests && 0 < i.mockTests.length && n.restrictToSingleMockTest && (e = w.apply(".{.statusId == $statusId}", i.mockTests, {
                            statusId: p.INPROGRESS
                        }),
                        i.allowMultipleMockTests = 0 === e.length)
                    })
                }, function(e) {
                    c.$toastr.error("Error while retrieving Mock tests(s)."),
                    c.blockUiStop(i)
                })) : (t = null,
                s = (c.blockUiStart(i),
                []),
                r = (n.isECUser && s.push(i.selectedCourse.sectionId),
                n.isOrgTgsbUser && C ? s.push(n.tgsbSectionId) : null !== (r = _.find(i.user.userGrades, function(e) {
                    return e.grade.id == i.gradeId
                }).userSections) && 0 < r.length && r.forEach(function(e) {
                    s.push(e.section.id)
                }),
                {
                    userId: T,
                    sectionIds: s
                }),
                i.showMockTests || (r.subjectId = i.subject.id),
                n.isOrgTgsbUser && C && (r.subjectId = A[0].subject.id),
                t && (t.id && 0 < t.id ? R.extend(r, {
                    roleId: 4,
                    id: t.id
                }) : (R.extend(t, {
                    id: -1,
                    userId: T,
                    roleId: 4,
                    institutionId: E,
                    gradeId: i.gradeId,
                    subject: i.subject
                }),
                r = t)),
                u.isGuardian() && (r.studentId = u.getStudentUserId()),
                l.getUserAssessments(r, function(e) {
                    c.blockUiStop(i),
                    e.result ? t || (i.metadata = e.values[0].metadata,
                    i.userAssessments = e.values[0].userAssessments) : c.$toastr.error("Error while retrieving tests(s).")
                }, function(e) {
                    c.$toastr.error("Error while retrieving tests(s)."),
                    c.blockUiStop(i)
                }))
            }
            n.userAssessmentResultId && (i.assessmentTab = 2,
            i.sharedUAService.showUserAssessment(n.userAssessmentResultId, 0),
            n.userAssessmentResultId = null)
        }
        ,
        i.setTab = function(e) {
            i.assessmentTab = e
        }
        ,
        i.isSet = function(e) {
            return i.assessmentTab === e
        }
        ,
        i.assessmentStateClass = function(e) {
            return e.statusId === p.NEW || e.statusId === p.PUSHED ? "no-submissions" : e.statusId === p.INPROGRESS ? "partial-submissions" : e.statusId === p.SUBMITTED || e.statusId === p.GRADED ? "graded-submissions" : void 0
        }
        ,
        i.assessmentActionName = function(e) {
            return e.statusId === p.INPROGRESS && 0 < e.timeRemaining ? "Continue" : e.statusId === p.INPROGRESS && e.timeRemaining <= 0 ? "Time To Submit" : e.statusId !== p.PUSHED && e.statusId !== p.NEW || e.expiredDateTime ? "View" : "Start"
        }
        ,
        i.onViewAssessment = function(e) {
            var t, s = e.id || 0;
            e.statusId === p.GRADED || e.expiredDateTime ? i.sharedUAService.showUserAssessment(e.id, e.expiredDateTime) : 0 === s ? (t = e,
            c.blockUiStart(i),
            s = {
                name: (n.isOrgTgsbUser && C ? A[0] : i).subject.name,
                description: (n.isOrgTgsbUser && C ? A[0] : i).subject.description,
                sortOrder: (n.isOrgTgsbUser && C ? A[0] : i).subject.sortOrder
            },
            s = {
                id: 0,
                assessmentId: t.assessmentId,
                sectionId: t.sectionId,
                publishDateTime: t.publishDateTime,
                dueDateTime: t.dueDateTime,
                userId: T,
                institutionId: E,
                gradeId: i.gradeId,
                subject: s,
                statusId: p.NEW
            },
            r.getUserAssessmentById(s, function(e) {
                c.blockUiStop(i),
                e.result ? (t.id = e.value.id,
                b(t)) : c.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                c.$toastr.error("Error while retrieving Test details."),
                c.blockUiStop(i)
            })) : b(e)
        }
        ,
        c.checkUserLoaded(i, function() {
            i.user,
            T = i.user.id,
            i.user.institution.organization.id,
            E = i.user.institution.id,
            N(),
            c.getUserCurriculum(function(e) {
                C && (A = _.filter(e, function(e) {
                    return e.gradeId === n.tgsbGradeId
                })),
                v = c.$storageService.getUserPref(g.REMEMBER_SELECT_CURRICULUM, {});
                var t = w.apply(".grade", i.user.userGrades).sort(c.sortGrades);
                c.buildStudentCurriculumGradeSelect(i, t, e, f.onSubjectsLoaded, v),
                y()
            }, function(e) {
                y()
            })
        }),
        i.$watch("selectedCourseGrade", function() {
            i.selectedCourseGrade && N()
        }),
        i.$watch("subject", function() {
            var e;
            i.subject && i.subject.id && 0 < i.subject.id && (e = S.get(g.V2_STUDENT_SELECTED_ASSESSMENT_TYPE) || "mock",
            n.selectedCourseGrade.isCompetitive || (e = "subject"),
            i.toggleAssessmentType(e))
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedUAService.showUserAssessmentViewSheet && (i.sharedUAService.closeUserAssessmentViewSheet(),
            c.finishLoadSuccess(i),
            e.preventDefault())
        }),
        i.$on("$destroy", function() {
            I && (I.dismiss(),
            I = null)
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(B, F) {
    "use strict";
    B.module("erudex.v2App").factory("AssessmentHelperService", ["APP_CONFIG", function(e) {
        var s = e.QUESTION_TYPE;
        return {
            isMcqQuestion: function(e) {
                return !!B.isObject(e) && (e.questionType === s.MATCHING_SINGLE.value || e.questionType === s.MATRIX_MATCH_TYPE.value || e.questionType === s.MULTI_CHOICE_SINGLE.value)
            },
            isMcqSingleQuestion: function(e) {
                return !!B.isObject(e) && (e.questionType === s.MULTI_CHOICE_SINGLE.value || e.questionType === s.MATRIX_MATCH_TYPE.value || e.questionType === s.MATCHING_SINGLE.value || e.questionType === s.ASSERTION_AND_REASONING.value)
            },
            isMcqMultiQuestion: function(e) {
                return !!B.isObject(e) && e.questionType === s.MULTI_CHOICE_MULTI.value
            },
            isIntegerQuestion: function(e) {
                return !!B.isObject(e) && (e.questionType === s.INTEGER_SINGLE_UNSIGNED.value || e.questionType === s.INTEGER_SINGLE_SIGNED.value)
            },
            isNumericQuestion: function(e) {
                return !!B.isObject(e) && e.questionType === s.NUMERICAL_VALUE.value
            },
            isFillInTheBlankQuestion: function(e) {
                return !!B.isObject(e) && e.questionType === s.FILL_IN_THE_BLANK.value
            },
            isBooleanQuestion: function(e) {
                return !!B.isObject(e) && e.questionType === s.TRUE_OR_FALSE.value
            },
            getQuestionInstructions: function(e) {
                var t = "";
                return t = B.isObject(e) && B.isString(e.questionType) && (e = s[e.questionType],
                B.isObject(e)) ? e.description : t
            }
        }
    }
    ]).controller("AssessmentViewerController", ["$scope", "$rootScope", "$controller", "$timeout", "$state", "$stateParams", "$interval", "$modal", "UtilService", "BaseUserActivityPlugin", "v2CommonPlugin", "studentAssessmentPlugin", "AssessmentHelperService", "locker", "APP_CONFIG", "ASSESSMENT_TYPE", "USER_ASSESSMENT", "STATUS", "STATUS_ID", "MESSAGE_STRINGS", "STORAGE_KEYS", function(d, m, $, n, i, s, r, o, a, e, c, u, t, G, p, x, l, g, S, f, j) {
        var h = 0
          , v = null
          , T = null
          , E = {
            value: 0,
            color: "#000000",
            promise: null
        }
          , I = {
            promise: null
        }
          , A = null
          , C = "v2-sb-test-viewer" === i.current.name;
        function y() {
            E.value -= 1e3,
            T.lastUpdatedDateTime = T.lastUpdatedDateTime + 1e3,
            E.color = m.isTgsbUser || C ? "#2A84FB" : "#000000",
            R(),
            E.value <= 0 ? (E.value = 0,
            r.cancel(E.promise),
            E.promise = null,
            d.currentColor = "#AEAC99",
            0 <= [g.GRADED, g.COMPLETED, g.SUBMITTED].indexOf(T.status) || (d.isAdvanced || d.isEamcet) && D()) : E.value <= 6e4 ? (E.color = "#FF0000",
            d.currentColor = "#FF0000") : E.value <= 3e5 && (E.color = m.isTgsbUser || C ? "#FF5C00" : "#EDA915",
            d.currentColor = "#FF5C00")
        }
        function b() {
            E.value <= 0 ? (r.cancel(I.promise),
            I.promise = null) : d.currentQuestion && (d.currentQuestion.timeSpentInMs || (d.currentQuestion.timeSpentInMs = 0),
            d.currentQuestion.timeSpentInMs += 250)
        }
        function N(e, t) {
            d.selectedSubject = e,
            d.selectedSubjectIndex = t,
            O(d.isAdvanced ? 1 : d.selectedSubject.startIndex)
        }
        function R() {
            var e = l.TEST_KEY + v;
            a.$storageService.putUserPref(e, T, !0)
        }
        function w() {
            var t = [];
            d.isAdvanced ? t = d.selectedSubject.questions : B.forEach(T.testSubjects, function(e) {
                t = t.concat(e.questions)
            }),
            d.visitedCount = 0,
            d.notVisitedCount = 0,
            d.answeredCount = 0,
            d.markedForReviewCount = 0,
            d.answeredMarkedForReviewCount = 0,
            B.forEach(t, function(e) {
                "visited" === e.color ? d.visitedCount++ : "" === e.color ? d.notVisitedCount++ : "answered" === e.color ? d.answeredCount++ : "answered_marked" === e.color ? d.answeredMarkedForReviewCount++ : "marked" === e.color && d.markedForReviewCount++
            })
        }
        function U(e, t) {
            var s = d.currentQuestion.userAnswer || "";
            "" === s ? d.isMcqSingleQuestion(d.currentQuestion.mcq) ? d.showMessage("Please choose an option.") : d.isMcqSingleQuestion(d.currentQuestion.mcq) ? d.showMessage("Please choose one or more options.") : d.isNumericQuestion(d.currentQuestion.mcq) && d.showMessage("Please enter a numeric value.") : (d.isNumericQuestion(d.currentQuestion.mcq) && isNaN(s) && (d.currentQuestion.userAnswer = ""),
            d.currentQuestion.answer = d.currentQuestion.userAnswer,
            d.currentQuestion.color = e,
            t && d.currentQNo < d.tempQuestions.length && O(d.currentQNo + 1),
            w())
        }
        function O(t) {
            if (d.currentQuestion && (d.currentQuestion.userAnswer = null),
            d.isAdvanced) {
                if (0 === t)
                    d.selectedSubjectIndex--,
                    d.selectedSubject = d.testSubjects[d.selectedSubjectIndex],
                    t = d.selectedSubject.questionCount;
                else if (t > d.selectedSubject.questionCount) {
                    if (d.selectedSubjectIndex++,
                    !(d.selectedSubjectIndex < d.testSubjects.length))
                        return void (d.currentQuestion.userAnswer = d.currentQuestion.answer);
                    d.selectedSubject = d.testSubjects[d.selectedSubjectIndex],
                    t = 1
                }
            } else
                t >= d.selectedSubject.startIndex && t <= d.selectedSubject.endIndex || B.forEach(d.testSubjects, function(e) {
                    t >= e.startIndex && t <= e.endIndex && (d.selectedSubject = e)
                });
            var e, s, r;
            (m.isTgsbUser || C) && (e = _.findIndex(d.selectedSubject.questions, {
                answer: null
            }),
            t = 0 < e ? e + 1 : 1),
            d.totalDurationInMs = 60 * d.userAssessment.assessment.duration * 1e3,
            d.currentQNo = t,
            d.currentQuestion = (d.isAdvanced ? d.selectedSubject.questions : d.tempQuestions)[t - 1],
            d.currentQuestion.userAnswer = d.currentQuestion.answer,
            0 < E.value && "" === d.currentQuestion.color && (d.currentQuestion.color = "visited"),
            d.questionTitle = "Question " + t + " (QID: " + (d.currentQuestion.mcq.originalId || d.currentQuestion.mcq.id) + ")",
            d.questionTitleMobile = "Q " + t + " (QID: " + (d.currentQuestion.mcq.originalId || d.currentQuestion.mcq.id) + ")",
            w(),
            d.numericQuestionDisabled = !1,
            d.mcqQuestionDisabled = !1,
            e = d.currentQuestion.mcq,
            d.isJeeNewPattern && e.questionType === p.QUESTION_TYPE.NUMERICAL_VALUE.value && d.selectedSubject ? (r = F.apply('.{.mcq{.questionType == $type} && .color *== "answered"}', d.selectedSubject.questions, {
                type: p.QUESTION_TYPE.NUMERICAL_VALUE.value
            }),
            d.numericQuestionDisabled = 5 <= r.length && !d.currentQuestion.color.includes("answered")) : d.isNeet && d.includeInReports && e.questionType === p.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value && d.selectedSubject && "B" === d.selectedSubject.letter && (r = F.apply('.{.mcq{.questionType == $type} && .color *== "answered"}', d.selectedSubject.questions, {
                type: p.QUESTION_TYPE.MULTI_CHOICE_SINGLE.value
            }),
            d.mcqQuestionDisabled = 10 <= r.length && !d.currentQuestion.color.includes("answered")),
            s = t,
            document.querySelector("#Q-" + s) && n(function() {
                document.querySelector("#Q-" + s).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start"
                })
            }),
            r = d.selectedSubjectIndex + 1,
            document.querySelector("#S-" + r) && document.querySelector("#S-" + r).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            })
        }
        function M(e, t, s, r) {
            var n = e.description || e.name;
            return {
                name: n,
                description: e.description,
                sortOrder: e.sortOrder,
                shortName: "Physics" === n || "Botany" === n ? n.substring(0, 3) : n.substring(0, 4),
                section: s.number,
                letter: s.letter || "",
                marks: s.marks || s.marksPerQuestion,
                negativeMarks: s.negativeMarks,
                partialMarks: s.partialMarks,
                questions: t,
                questionCount: t.length,
                notVisited: 0,
                visited: 0,
                answered: 0,
                marked: 0,
                answeredMarked: 0,
                startIndex: r,
                endIndex: r + t.length - 1
            }
        }
        function P(e, t, s, r) {
            return e.filter(function(e) {
                return e.mcq.options = m.shuffleMcqOptions ? _.shuffle(e.mcq.options) : _.sortBy(e.mcq.options, "option"),
                r && e.mcq.questionType === t && e.sectionNumber === s || !r && e.mcq.questionType === t
            }).map(function(e) {
                return B.extend(e, {
                    color: e.answer && "" !== e.answer ? "answered" : "",
                    userAnswer: e.answer
                })
            })
        }
        function L(t, s) {
            a.safeApply(d, function() {
                T = s || t,
                A = {
                    studentAssessmentId: t.id,
                    institutionId: h,
                    userId: t.userId,
                    gradeId: t.gradeId,
                    subjectId: t.assessment.subjectId,
                    sectionId: t.sectionId,
                    contentUUID: t.id,
                    contentName: t.assessment.name,
                    isCompetitive: "competitiveMock" === t.assessment.assessmentType,
                    testType: t.assessment.testType,
                    contentType: {
                        subjectType: "generic",
                        displayType: "assessment"
                    },
                    activityStartTime: Date.now(),
                    activityEndTime: -1,
                    activityType: f.ACTIVITY_TYPE_ASSESSMENT,
                    groupType: f.ACTIVITY_TYPE_ASSESSMENT,
                    events: []
                };
                var a, c, u, l, e = t.timeRemaining;
                0 < e && (E.value = e,
                E.promise = r(y, 1e3),
                I.promise = r(b, 250)),
                e = !!s,
                d.setPageTitle(T.assessment.name),
                d.isAdvanced = "adv" === T.assessment.testType,
                d.isNeet = T.assessment.neet || !1,
                d.includeInReports = T.assessment.includeInReports || !1,
                d.isJeeNewPattern = T.assessment.jeeNewPattern,
                c = T.assessment.assessmentSections && 0 < T.assessment.assessmentSections.length,
                u = d.isNeet || d.isAdvanced,
                l = [],
                d.tempQuestions = [],
                e ? (l = T.testSubjects,
                B.forEach(T.testSubjects, function(e) {
                    d.tempQuestions = d.tempQuestions.concat(e.questions)
                })) : (a = 1,
                B.forEach(_.sortBy(T.subjects, "sortOrder"), function(r) {
                    var t, s, e, n = [], i = r.description, o = T.studentMcqs.filter(function(e) {
                        return e.mcq.mcqSubject.description === i
                    });
                    c ? (t = [],
                    B.forEach(o, function(e) {
                        t.includes(e.sectionNumber) || t.push(e.sectionNumber)
                    }),
                    B.forEach(_.sortBy(t), function(t) {
                        var e = []
                          , s = _.find(T.assessment.assessmentSections, function(e) {
                            return e.number === t
                        });
                        s && (e = P(o, s.questionType, s.number, u),
                        -1 !== p.ASSESSMENT.SUBJECTS_DONOT_SHUFFLE_QUESTIONS.indexOf(r.name) || m.isTgsbUser || C || (e = _.shuffle(e)),
                        d.tempQuestions = d.tempQuestions.concat(e),
                        u ? (s = M(r, e, s, a),
                        l.push(s),
                        a += e.length) : n = n.concat(e))
                    }),
                    u || (e = M(r, n, {}, a),
                    l.push(e),
                    a += n.length)) : (s = [],
                    B.forEach(o, function(e) {
                        var t = F.apply(".{.value == $type}", p.QUESTION_TYPE_ORDER, {
                            type: e.mcq.questionType
                        })[0];
                        _.find(s, function(e) {
                            return e.value === t.value
                        }) || s.push(t)
                    }),
                    m.isTgsbUser || C ? n = n.concat(o) : B.forEach(_.sortBy(s, "sortOrder"), function(e) {
                        e = P(o, e.value, 0, u);
                        -1 === p.ASSESSMENT.SUBJECTS_DONOT_SHUFFLE_QUESTIONS.indexOf(r.name) && (n = n.concat(_.shuffle(e)))
                    }),
                    d.tempQuestions = d.tempQuestions.concat(n),
                    e = M(r, n, {}, a),
                    l.push(e),
                    a += n.length)
                }),
                T.testSubjects = l,
                T.studentMcqs = [],
                R()),
                d.userAssessment = T,
                d.testSubjects = l,
                N(d.testSubjects[0], 0)
            })
        }
        function D() {
            a.blockUiStart(d);
            t = [],
            B.forEach(T.testSubjects, function(e) {
                B.forEach(e.questions, function(e) {
                    t.push({
                        id: e.id,
                        answer: e.answer,
                        bookMarked: e.bookMarked,
                        marks: e.marks,
                        partialMarks: e.partialMarks,
                        timeSpentInMs: e.timeSpentInMs,
                        mcq: {
                            id: e.mcq.id
                        }
                    })
                })
            });
            var t, e = {
                studentAssessment: {
                    id: T.id,
                    studentMcqs: t
                }
            };
            u.submitAssessment(e, function(e) {
                a.blockUiStop(d),
                e.result ? (e = l.TEST_KEY + v,
                a.$storageService.removeUserPref(e, !0),
                k(),
                d.continueNavigation = !0,
                m.userAssessmentResultId = T.id,
                m.isTgsbUser || C ? i.go("v2-sb-tests") : i.go("v2-s-tests")) : a.$toastr.error("Error while submitting Test.")
            }, function(e) {
                a.$toastr.error("Error while submitting Test."),
                a.blockUiStop(d)
            })
        }
        function V(e, t) {
            var s, r, n;
            d.isCompetitiveMockTest ? (r = e,
            s = t,
            a.blockUiStart(d),
            u.getMockUserAssessmentById({
                id: r
            }, function(e) {
                a.blockUiStop(d),
                e.result ? L(e.value, s) : a.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                a.$toastr.error("Error while retrieving Test details."),
                a.blockUiStop(d)
            })) : (r = e,
            n = t,
            a.blockUiStart(d),
            r = {
                id: r,
                statusId: 0 === r ? S.NEW : S.INPROGRESS
            },
            c.getUserAssessmentById(r, function(e) {
                a.blockUiStop(d),
                e.result ? L(e.value, n) : a.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                a.$toastr.error("Error while retrieving Test details."),
                a.blockUiStop(d)
            }))
        }
        function k() {
            A && (A.activityEndTime = Date.now(),
            2e3 < A.activityEndTime - A.activityStartTime) && e.storeActivity(A, function(e) {
                a.$log.log(e)
            }, function(e) {
                a.$log.error(e)
            }),
            A = null
        }
        B.extend(d, {
            helperService: t,
            isMcqQuestion: t.isMcqQuestion,
            isMcqSingleQuestion: t.isMcqSingleQuestion,
            isMcqMultiQuestion: t.isMcqMultiQuestion,
            isIntegerQuestion: t.isIntegerQuestion,
            isNumericQuestion: t.isNumericQuestion,
            isFillInTheBlankQuestion: t.isFillInTheBlankQuestion,
            isBooleanQuestion: t.isBooleanQuestion,
            getQuestionInstructions: t.getQuestionInstructions,
            isActiveSubject: function(e) {
                return d.selectedSubject && d.selectedSubject.name === e.name && d.selectedSubject.section === e.section
            },
            selectSubjectQuestions: N,
            setMcqMultiAnswer: function(e, t) {
                var s = d.currentQuestion.userAnswer || "";
                e.target.checked ? s += t : s = s.replace(t, "");
                d.currentQuestion.userAnswer = s
            },
            setCurrentQuestion: O,
            saveUserAnswer: U,
            markedForReview: function(e) {
                d.isAdvanced && d.currentQuestion.userAnswer ? U("answered_marked", e) : (d.currentQuestion.answer = null,
                d.currentQuestion.color = "marked",
                e && d.currentQNo < d.tempQuestions.length && O(d.currentQNo + 1),
                w())
            },
            clearUserAnswer: function() {
                d.currentQuestion.answer = d.currentQuestion.userAnswer = null,
                d.currentQuestion.color = "visited",
                w()
            },
            submitAssessment: function() {
                var s, r;
                navigator.onLine ? 1 < E.value ? ((m.isTgsbUser || C) && U("answered", !0),
                s = d.isBitsat,
                r = function() {
                    var t = 0;
                    return B.forEach(T.testSubjects, function(e) {
                        B.forEach(e.questions, function(e) {
                            null !== e.answer && "" !== e.answer && t++
                        })
                    }),
                    t
                }(),
                o.open({
                    templateUrl: "../student/modal/assessment-confirm-modal.html",
                    controller: ["$scope", "$modalInstance", function(e, t) {
                        e.isTimeAvailable = 1 < E.value,
                        e.timeLeft = E.value,
                        e.unAnsweredCount = T.assessment.questionCount - r,
                        e.assessmentName = T.assessment.name,
                        e.isBitsat = s,
                        e.positiveResponse = function() {
                            t.close("positive")
                        }
                        ,
                        e.negativeResponse = function() {
                            t.dismiss("cancel")
                        }
                    }
                    ],
                    windowClass: "bitsat confirm-modal v2"
                }).result.then(D, function() {
                    a.$log.log("Modal dismissed.")
                })) : D() : d.showMessage("It appears that you are not connected to internet. Please make sure you are connected to internet to submit.")
            },
            userAssessment: T,
            selectedSubject: null,
            selectedSubjectIndex: 0,
            numericQuestionDisabled: !1,
            isBitsat: !1,
            isEamcet: s.c.toLowerCase().includes("eamcet"),
            isAdvanced: !1,
            isJeeNewPattern: !1,
            isCompetitiveMockTest: !1,
            questionTitle: "Question ?",
            currentPageType: "question",
            currentQNo: 1,
            answeredCount: 0,
            visitedCount: 0,
            markedForReviewCount: 0,
            notVisitedCount: 0,
            answeredMarkedForReviewCount: 0,
            testSubjects: [],
            offset: 0,
            timerCurrent: 0,
            uploadCurrent: 0,
            radius: 125,
            isSemi: !1,
            rounded: !0,
            responsive: !0,
            clockwise: !0,
            currentColor: "#2A84FB",
            bgColor: "#DBEAFF",
            clockDuration: 2e3,
            currentAnimation: "easeOutCubic",
            animationDelay: 0,
            status: {
                isStarted: !0,
                isReadOnly: !1,
                isNavEnabled: !1
            },
            timer: E,
            continueNavigation: !1,
            legendsTooltip: '<div class="legends-tooltip"><span class="answered">Answered </span><span class="not-answered">Visited Not Answered </span><span class="not-visited">Not Visited </span></div>',
            instructionsTooltip: "<ul><li>In case the decimal part of the calculated answer is <b>0.5</b>, the answer needs to be rounded off to the <b>next</b> integer.</li><li>Eg:<ul><li>If your calculated answer is 7.5, the answer shall be marked as 8.</li><li>If your calculated answer is -4.5, the answer shall be marked as -4.</li></ul></li><li>In any other case, the answer needs to be rounded off to the <b>nearest</b> integer.</li><li>Eg:<ul><li>If your calculated answer is 3.25, the answer shall be marked as 3.</li><li>If your calculated answer is -1.732, the answer shall be marked as -2.</li><li>If your calculated answer is 0.01, the answer shall be marked as 0.</li></ul></li></ul>"
        }),
        d.storeSelections = function() {}
        ,
        d.setNeeTQuestionId = function(e) {
            document.querySelector("#QIDN-" + e) && n(function() {
                document.querySelector("#QIDN-" + e).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start"
                })
            })
        }
        ,
        d.setAdvQuestionId = function(e) {
            document.querySelector("#QIDA-" + e) && n(function() {
                document.querySelector("#QIDA-" + e).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start"
                })
            })
        }
        ,
        a.checkUserLoaded(d, function() {
            d.user,
            d.user.id,
            d.user.institution.organization.id,
            h = d.user.institution.id;
            var t, e = s.t, e = (d.isCompetitiveMockTest = "c" === e,
            0);
            s.id && (v = s.id,
            e = a.decodeIds(s.id)[0]),
            t = e,
            e = l.TEST_KEY + v,
            a.$storageService.getUserPref(e, null, !0).then(function(e) {
                V(t, e || null)
            }),
            a.finishLoadSuccess(d)
        }),
        d.$on("$stateChangeStart", function(e, t, s, r, n) {
            d.continueNavigation || (a.finishLoadSuccess(d),
            e.preventDefault(),
            o.open({
                templateUrl: "../student/modal/confirm-modal.html",
                controller: "ConfirmModalController",
                windowClass: "confirm-modal v2",
                resolve: {
                    message: function() {
                        return "You are navigating from the test before submitting. Are you sure you want to continue?"
                    }
                }
            }).result.then(function() {
                a.$log.log("Modal dismissed, continue with navigation."),
                d.continueNavigation = !0,
                m.isTgsbUser || C ? i.go("v2-sb-tests") : i.go("v2-s-tests")
            }, function() {
                a.$log.log("Modal dismissed.")
            }))
        }),
        d.$on("$destroy", function() {
            k(),
            E.promise && (r.cancel(E.promise),
            E.promise = null),
            I.promise && (r.cancel(I.promise),
            I.promise = null)
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(A, C) {
    "use strict";
    A.module("erudex.v2App").factory("testProgress", function() {
        return {
            currentQuestion: 0,
            currentQuestionFriendly: 0,
            lastQuestion: 0,
            loading: !0,
            inProgress: !0,
            finished: !1,
            calculatingScore: !1
        }
    }).controller("SBHomeController", ["$scope", "$rootScope", "$controller", "$window", "$state", "$timeout", "$stateParams", "UtilService", "v2CommonPlugin", "userPlugin", "APP_CONFIG", "STORAGE_KEYS", "dateFilter", "MESSAGE_STRINGS", function(r, s, e, t, n, i, o, a, c, u, l, d, m, p) {
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: r,
            utilService: a
        }));
        var g, S = this, e = A.element(t), f = null, h = 0, v = 0, T = (r.pageSize = t.innerWidth < 481 ? 20 : 30,
        null);
        function E() {
            r.setPageTitle("The Global Spelling Bee Online Book"),
            s.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", s.courseGrades, {
                gradeId: s.selectedGradeId
            })[0],
            a.finishLoadSuccess(r)
        }
        function I() {
            h = t.innerWidth < 481 ? t.innerWidth - 36 : t.innerWidth / 2,
            v = t.innerWidth < 481 ? t.innerHeight - 205 : t.innerHeight - 160,
            r.wordHeight = (v - 224) / 10
        }
        r.currentPage = 0,
        e.bind("resize", function() {
            I(),
            $(T).turn("size", h, v)
        }),
        r.pagesRendered = function() {
            T = document.getElementById("flipbook"),
            g = document.getElementById("goto-page-slider"),
            $(g).width = h,
            $(T).turn({
                display: "single",
                width: h,
                height: v,
                autoCenter: !0
            }),
            $(T).turn("peel", "tr"),
            $(T).bind("turned", function(e, t, s) {
                a.safeApply(r, function() {
                    2 === t && i(function() {
                        r.$broadcast("rzSliderForceRender")
                    }),
                    r.currentPage = t - 1,
                    r.pageSlider.value = 0 < r.currentPage ? r.currentPage : 1
                }),
                $(T).turn("peel", "tr")
            })
        }
        ,
        a.checkUserLoaded(r, function() {
            I(),
            r.pageSlider = {
                value: 1,
                options: {
                    showSelectionBar: !0,
                    floor: 1,
                    ceil: null,
                    onEnd: function(e, t, s, r) {
                        $(T).turn("page", t + 1)
                    }
                }
            },
            a.getUserCurriculum(function(e) {
                f = a.$storageService.getUserPref(d.REMEMBER_SELECT_CURRICULUM, {});
                var t = C.apply(".grade", r.user.userGrades).sort(a.sortGrades);
                a.buildStudentCurriculumGradeSelect(r, t, e, S.onSubjectsLoaded, f),
                t = {
                    category: s.tgsbCategory,
                    pageSize: r.pageSize
                },
                c.getBookByCategory(t, function(e) {
                    e.result ? (r.pageCount = e.value.pageCount,
                    r.wordsArray = e.value.wordsArray,
                    r.pageSlider.options.ceil = r.pageCount) : a.$toastr.error("Error while retrieving Online Book"),
                    E()
                }, function(e) {
                    a.$toastr.error("Error while retrieving Online Book"),
                    E()
                })
            }, function(e) {
                E()
            })
        })
    }
    ]).controller("SBLearnController", ["$scope", "$rootScope", "$controller", "$state", "$timeout", "$stateParams", "UtilService", "v2CommonPlugin", "userPlugin", "STORAGE_KEYS", "dateFilter", "MESSAGE_STRINGS", function(t, s, e, r, n, i, o, a, c, u, l, d) {
        function m() {
            var e = {
                type: "glossary",
                category: s.tgsbCategory
            };
            a.getBookByCategory(e, function(e) {
                e.result ? (t.glossaryArray = e.values,
                0 < t.glossaryArray[0].list.length && (t.selectedWord = t.glossaryArray[0].list[0].word),
                t.setPageTitle("The Global Spelling Bee - Learn"),
                s.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", s.courseGrades, {
                    gradeId: s.selectedGradeId
                })[0],
                o.finishLoadSuccess(t)) : (o.$toastr.error("Error while retrieving glossary"),
                o.blockUiStop(t))
            }, function(e) {
                o.$toastr.error("Error while retrieving glossary"),
                o.blockUiStop(t)
            })
        }
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: t,
            utilService: o
        })),
        t.baseUrl = "https://erudex-assets.s3.ap-southeast-1.amazonaws.com/spelling-bee/",
        t.playSound = function(e) {
            new Audio(t.baseUrl + "audio/" + e + ".mp3").play()
        }
        ,
        t.setSelectedWord = function(e) {
            t.selectedWord = e
        }
        ,
        t.setTabData = function(e) {
            0 < e.length && t.setSelectedWord(e[0].word)
        }
        ,
        o.checkUserLoaded(t, function() {
            m()
        })
    }
    ]).controller("SBQuizListController", ["$scope", "$rootScope", "$controller", "$state", "$timeout", "$stateParams", "$interval", "testProgress", "UtilService", "v2CommonPlugin", "userPlugin", "STORAGE_KEYS", function(t, s, e, r, n, i, o, a, c, u, l, d) {
        function m() {
            t.setPageTitle("The Global Spelling Bee - Quizzes"),
            s.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", s.courseGrades, {
                gradeId: s.selectedGradeId
            })[0],
            c.finishLoadSuccess(t)
        }
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: t,
            utilService: c
        })),
        t.gotoQuizViewer = function(e) {
            e = c.encodeIds(e);
            r.go("v2-sb-quiz-viewer", {
                id: e
            })
        }
        ,
        c.checkUserLoaded(t, function() {
            var e;
            e = {
                type: "quizzes",
                category: s.tgsbCategory
            },
            u.getBookByCategory(e, function(e) {
                e.result ? t.quizList = e.values : c.$toastr.error("Error while retrieving Quizzes"),
                m()
            }, function(e) {
                c.$toastr.error("Error while retrieving Quizzes"),
                m()
            })
        })
    }
    ]).controller("SBQuizController", ["$scope", "$rootScope", "$controller", "$state", "$timeout", "$stateParams", "$interval", "testProgress", "UtilService", "v2CommonPlugin", "userPlugin", "STORAGE_KEYS", "dateFilter", "MESSAGE_STRINGS", function(i, t, e, s, r, n, o, a, c, u, l, d, m, p) {
        function g() {
            t.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            c.finishLoadSuccess(i)
        }
        function S() {
            c.$toastr.error("Error while retrieving quiz"),
            c.blockUiStop(i),
            s.go("v2-sb-quiz")
        }
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: c
        })),
        i.goToLearning = function() {
            s.go("v2-sb-learn")
        }
        ,
        i.goToQuizList = function() {
            s.go("v2-sb-quiz")
        }
        ,
        i.testProgress = a,
        i.nextQuestion = function() {
            i.testProgress.currentQuestion < i.testProgress.lastQuestion && (i.testProgress.currentQuestion = i.testProgress.currentQuestion + 1)
        }
        ,
        i.answerQuestion = function(e) {
            i.testProgress.currentQuestionFriendly++,
            e.selected = !0,
            i.testQuestions[i.testProgress.currentQuestion].answerChecked = !0,
            i.testQuestions[i.testProgress.currentQuestion].answerWasRight = i.testQuestions[i.testProgress.currentQuestion].answer === e.name
        }
        ,
        i.getScore = function() {
            var e, t;
            a.inProgress = !1,
            a.finished = !0,
            a.calculatingScore = !0,
            i.score = (e = i.testQuestions,
            t = 0,
            A.forEach(e, function(e) {
                e.answerWasRight && (t += 1)
            }),
            i.scorePercentage = (t / e.length * 100).toFixed(),
            t),
            r(function() {
                a.calculatingScore = !1
            }, 1500)
        }
        ,
        i.startOver = function() {
            A.forEach(i.testQuestions, function(e) {
                e.answered = !1,
                e.answerWasRight = !1,
                e.answerChecked = !1,
                A.forEach(e.options, function(e) {
                    e.selected = !1
                })
            }),
            a.inProgress = !0,
            a.finished = !1,
            a.currentQuestion = 0,
            a.currentQuestionFriendly = 0
        }
        ,
        c.checkUserLoaded(i, function() {
            var e;
            n.id ? (e = {
                type: "quiz",
                quizId: e = e = c.decodeIds(n.id)[0],
                category: t.tgsbCategory
            },
            u.getBookByCategory(e, function(e) {
                (e.result ? (i.testQuestions = e.values,
                (0 < i.testQuestions.length ? (i.setPageTitle(i.testQuestions[0].name),
                i.testProgress.lastQuestion = i.testQuestions.length,
                i.testProgress.loading = !1,
                g) : S)(),
                g) : S)()
            }, function(e) {
                S()
            })) : (c.$toastr.error("Selected Quiz is not available."),
            s.go("v2-sb-quiz"))
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.startOver()
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(M, P, L) {
    "use strict";
    M.module("com.erudex.common").controller("BaseMainCtrl", ["$rootScope", "$scope", "$state", "$stateParams", "$timeout", "$modal", "blockUI", "UtilService", "MESSAGE_STRINGS", "APP_CONFIG", "APP_PREFS", "BUILD_CONFIG", "userPlugin", "userActivityPlugin", "appPlugin", "NotificationsSharedService", function(i, o, a, e, c, t, u, l, r, s, n, d, m, p, g, S) {
        var f = null
          , h = -1
          , v = null
          , T = !1
          , E = !1
          , I = null
          , A = d.BUILD_DATE.indexOf("@") < 0
          , C = !1
          , y = null;
        function b() {
            l.$log.log("User updated, reloading view"),
            l.clearUserCurriculum(),
            a.go(a.current, v, {
                reload: !0
            })
        }
        function N(e) {
            P("body").scrollTop(0),
            P(".f-dropdown").css("top", 0),
            i.$broadcast(r.SOFT_KEYBOARD_SHOW_EVENT)
        }
        function _() {
            i.$broadcast(r.SOFT_KEYBOARD_HIDE_EVENT)
        }
        function R() {
            i.$broadcast(r.PAUSE_EVENT)
        }
        function w() {
            i.$broadcast(r.RESUME_EVENT)
        }
        function U(e) {
            O(),
            I = e
        }
        function O() {
            I && I.dismiss()
        }
        i.isApp = M.isObject(L.cordova),
        i.sessionId = null,
        i.$stateParams = e,
        i.versionCode = A ? d.VERSION_NAME : "Version unavailable.",
        i.appConfig = s,
        i.isMobile = L.matchMedia("only screen and (max-width: 599px)").matches || L.matchMedia("only screen and (orientation: landscape) and (max-width: 850px)").matches,
        M.extend(o, {
            currentState: {
                name: ""
            },
            pageTitle: "",
            hideOnlineStates: !1,
            hideLeftNav: !0,
            showBackArrow: !1,
            loadingView: !0,
            loadingStatus: "",
            setPageTitle: function(e) {
                l.safeApply(o, function() {
                    o.pageTitle = e
                })
            },
            notificationsSharedService: S
        }),
        this.sortPrimaryUserGrade = l.sortPrimaryUserGradeFirst,
        M.extend(o, {
            getCurriculumShortName: function(e) {
                return l.getCurriculumShortName(e)
            },
            triggerSync: function() {
                m.triggerSync && m.triggerSync(function(e) {
                    l.$log.log(e)
                }, function(e) {
                    l.$log.error(e)
                })
            },
            toggleFavorite: function() {
                C ? T && 0 <= h && (o.isFavorite = !o.isFavorite,
                o.user.id && f ? p.storeUserLike(o.user.id, f.uuid, h, o.isFavorite, function(e) {
                    l.$log.log(e)
                }, function(e) {
                    l.$log.error(e)
                }) : l.$log.error("Cannot store like activity! user or resource are null.")) : l.$toastr.error("Cannot set favorite until content is loaded.")
            },
            toggleRatingBar: function() {
                o.showRatingBar = !o.showRatingBar
            },
            rateResource: function(e) {
                C ? (o.currentResourceRating = e,
                !o.user.id || !f || h < 0 ? l.$log.error("Cannot store rating! user, resource, or subject are null.") : p.rateResource(o.user.id, f.uuid, h, e, function(e) {
                    l.$log.log(e)
                }, function(e) {
                    l.$log.error(e)
                })) : l.$toastr.error("Cannot rate until content is loaded.")
            },
            showHelp: function() {},
            showMessage: function(s) {
                U(t.open({
                    templateUrl: "../student/modal/show-message-modal.html",
                    windowClass: "confirm-modal",
                    controller: ["$scope", "$modalInstance", function(e, t) {
                        e.message = s,
                        e.positiveResponse = function(e) {
                            t.dismiss("success")
                        }
                    }
                    ],
                    backdrop: "static",
                    keyboard: !0
                }))
            },
            feedback: function() {
                U(t.open({
                    templateUrl: "../student/modal/feedback-modal.html",
                    windowClass: "confirm-modal",
                    controller: ["$scope", "$modalInstance", function(t, s) {
                        t.feedback = "",
                        t.positiveResponse = function(e) {
                            e = {
                                userId: t.user.id,
                                subjectId: null,
                                contentUUID: null,
                                contentName: null,
                                activityStartTime: Date.now(),
                                activityEndTime: Date.now() + 1,
                                feedback: e,
                                activityType: r.ACTIVITY_TYPE_USER_FEEDBACK,
                                events: []
                            };
                            p.storeActivity(e, function(e) {
                                s.dismiss("success"),
                                l.$log.log(e),
                                l.$toastr.success("Thankyou for your feedback.")
                            }, function(e) {
                                s.dismiss("error"),
                                l.$log.error(e),
                                l.$toastr.error("Unable to save feedback.")
                            })
                        }
                        ,
                        t.negativeResponse = function() {
                            s.dismiss("cancel")
                        }
                    }
                    ],
                    backdrop: "static",
                    keyboard: !0
                }))
            },
            logout: function() {
                m.logoutUser()
            },
            toggleNotificationsPopover: function(e, t) {
                o.user && o.notificationsSharedService.showNotifications(o, o.user.id, e, t)
            },
            handleAssignmentNotification: function(e) {},
            handleAssessmentNotification: function(e) {},
            handleActivityNotification: function(e) {},
            changeState: function(e) {
                o.currentState.name !== e && (o.loadingView = !0,
                a.go(e, {}))
            },
            goBack: function() {
                L.history.back()
            },
            goToShop: function() {
                o.context.showShopLink && (L.location.href = o.context.browserShopLink)
            },
            handleStateChangeSuccess: function(e, t, s, r, n) {},
            sharePageItem: function() {
                var e, t, s;
                o.loadingView || (s = (t = (e = o.user).userGrades[0]).grade,
                t = t.userSections[0].section,
                s = {
                    contentName: o.pageTitle,
                    recipients: [],
                    userInfo: {
                        gradeNumber: s.number,
                        gradeId: s.id,
                        institutionId: e.institution ? e.institution.id : -1,
                        sectionId: t.id,
                        sectionName: t.name,
                        userId: e.id,
                        firstName: e.person.firstName,
                        lastName: e.person.lastName
                    }
                },
                "resource.viewer" === a.current.name && (C ? (s.contentUUID = v.contentUUID,
                i.$broadcast(r.START_SHARE, {
                    type: r.SHARE_TYPE.SHARE_CONTENT,
                    shareItem: s
                })) : l.$toastr.error("Cannot share until content is loaded.")))
            },
            showToast: function(e, t) {
                l.$toastr[t = t || "info"](e)
            },
            showSubMenu: function(e) {
                var t;
                l.safeApply(o, function() {
                    o.subMenu = {},
                    o.subMenu[e] = !0
                }),
                l.isEmptyOrBlank(e) && (t = P(".f-dropdown")).length && (Foundation.libs.dropdown.close(t),
                t.css("top", 0))
            },
            showUserInfoDialog: function() {
                U(t.open({
                    templateUrl: "../student/modal/user-info.html",
                    windowClass: "confirm-modal",
                    backdrop: "static",
                    keyboard: !0
                }))
            },
            closeMobileMenu: function() {
                c(function() {
                    M.element("#mobileMenu").trigger("click")
                }, 100)
            },
            setLogoPath: function() {
                var e, t;
                i.imgPath = i.isECUser ? "../img/icons/erudex-class-logo-white.png" : "../img/icons/company-logo.png",
                i.invertImgPath = i.isECUser ? "../img/icons/erudex-class-logo.png" : "../img/icons/company-logo-invert.png",
                i.dashboardImgPath = "../img/dashboard/logo-white.png",
                i.showPoweredBy = !1,
                i.isApk && "getSubdomain"in androidLoginJS ? (e = "https://app.erudex.com/img/branding/",
                null !== (t = androidLoginJS.getSubdomain()) && 0 < t.trim().length && (i.imgPath = e + t + "/logo.png",
                i.invertImgPath = e + t + "/logo-invert.png",
                i.dashboardImgPath = e + t + "/logo.png",
                i.showPoweredBy = !0)) : ((t = (e = L.location.host).split(".")[0]).includes("-test") && (t = t.replace("-test", "")),
                2 < e.split(".").length && !["qa-app", "demo-app", "qa", "demo", "www", "app"].includes(t) && (i.imgPath = "../img/branding/" + t + "/logo.png",
                i.invertImgPath = "../img/branding/" + t + "/logo-invert.png",
                i.dashboardImgPath = "../img/branding/" + t + "/logo.png",
                i.showPoweredBy = !0))
            },
            activityIcon: function(e) {
                e = e.groupType || e.iconType;
                return e === r.ACTIVITY_TYPE_ASSESSMENT ? "tests" : e === r.ACTIVITY_TYPE_ASSIGNMENT ? "assignments" : e === r.ACTIVITY_TYPE_CONTENT_REVIEW ? "lessons" : e === r.ACTIVITY_TYPE_LIVE_CLASS ? "classes" : void 0
            },
            getNotifications: function() {
                o.user && (o.notificationsSharedService.showToastMessage = !0,
                o.notificationsSharedService.showNotifications(o, o.user.id, !1, !1))
            }
        }),
        o.$watch("notificationsSharedService.unreadNotificationsCount", function(e, t) {
            console.log("watch notificationsSharedService.unreadNotificationsCount", e, t)
        }),
        i.$on(r.LOADING_EVENT, function(e, t) {
            var s = !0;
            t.status === r.LOADING_FINISHED ? (s = !1,
            t.title && (o.pageTitle = t.title),
            t.resource && (f = t.resource),
            t.subjectId && (h = t.subjectId)) : t.status === r.LOADING_ERROR ? (l.$toastr.error("Page failed to load, press back to return to previous screen."),
            t.title && (o.pageTitle = t.title),
            o.loadingStatus = "error") : t.status === r.LOADING_SHOW && (s = !0,
            o.loadingStatus = ""),
            l.safeApply(o, function() {
                o.loadingView = s
            })
        }),
        i.$on("$beforeStateChange", function(s, e, t, r, n) {
            e.data && M.isArray(e.data.disableFlags) && M.forEach(e.data.disableFlags, function(e, t) {
                (i.disableModule[e] || 0 <= d.DISABLED_MODULES.indexOf(e)) && (s.preventDefault(),
                l.finishLoadSuccess(o),
                l.$log.warn("Accessing disabled state, going back."),
                r && r.name || a.go("v2-liveClasses"))
            })
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            l.$log.log("$stateChangeStart"),
            o.loadingStatus = "",
            u.reset(),
            f = null,
            C = T = !1,
            o.loadingView = !0,
            O()
        }),
        i.$on("$stateChangeError", function(e, t, s, r, n, i) {
            l.$log.log("State change error when changing to " + t),
            l.$log.log(i),
            o.loadingView = !1
        }),
        i.$on("$stateChangeSuccess", function(e, t, s, r, n) {
            l.$log.log("$stateChangeSuccess from : ", r.name, " to ", t.name),
            i.user.route && "dashboard" === t.name ? a.go("v2-live-classes", {}) : (o.currentState = t,
            o.prevState = r,
            v = s,
            o.currentResourceRating = 0,
            o.showRatingBar = !1,
            i.isApp && L.navigator.splashscreen && (E ? L.navigator.splashscreen.hide() : c(function() {
                L.navigator.splashscreen.hide()
            }, 5e3)),
            o.handleStateChangeSuccess(e, t, s, r, n),
            E = !0)
        }),
        o.$on(r.USER_RETRIEVED_EVENT, function(e, t) {
            g.getSessionId(function(e) {
                M.isObject(e) && e.result ? i.sessionId = e.value : l.$log.error("Error retrieving sessionId.")
            }, function(e) {
                l.$log.error("Error retrieving sessionId.")
            })
        }),
        o.$on(r.WSS_TRIGGER_EVENT, function(e, t) {
            1 < o.$$listenerCount[r.WSS_TRIGGER_EVENT] && (o.$$listenerCount[r.WSS_TRIGGER_EVENT] = 0),
            o.toggleNotificationsPopover(!1, !1),
            l.$toastr.info("You received a new notification.")
        }),
        i.$on(r.CONTENT_LOADED, function(e, t) {
            C = !!t && !!t.isLoaded
        }),
        i.$on(r.ONLINE_STATUS_CHANGED_EVENT, function(e, t) {
            t = !!t.newValue;
            null === y || t || l.$toastr.warning("Lost connection to server."),
            y = t,
            o.hideOnlineStates = !t
        }),
        o.$on("$destroy", function() {
            document.removeEventListener("erudex:studentApp:userUpdated", b, !1),
            document.removeEventListener("softkeyboardshow", N, !1),
            document.removeEventListener("softkeyboardhide", _, !1),
            document.removeEventListener("pause", R, !1),
            document.removeEventListener("resume", w, !1)
        }),
        document.addEventListener("erudex:studentApp:userUpdated", b, !1),
        document.addEventListener("softkeyboardshow", N, !1),
        document.addEventListener("softkeyboardhide", _, !1),
        document.addEventListener("pause", R, !1),
        document.addEventListener("resume", w, !1),
        L.onbeforeunload = function() {}
    }
    ]).controller("ConfirmModalController", ["$scope", "$sce", "$modalInstance", "message", function(e, t, s, r) {
        e.message = t.trustAsHtml(r),
        e.positiveResponse = function() {
            s.close("positive")
        }
        ,
        e.negativeResponse = function() {
            s.dismiss("cancel")
        }
    }
    ]).directive("confirmPasswordCheck", [function() {
        return {
            require: "ngModel",
            scope: {
                newPass: "=confirmPasswordCheck"
            },
            link: function(t, e, s, r) {
                r.$parsers.unshift(function(e) {
                    e = e === t.newPass;
                    return r.$setValidity("noMatch", e),
                    !0
                })
            }
        }
    }
    ]).controller("SelfChangePasswordController", ["$scope", "APP_CONFIG", "UtilService", "userPlugin", "user", function(i, e, t, s, r) {
        var n = !1;
        function o(e) {
            e && e.result ? (t.$toastr.success("Password changed successfully."),
            i.$close()) : e && (e.errorMessage || e.message) ? t.safeApply(i, function() {
                "invalidUsernamePassword" === e.error ? i.errorMsg = "Invalid password" : i.errorMsg = e.message || e.errorMessage
            }) : t.safeApply(i, function() {
                i.errorMsg = "Unable to contact service, please ensure you are online and try again later."
            }),
            n = !1,
            t.blockUiStop(i)
        }
        function a(e) {
            t.$log.error(e),
            t.safeApply(i, function() {
                i.errorMsg = "Unable to contact service, please ensure you are online and try again later."
            }),
            n = !1,
            t.blockUiStop(i)
        }
        M.extend(i, {
            errorMsg: null,
            changePassword: {
                current: null,
                new: null,
                newVerify: null
            }
        }),
        M.extend(i, {
            getPasswordPattern: function() {
                return e.CHANGE_PASS.PATTERN
            },
            submitChangePassword: function() {
                n || (n = !0,
                t.blockUiStart(),
                i.errorMsg = null,
                s.changePassword({
                    userId: r.id,
                    currentPassword: i.changePassword.current,
                    newPassword: i.changePassword.new
                }, o, a))
            }
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.$close()
        })
    }
    ])
}(window.angular, (window.JSPath,
window.jQuery), window),
function(e) {
    "use strict";
    e.module("erudex.v2App").factory("DonutChartSharedService", function() {
        return {
            donutChart: function(e) {
                return {
                    chart: {
                        width: "100%",
                        height: 400,
                        type: "donut",
                        zoom: {
                            enabled: !1
                        },
                        toolbar: {
                            show: !1
                        }
                    },
                    dataLabels: {
                        enabled: !0,
                        formatter: function(e, t) {
                            return t.w.config.series[t.seriesIndex]
                        }
                    },
                    tooltip: {
                        enabled: !1
                    },
                    legend: {
                        onItemClick: {
                            toggleDataSeries: !1
                        },
                        position: "bottom",
                        offsetX: 0,
                        offsetY: -5,
                        markers: {
                            width: 16,
                            height: 16,
                            radius: 4,
                            offsetY: -100
                        }
                    },
                    states: {
                        hover: {
                            filter: {
                                type: "none"
                            }
                        },
                        active: {
                            filter: {
                                type: "none"
                            }
                        }
                    },
                    series: e,
                    labels: [">80%", "60%-80%", "40%-60%", "<40%"],
                    colors: ["#2BC210", "#165198", "#FFBB6B", "#FF6060"],
                    responsive: [{
                        breakpoint: 640,
                        options: {
                            legend: {
                                offsetY: 0,
                                markers: {
                                    width: 12,
                                    height: 12,
                                    radius: 1,
                                    offsetY: -100
                                }
                            }
                        }
                    }]
                }
            }
        }
    })
}(window.angular, (window.JSPath,
window)),
function(S, f) {
    "use strict";
    S.module("erudex.v2App").controller("BaseCurriculumViewCtrl", ["$scope", "$rootScope", "$state", "STORAGE_KEYS", "utilService", "MESSAGE_STRINGS", "APP_CONFIG", "APP_PREFS", "CURRICULUM_LANGUAGE_KEY", function(i, o, e, a, c, t, n, s, r) {
        var u, l = {
            enabled: c.getPreference(s.CURRICULUM_ALT_LANGUAGE.key, !1),
            primary: c.getPreference(s.CURRICULUM_PRIMARY_LANGUAGE_NAME.key, "English"),
            alternate: c.getPreference(s.CURRICULUM_ALT_LANGUAGE_NAME.key, "")
        }, d = (i.selectedChapter = {
            name: "",
            chapterResources: [],
            videoResources: [],
            documentResources: [],
            animationResources: [],
            recordedResources: [],
            vlabResources: [],
            arResources: [],
            onlineClassesVideoResources: [],
            onlineClassesDocResources: [],
            onlineClassesChapterResources: []
        },
        !(i.lessonTabs = {
            Animations: {
                display: o.isTeacher && !o.disableModule.curriculumCommon || !o.isTeacher && !o.disableModule.studentCurriculumCommon
            },
            Documents: {
                display: o.isTeacher && !o.disableModule.curriculumCommon || !o.isTeacher && !o.disableModule.studentCurriculumCommon
            },
            Resources: {
                display: o.isTeacher && !o.disableModule.curriculumCommon || !o.isTeacher && !o.disableModule.studentCurriculumCommon
            },
            "Teacher Uploads": {
                display: o.isTeacher && !o.disableModule.curriculumCommon || !o.isTeacher && !o.disableModule.studentCurriculumCommon
            },
            Lectures: {
                display: o.isTeacher && !o.disableModule.curriculumLectures || !o.isTeacher && !o.disableModule.studentCurriculumLectures
            },
            "ScholAR VLabs": {
                display: o.isTeacher && !o.disableModule.curriculumScholar || !o.isTeacher && !o.disableModule.studentCurriculumScholar
            },
            "AR Experiences": {
                display: o.isTeacher && !o.disableModule.curriculumAr || !o.isTeacher && !o.disableModule.studentCurriculumAr
            }
        }));
        for (u in i.lessonTabs)
            i.lessonTabs[u].display && !d ? d = i.lessonTabs[u].active = !0 : i.lessonTabs[u].active = !1;
        i.expandRight = !1,
        i.expandRightGrid = !1,
        i.subjects = null,
        i.subject = {
            name: ""
        },
        i.chapters = [],
        i.activeChapterId = "",
        i.subjectIconDir = "generic",
        i.selectedLanguage = null,
        i.selectedLanguageOptions = l,
        i.openChapter = {},
        i.selectedTopicId = -1,
        i.genericIconType = "generic",
        i.hasMultipleGrades = !1;
        var m = null
          , p = null;
        c.getPreference(s.CURRICULUM_ALT_LANGUAGE_NAME.key, "");
        function g(e) {
            var t, s, r;
            i.clearSearchText(),
            e && i.subject.id !== e.id && (p.last = e.id,
            r = p[e.id] = p[e.id] || {},
            t = e.iconType || "generic",
            n.KNOWN_ICON_SETS.indexOf(t) < 0 && (t = "generic"),
            i.subjectIconDir = t,
            i.subject = e,
            c.setCurrentSubject(e),
            t = r.last,
            s = [],
            e.contentResources && 0 < e.contentResources.length ? (s = [{
                name: e.name,
                id: -1,
                contentResources: e.contentResources,
                topics: []
            }],
            S.extend(s, e.chapters)) : s = e.chapters,
            c.safeApply(i, function() {
                i.chapters = s
            }),
            r = f(".{.id == $id}", s, {
                id: t
            })[0] || s[0],
            i.setSelectedChapter(r))
        }
        i.searchText = null,
        i.searchTeacherResources = null,
        i.clearSearchText = function() {
            i.searchText = "",
            i.searchTeacherResources = null
        }
        ,
        i.search = function() {
            null == i.searchText && "" == i.searchText || 0 < i.selectedChapter.teacherResources.length && (i.searchTeacherResources = i.selectedChapter.teacherResources.filter(function(e) {
                return e.name.toLowerCase().includes(i.searchText.toLowerCase())
            }),
            i.searchTeacherResources.length <= 0) && (c.$toastr.error("No results found for the given search criteria"),
            i.clearSearchText())
        }
        ,
        i.toggleExpandRight = function() {
            m && (clearTimeout(m),
            m = null),
            i.expandRight = !i.expandRight,
            i.expandRight ? m = setTimeout(function() {
                c.safeApply(i, function() {
                    i.expandRightGrid = i.expandRight
                })
            }, 600) : i.expandRightGrid = i.expandRight
        }
        ,
        i.viewOnlineClassesResource = function(e, t, s, r) {
            var n;
            o.isApk && e.uri.includes("deeplink.xlenz.us") ? window.open(e.uri, "_blank") : e.uri.includes("deeplink.xlenz.us") ? c.$toastr.info("Augmented Reality feature is not available in browser.") : (o.selectedCourseGrade = f.apply(".{.gradeId == $gradeId}", o.courseGrades, {
                gradeId: o.selectedGradeId
            })[0],
            o.selectedCourseGrade.isPaid ? ("external" == (n = e.uri.startsWith("http") ? "external" : "resource") && e.uri.indexOf("vlabs.erudex") && (e.uri = e.uri + "?userName=" + i.user.id),
            e.subjectId = s.id,
            e.gradeId = o.selectedCourseGrade.gradeId,
            e.sectionId = o.selectedCourseGrade.userSections[0].sectionId,
            c.openPreviewOverlayV2({
                type: n,
                resource: e,
                link: e,
                chapter: t,
                subject: s,
                altLanguage: "alternate" == i.selectedLanguage && e.altUri
            }, i.user, r)) : c.$toastr.info("Please make payment to access the course resources."))
        }
        ,
        i.getAction = function(e) {
            if (e.contentResourceType)
                return "application/pdf" === e.contentResourceType.type ? "View" : e.contentResourceType.type.includes("video") ? "Watch" : void 0
        }
        ,
        i.hasOnlineResources = function(e) {
            return c.getViewChapter(e).hasContentType.onlineClasses
        }
        ,
        i.onlineResourcesCount = function(e) {
            e = c.getViewChapter(e);
            return 0 < e.onlineClassesVideoResources.length ? "(" + e.onlineClassesVideoResources.length + ")" : ""
        }
        ,
        i.setSelectedChapter = function(e) {
            var t, s;
            c.setCurrentChapter(e),
            e ? ((s = p[i.subject.id] = p[i.subject.id] || {}).last = e.id,
            s = s[e.id] = s[e.id] || {},
            t = e.id,
            i.activeChapterId = t,
            i.openChapter[t] = !0,
            i.selectedChapter = c.getViewChapter(e),
            0 < f.apply(".{.id == $id}", e.topics, {
                id: i.selectedTopicId
            }).length ? i.storeSelections() : (t = s.last,
            s = null,
            S.isArray(e.topics) && !(s = isFinite(t) ? f.apply(".{.id == $id}", e.topics, {
                id: t
            })[0] : s) && 0 < e.topics.length && (s = e.topics[0]),
            i.setSelectedTopic(s))) : (i.selectedChapter = {
                name: "No Chapter Information"
            },
            i.setSelectedTopic(null))
        }
        ,
        i.setSelectedTopic = function(s) {
            var e, r;
            c.setCurrentTopic(s),
            s ? ((p[i.subject.id][i.activeChapterId] || {}).last = s.id,
            s.contentResources && 1 < s.contentResources.length && (e = s.contentResources.map(function(e) {
                return e.name
            }).filter(function(e, t, s) {
                return s.indexOf(e) === t
            }),
            r = s.contentResources.map(function(e) {
                return e.contentResourceType.type
            }).filter(function(e, t, s) {
                return s.indexOf(e) === t
            }),
            S.forEach(e, function(t) {
                S.forEach(r, function(e) {
                    e = f.apply(".{.name === $name && .contentResourceType.type === $contentType}", s.contentResources, {
                        name: t,
                        contentType: e
                    });
                    1 < e.length && S.forEach(e, function(e, t) {
                        e.name = e.name + " " + (t + 1)
                    })
                })
            })),
            i.storeSelections(),
            i.selectedTopicId = s.id,
            i.selectedTopic = c.getViewTopic(s)) : i.selectedTopic = {
                name: "No Topic Available",
                altName: "No Topic Available"
            }
        }
        ,
        i.isSelectedChapter = function(e) {
            return i.activeChapterId === e
        }
        ,
        i.isSelectedTopic = function(e) {
            return i.selectedTopicId === e
        }
        ,
        i.setSelectedSubject = function(e) {
            e = f.apply(".{.subject.id == $id}", i.subjects, {
                id: e.id
            })[0];
            e.subject.chapters ? g(e.subject) : (c.blockUiStart(i),
            c.getUserSubjectById(e.id, function(s) {
                i.subjects.forEach(function(e, t) {
                    e.id === s.id && (i.subjects[t] = s,
                    g(s.subject),
                    i.storeSelections())
                }),
                c.blockUiStop(i)
            }, function(e) {
                c.blockUiStop(i),
                console.log(e)
            }))
        }
        ,
        this.reloadSelectedSubject = function(e) {
            c.blockUiStart(i);
            e = f.apply(".{.subject.id == $id}", i.subjects, {
                id: e.id
            })[0];
            c.clearUserSubject(e.id),
            c.getUserSubjectById(e.id, function(s) {
                i.subjects.forEach(function(e, t) {
                    e.id === s.id && (i.subjects[t] = s,
                    c.safeApply(i, function() {
                        i.chapters = s.subject.chapters;
                        var e = f.apply(".{.id == $id}", i.chapters, {
                            id: i.selectedChapter.id
                        })[0];
                        c.clearViewChapter(e),
                        i.selectedChapter = c.getViewChapter(e)
                    }))
                }),
                c.blockUiStop(i)
            }, function(e) {
                c.blockUiStop(i),
                console.log(e)
            })
        }
        ,
        i.isSelectedSubject = function(e) {
            return i.subject.id === e
        }
        ,
        i.setResource = function(e) {
            S.isObject(e) && (i.storeSelections(),
            c.goToResource(e))
        }
        ,
        i.setCurriculumLanguage = function(e, t) {
            l.enabled ? l.options || (l.options = [{
                name: l.primary,
                value: r.PRIMARY
            }, {
                name: l.alternate,
                value: r.ALTERNATE
            }]) : e = r.PRIMARY,
            (e = e === r.PRIMARY || e === r.ALTERNATE ? e : r.PRIMARY) === r.ALTERNATE && "v2-curriculum" === i.currentState.name ? S.forEach(i.subjects, function(e) {
                e.subject.orgName || (e.subject.orgName = e.subject.name),
                e.subject.name = c.isEmptyOrBlank(e.subject.altName) ? e.subject.name : e.subject.altName
            }) : S.forEach(i.subjects, function(e) {
                e.subject.orgName || (e.subject.orgName = e.subject.name),
                e.subject.name = e.subject.orgName
            }),
            i.selectedLanguage = e,
            c.$storageService.setUserPref(a.CURRICULUM_LANGUAGE, e),
            c.safeApply(i, S.noop)
        }
        ,
        i.storeSelections = S.noop,
        this.onSubjectsLoaded = function(s, e) {
            p = e || {};
            var t, e = f.apply(".subject.grade", s), e = (1 < c.uniqueByField(e, "id").length && (i.hasMultipleGrades = !0),
            i.subjects = s,
            c.$storageService.getUserPref(a.CURRICULUM_LANGUAGE)), r = p.last, n = (S.forEach(p, function(e, t) {
                t = parseInt(t),
                S.isNumber(t) && isFinite(t) && 0 === f.apply(".{.subject.id == $id}", s, {
                    id: t
                }).length && delete p[t]
            }),
            s[0],
            s[0] ? s[0].subject : null);
            r && ((t = f.apply(".{.subject.id == $id}", s, {
                id: r
            })[0]) ? n = t.subject : (delete p[r],
            p.last = null)),
            n && i.setSelectedSubject(n),
            i.setCurriculumLanguage(e, !0)
        }
    }
    ])
}(window.angular, window.JSPath),
function(u, l) {
    "use strict";
    u.module("erudex.v2App").controller("CurriculumViewController", ["$scope", "$rootScope", "$controller", "TeacherUploadSharedService", "UtilService", "STORAGE_KEYS", function(s, t, e, r, n, i) {
        u.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: s,
            utilService: n
        }));
        var o = this
          , a = null;
        function c() {
            t.selectedCourseGrade = l.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            n.finishLoadSuccess(s)
        }
        s.sharedService = r,
        s.onCreateUpload = function() {
            var e = s.getSections(t.selectedCourseGrade.gradeId);
            s.sharedService.createEmptyUpload(t.selectedCourseGrade, s.subject, s.selectedChapter, e)
        }
        ,
        s.storeSelections = function() {
            a && n.$storageService.setUserPref(i.REMEMBER_SELECT_CURRICULUM, a)
        }
        ,
        s.reloadSelectedSubject = function() {
            o.reloadSelectedSubject(s.subject)
        }
        ,
        n.checkUserLoaded(s, function() {
            n.getUserCurriculum(function(e) {
                a = n.$storageService.getUserPref(i.REMEMBER_SELECT_CURRICULUM, {});
                var t = l.apply(".grade", s.user.userGrades).sort(n.sortGrades);
                n.buildStudentCurriculumGradeSelect(s, t, e, o.onSubjectsLoaded, a),
                c()
            }, function(e) {
                c()
            })
        }),
        s.$watch("sharedService.reloadUploads", function(e, t) {
            e && (s.sharedService.subject = null,
            s.sharedService.files = [],
            s.sharedService.reloadUploads = !1,
            s.reloadSelectedSubject())
        })
    }
    ])
}(window.angular, window.JSPath),
function(E) {
    "use strict";
    E.module("erudex.v2App").factory("UserAssignmentSharedService", ["BaseUserActivityPlugin", "STATUS_ID", "MESSAGE_STRINGS", function(e, t, s) {
        var r = {
            userAssignment: {},
            files: [],
            showViewSheet: !1,
            updateUserAssignment: !1,
            reloadAssignments: !1,
            validForm: !1,
            attachmentsAllowed: !0,
            isTeacher: !1,
            activity: null,
            startActivity: function(e) {
                r.activity = {
                    institutionId: e.institutionId,
                    userId: e.userId,
                    gradeId: e.gradeId,
                    subjectId: e.subjectId,
                    sectionId: e.sectionId,
                    contentUUID: e.assignment.uuid,
                    contentName: e.assignment.name,
                    contentType: {
                        subjectType: "generic",
                        displayType: "assignment"
                    },
                    activityStartTime: Date.now(),
                    activityEndTime: -1,
                    activityType: s.ACTIVITY_TYPE_ASSIGNMENT,
                    groupType: s.ACTIVITY_TYPE_ASSIGNMENT,
                    events: []
                },
                e.statusId !== t.SUBMITTED && e.statusId !== t.GRADED || (r.activity.activityType = s.ACTIVITY_TYPE_ASSIGNMENT_REVIEW)
            },
            endActivity: function() {
                r.activity && (r.activity.activityEndTime = Date.now(),
                2e3 < r.activity.activityEndTime - r.activity.activityStartTime) && e.storeActivity(r.activity, function(e) {
                    util.$log.log(e)
                }, function(e) {
                    util.$log.error(e)
                }),
                r.activity = null
            },
            closeViewSheet: function() {
                r.files = [],
                r.showViewSheet = !1,
                r.isTeacher || r.endActivity()
            },
            viewAssignment: function(e, t) {
                r.showViewSheet = !0,
                r.isTeacher = t,
                r.userAssignment = e,
                t ? r.validForm = null !== e.score : (r.validForm = null !== e.response,
                r.startActivity(e))
            }
        };
        return r
    }
    ]).controller("UserAssignmentViewController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "userPlugin", "studentAssignmentPlugin", "UserAssignmentSharedService", "locker", "STATUS_ID", "APP_CONFIG", function(a, e, t, s, r, c, u, l, d, n, i, o, m, p) {
        var g = a.user
          , S = p.UPLOAD_TEACHER;
        function f(e, t, s, r) {
            n.submitAssignment(e, function(e) {
                l.blockUiStop(a),
                e.result ? (l.$toastr.info(s),
                l.blockUiStop(a),
                a.sharedService.closeViewSheet(),
                t ? a.sharedService.updateUserAssignment = !0 : a.sharedService.reloadAssignments = !0) : l.safeApply(a, function() {
                    a.msg = r + "(" + e.errorMessage + ")."
                })
            }, function(e) {
                console.log(e),
                l.$toastr.error(r, e.errorMessage),
                l.blockUiStop(a)
            })
        }
        function h(e, t) {
            var s = e !== m.SUBMITTED ? "Assignment Saved successfully" : "Assignment Submitted successfully"
              , r = e !== m.SUBMITTED ? "Unable to Save Assignment" : "Unable to Submit Assignment"
              , n = a.sharedService.userAssignment.attachments;
            0 < t.length && E.forEach(t, function(e) {
                e.uploadUrl && delete e.uploadUrl,
                n.push(e)
            }),
            f({
                id: a.sharedService.userAssignment.id,
                updateObj: {
                    statusId: e,
                    attachments: n,
                    response: a.sharedService.userAssignment.response
                }
            }, !1, s, r)
        }
        function v(t) {
            var n, e, s, r, i, o;
            l.blockUiStart(a),
            0 < a.sharedService.files.length ? (e = a.sharedService.files,
            i = r = 0,
            o = s = !1,
            E.forEach(e, function(e) {
                r += e.size,
                i = i < e.size ? e.size : i,
                S.TYPE_REGEX.test(e.type) || (o = !0)
            }),
            e.length > S.MAX_ATTACHMENTS ? l.$toastr.error("Too many attachments. Maximum of " + S.MAX_ATTACHMENTS + " allowed.") : i > S.MAX_SIZE ? l.$toastr.error("Each file attachment must be less than " + (S.MAX_SIZE / 1024 / 1024).toFixed(2) + "MB.") : r > S.MAX_TOTAL_SIZE ? l.$toastr.error("Total size of attachments must be less than " + (S.MAX_TOTAL_SIZE / 1024 / 1024).toFixed(2) + "MB.") : o ? l.$toastr.error("Only image and pdf file attachments are allowed.") : s = !0,
            s ? (n = [],
            E.forEach(a.sharedService.files, function(e) {
                n.push({
                    fileName: e.name,
                    fileSize: e.size,
                    type: e.type
                })
            }),
            e = {
                type: "assignment",
                files: n
            },
            d.getUploadUrls(e, function(e) {
                var s, r;
                e.result && (n = e.values,
                s = n,
                r = !0,
                E.forEach(a.sharedService.files, function(e, t) {
                    u.http({
                        url: s[t].uploadUrl,
                        method: "PUT",
                        headers: {
                            "Content-Type": e.type
                        },
                        data: e
                    }).then(function(e) {
                        c(function() {
                            a.result = e.data
                        })
                    }, function(e) {
                        0 < e.status && (a.errorMsg = e.status + ": " + e.data,
                        r = r && !1)
                    }, function(e) {
                        a.progress = Math.min(100, parseInt(100 * e.loaded / e.total)),
                        console.log(a.progress)
                    })
                }),
                r) ? h(t, n) : (l.blockUiStop(a),
                l.$toastr.error("Error uploading attachments"))
            }, function(e) {
                l.blockUiStop(a),
                console.error(e),
                l.$toastr.error("Error uploading attachments", e.errorMessage)
            })) : l.blockUiStop(a)) : h(t, [])
        }
        function T() {
            var e = a.sharedService.userAssignment.attachments ? a.sharedService.userAssignment.attachments.length : 0
              , t = a.sharedService.files ? a.sharedService.files.length : 0;
            a.sharedService.attachmentsAllowed = e + t < a.upload.maxFiles
        }
        E.extend(a, {
            sharedService: i,
            STATUS_ID: m,
            upload: {
                pattern: S.TYPE_MIME_LIST,
                accept: S.TYPE_MIME_LIST,
                maxSize: S.MAX_SIZE,
                maxFiles: S.MAX_ATTACHMENTS,
                maxTotalSize: S.MAX_TOTAL_SIZE
            }
        }),
        a.canEdit = function() {
            return a.sharedService.userAssignment.statusId === m.INPROGRESS || a.sharedService.userAssignment.statusId === m.PUSHED
        }
        ,
        a.viewAttachment = function(e) {
            l.openPreviewOverlay({
                type: "external",
                link: {
                    uri: e.signedUrl,
                    type: e.type
                }
            }, g)
        }
        ,
        a.onFilesSelected = function(s) {
            var r = a.sharedService.userAssignment.attachments
              , e = (r && E.forEach(s, function(e, t) {
                _.find(r, {
                    fileName: e.name
                }) && s.splice(t, 1)
            }),
            a.upload.maxFiles - (a.sharedService.userAssignment.attachments ? a.sharedService.userAssignment.attachments.length : 0));
            a.sharedService.files = s.splice(0, e),
            T()
        }
        ,
        a.removeAttachment = function(s, r) {
            var n = r ? a.sharedService.userAssignment.attachments : a.sharedService.files;
            E.forEach(n, function(e, t) {
                (r ? e.fileName === s.fileName : e.name === s.name) && n.splice(t, 1)
            }),
            T()
        }
        ,
        a.validateForm = function() {
            return a.isTeacher ? a.sharedService.validForm = null !== a.sharedService.userAssignment.score && 0 <= a.sharedService.userAssignment.score : a.sharedService.validForm = a.sharedService.userAssignment.response && 0 < a.sharedService.userAssignment.response.length,
            !0
        }
        ,
        a.onSubmit = function(e) {
            a.validateForm() && a.sharedService.validForm ? v(e) : l.$toastr.info("Enter all required fields.")
        }
        ,
        a.onGrade = function() {
            var e = {
                id: a.sharedService.userAssignment.id,
                updateObj: {
                    statusId: m.GRADED,
                    score: a.sharedService.userAssignment.score,
                    teacherFeedback: a.sharedService.userAssignment.teacherFeedback,
                    reviewUserId: g.id
                }
            }
              , t = Number(a.sharedService.userAssignment.score)
              , s = a.sharedService.userAssignment.assignment.totalScore;
            s < t ? l.$toastr.error("Student Marks should be less than or equal to " + s) : (l.blockUiStart(a),
            f(e, !0, "Assignment Graded successfully", "Unable to Grade Assignment"))
        }
        ,
        l.checkUserLoaded(a, function() {
            l.finishLoadSuccess(a)
        })
    }
    ])
}(window.angular, (window.JSPath,
window)),
function(A, C) {
    "use strict";
    A.module("erudex.v2App").factory("UserAssessmentSharedService", ["$rootScope", "BaseUserActivityPlugin", "UtilService", "MESSAGE_STRINGS", function(e, t, s, r) {
        var n = {
            id: null,
            expiredDateTime: 0,
            userAssessment: {},
            showUserAssessmentViewSheet: !1,
            activity: null,
            startActivity: function(e) {
                n.activity = {
                    studentAssessmentId: e.id,
                    institutionId: e.user.institutionId,
                    userId: e.user.userId,
                    gradeId: e.user.gradeId,
                    subjectId: e.subjects[0].id,
                    contentUUID: e.id,
                    contentName: e.assessment[0].name,
                    isCompetitive: "competitiveMock" === e.assessment[0].assessmentType,
                    testType: e.assessment[0].testType,
                    contentType: {
                        subjectType: "generic",
                        displayType: "assessment"
                    },
                    activityStartTime: Date.now(),
                    activityEndTime: -1,
                    activityType: r.ACTIVITY_TYPE_ASSESSMENT_REVIEW,
                    groupType: r.ACTIVITY_TYPE_ASSESSMENT,
                    events: []
                }
            },
            endActivity: function() {
                n.activity && (n.activity.activityEndTime = Date.now(),
                2e3 < n.activity.activityEndTime - n.activity.activityStartTime) && t.storeActivity(n.activity, function(e) {
                    s.$log.log(e)
                }, function(e) {
                    s.$log.error(e)
                }),
                n.activity = null
            },
            closeUserAssessmentViewSheet: function() {
                n.id = null,
                n.showUserAssessmentViewSheet = !1,
                e.isTeacher || n.endActivity()
            },
            showUserAssessment: function(e, t) {
                n.id = e,
                n.expiredDateTime = null !== t ? t : 0
            }
        };
        return n
    }
    ]).controller("UserAssessmentViewController", ["$scope", "$rootScope", "$compile", "UtilService", "v2CommonPlugin", "UserAssessmentSharedService", "STATUS_ID", "ASSESSMENT_TYPE", "$filter", function(s, e, t, r, n, i, o, a, c) {
        var u = s.user;
        function l(e) {
            s.allFilter = c("filter")(e, function(e) {
                if (s.isAdvancedTest || s.isNeetTest) {
                    if (s.selectedSubject.id === e.mcq.subjectId && s.selectedSubject.sectionNumber === e.sectionNumber)
                        return e
                } else if (s.selectedSubject.id === e.mcq.subjectId)
                    return e
            }),
            s.correctFilter = c("filter")(e, function(e) {
                if (s.isAdvancedTest || s.isNeetTest) {
                    if (s.selectedSubject.id === e.mcq.subjectId && s.selectedSubject.sectionNumber === e.sectionNumber)
                        return 1 === e.c
                } else if (s.selectedSubject.id === e.mcq.subjectId)
                    return 1 === e.c
            }),
            s.incorrectFilter = c("filter")(e, function(e) {
                if (s.isAdvancedTest || s.isNeetTest) {
                    if (s.selectedSubject.id === e.mcq.subjectId && s.selectedSubject.sectionNumber === e.sectionNumber)
                        return 1 === e.ic
                } else if (s.selectedSubject.id === e.mcq.subjectId)
                    return 1 === e.ic
            }),
            s.naFilter = c("filter")(e, function(e) {
                if (s.isAdvancedTest || s.isNeetTest) {
                    if (s.selectedSubject.id === e.mcq.subjectId && s.selectedSubject.sectionNumber === e.sectionNumber)
                        return 1 === e.na
                } else if (s.selectedSubject.id === e.mcq.subjectId)
                    return 1 === e.na
            })
        }
        function d(t) {
            r.blockUiStart(s);
            var e = {
                id: t,
                expiredDateTime: s.sharedUAService.expiredDateTime,
                roleId: u.roles[0].id,
                statusId: o.GRADED
            };
            s.hasNumericQuestions = !1,
            n.getUserAssessmentById(e, function(e) {
                r.blockUiStop(s),
                e.result ? (s.sharedUAService.showUserAssessmentViewSheet = !0,
                s.userAssessment = e.value,
                s.overview = e.value.assessment[0],
                s.subjects = _.sortBy(e.value.subjects, "sortOrder"),
                s.selectedSubject = s.subjects[0],
                s.userAssessment.id = t,
                s.sharedUAService.startActivity(s.userAssessment),
                C.apply(".subjects{.numericMarks > 0}", s.userAssessment)[0] && (s.hasNumericQuestions = !0),
                s.isAdvancedTest = "adv" === s.userAssessment.assessment[0].testType,
                s.isNeetTest = s.userAssessment.assessment[0].neet || !1,
                s.showNumericScore = s.hasNumericQuestions && !s.isAdvancedTest,
                l(s.userAssessment.studentMcqs),
                (e = A.element(document.querySelectorAll("#subjects-scroll, #filters-scroll"))).animate({
                    scrollLeft: e.offset().left
                }, "slow"),
                s.selectedSubject = _.sortBy(s.userAssessment.subjects, "sortOrder")[0],
                s.tempSubjects = _.uniq(s.userAssessment.subjects, "id"),
                s.uniqueSubjects = s.tempSubjects.map(function(e) {
                    return {
                        name: e.name,
                        id: e.id,
                        sortOrder: e.sortOrder
                    }
                }),
                s.secondaryTab = 2,
                s.graphTableSwitch = "G",
                s.chapters = s.userAssessment.chapters) : r.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                r.$toastr.error("Error while retrieving Test details."),
                r.blockUiStop(s)
            })
        }
        A.extend(s, {
            sharedUAService: i,
            userAssessment: {},
            chapters: [],
            primaryTab: "M",
            secondaryTab: 2,
            selectedSubject: null,
            graphTableSwitch: "G",
            setGraphTableSwitch: function(e) {
                s.graphTableSwitch = e
            },
            setSecondaryTab: function(e) {
                s.secondaryTab = e
            },
            isSecondarySet: function(e) {
                return s.secondaryTab === e
            },
            setSelectedSubject: function(e) {
                s.selectedSubject = e
            },
            filteredChapters: function(e) {
                if (s.selectedSubject.id === e.subjectId)
                    return e
            },
            filteredQuestions: function(e) {
                if (s.isAdvancedTest || s.isNeetTest) {
                    if (s.selectedSubject.id === e.mcq.subjectId && s.selectedSubject.sectionNumber === e.sectionNumber)
                        return e
                } else if (s.selectedSubject.id === e.mcq.subjectId)
                    return e
            },
            isAdvActiveSubject: function(e, t) {
                return s.selectedSubject && s.selectedSubject.name === e && s.selectedSubject.sectionNumber === t
            },
            questionFilters: l,
            selectedSubjectMcq: function(e) {
                l(e)
            },
            ASSESSMENT_TYPE: a,
            isArray: A.isArray,
            offset: 0,
            timerCurrent: 0,
            uploadCurrent: 0,
            radius: 125,
            isSemi: !1,
            rounded: !0,
            responsive: !0,
            clockwise: !0,
            currentColor: "#45ccce",
            bgColor: "#eaeaea",
            duration: 2e3,
            currentAnimation: "easeOutCubic",
            animationDelay: 0,
            tabType: "o"
        }),
        s.completedFilter = function(e) {
            var t = s.showMockTests ? s.selectedTestType : "subject";
            return (e.statusId === o.SUBMITTED || e.statusId === o.GRADED) && e.testType === t
        }
        ,
        s.expiredFilter = function(e) {
            var t = s.showMockTests ? s.selectedTestType : "subject";
            return !e.expiredDateTime && e.testType === t
        }
        ,
        s.setTabType = function(e) {
            s.tabType = e
        }
        ,
        s.getColor = function(e) {
            return "correct" === e ? "#2BC210" : "incorrect" === e ? "#FF6060" : "notattempted" === e ? "#9E9E9E" : "#FFFFFF"
        }
        ,
        s.secToMin = function(e) {
            return parseFloat((e % 3600 / 60).toFixed(1))
        }
        ,
        s.rankSuffix = function(e) {
            return moment.localeData().ordinal(e)
        }
        ,
        s.propertyName = "percentage",
        s.sortReverse = !0,
        s.sortChapters = function() {
            s.sortReverse = !s.sortReverse
        }
        ,
        s.setTabValue = function(e) {
            s.setAllSelected = "all" === e
        }
        ,
        r.checkUserLoaded(s, function() {
            r.finishLoadSuccess(s)
        }),
        s.$watch("sharedUAService.id", function(e, t) {
            e && (d(e),
            s.tabType = "o",
            1 < s.subjects.length) && s.setTabValue("all")
        })
    }
    ]).controller("TestOverviewController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$compile", "UtilService", "STATUS_ID", "v2CommonPlugin", "UserAssessmentSharedService", "ASSESSMENT_TYPE", "userPlugin", "STORAGE_KEYS", function(o, e, t, s, r, n, i, a, c, u, l, d, m) {
        A.extend(this, t("BaseCurriculumViewCtrl", {
            $scope: o,
            utilService: i
        }));
        var p = this
          , g = null
          , S = null
          , f = r.grade ? i.decodeIds(r.grade)[0] : e.selectedCourseGrade.gradeId;
        function h() {
            e.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", e.courseGrades, {
                gradeId: e.selectedGradeId
            })[0],
            i.finishLoadSuccess(o)
        }
        A.extend(o, {
            showChapterWiseQuestionsSheet: !1,
            getEndTime: function(e, t) {
                return moment(e).add(t, "minutes").format("hh:mm A")
            },
            sharedUAService: u,
            graphTableSwitch: "G",
            chapterGraphTableSwitch: "G",
            setGraphTableSwitch: function(e) {
                o.graphTableSwitch = e
            },
            setChapterGraphTableSwitch: function(e) {
                o.chapterGraphTableSwitch = e
            }
        }),
        o.storeSelections = function() {
            g && i.$storageService.setUserPref(m.REMEMBER_SELECT_CURRICULUM, g)
        }
        ,
        o.setTabData = function(e) {
            var t, s, r, n, i;
            t = [],
            s = [],
            r = [],
            n = [],
            i = [],
            e.slice().reverse().forEach(function(e) {
                t.push(e.name),
                s.push("●"),
                r.push(e.score),
                n.push(e.topScore),
                i.push(e.leastScore)
            }),
            o.line = {
                chart: {
                    width: "100%",
                    height: 400,
                    type: "area",
                    zoom: {
                        enabled: !1
                    },
                    stacked: !1,
                    toolbar: {
                        show: !1
                    }
                },
                series: [{
                    name: "Your Score",
                    data: r
                }, {
                    name: "Top Score",
                    data: n
                }, {
                    name: "Least Score",
                    data: i
                }],
                stroke: {
                    curve: "smooth"
                },
                colors: ["#165198", "#2BC210", "#E92929"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: .2,
                        opacityTo: .7,
                        stops: [0, 100]
                    }
                },
                grid: {
                    borderColor: "#C4C4C4",
                    strokeDashArray: 6,
                    xaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !1
                        }
                    }
                },
                dataLabels: {
                    enabled: !1
                },
                markers: {
                    size: 0,
                    hover: {
                        size: 0,
                        sizeOffset: 5
                    }
                },
                legend: {
                    showForSingleSeries: !1,
                    onItemClick: {
                        toggleDataSeries: !1
                    },
                    offsetX: 0,
                    offsetY: -10,
                    labels: {
                        colors: ["#5a5a5a"]
                    },
                    markers: {
                        width: 28,
                        height: 4,
                        radius: 1,
                        offsetY: -100
                    },
                    itemMargin: {
                        horizontal: 0,
                        vertical: 10
                    }
                },
                xaxis: {
                    categories: s,
                    labels: {
                        show: !0,
                        maxHeight: 16,
                        style: {
                            colors: [],
                            fontSize: "2rem",
                            transform: "translateY(-10px)",
                            cssClass: "apexcharts-xaxis-label"
                        }
                    },
                    axisBorder: {
                        show: !0
                    },
                    axisTicks: {
                        show: !1
                    },
                    crosshairs: {
                        show: !0,
                        width: 5,
                        position: "front",
                        stroke: {
                            width: 0
                        },
                        fill: {
                            type: "solid",
                            color: "#2A84FB"
                        },
                        dropShadow: {
                            enabled: !1
                        }
                    }
                },
                yaxis: {
                    tickAmount: 1,
                    labels: {
                        formatter: function(e) {
                            return void 0 !== e ? e.toFixed(0) : e
                        }
                    }
                },
                tooltip: {
                    enabled: !0,
                    followCursor: !0,
                    custom: function(e) {
                        return '<div class="tooltip-wrapper"><div class="tooltip-heading fs-14 fw-600">' + t[e.dataPointIndex] + '</div><ul class="tooltip-body fs-12 fw-500"><li><div>Your Score</div><div class="fs-16 fw-600">' + r[e.dataPointIndex] + '</div></li><li><div>Top Score</div><div class="fs-16 fw-600">' + n[e.dataPointIndex] + '</div></li><li><div>Least Score</div><div class="fs-16 fw-600">' + i[e.dataPointIndex] + "</div></li></ul></div>"
                    }
                },
                responsive: [{
                    breakpoint: 640,
                    options: {
                        legend: {
                            markers: {
                                width: 16,
                                height: 4,
                                radius: 1,
                                offsetY: -100
                            }
                        },
                        xaxis: {
                            categories: s,
                            labels: {
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }
                        }
                    }
                }]
            }
        }
        ;
        var v = (new Date).getTime()
          , t = moment().subtract(1, "months").toDate().getTime()
          , u = moment().subtract(3, "months").toDate().getTime()
          , T = moment().subtract(6, "months").toDate().getTime()
          , E = moment().subtract(12, "months").toDate().getTime();
        function I(e, t) {
            i.blockUiStart(o);
            e = {
                userId: r.userId ? i.decodeIds(r.userId)[0] : o.user.id,
                competitiveModule: !0,
                statusId: a.GRADED,
                gradeId: e,
                fromDate: t,
                toDate: v,
                sectionId: r.sectionId ? i.decodeIds(r.sectionId)[0] : S,
                efdnTrack: r.track || (o.showTrack ? o.selectedTrack : null)
            };
            d.isGuardian() && (e.studentId = d.getStudentUserId()),
            c.getStudentTestChapterList(e, function(e) {
                i.blockUiStop(o),
                e.result ? (o.testsList = e.values[0].testList,
                o.chaptersList = e.values[0].chapterList,
                o.studentDetails = e.values[0].studentDetails[0]) : i.$toastr.error("Error while retrieving Test List.")
            }, function(e) {
                i.$toastr.error("Error while retrieving Test List."),
                i.blockUiStop(o)
            }),
            c.getStudentPerformanceReport(e, function(e) {
                i.blockUiStop(o),
                e.result ? (o.allAssessmentsData = e.values[0].assessments,
                o.overviewCards = e.values[0].overviewCards[0],
                o.assessmentsBySubject = e.values[0].subjects,
                o.setTabData(o.allAssessmentsData)) : i.$toastr.error("Error while retrieving Overview.")
            }, function(e) {
                i.$toastr.error("Error while retrieving Overview."),
                i.blockUiStop(o)
            })
        }
        o.availableMonths = [{
            name: e.isMobile ? "1M" : "Last 30 Days",
            value: t
        }, {
            name: e.isMobile ? "3M" : "Last 3 Months",
            value: u
        }, {
            name: e.isMobile ? "6M" : "Last 6 Months",
            value: T
        }, {
            name: e.isMobile ? "12M" : "Last 12 Months",
            value: E
        }],
        o.selectedMonth = o.availableMonths[0].value,
        o.tracks = l.DATA_ENTRY_TEST_TRACK_OPTIONS,
        o.selectedTrack = o.tracks[0].value,
        o.setSelectMonth = function(e) {
            o.selectedMonth = e,
            I(f, e)
        }
        ,
        o.setSelectedTrack = function(e) {
            o.selectedTrack = e,
            I(f, o.selectedMonth)
        }
        ,
        o.onViewChapterWiseQuestions = function(e, t, s) {
            o.showChapterWiseQuestionsSheet = !0,
            o.selectedChapterName = s;
            for (var s = e, e = t, r = [], n = 0; n < o.testsList.length; n++)
                r.push(o.testsList[n].id);
            i.blockUiStart(o),
            s = {
                id: r,
                subjectId: s,
                chapterId: e
            },
            o.hasNumericQuestions = !1,
            c.getStudentChapterQuestionsList(s, function(e) {
                i.blockUiStop(o),
                e.result ? o.chapterQuestionsDetails = e.values : i.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                console.log(e),
                i.$toastr.error("Error while retrieving Test details."),
                i.blockUiStop(o)
            })
        }
        ,
        o.closeChapterWiseQuestionsSheet = function() {
            o.showChapterWiseQuestionsSheet = !1
        }
        ,
        o.onViewAssessment = function(e) {
            o.sharedUAService.showUserAssessment(e, 0)
        }
        ,
        o.t1 = {
            predicate: "startDate",
            reverse: !0
        },
        o.t2 = {
            predicate: "scorePercentage",
            reverse: !1
        },
        o.order = function(e, t) {
            o[t].reverse = o[t].predicate === e && !o[t].reverse,
            o[t].predicate = e
        }
        ,
        i.checkUserLoaded(o, function() {
            o.user,
            i.getUserCurriculum(function(e) {
                g = i.$storageService.getUserPref(m.REMEMBER_SELECT_CURRICULUM, {});
                var t = C.apply(".grade", o.user.userGrades).sort(i.sortGrades);
                i.buildStudentCurriculumGradeSelect(o, t, e, p.onSubjectsLoaded, g),
                h()
            }, function(e) {
                h()
            })
        }),
        o.$watch("selectedCourseGrade", function() {
            o.selectedCourseGrade && (f = r.grade ? i.decodeIds(r.grade)[0] : o.selectedCourseGrade.gradeId,
            S = o.selectedCourseGrade.userSections[0].section.id,
            o.showTrack = "E-FDN" === o.selectedCourseGrade.curriculum,
            o.setSelectMonth(o.selectedMonth))
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(A, C, y) {
    "use strict";
    A.module("com.erudex.common").factory("LiveClassSharedService", [function() {
        var n = [30, 45, 60, 75, 90, 105, 120]
          , i = {
            meeting: {},
            subject: null,
            selectedChapter: null,
            selectedTeacher: null,
            chapters: [],
            teachers: [],
            sections: [],
            meetingHours: [],
            showCreateSheet: !1,
            attendanceList: [],
            attendanceMeetingId: null,
            showAttendenceSheet: !1,
            reloadMeetings: !1,
            publishDateTime: null,
            validForm: !1,
            resetNiceSelect: !0,
            forReset: {
                grade: null,
                subject: null,
                teachers: null,
                sections: null
            },
            closeAttendanceSheet: function() {
                i.showAttendenceSheet = !1
            },
            showAttendanceList: function(e, t) {
                i.showAttendenceSheet = !0,
                i.attendanceMeetingId = e,
                i.attendanceList = t
            },
            closeCreateSheet: function() {
                i.chapters = [],
                i.meetingHours = [],
                i.showCreateSheet = !1
            },
            reset: function() {
                i.resetNiceSelect = !i.resetNiceSelect,
                i.validForm = !1,
                i.subject = null,
                i.chapters = [],
                i.meetingHours = [],
                i.createEmptyMeeting(i.forReset.grade, i.forReset.subject, i.forReset.teachers, i.forReset.sections)
            },
            createEmptyMeeting: function(e, t, s, r) {
                i.forReset.grade = e,
                i.forReset.subject = t,
                i.forReset.teachers = s,
                i.forReset.sections = r,
                i.showCreateSheet = !0,
                i.chapters = t.chapters,
                i.meetingHours = n,
                i.teachers = s,
                i.subject && i.subject.id === t.id || (i.subject = t,
                i.selectedChapter = null,
                i.selectedTeacher = 1 < s.length ? null : s[0],
                i.publishDateTime = null,
                i.meeting = {
                    meetingId: null,
                    curriculumId: e.curriculumId,
                    curriculumName: e.curriculum,
                    gradeId: e.gradeId,
                    gradeName: e.gradeDescription + " " + e.gradeNumber,
                    subjectId: t.id,
                    subjectName: t.name,
                    chapterId: null,
                    chapterName: null,
                    topicId: null,
                    topicName: null,
                    name: e.curriculum + "-" + e.gradeDescription + "-" + e.gradeNumber,
                    description: null,
                    dateTime: null,
                    duration: null,
                    sections: []
                }),
                i.populateAndCheckSections(r)
            },
            editMeeting: function(e, t, s, r) {
                i.showCreateSheet = !0,
                i.validForm = !0,
                i.subject = t,
                i.chapters = t.chapters,
                i.meetingHours = n,
                i.teachers = s,
                i.sections = r,
                i.meeting = e,
                i.publishDateTime = new Date(e.dateTime),
                i.populateAndCheckSections(r),
                i.selectedTeacher = C.apply(".{.userId == $userId}", s, {
                    userId: e.teacherId
                })[0]
            },
            populateAndCheckSections: function(e) {
                e.forEach(function(e) {
                    var t = _.find(i.meeting.sections, {
                        id: e.id
                    });
                    t ? _.has(t, "isChecked") || (t.isChecked = !0) : i.meeting.sections.push(A.extend(e, {
                        isChecked: !1
                    }))
                }),
                i.meeting.sections = _.sortBy(i.meeting.sections, "name")
            }
        };
        return i
    }
    ]).controller("LiveClassesController", ["$scope", "$rootScope", "$controller", "$timeout", "UtilService", "userPlugin", "liveClassPlugin", "v2CommonPlugin", "LiveClassSharedService", "PrintService", "locker", "STORAGE_KEYS", "STATUS_ID", "APP_PREFS", "OWNER", function(d, c, e, s, l, m, p, t, r, n, i, o, u, g, S) {
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: d,
            utilService: l
        })),
        A.extend(d, {
            sharedService: r,
            OWNER: S,
            STATUS_ID: u,
            weeks: [],
            monthsCalender: [],
            meetingStatuses: [],
            selectMonth: "3",
            templateErrorMsg: "",
            selectedStatusIndex: 0,
            meetings: [],
            hasRoles: I
        });
        var a = i.driver("session").namespace("com.erudex")
          , f = this
          , h = null;
        function v() {
            c.isDataEntry ? d.meetingStatuses = [{
                name: "NEW",
                statusId: 1,
                meetings: []
            }, {
                name: "INPROGRESS",
                statusId: 2,
                meetings: []
            }, {
                name: "COMPLETED",
                statusId: 3,
                meetings: []
            }, {
                name: "CANCELLED",
                statusId: 10,
                meetings: []
            }, {
                name: "UNATTENDED",
                statusId: 9,
                meetings: []
            }] : d.meetingStatuses = [{
                name: "NEW",
                displayName: "AVAILABLE",
                statusId: u.NEW,
                meetings: []
            }, {
                name: "COMPLETED",
                displayName: "COMPLETED",
                statusId: u.COMPLETED,
                meetings: []
            }]
        }
        function T() {
            c.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", c.courseGrades, {
                gradeId: c.selectedGradeId
            })[0],
            l.finishLoadSuccess(d)
        }
        d.storeSelections = function() {
            h && l.$storageService.setUserPref(o.REMEMBER_SELECT_CURRICULUM, h),
            c.selectedCourseGrade && a.put(o.V2_SELECTED_GRADE, c.selectedCourseGrade)
        }
        ,
        d.getMeetings = function() {
            return d.meetingStatuses[d.selectedStatusIndex]
        }
        ,
        d.filterByStatus = function(e) {
            d.selectedStatusIndex = e;
            e = d.meetingStatuses[e];
            e.meetings.length ? d.templateErrorMsg = "" : d.templateErrorMsg = "No " + (e.displayName || e.name).toLowerCase().capitalize() + " Meetings"
        }
        ;
        function E(t, r, n, i) {
            function o(e) {
                v(),
                d.filterByStatus(0),
                d.meetings = [],
                l.blockUiStop(d),
                "string" == typeof e ? d.templateErrorMsg = e.errorMessage : l.$toastr.error("Error in Fetching Live Classes", e.errorMessage)
            }
            var s, e = (e = d.weeks.find(function(e) {
                return e.isSelected
            })) || d.weeks[0], a = {
                orgId: (a = m.getUserInfo()).institution.organization.id,
                orgName: a.institution.organization.name,
                startDate: e.start,
                endDate: e.end,
                gradeId: d.gradeId,
                subjectId: d.subject.id
            };
            c.isECUser && (a.startDate = c.selectedCourse.startDate,
            a.endDate = c.selectedCourse.endDate),
            I(g.ROLE.TEACHER) && (a.teacherId = d.user.id),
            (I(g.ROLE.STUDENT) || I(g.ROLE.GUARDIAN)) && (s = [],
            c.isECUser ? s.push(d.selectedCourse.sectionId) : null !== (e = _.find(d.user.userGrades, function(e) {
                return e.grade.id == d.gradeId
            }).userSections) && 0 < e.length && e.forEach(function(e) {
                s.push(e.section.id)
            }),
            a.sections = s),
            l.blockUiStart(d),
            d.templateErrorMsg = "",
            v(),
            p.getMeetings(a, function(e) {
                var s;
                e && e.value ? (s = (s = e.value.map(function(s) {
                    s.isEditable = !(!(e = s).owner || e.statusId !== u.NEW) && (e.owner === S.USER && c.isTeacher || e.owner === S.INSTITUTION && e.instituteId === d.user.institution.id || d.user.institution.isOrganization),
                    s.durationInHrs = s.duration;
                    var e = moment(s.dateTime);
                    return s.endDt = e.add(s.duration, "minutes").toDate().getTime(),
                    s.isExpired = e.isBefore(moment(new Date)),
                    s.isExpired && s.statusId != u.CANCELED && (s.statusId = s.statusId == u.NEW ? u.EXPIRED : u.COMPLETED),
                    s.recordingResources = [],
                    s.recordings && 0 < s.recordings.length && A.forEach(_.sortBy(s.recordings, "start"), function(e, t) {
                        e.isAvailable && s.recordingResources.push({
                            v2SortOrder: t + 1,
                            name: "Part " + (t + 1),
                            uri: e.fileName,
                            uuid: e.id,
                            contentResourceType: {
                                description: "Zoom Recordings",
                                displayType: "recording",
                                type: "video/mp4"
                            },
                            displayCategory: "zoom"
                        })
                    }),
                    s
                })).sort(function(e, t) {
                    return new Date(e.dateTime) - new Date(t.dateTime)
                }),
                d.meetings = s,
                d.meetingStatuses.forEach(function(t) {
                    t.meetings = s.filter(function(e) {
                        return c.isDataEntry ? e.statusId == t.statusId : t.statusId === u.NEW ? [u.NEW, u.INPROGRESS].includes(e.statusId) : t.statusId === u.COMPLETED ? [u.COMPLETED, u.EXPIRED].includes(e.statusId) : void 0
                    }),
                    t.statusId === u.NEW || t.statusId === u.INPROGRESS ? t.meetings = _.sortBy(t.meetings, "dateTime") : t.meetings = _.sortBy(t.meetings, "dateTime").reverse()
                }),
                d.filterByStatus(0),
                l.blockUiStop(d),
                t && (d.selectedCourse.isPaid ? l.safeApply(d, function() {
                    y.open(r ? i : n, "_blank")
                }) : l.$toastr.info("Please make payment to access the course live classes."))) : l.safeApply(d, function() {
                    o(e.errorMessage),
                    d.filterByStatus(0)
                })
            }, o)
        }
        function I(t) {
            return d.user.roles.some(function(e) {
                return e.id == t
            })
        }
        d.onSelectMonth = function(e) {
            var t = d.monthsCalender[Number(d.selectMonth)]
              , s = moment(t).year()
              , r = moment(t).month()
              , n = moment().year(s).month(r).date(1)
              , i = moment().year(s).month(r).endOf("month")
              , o = moment().year(s).month(r).endOf("month").date()
              , a = Math.ceil((o + n.day()) / 7)
              , c = moment().year(s).month(r).date(1).set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            })
              , u = 0;
            for (d.weeks = []; u < a; ) {
                var l = (l = moment(c)).endOf("week").date() <= o && l.month() == r ? l.endOf("week") : moment(i);
                d.weeks.push({
                    start: c.toDate().getTime(),
                    end: l.toDate().getTime(),
                    isSelected: moment().isBetween(c, l, "date")
                }),
                c = c.weekday(7).set({
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                }),
                u++
            }
            moment().get("month") !== moment(t).get("month") && (d.weeks[0].isSelected = !0,
            document.querySelector("#W-0").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            })),
            e && E(!1, !1, null, null)
        }
        ,
        d.onSelectWeekRange = function(e) {
            document.querySelector("#W-" + e).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            }),
            d.weeks.forEach(function(e) {
                e.isSelected = !1
            }),
            "number" == typeof e && (d.weeks[e].isSelected = !0,
            E(!1, !1, null, null))
        }
        ,
        d.refetchMeetings = function() {
            E(!1, !1, null, null)
        }
        ,
        d.onCancelMeeting = function(t) {
            l.blockUiStart(d),
            p.updateMeeting({
                type: "delete",
                meetingId: t.meetingId
            }, function(e) {
                l.$toastr.info("Live Class " + t.name + " is canceled"),
                d.sharedService.reloadMeetings = !0,
                l.blockUiStop(d)
            })
        }
        ,
        d.onEditMeeting = function(e) {
            d.sharedService.meeting.meetingId === e.meetingId ? d.sharedService.editMeeting(d.sharedService.meeting, d.subject, d.teachers, d.sections) : (e = {
                meetingId: e.meetingId
            },
            l.blockUiStart(d, "Getting Live Class details..."),
            p.getMeetings(e, function(e) {
                l.blockUiStop(d),
                e && e.result ? d.sharedService.editMeeting(e.value[0], d.subject, d.teachers, d.sections) : l.$toastr.error("Error in Fetching Live Class")
            }, function(e) {
                l.blockUiStop(d),
                l.$toastr.error("Error in Fetching Live Class", e.errorMessage)
            }))
        }
        ,
        d.onCreateMeeting = function() {
            d.sharedService.createEmptyMeeting(c.selectedCourseGrade, d.subject, d.teachers, d.sections)
        }
        ,
        d.launchMeeting = function(e, t, s) {
            function r(e) {
                l.blockUiStop(d),
                l.$toastr.error("Error in adding activity", e.errorMessage)
            }
            var n = s.liveStreamPageUrl || ""
              , i = s.meetingId
              , o = s.providerType
              , a = s.dateTime
              , c = s.startUrl
              , u = 0 < n.length ? n : s.joinUrl
              , n = (l.blockUiStart(d),
            m.getUserInfo())
              , s = {
                userId: n.id,
                userName: n.userName,
                fullName: (n.person.firstName || "") + (n.person.lastName || ""),
                providerType: o,
                meetingId: i,
                roleId: t ? 4 : 3,
                scheduledTime: a,
                activityType: t ? "JOIN" : "START"
            };
            p.addActivity(s, function(e) {
                e && e.result ? (l.blockUiStop(d),
                u = e.joinUrl || u,
                c = e.startUrl || c,
                E(!0, t, c, u)) : l.safeApply(d, function() {
                    l.blockUiStop(d),
                    r(e.errorMessage)
                })
            }, r)
        }
        ,
        d.onViewRecordings = function(e) {
            var t = e[0];
            l.openPreviewOverlayV2({
                type: "resource",
                subject: null,
                chapter: null,
                resource: t,
                link: t,
                displayCategory: "zoom",
                encrypted: !0
            }, d.user, e)
        }
        ,
        l.checkUserLoaded(d, function() {
            h = l.$storageService.getUserPref(o.REMEMBER_SELECT_CURRICULUM, {});
            var e = new Date;
            d.monthsCalender = [moment(e).add(-3, "month").set("date", 1).toDate().getTime(), moment(e).add(-2, "month").set("date", 1).toDate().getTime(), moment(e).add(-1, "month").set("date", 1).toDate().getTime(), moment(e).set("date", 1).toDate().getTime(), moment(e).add(1, "month").set("date", 1).toDate().getTime(), moment(e).add(2, "month").set("date", 1).toDate().getTime()],
            d.onSelectMonth(!1),
            l.getUserCurriculum(function(e) {
                h = l.$storageService.getUserPref(o.REMEMBER_SELECT_CURRICULUM, {});
                var t = C.apply(".grade", d.user.userGrades).sort(l.sortGrades);
                l.buildStudentCurriculumGradeSelect(d, t, e, f.onSubjectsLoaded, h),
                T()
            }, function(e) {
                T()
            })
        }),
        d.$watch("subject", function() {
            var e;
            d.subject && d.subject.id && 0 < d.subject.id && (c.isDataEntry ? (l.blockUiStart(d),
            e = {
                orgUser: d.user.institution.isOrganization,
                organizationId: d.user.institution.organization.id,
                institutionId: d.user.institution.id,
                subjectId: d.subject.id
            },
            t.getTeachersBySubject(e, function(e) {
                l.blockUiStop(d),
                e.result ? (d.sections = e.values[0].sections,
                d.teachers = e.values[0].teachers) : l.$toastr.error("Error while retrieving Teachers.")
            }, function(e) {
                l.$toastr.error("Error while retrieving Teachers."),
                l.blockUiStop(d)
            })) : (d.sections = d.getSections(c.selectedCourseGrade.gradeId),
            d.teachers = [{
                userId: d.user.id,
                userName: d.user.userName,
                fullName: d.user.fullName
            }]),
            E(!1, !0, null, null),
            A.forEach(d.weeks, function(e, t) {
                e.isSelected && s(function() {
                    document.querySelector("#W-" + t) && document.querySelector("#W-" + t).scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    })
                }, 1e3)
            }))
        }),
        d.$watch("sharedService.reloadMeetings", function(e, t) {
            e && (E(!1, !0, null, null),
            d.sharedService.subject = null,
            d.sharedService.reloadMeetings = !1)
        }),
        d.$on("$stateChangeStart", function(e, t, s, r, n) {
            d.sharedService.showCreateSheet && (d.sharedService.closeCreateSheet(),
            d.sharedService.closeAttendanceSheet(),
            l.finishLoadSuccess(d),
            e.preventDefault())
        })
    }
    ]).controller("LiveClassesAttendanceController", ["$scope", "$rootScope", "$controller", "$timeout", "UtilService", "userPlugin", "liveClassPlugin", "LiveClassSharedService", "PrintService", "locker", "STORAGE_KEYS", "STATUS_ID", "APP_PREFS", "OWNER", function(i, t, e, s, o, r, n, a, c, u, l, d, m, p) {
        A.extend(i, {
            sharedService: a,
            onViewAttendance: function(t) {
                o.blockUiStart(i);
                var e = {
                    meetingId: t
                };
                n.getLiveClassAttendance(e, function(e) {
                    o.blockUiStop(i),
                    i.sharedService.showAttendanceList(t, e.value[0])
                }, function(e) {
                    o.$toastr.error("Error while retrieving live class attendance."),
                    o.blockUiStop(i)
                })
            },
            onPrintAttendance: function(e) {
                S || (S = !0,
                n.getLiveClassAttendance({
                    meetingId: e
                }, function(e) {
                    e && e.result && (g = e.value[0]);
                    e = r.getUserInfo(),
                    e = {
                        orgPrintLogo: t.orgPrintLogo,
                        printErudexLogo: t.printErudexLogo,
                        orgName: e.institution.organization.name,
                        data: g
                    };
                    c.printTemplate("../v2/template/common/print/print-attendance.html", e).then(function() {}, function() {
                        o.$toastr.error("Error creating printable page.")
                    }).finally(function() {
                        S = !1
                    })
                }))
            }
        });
        var g, S = !1;
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showAttendenceSheet && (i.sharedService.closeCreateSheet(),
            i.sharedService.closeAttendanceSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ]).controller("CreateClassController", ["$scope", "$rootScope", "$state", "$stateParams", "UtilService", "OWNER", "userPlugin", "liveClassPlugin", "LiveClassSharedService", function(r, n, e, t, i, o, s, a, c) {
        var u = s.getUserInfo();
        r.sharedService = c,
        r.selectedChapter = r.sharedService.selectedChapter,
        r.msg = "",
        r.sharedService.validForm = !1,
        r.showDatePicker = !1,
        r.openDatePckr = function(e) {
            (r.showDatePicker = e) && event.stopPropagation()
        }
        ,
        r.onTimeSet = function(e, t) {
            r.showDatePicker = !1,
            r.sharedService.meeting.dateTime = e.getTime(),
            r.validateForm()
        }
        ,
        r.startDateBeforeRender = function(e) {
            var t = moment();
            e.filter(function(e) {
                return !(e.current || e.localDateValue() >= t.valueOf())
            }).forEach(function(e) {
                e.selectable = !1
            })
        }
        ,
        r.onChangeChapter = function(e) {
            r.sharedService.meeting.chapterId = e.id,
            r.sharedService.meeting.chapterName = e.name,
            r.sharedService.meeting.description = i.mapChapter(e).name,
            r.validateForm()
        }
        ,
        r.validateForm = function() {
            var e = C.apply(".{.isChecked == true}", r.sharedService.meeting.sections);
            return r.sharedService.meeting.chapterId && r.sharedService.publishDateTime && r.sharedService.meeting.duration && r.sharedService.meeting.description && r.sharedService.selectedTeacher && 0 < e.length ? r.sharedService.validForm = !0 : r.sharedService.validForm = !1,
            !0
        }
        ,
        r.onSubmit = function() {
            var t, e, s;
            r.validateForm() && r.sharedService.validForm ? (i.safeApply(r, function() {
                r.msg = ""
            }),
            i.blockUiStart(r),
            r.sharedService.meeting.meetingId ? (t = [],
            r.sharedService.meeting.sections.forEach(function(e) {
                e.isChecked && t.push({
                    id: e.id,
                    name: e.name,
                    institutionName: u.institution.name
                })
            }),
            e = {
                dateTime: r.sharedService.meeting.dateTime,
                duration: r.sharedService.meeting.duration,
                description: r.sharedService.meeting.description,
                name: r.sharedService.meeting.name,
                teacherId: r.sharedService.selectedTeacher.userId,
                teacherName: r.sharedService.selectedTeacher.userName,
                teacherFullName: r.sharedService.selectedTeacher.fullName
            },
            0 < t.length && (e.sections = t),
            a.updateMeeting({
                type: "update",
                lcP: r.sharedService.meeting.providerType,
                lcE: r.sharedService.meeting.providerEmail,
                meetingId: r.sharedService.meeting.meetingId,
                msId: r.sharedService.meeting.msId || "",
                updateObj: e
            }, function(e) {
                i.blockUiStop(r),
                e.result ? (i.$toastr.info("Live Class Rescheduled Successfully."),
                i.blockUiStop(r),
                r.sharedService.closeCreateSheet(),
                r.sharedService.meeting = {},
                r.sharedService.reloadMeetings = !0) : i.safeApply(r, function() {
                    r.msg = "Unable to reschedule meeting (" + e.message + ")."
                })
            }, function(e) {
                console.error(e),
                i.$toastr.error("Error Updating Live Class", e.errorMessage),
                i.blockUiStop(r)
            })) : (e = r.sharedService.meeting,
            A.extend(r.sharedService.meeting, {
                type: "insert",
                instituteId: u.institution.id,
                instituteName: u.institution.name,
                orgId: u.institution.organization.id,
                orgName: u.institution.organization.name,
                owner: n.isTeacher ? o.USER : r.user.institution.isOrganization ? o.ORGANIZATION : o.INSTITUTION,
                teacherId: r.sharedService.selectedTeacher.userId,
                teacherName: r.sharedService.selectedTeacher.userName,
                teacherFullName: r.sharedService.selectedTeacher.fullName
            }),
            s = [],
            e.sections.forEach(function(e) {
                e.isChecked && s.push({
                    id: e.id,
                    name: e.name,
                    institutionName: e.institutionName
                })
            }),
            e.sections = s,
            delete e.isEditable,
            a.createMeeting(e, function(e) {
                i.blockUiStop(r),
                e.result ? (i.$toastr.info("Live Class Scheduled Successfully."),
                i.blockUiStop(r),
                r.sharedService.closeCreateSheet(),
                r.sharedService.reloadMeetings = !0) : i.safeApply(r, function() {
                    r.msg = "Unable to create Live Class (" + e.message + ")."
                })
            }, function(e) {
                console.error(e),
                i.$toastr.error("Error Creating Live Class", e.errorMessage),
                i.blockUiStop(r)
            }))) : i.$toastr.info("Enter all required fields.")
        }
        ,
        i.checkUserLoaded(r, function() {}),
        r.$watch("sharedService.showCreateSheet", function(e, t) {
            e && (r.showDatePicker = !1)
        }),
        r.$watch("sharedService.meeting.sections.length", function(e, t) {
            r.validateForm()
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(A, C, y) {
    "use strict";
    A.module("erudex.v2App").controller("TimelineController", ["$scope", "$rootScope", "$controller", "$state", "$timeout", "$stateParams", "UtilService", "v2CommonPlugin", "userPlugin", "STORAGE_KEYS", "dateFilter", "MESSAGE_STRINGS", function(i, n, e, t, s, r, o, a, c, u, l, d) {
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        }));
        var m = this
          , p = null
          , g = 0
          , S = 0
          , f = n.selectedCourseGrade.gradeId
          , e = new Date
          , h = l(moment(e).set("date", 1).toDate(), "yyyy-MM-dd")
          , v = l(e, "yyyy-MM-dd")
          , e = moment(e).add(-2, "month").set("date", 1).toDate();
        function T() {
            n.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", n.courseGrades, {
                gradeId: n.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        function E(e, t, s, r) {
            o.blockUiStart(i);
            e = {
                startTime: e,
                endTime: t,
                gradeId: s,
                studentId: c.isGuardian() ? c.getStudentUserId() : r
            };
            a.getTimelineUserActivity(e, function(e) {
                o.blockUiStop(i),
                e.result ? (n.isTeacher && (i.showStudentTimelineSheet = !0),
                i.activitiesList = e.values,
                setTimeout(function() {
                    var e;
                    e = i.date,
                    y.document.getElementById(e).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "center"
                    })
                }, 2e3)) : o.$toastr.error("Error while retrieving Activity details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Activity details."),
                o.blockUiStop(i)
            })
        }
        function I(e) {
            o.blockUiStart(i);
            e = {
                gradeId: i.gradeId | i.selectedCourseGrade.gradeId,
                institutionId: S,
                sectionIds: [e]
            };
            a.getUsersBySection(e, function(e) {
                o.blockUiStop(i),
                e.result ? i.studentsList = e.values : o.$toastr.error("Error while retrieving Activity details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Activity details."),
                o.blockUiStop(i)
            })
        }
        i.date = v,
        i.minDate = l(e, "yyyy-MM-dd"),
        i.maxDate = v,
        i.monthData = {
            startDate: h,
            lastDate: v
        },
        i.storeSelections = function() {
            p && o.$storageService.setUserPref(u.REMEMBER_SELECT_CURRICULUM, p)
        }
        ,
        i.$on("currentMonth", function(e, t) {
            i.monthData = t,
            n.isTeacher && (i.date = t.currentDate);
            var s = n.isTeacher ? i.userId : g;
            E(t.startDate, t.lastDate, f, s)
        }),
        i.getUserTimeLine = function(e) {
            i.userId = e.userId,
            i.studentName = e.fullName,
            E(i.monthData.startDate, i.monthData.lastDate, f, i.userId)
        }
        ,
        i.closeStudentTimelineSheet = function() {
            i.showStudentTimelineSheet = !1
        }
        ,
        i.onChangeSections = function(e) {
            I(e)
        }
        ,
        o.checkUserLoaded(i, function() {
            i.user,
            g = i.user.id,
            S = i.user.institution.id,
            i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                p = o.$storageService.getUserPref(u.REMEMBER_SELECT_CURRICULUM, {});
                var t = C.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, m.onSubjectsLoaded, p),
                T()
            }, function(e) {
                T()
            })
        }),
        i.$watch("selectedCourseGrade", function() {
            i.selectedCourseGrade && (f = i.selectedCourseGrade.gradeId,
            n.isTeacher ? (i.sections = i.getSections(f),
            i.defaultSectionId = i.sections[0].id,
            I(i.defaultSectionId)) : E(i.monthData.startDate, i.monthData.lastDate, f, g))
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.showStudentTimelineSheet && (i.closeStudentTimelineSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(y, b) {
    var N = [].indexOf || function(e) {
        for (var t = 0, s = this.length; t < s; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    y.module("pickadate.utils", []).factory("pickadateUtils", ["dateFilter", function(c) {
        return {
            isDate: function(e) {
                return "[object Date]" === Object.prototype.toString.call(e)
            },
            stringToDate: function(e) {
                var t, s;
                return this.isDate(e) ? new Date(e) : (t = (e = e.split("-"))[0],
                s = e[1],
                e = e[2],
                new Date(t,s - 1,e,3))
            },
            dateRange: function(e, t, s, r) {
                var n, i, o, a = [];
                for (r = r || "yyyy-MM-dd",
                i = o = e; e <= t ? o < t : t < o; i = e <= t ? ++o : --o)
                    (n = this.stringToDate(s)).setDate(n.getDate() + i),
                    a.push(c(n, r));
                return a
            }
        }
    }
    ]),
    y.module("pickadate", ["pickadate.utils"]).directive("pickadate", ["$locale", "pickadateUtils", "dateFilter", function(s, A, C) {
        return {
            require: "ngModel",
            scope: {
                date: "=ngModel",
                minDate: "=",
                maxDate: "=",
                disabledDates: "=",
                offSet: "="
            },
            template: '<div class="pickadate"><div class="pickadate-header"><div class="pickadate-controls"><a href="" class="pickadate-prev" ng-click="changeMonth(-1)" ng-show="allowPrevMonth"><i class="fa fa-caret-left"></i></a><a href="" class="pickadate-next" ng-click="changeMonth(1)" ng-show="allowNextMonth"><i class="fa fa-caret-right"></i></a></div><h3 class="pickadate-centered-heading">{{currentDate | date:"MMMM yyyy"}}</h3></div><div class="pickadate-body"><div class="pickadate-main"><ul class="pickadate-cell week"><li class="pickadate-head" ng-repeat="dayName in dayNames">{{dayName}}</li></ul><ul class="pickadate-cell date multi-files"><li ng-repeat="d in dates" class="{{d.className}}" ng-class="{\'pickadate-active\': date == d.date}"><a href="#{{d.date}}" >{{d.date | date:"d"}}</a></li></ul></div></div></div>',
            link: function(f, h, e, t) {
                var v = f.minDate && A.stringToDate(f.minDate)
                  , T = f.maxDate && A.stringToDate(f.maxDate)
                  , E = f.disabledDates || []
                  , I = new Date;
                f.dayNames = s.DATETIME_FORMATS.SHORTDAY,
                f.currentDate = I,
                f.emitChange = !1,
                f.render = function(e) {
                    var t = (e = new Date(e.getFullYear(),e.getMonth(),1,3)).getMonth() + 1
                      , s = new Date(e.getFullYear(),e.getMonth() + 1,0,3).getDate()
                      , r = A.dateRange(-e.getDay(), 0, e)
                      , s = A.dateRange(0, s, e)
                      , n = A.stringToDate(s[0])
                      , i = A.stringToDate(s[s.length - 1])
                      , o = A.dateRange(1, 7 - i.getDay(), i)
                      , a = r.concat(s, o)
                      , c = []
                      , u = C(new Date, "yyyy-MM-dd")
                      , r = (_.contains(s, u) ? (f.setDate({
                        date: u
                    }),
                    i = u) : f.setDate({
                        date: s[0]
                    }),
                    f.emitChange && (f.emitChange = !1,
                    f.$emit("currentMonth", {
                        currentDate: C(I, "yyyy-MM-dd"),
                        startDate: C(n, "yyyy-MM-dd"),
                        lastDate: C(i, "yyyy-MM-dd")
                    })),
                    new Date(e));
                    r.setMonth(t),
                    f.allowPrevMonth = !v || v < e,
                    f.allowNextMonth = !T || r < T;
                    for (var l, d, m = 0; m < a.length; m++) {
                        var p = ""
                          , g = a[m]
                          , p = g < f.minDate || g > f.maxDate || C(g, "M") !== t.toString() ? "pickadate-disabled" : 0 <= N.call(E, g) ? "pickadate-disabled pickadate-unavailable" : "pickadate-enabled";
                        g === u && (p += " pickadate-today"),
                        c.push({
                            date: g,
                            className: p
                        })
                    }
                    function S(e) {
                        e.preventDefault(),
                        e = e.target.attributes.href.nodeValue.slice(1),
                        b.document.getElementById(e).scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center"
                        })
                    }
                    l = [],
                    d = {
                        offset: f.offSet,
                        duration: 500
                    },
                    setTimeout(function() {
                        y.element(document.querySelector(".events-wrapper")).bind("scroll", function() {
                            y.forEach(h.find("ul.pickadate-cell li a"), function(e) {
                                var e = $(e)
                                  , t = $(e.attr("href"));
                                t.length && (e.click(S),
                                l.push({
                                    self: e,
                                    target: t
                                }))
                            })
                        })
                    }, 1e3),
                    $(events).scroll(function() {
                        var t = $(self).scrollTop() + Number(d.offset)
                          , s = l[0];
                        y.forEach(l, function(e) {
                            e.fromTop = e.target.offset().top - t,
                            e.fromTop < 0 && (s = e)
                        }),
                        y.forEach(l, function(e) {
                            e === s ? e.self.addClass("active") : e.self.removeClass("active")
                        })
                    }),
                    f.dates = c
                }
                ,
                f.setDate = function(e) {
                    /pickadate-disabled/.test(e.className) || t.$setViewValue(e.date)
                }
                ,
                t.$render = function() {
                    (date = t.$modelValue) && -1 === N.call(E, date) ? f.currentDate = I = A.stringToDate(date) : date && f.setDate(void 0),
                    f.render(I)
                }
                ,
                f.changeMonth = function(e) {
                    f.emitChange = !0,
                    I.setDate(1),
                    I.setMonth(I.getMonth() + e),
                    f.render(I)
                }
            }
        }
    }
    ])
}(window.angular, window),
function(_, R) {
    "use strict";
    _.module("erudex.v2App").factory("ReportSharedService", function() {
        var r = {
            id: null,
            sections: null,
            instituteId: null,
            showTestReportSheet: !1,
            closeTestReportSheet: function() {
                r.id = null,
                r.sections = null,
                r.showTestReportSheet = !1
            },
            showTestReport: function(e, t, s) {
                r.id = e,
                r.sections = t,
                r.instituteId = s
            }
        };
        return r
    }).controller("teacherTestReportController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$compile", "UtilService", "v2CommonPlugin", "DonutChartSharedService", "ReportSharedService", "userPlugin", "STORAGE_KEYS", function(s, r, e, t, n, i, o, a, c, u, l, d) {
        var m = !1
          , p = !1
          , g = !1;
        function S(e, t) {
            o.blockUiStart(s);
            t = {
                assessmentId: s.assessmentId,
                sectionId: t,
                institutionId: s.instituteId,
                type: e
            };
            a.getTeacherTestReport(t, function(e) {
                o.blockUiStop(s),
                e.result ? (s.sharedService.showTestReportSheet = !0,
                (e = e.value).chapterList ? s.chapterList = e.chapterList : e.questionList ? s.questionList = e.questionList : (s.studentList = e.studentList,
                s.assessmentData = e.assessment[0])) : o.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Test details."),
                o.blockUiStop(s)
            }),
            a.getTeacherOverviewReport(t, function(e) {
                o.blockUiStop(s),
                e.result ? (s.overallPerformance = e.values[0].overallPerformance,
                s.subjectPerformance = e.values[0].subjectPerformance,
                s.assessment = e.values[0].assessment,
                s.assessment[0] && (s.isAdvancedTest = "adv" === s.assessment[0].testType,
                s.isNeetTest = s.assessment[0].neet || !1)) : o.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Test details."),
                o.blockUiStop(s)
            })
        }
        function f(e) {
            "all" === s.selectedSection ? S(e, s.allSections) : S(e, [s.selectedSection.sectionId])
        }
        _.extend(s, {
            sharedService: u,
            graphTableSwitch: "G",
            setGraphTableSwitch: function(e) {
                s.graphTableSwitch = e
            },
            selectedSection: null,
            tabType: "s"
        }),
        s.setTabData = function(e) {
            var t = [];
            e && e.slice().reverse().forEach(function(e) {
                t.push(e.count)
            }),
            s.overallChart = c.donutChart(t)
        }
        ,
        s.setTabType = function(e) {
            s.tabType = e,
            m || "s" !== e || (m = !0),
            p || "q" !== e || (p = !0,
            f(e)),
            g || "c" !== e || (g = !0,
            f(e))
        }
        ,
        s.setSelectedSection = function(e) {
            s.selectedSection = e,
            s.tabType = "s",
            g = p = !1,
            f("s")
        }
        ,
        o.checkUserLoaded(s, function() {
            o.finishLoadSuccess(s)
        }),
        s.$watch("sharedService.id", function(e, t) {
            e && (s.sections = s.sharedService.sections,
            s.assessmentId = s.sharedService.id,
            s.instituteId = s.sharedService.instituteId,
            s.allSections = [],
            s.sections.forEach(function(e) {
                s.allSections.push(e.sectionId)
            }),
            s.graphTableSwitch = "G",
            s.setSelectedSection("all"),
            g = p = !1,
            r.isMobile ? s.tabType = "o" : s.tabType = "s")
        })
    }
    ]).controller("teacherReportOverviewController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$compile", "UtilService", "v2CommonPlugin", "DonutChartSharedService", "ReportSharedService", "UserAssessmentSharedService", "ASSESSMENT_TYPE", "locker", "userPlugin", "STORAGE_KEYS", function(u, t, e, s, n, r, o, i, l, a, c, d, m, p, g) {
        _.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: u,
            utilService: o
        }));
        m.driver("session").namespace("com.erudex");
        function S() {
            t.selectedCourseGrade = R.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            o.finishLoadSuccess(u)
        }
        var f = this
          , h = null
          , v = (p.getUserInfo(),
        0)
          , T = n.gradeId ? o.decodeIds(n.gradeId)[0] : t.selectedCourseGrade.gradeId
          , E = !1
          , I = !1
          , A = !1;
        function C(e, t) {
            var s = []
              , r = []
              , n = []
              , i = []
              , o = []
              , a = []
              , c = [];
            e.slice().reverse().forEach(function(e) {
                s.push(e.count)
            }),
            t.slice().reverse().forEach(function(e) {
                r.push(e.studentCount[3].count),
                n.push(e.studentCount[2].count),
                i.push(e.studentCount[1].count),
                o.push(e.studentCount[0].count),
                a.push(e.assessmentId),
                c.push(e.assessmentName)
            }),
            u.overallChart = l.donutChart(s),
            u.divisionChart = {
                chart: {
                    width: "100%",
                    height: 170,
                    type: "line",
                    zoom: {
                        enabled: !1
                    },
                    stacked: !1,
                    toolbar: {
                        show: !1
                    }
                },
                grid: {
                    borderColor: "#C4C4C4",
                    strokeDashArray: 6,
                    xaxis: {
                        lines: {
                            show: !0
                        }
                    },
                    yaxis: {
                        lines: {
                            show: !1
                        }
                    }
                },
                series: [{
                    name: ">80%",
                    data: r
                }, {
                    name: "60%-80%",
                    data: n
                }, {
                    name: "40%-60%",
                    data: i
                }, {
                    name: "<40%",
                    data: o
                }],
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                colors: ["#2BC210", "#165198", "#FB8F2A", "#E92929"],
                dataLabels: {
                    enabled: !1
                },
                markers: {
                    size: 0,
                    hover: {
                        size: 0,
                        sizeOffset: 5
                    }
                },
                legend: {
                    onItemClick: {
                        toggleDataSeries: !1
                    },
                    position: "bottom",
                    offsetX: 0,
                    offsetY: -5,
                    markers: {
                        width: 12,
                        height: 3
                    },
                    itemMargin: {
                        horizontal: 0,
                        vertical: 0
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: "none"
                        }
                    },
                    active: {
                        filter: {
                            type: "none"
                        }
                    }
                },
                xaxis: {
                    categories: a,
                    labels: {
                        show: !1
                    },
                    axisBorder: {
                        show: !1
                    },
                    axisTicks: {
                        show: !1
                    },
                    crosshairs: {
                        show: !0,
                        width: 3,
                        position: "front",
                        stroke: {
                            width: 0
                        },
                        fill: {
                            type: "solid",
                            color: "#2A84FB"
                        },
                        dropShadow: {
                            enabled: !1
                        }
                    }
                },
                yaxis: {
                    tickAmount: 1,
                    labels: {
                        offsetX: -10,
                        formatter: function(e) {
                            return void 0 !== e ? e.toFixed(0) : e
                        }
                    }
                },
                tooltip: {
                    enabled: !0,
                    followCursor: !0,
                    custom: function(e) {
                        return '<div class="tooltip-wrapper"><div class="tooltip-heading fs-14 fw-600">' + c[e.dataPointIndex] + '</div><ul class="tooltip-body fs-12 fw-500"><li><div>&gt; 80%</div><div class="fs-16 fw-600">' + r[e.dataPointIndex] + '</div></li><li><div>60% - 80%</div><div class="fs-16 fw-600">' + n[e.dataPointIndex] + '</div></li><li><div>40% - 60%</div><div class="fs-16 fw-600">' + i[e.dataPointIndex] + '</div></li><li><div>&lt; 40%</div><div class="fs-16 fw-600">' + o[e.dataPointIndex] + "</div></li></ul></div>"
                    }
                }
            }
        }
        _.extend(u, {
            sharedService: a,
            sharedUAService: c,
            graphTableSwitch: "G",
            getEndTime: function(e, t) {
                return moment(e).add(t, "minutes").format("hh:mm A")
            },
            setGraphTableSwitch: function(e) {
                u.graphTableSwitch = e
            },
            onViewTestReport: function(e, t) {
                u.sharedService.showTestReport(e, t, v)
            },
            setSelectedSubject: function(e) {
                u.selectedSubject = e
            },
            onChangeInstitution: function(e) {
                v = e,
                u.tabType = "t",
                I = A = !1,
                b("t", T, u.selectedMonth, null),
                N(T, u.selectedMonth, null)
            },
            selectedInstitution: n.institutionId ? o.decodeIds(n.institutionId)[0] : u.user.institution.id,
            showInstitutionList: n.allInstitution && JSON.parse(n.allInstitution),
            selectedSection: null,
            tabType: "t"
        }),
        u.storeSelections = function() {
            h && o.$storageService.setUserPref(g.REMEMBER_SELECT_CURRICULUM, h)
        }
        ,
        u.setTabData = function(e, t) {
            C(e, t)
        }
        ,
        u.studentStatusColor = function(e, t) {
            return 6 === e ? null !== t ? "submitted" : "delayed" : "not-submitted"
        }
        ,
        u.studentStatusText = function(e, t) {
            return 6 === e ? null !== t ? "ON TIME" : "DELAYED" : "ABSENT"
        }
        ;
        var y = (new Date).getTime()
          , e = moment().subtract(1, "months").toDate().getTime()
          , m = moment().subtract(3, "months").toDate().getTime()
          , p = moment().subtract(6, "months").toDate().getTime()
          , a = moment().subtract(12, "months").toDate().getTime();
        function b(e, t, s, r) {
            o.blockUiStart(u);
            t = {
                gradeId: t,
                institutionId: v,
                sectionId: r,
                fromDate: s,
                toDate: y,
                type: e,
                efdnTrack: n.track || (u.showTrack ? u.selectedTrack : null)
            };
            i.getTeacherOverviewTestStuList(t, function(e) {
                o.blockUiStop(u),
                e.result ? ((e = e.value).sectionList && !r && (u.sectionList = e.sectionList),
                e.studentList && (u.studentsList = e.studentList),
                e.chapterList && (u.chapterList = e.chapterList),
                e.testList && (u.testList = e.testList)) : o.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                o.$toastr.error("Error while retrieving Test details."),
                o.blockUiStop(u)
            })
        }
        function N(e, t, s) {
            o.blockUiStart(u);
            e = {
                gradeId: e,
                institutionId: v,
                sectionId: s,
                fromDate: t,
                toDate: y,
                efdnTrack: n.track || (u.showTrack ? u.selectedTrack : null)
            };
            i.getTeacherOverviewReport(e, function(e) {
                if (o.blockUiStop(u),
                e.result) {
                    if (u.overallPerformance = e.values[0].overall,
                    u.subjectPerformance = e.values[1].subject,
                    0 < u.overallPerformance[0].division.length) {
                        for (var t = u.overallPerformance[0].performance, s = u.totalStudents = 0; s < t.length; s++) {
                            var r = t[s];
                            u.totalStudents += r.count
                        }
                        u.totalStudents,
                        e = u.overallPerformance[0].division,
                        n = [],
                        i = [],
                        e.slice().reverse().forEach(function(e) {
                            n.push(e.totalSubmitted),
                            i.push(e.assessmentName)
                        }),
                        u.attendanceChart = {
                            chart: {
                                height: 180,
                                type: "area",
                                zoom: {
                                    enabled: !1
                                },
                                stacked: !1,
                                toolbar: {
                                    show: !1
                                }
                            },
                            grid: {
                                borderColor: "#C4C4C4",
                                strokeDashArray: 6,
                                xaxis: {
                                    lines: {
                                        show: !0
                                    }
                                },
                                yaxis: {
                                    lines: {
                                        show: !1
                                    }
                                }
                            },
                            series: [{
                                name: "Students",
                                data: n
                            }],
                            stroke: {
                                curve: "smooth",
                                width: 3
                            },
                            colors: ["#2A84FB"],
                            fill: {
                                type: "gradient",
                                gradient: {
                                    shadeIntensity: 1,
                                    opacityFrom: .2,
                                    opacityTo: .7,
                                    stops: [0, 100]
                                }
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            markers: {
                                size: 0,
                                hover: {
                                    size: 0,
                                    sizeOffset: 5
                                }
                            },
                            legend: {
                                show: !1
                            },
                            xaxis: {
                                categories: i,
                                labels: {
                                    show: !1
                                },
                                axisBorder: {
                                    show: !1
                                },
                                axisTicks: {
                                    show: !1
                                }
                            },
                            yaxis: {
                                tickAmount: 1,
                                labels: {
                                    offsetX: -10,
                                    formatter: function(e) {
                                        return void 0 !== e ? e.toFixed(0) : e
                                    }
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                followCursor: !0,
                                custom: function(e) {
                                    return '<div class="tooltip-wrapper"><div class="tooltip-heading fs-14 fw-600">' + i[e.dataPointIndex] + '</div><ul class="tooltip-body fs-12 fw-500"><li><div class="fs-16">' + n[e.dataPointIndex] + " students</div></li></ul></div>"
                                }
                            }
                        },
                        C(u.overallPerformance[0].performance, u.overallPerformance[0].division)
                    }
                } else
                    o.$toastr.error("Error while retrieving Test details.");
                var n, i
            }, function(e) {
                o.$toastr.error("Error while retrieving Test details."),
                o.blockUiStop(u)
            })
        }
        u.availableMonths = [{
            name: t.isMobile ? "1M" : "Last 30 Days",
            value: e
        }, {
            name: t.isMobile ? "3M" : "Last 3 Months",
            value: m
        }, {
            name: t.isMobile ? "6M" : "Last 6 Months",
            value: p
        }, {
            name: t.isMobile ? "12M" : "Last 12 Months",
            value: a
        }],
        u.selectedMonth = u.availableMonths[0].value,
        u.tracks = d.DATA_ENTRY_TEST_TRACK_OPTIONS,
        u.selectedTrack = u.tracks[0].value,
        u.setSelectMonth = function(e) {
            u.selectedMonth = e,
            b(n.type || "t", T, e, null),
            N(T, e, null),
            I = !1,
            t.isMobile ? u.tabType = n.type || "o" : u.tabType = n.type || "t"
        }
        ,
        u.setSelectedTrack = function(e) {
            u.selectedTrack = e,
            b(n.type || "t", T, u.selectedMonth, null),
            N(T, u.selectedMonth, null),
            I = !1
        }
        ,
        u.showStudentPerformance = function(e) {
            s.go("student-performance-reports", {
                userId: o.encodeIds(e.userId),
                sectionId: o.encodeIds(e.sectionId),
                grade: o.encodeIds(T),
                track: n.track || (u.showTrack ? u.selectedTrack : null)
            })
        }
        ,
        u.setTabType = function(e) {
            u.tabType = e,
            E || "t" !== e || (E = !0,
            b(e, T, u.selectedMonth, u.selectedSection)),
            I || "s" !== e || (I = !0,
            b(e, T, u.selectedMonth, u.selectedSection)),
            A || "c" !== e || (A = !0,
            b(e, T, u.selectedMonth, u.selectedSection))
        }
        ,
        u.setSelectedSection = function(e) {
            var t;
            u.selectedSection = e,
            u.tabType = "t",
            A = I = !1,
            e = "t",
            t = u.selectedSection,
            N(T, u.selectedMonth, t),
            b(e, T, u.selectedMonth, t)
        }
        ,
        u.testListFilter = {
            predicate: "assignedDate",
            reverse: !0
        },
        u.studentListFilter = {
            predicate: "avgScorePercentage",
            reverse: !0
        },
        u.testStudentListFilter = {
            predicate: "scorePercentage",
            reverse: !0
        },
        u.order = function(e, t) {
            u[t].reverse = u[t].predicate === e && !u[t].reverse,
            u[t].predicate = e
        }
        ,
        o.checkUserLoaded(u, function() {
            u.user,
            u.user.id,
            v = n.institutionId ? o.decodeIds(n.institutionId)[0] : u.user.institution.id,
            u.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                h = o.$storageService.getUserPref(g.REMEMBER_SELECT_CURRICULUM, {});
                var t = R.apply(".grade", u.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(u, t, e, f.onSubjectsLoaded, h),
                S()
            }, function(e) {
                S()
            })
        }),
        u.$watch("selectedCourseGrade", function() {
            u.selectedCourseGrade && (T = n.gradeId ? o.decodeIds(n.gradeId)[0] : u.selectedCourseGrade.gradeId,
            I = !1,
            u.showTrack = "E-FDN" === u.selectedCourseGrade.curriculum,
            t.isMobile ? u.tabType = n.type || "o" : u.tabType = n.type || "t",
            u.studentsList = null,
            u.setSelectMonth(u.selectedMonth),
            u.getInstitutions())
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(A, C) {
    "use strict";
    A.module("erudex.v2App").controller("DashboardController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "DonutChartSharedService", "ReportSharedService", "ASSESSMENT_TYPE", "STORAGE_KEYS", "v2CommonPlugin", function(i, r, e, n, t, o, a, s, c, u, l) {
        function d() {
            r.selectedCourseGrade = C.apply(".{.gradeId == $gradeId}", r.courseGrades, {
                gradeId: r.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        A.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        })),
        A.extend(i, {
            selectedInstitution: null,
            sharedService: s,
            onChangeInstitution: function(e) {
                i.selectedInstitution = e,
                E(),
                "D" === i.dashboardType ? T(S, i.selectedMonth) : (I(),
                i.getAllTests(S, i.selectedMonth))
            },
            setDashboardType: function(e) {
                i.dashboardType = e,
                E(),
                "D" === e ? (0 === C.apply(".{.id == $curriculumId}", i.reportCurriculumOptions, {
                    curriculumId: i.selectedGradeObj.curriculumId
                }).length && o.safeApply(i, function() {
                    i.curriculumId = i.reportCurriculumOptions[0].id,
                    i.selectedGradeObj.curriculumId = i.curriculumId,
                    i.onChangeCurriculum(i.selectedGradeObj.curriculumId)
                }),
                T(S, i.selectedMonth),
                I()) : i.getAllTests(S, i.selectedMonth)
            },
            dashboardType: "D",
            pageNum: 0,
            moreTestsLoading: !0,
            allTests: [],
            testMetaData: null
        });
        var m = this
          , p = null
          , g = 0
          , S = r.selectedGradeId
          , e = moment().subtract(1, "months").toDate().getTime()
          , s = moment().subtract(3, "months").toDate().getTime()
          , f = moment().subtract(6, "months").toDate().getTime()
          , h = moment().subtract(12, "months").toDate().getTime()
          , v = (new Date).getTime();
        function T(e, t) {
            o.blockUiStart(i);
            t = {
                fromDate: t,
                gradeId: e,
                institutionId: r.isOrgUser ? i.selectedInstitution || null : i.user.institution.id,
                toDate: v,
                organizationId: g,
                type: "dashboard",
                efdnTrack: i.showTrack ? i.selectedTrack : null
            };
            l.getTeacherOverviewReport(t, function(e) {
                if (o.blockUiStop(i),
                e.result) {
                    i.overallPerformance = e.values.overall;
                    var e = e.values.overall[0].performance
                      , t = [];
                    if (e) {
                        for (var s = i.overallPerformance[0].performance, r = i.totalStudents = 0; r < s.length; r++) {
                            var n = s[r];
                            i.totalStudents += n.count
                        }
                        i.totalStudents,
                        e.slice().reverse().forEach(function(e) {
                            t.push(e.count)
                        })
                    }
                    i.performanceDivision = a.donutChart(t)
                } else
                    o.$toastr.error("Error while retrieving dashboard report")
            }, function(e) {
                o.$toastr.error("Error while retrieving dashboard report"),
                o.blockUiStop(i)
            }),
            l.getTeacherOverviewTestStuList(t, function(e) {
                o.blockUiStop(i),
                e.result ? (i.testList = e.values.testList,
                i.studentsList = e.values.studentList) : o.$toastr.error("Error while retrieving dashboard report")
            }, function(e) {
                o.$toastr.error("Error while retrieving dashboard report"),
                o.blockUiStop(i)
            })
        }
        function E() {
            o.blockUiStart(i);
            var e = r.isOrgUser ? i.selectedInstitution || null : i.user.institution.id
              , e = {
                organizationId: g,
                gradeId: S,
                fromDate: i.selectedMonth,
                toDate: v,
                institutionId: e,
                type: "D" === i.dashboardType ? "dashboardData" : "testListData",
                efdnTrack: i.showTrack ? i.selectedTrack : null
            };
            l.getDashboardReportData(e, function(e) {
                o.blockUiStop(i),
                e.result ? i.usersCount = e.values[0] : o.$toastr.error("Error while retrieving dashboard report")
            }, function(e) {
                o.$toastr.error("Error while retrieving dashboard report"),
                o.blockUiStop(i)
            })
        }
        function I() {
            i.allTests = [],
            i.pageNum = 0
        }
        i.availableMonths = [{
            name: r.isMobile ? "1M" : "Last 30 Days",
            value: e
        }, {
            name: r.isMobile ? "3M" : "Last 3 Months",
            value: s
        }, {
            name: r.isMobile ? "6M" : "Last 6 Months",
            value: f
        }, {
            name: r.isMobile ? "12M" : "Last 12 Months",
            value: h
        }],
        i.selectedMonth = i.availableMonths[0].value,
        i.tracks = c.DATA_ENTRY_TEST_TRACK_OPTIONS,
        i.selectedTrack = i.tracks[0].value,
        i.setSelectMonth = function(e) {
            i.selectedMonth = e,
            E(),
            "D" === i.dashboardType ? T(S, e) : (I(),
            i.getAllTests(S, e))
        }
        ,
        i.setSelectedTrack = function(e) {
            i.selectedTrack = e,
            E(),
            I(),
            "D" === i.dashboardType ? T(S, i.selectedMonth) : i.getAllTests(S, i.selectedMonth)
        }
        ,
        i.showTeacherReports = function(e, t) {
            var s = r.isOrgUser ? i.selectedInstitution ? o.encodeIds(i.selectedInstitution) : o.encodeIds(r.institutionList[0].institutionId) : o.encodeIds(i.user.institution.id);
            n.go("teacher-reports", {
                type: e,
                allInstitution: !i.selectedInstitution,
                institutionId: s,
                gradeId: o.encodeIds(S),
                track: i.showTrack ? i.selectedTrack : null
            }),
            t || setTimeout(function() {
                window.document.getElementById("test-student-lists").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }, 2e3)
        }
        ,
        i.storeSelections = function() {
            p && o.$storageService.setUserPref(u.REMEMBER_SELECT_CURRICULUM, p)
        }
        ,
        i.showTestReport = function(e) {
            var t = r.isOrgUser ? i.selectedInstitution ? o.encodeIds(i.selectedInstitution) : o.encodeIds(e.institutions[0].institutionId) : o.encodeIds(i.user.institution.id);
            n.go("teacher-reports", {
                type: "t",
                allInstitution: !i.selectedInstitution,
                institutionId: t,
                track: i.showTrack ? i.selectedTrack : null
            }),
            i.sharedService.showTestReport(e.assessmentId, e.institutions[0].sections, i.selectedInstitution || e.institutions[0].institutionId)
        }
        ,
        i.getAllTests = function(e, t) {
            o.blockUiStart(i);
            var s = r.isOrgUser ? i.selectedInstitution || null : i.user.institution.id
              , t = ([].push(i.selectedInstitution),
            i.moreTestsLoading = !0,
            i.pageNum++,
            {
                fromDate: t,
                gradeId: e,
                institutionId: s,
                organizationId: g,
                pageNum: i.pageNum,
                pageSize: 10,
                reportType: "testsList",
                toDate: v,
                efdnTrack: i.showTrack ? i.selectedTrack : null
            });
            l.getOrgReportsByCurriculum(t, function(e) {
                o.blockUiStop(i),
                e.result ? (i.moreTestsLoading = !1,
                i.testMetaData = e.values[0].metadata,
                o.safeApply(i, function() {
                    i.allTests = i.allTests.concat(e.values[0].testList)
                })) : o.$toastr.error("Error while retrieving dashboard report")
            }, function(e) {
                o.$toastr.error("Error while retrieving dashboard report"),
                o.blockUiStop(i)
            })
        }
        ,
        i.testCardClass = function(e) {
            return 0 === e.submittedUserCount ? "no-submissions" : e.submittedUserCount === e.userCount ? "graded-submissions" : "partial-submissions"
        }
        ,
        o.checkUserLoaded(i, function() {
            i.getInstitutions(),
            i.user.id,
            g = i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                p = o.$storageService.getUserPref(u.REMEMBER_SELECT_CURRICULUM, {});
                var t = C.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, m.onSubjectsLoaded, p),
                d()
            }, function(e) {
                d()
            })
        }),
        i.$watch("selectedCourseGrade", function() {
            !i.selectedCourseGrade || !i.user.reportsAvailableCurriculums.includes(i.selectedCourseGrade.curriculum) && "T" !== i.dashboardType || (S = i.selectedCourseGrade.gradeId,
            i.showTrack = "E-FDN" === i.selectedCourseGrade.curriculum,
            i.setSelectMonth(i.selectedMonth))
        })
    }
    ])
}(window.angular, window.JSPath),
function(e, o) {
    "use strict";
    e.module("erudex.v2App").factory("AssessmentSharedService", ["$rootScope", "UtilService", "PrintService", "APP_CONFIG", "ASSESSMENT_TYPE", function(e, t, s, r, n) {
        var i = {
            triggerSearch: !1,
            showSearchSheet: !1,
            isPrinting: !1,
            scope: null,
            closeSearchSheet: function() {
                i.showSearchSheet = !1
            },
            searchQuestions: function(e) {
                i.scope = e,
                i.showSearchSheet = !0,
                i.triggerSearch = !0
            },
            selectQuestion: function(t) {
                o.apply(".{.id === $id}", i.scope.assessment.mcqs, {
                    id: t.id
                })[0] ? i.scope.assessment.mcqs = i.scope.assessment.mcqs.filter(function(e) {
                    return e.id !== t.id
                }) : i.scope.assessment.mcqs.push(t),
                i.scope.assessment.questionCount = i.scope.assessment.mcqs.length,
                i.scope.assessment.totalScore = i.scope.assessment.marksPerQuestion * i.scope.assessment.questionCount
            }
        };
        return i
    }
    ])
}(window.angular, window.JSPath, window),
function(y, b) {
    "use strict";
    y.module("erudex.v2App").controller("AssessmentsListController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$modal", "UtilService", "userPlugin", "teacherAssessmentPlugin", "AssessmentSharedService", "locker", "STORAGE_KEYS", "APP_PREFS", "OWNER", function(i, o, e, t, s, a, c, r, u, n, l, d, m, p) {
        y.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: c
        }));
        var g = l.driver("session").namespace("com.erudex")
          , S = (y.extend(i, {
            sharedService: n,
            getAssessments: A,
            submissions: [],
            assessments: [],
            mockTests: [],
            assessmentMetaData: null,
            pageNum: 0,
            assessmentTab: 1,
            moreAssessmentLoading: !0,
            showNoDataMessage: !1,
            showMockTests: "mock" === (g.get(d.V2_SELECTED_ASSESSMENT_TYPE) || "subject")
        }),
        this)
          , f = null
          , h = 0
          , v = 0
          , T = 0;
        function E() {
            o.selectedCourseGrade = b.apply(".{.gradeId == $gradeId}", o.courseGrades, {
                gradeId: o.selectedGradeId
            })[0],
            c.finishLoadSuccess(i)
        }
        function I(e, s, r, n) {
            c.blockUiStart(i),
            u.getAssessments({
                id: e
            }, function(e) {
                var t;
                c.blockUiStop(i),
                e.result ? n ? i.sharedService.searchTestViewQuestions(e.values[0]) : r ? (i.sharedService.assessmentToPrint = e.values,
                a.open({
                    templateUrl: "../v2/template/teacher/tests/print/show-print-options.html",
                    windowClass: "confirm-modal",
                    controller: ["$scope", "AssessmentSharedService", "$modalInstance", function(n, e, t) {
                        n.showOptions = !1,
                        n.showAnswer = !1,
                        n.showSolution = !1,
                        n.isCompactPrint = !1,
                        n.positiveResponse = function() {
                            t.dismiss("print"),
                            teacherAssessmentSharedService.printTest(n, e.assessmentToPrint, n.showOptions, n.showAnswer, n.showSolution, n.isCompactPrint)
                        }
                        ,
                        n.negativeResponse = function() {
                            t.dismiss("cancel")
                        }
                        ,
                        n.selectPrintOption = function(e, t, s, r) {
                            n.showOptions = e,
                            n.showAnswer = t,
                            n.showSolution = s,
                            n.isCompactPrint = r
                        }
                    }
                    ],
                    backdrop: "static",
                    keyboard: !0
                })) : (t = i.getSections(o.selectedCourseGrade.gradeId),
                i.sharedService.copyAssessment(e.values[0], o.selectedCourseGrade, s, t)) : c.$toastr.error("Error while retrieving Test details.")
            }, function(e) {
                c.$toastr.error("Error while retrieving Test details."),
                c.blockUiStop(i)
            })
        }
        function A(t) {
            c.blockUiStart(i),
            i.showNoDataMessage = !1,
            t ? (i.sharedService.morePremadeTestsLoading = !0,
            i.sharedService.premadeTestsPageNum++) : (i.moreAssessmentLoading = !0,
            i.pageNum++);
            var e = {
                organizationId: v,
                institutionId: T,
                roleId: 3,
                teacherId: h,
                subjectId: i.subject.id,
                pageSize: 10,
                pageNum: t ? i.sharedService.premadeTestsPageNum : i.pageNum,
                isPremadeSearch: t
            };
            u.getAssessments(e, function(e) {
                c.blockUiStop(i),
                t ? i.sharedService.morePremadeTestsLoading = !1 : i.moreAssessmentLoading = !1,
                e.result ? t ? i.sharedService.searchTests(e.values[0].metadata, e.values[0].assessments, o.selectedCourseGrade, i.subject) : (i.assessmentMetaData = e.values[0].metadata,
                c.safeApply(i, function() {
                    i.assessments = i.assessments.concat(e.values[0].assessments),
                    i.showNoDataMessage = 0 == i.assessments.length
                })) : c.$toastr.error("Error while retrieving tests.")
            }, function(e) {
                c.blockUiStop(i),
                c.$toastr.error("Error while retrieving tests.")
            })
        }
        function C() {
            c.safeApply(i, function() {
                i.pageNum = 0,
                i.assessments = [],
                i.mockTests = [],
                i.showMockTests || A(!1)
            })
        }
        i.storeSelections = function() {
            f && c.$storageService.setUserPref(d.REMEMBER_SELECT_CURRICULUM, f)
        }
        ,
        i.toggleAssessmentType = function(e) {
            i.showMockTests = "mock" === e,
            g.put(d.V2_SELECTED_ASSESSMENT_TYPE, e),
            C()
        }
        ,
        i.onCreateAssessment = function() {
            t.go("v2-create-test", {
                id: null,
                t: i.showMockTests ? "c" : "r"
            })
        }
        ,
        i.onPrintAssessment = function(e) {
            I(e.assessmentId, i.subject, !0, !1)
        }
        ,
        i.onSearchAssessmentViewQuestions = function(e) {
            I(e.assessmentId, i.subject, !1, !0)
        }
        ,
        i.onCopyAssessment = function(e) {
            var t = i.subject;
            i.sharedService.showSearchTestsSheet && (t = i.sharedService.searchTestsSubject,
            i.sharedService.closeSearchTestsSheet()),
            I(e.assessmentId, t, !1, !1)
        }
        ,
        i.onViewMockTest = function(e) {
            i.sharedService.showMockTest(e)
        }
        ,
        i.setTab = function(e) {
            i.assessmentTab = e
        }
        ,
        i.isSet = function(e) {
            return i.assessmentTab === e
        }
        ,
        i.availableFilter = function(e) {
            return !e.approvedDateTime
        }
        ,
        i.approvedFilter = function(e) {
            return e.approvedDateTime
        }
        ,
        c.checkUserLoaded(i, function() {
            h = i.user.id,
            v = i.user.institution.organization.id,
            T = i.user.institution.id,
            c.getUserCurriculum(function(e) {
                f = c.$storageService.getUserPref(d.REMEMBER_SELECT_CURRICULUM, {});
                var t = b.apply(".grade", i.user.userGrades).sort(c.sortGrades);
                c.buildStudentCurriculumGradeSelect(i, t, e, S.onSubjectsLoaded, f),
                E()
            }, function(e) {
                E()
            })
        }),
        i.$watch("subject", function() {
            var e;
            i.subject && i.subject.id && 0 < i.subject.id && (e = g.get(d.V2_SELECTED_ASSESSMENT_TYPE) || "subject",
            o.selectedCourseGrade.isCompetitive || (e = "subject"),
            i.toggleAssessmentType(e))
        }),
        i.$watch("sharedService.reloadAssessments", function(e, t) {
            e && (i.sharedService.subject = null,
            i.sharedService.chapters = [],
            i.sharedService.excludeIds = [],
            i.sharedService.reloadAssessments = !1,
            C())
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(C, y) {
    "use strict";
    C.module("erudex.v2App").controller("AssessmentUpsertController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "APP_CONFIG", "SUBJECT_LEVEL", "OWNER", "ASSESSMENT_TYPE", "STORAGE_KEYS", "userPlugin", "teacherAssessmentPlugin", "AssessmentSharedService", "QuestionsSharedService", function(r, t, e, s, n, i, o, a, c, u, l, d, m, p, g, S, f) {
        C.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: r,
            utilService: a
        }));
        var h = this
          , v = p.getUserInfo()
          , T = null
          , e = _.range(5, 61, 5)
          , p = _.range(90, 181, 30)
          , E = "c" === n.t;
        function I() {
            t.selectedCourseGrade = y.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            a.finishLoadSuccess(r)
        }
        function A() {
            r.sharedService.assessment.questionCount && r.sharedService.marksPerQuestion && (r.sharedService.assessment.totalScore = r.sharedService.marksPerQuestion * r.sharedService.assessment.questionCount)
        }
        C.extend(r, {
            sliderClass: "slider",
            isCompetitive: E,
            marksPerQuestionOptions: _.range(1, 6, 1),
            negativeMarkingOptions: _.range(0, 3, 1),
            durationOptions: E ? p : e.concat(p),
            testTypeOptions: y.apply('.{.competitive == $competitive  && .value != "adv"}', d.DATA_ENTRY_TEST_TYPE_OPTIONS, {
                competitive: !0
            }),
            selectedTestType: y.apply(".{.value === $value}", d.DATA_ENTRY_TEST_TYPE_OPTIONS, {
                value: E ? "full" : "subject"
            })[0],
            search: {
                pagination: {
                    pageIndex: 0,
                    pageSize: 10,
                    jumpToPageNum: 1
                }
            }
        }),
        r.sharedService = S,
        r.questionsSharedService = f,
        r.onSelectSubject = function(e) {
            e = y.apply(".{.subject.id == $id}", r.subjects, {
                id: e.subject.id
            })[0];
            e.subject.chapters || (a.blockUiStart(r),
            a.getUserSubjectById(e.id, function(s) {
                r.subjects.forEach(function(e, t) {
                    e.id === s.id && (r.subjects[t] = s)
                }),
                a.blockUiStop(r)
            }, function(e) {
                a.blockUiStop(r),
                console.log(e)
            })),
            r.selectedSubject = e.subject
        }
        ,
        r.onChangeTestType = function(e) {
            r.assessment.testType = e.value
        }
        ,
        r.onSelectQuestions = function() {
            r.sharedService.searchQuestions(r)
        }
        ,
        r.onCreateQuestions = function() {
            r.questionsSharedService.createEmptyQuestion(r.user, r.subject, c.QUESTION_TYPES, c.QUESTION_DIFFICULTY_LEVELS)
        }
        ,
        r.onchangeMarks = function() {
            A(),
            r.validateForm()
        }
        ,
        r.onChangeQuestionCount = function() {
            r.sharedService.assessment.mcqs && r.sharedService.assessment.questionCount && 0 < r.sharedService.assessment.mcqs.length && r.sharedService.assessment.questionCount < r.sharedService.assessment.mcqs.length && (r.sharedService.assessment.mcqs = []),
            A(),
            r.validateForm()
        }
        ,
        r.validateForm = function() {
            var e = y.apply(".{.isChecked == true}", r.sharedService.assessment.sections)
              , e = (r.sharedService.assessment.publishDateTime && r.sharedService.assessment.dueDateTime && r.sharedService.assessment.name && r.sharedService.assessment.questionCount && r.sharedService.assessment.totalScore && r.sharedService.assessment.duration && r.sharedService.assessment.mcqs.length === r.sharedService.assessment.questionCount && 0 < e.length ? r.sharedService.validForm = !0 : r.sharedService.validForm = !1,
            y.apply(".{.isChecked == true}", r.sharedService.chapters));
            return r.sharedService.assessment.questionCount && 0 < e.length && r.sharedService.assessment.mcqs.length < r.sharedService.assessment.questionCount ? r.sharedService.validQuestionsSelect = !0 : r.sharedService.validQuestionsSelect = !1,
            !0
        }
        ,
        r.removeQuestion = function(s) {
            C.forEach(r.sharedService.assessment.mcqs, function(e, t) {
                (e.id || e.mcqId) === s && (r.sharedService.assessment.mcqs.splice(t, 1),
                r.sharedService.excludeIds.push(s))
            }),
            r.validateForm(),
            r.sharedService.validQuestionsSelect && r.onAutoSelectQuestions()
        }
        ,
        r.onSubmit = function() {
            var t, s;
            r.validateForm() && r.sharedService.validForm ? (a.safeApply(r, function() {
                r.msg = ""
            }),
            r.sharedService.assessment.id || (a.blockUiStart(r),
            t = C.copy(r.sharedService.assessment),
            C.extend(t, {
                instituteId: v.institution.id,
                instituteName: v.institution.name,
                orgId: v.institution.organization.id,
                orgName: v.institution.organization.name,
                userId: v.id,
                roleId: 3,
                owner: l.USER,
                teacherId: v.id,
                teacherName: v.userName,
                teacherFullName: v.fullName
            }),
            s = [],
            t.sections.forEach(function(e) {
                e.isChecked && s.push({
                    startDateTime: t.publishDateTime,
                    dueDateTime: t.dueDateTime,
                    sectionId: e.id,
                    name: e.name,
                    institutionName: e.institutionName
                })
            }),
            t.sections = s,
            t.mcqs = _.map(r.sharedService.assessment.mcqs, function(e) {
                return {
                    mcqId: e.id || e.mcqId,
                    sectionNumber: 1
                }
            }),
            delete t.publishDateTime,
            delete t.dueDateTime,
            g.upsertAssessment(t, function(e) {
                a.blockUiStop(r),
                e.result ? (a.$toastr.info("Test Created Successfully."),
                a.blockUiStop(r),
                r.sharedService.closeCreateSheet(),
                r.sharedService.reloadAssessments = !0) : a.safeApply(r, function() {
                    r.msg = "Unable to create Test (" + e.message + ")."
                })
            }, function(e) {
                a.$toastr.error("Error Creating Test", e.errorMessage),
                a.blockUiStop(r)
            }))) : a.$toastr.info("Enter all required fields.")
        }
        ,
        a.checkUserLoaded(r, function() {
            a.getUserCurriculum(function(e) {
                T = a.$storageService.getUserPref(m.REMEMBER_SELECT_CURRICULUM, {});
                var t = y.apply(".grade", r.user.userGrades).sort(a.sortGrades);
                a.buildStudentCurriculumGradeSelect(r, t, e, h.onSubjectsLoaded, T),
                I()
            }, function(e) {
                I()
            })
        }),
        r.$watch("subject", function() {
            var e;
            r.subject && r.subject.id && 0 < r.subject.id && (r.isCompetitive ? r.assessmentSubjects = _.sortBy(r.subjects, function(e) {
                return e.subject.sortOrder
            }) : r.assessmentSubjects = y.apply(".{.subject{.id === $id}}", r.subjects, {
                id: r.subject.id
            }),
            e = n.id ? a.decodeIds(n.id)[0] : null,
            r.assessment = {
                id: e,
                active: !0,
                free: !1,
                institutionId: r.user.institution.id,
                instituteName: r.user.institution.name,
                orgId: r.user.institution.organization.id,
                orgName: r.user.institution.organization.name,
                owner: t.isOrgData ? l.ORGANIZATION : l.INSTITUTION,
                parentOwnerId: (t.isOrgData ? r.user.institution.organization : r.user.institution).id,
                subjectLevel: u.SUBJECT,
                difficultyLevelId: c.QUESTION_DIFFICULTY_LEVELS[1].id,
                difficultyLevel: c.QUESTION_DIFFICULTY_LEVELS[1].description,
                curriculumId: t.selectedCourseGrade.curriculumId,
                curriculumName: t.selectedCourseGrade.curriculum,
                gradeId: t.selectedCourseGrade.gradeId,
                gradeNumber: t.selectedCourseGrade.gradeNumber,
                subjectId: r.subject.id,
                subjectName: r.subject.name,
                assessmentSubject: {
                    id: r.subject.id,
                    name: r.subject.name,
                    description: r.subject.description
                },
                subjects: [{
                    id: r.subject.id,
                    name: r.subject.name,
                    description: r.subject.description,
                    sortOrder: r.subject.sortOrder,
                    questionCount: null,
                    totalScore: null
                }],
                jeeNewPattern: !1,
                neet: !1,
                includeInReports: !1,
                name: null,
                assessmentType: E ? "competitiveMock" : "regular",
                testType: E ? "full" : "subject",
                status: (E ? d.STATUS[0] : d.STATUS[1]).value,
                marksPerQuestion: E ? 4 : 1,
                negativeMarkingValue: E ? 0 : 1,
                totalScore: null,
                duration: E ? 180 : 60,
                questionCount: null,
                mcqs: [],
                assessmentSections: [],
                assessmentApprovalsAssigned: []
            })
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(e, o) {
    "use strict";
    e.module("erudex.v2App").factory("QuestionsSharedService", [function() {
        var i = {
            question: {},
            validForm: !1,
            subject: null,
            selectedChapter: null,
            selectedTopic: null,
            selectedDifficultyLevel: null,
            selectedQuestionType: null,
            chapters: [],
            options: [{
                option: "A",
                optionText: null
            }, {
                option: "B",
                optionText: null
            }, {
                option: "C",
                optionText: null
            }, {
                option: "D",
                optionText: null
            }],
            showCreateSheet: !1,
            resetNiceSelect: !0,
            forReset: {},
            questionTypes: [],
            difficultyLevels: [],
            closeCreateSheet: function() {
                i.validForm = !1,
                i.subject = null,
                i.chapters = [],
                i.showCreateSheet = !1
            },
            reset: function() {
                i.resetNiceSelect = !i.resetNiceSelect,
                i.validForm = !1,
                i.subject = null,
                i.chapters = [],
                i.createEmptyQuestion(i.forReset.user, i.forReset.subject, i.questionTypes, i.difficultyLevels)
            },
            resetForNextQuestion: function() {
                e.extend(i.question, {
                    id: null,
                    answer: null,
                    description: null,
                    mcqSubject: {
                        id: subject.id,
                        name: subject.name,
                        description: subject.description,
                        sortOrder: subject.sortOrder
                    },
                    numericalRoundedAnswer: null,
                    solution: null,
                    options: i.options
                }),
                console.log("resetForNextQuestion", i.question)
            },
            getEmptyQuestion: function(e, t, s, r) {
                return {
                    id: null,
                    orginialIdPath: null,
                    originalId: null,
                    answer: null,
                    chapterId: null,
                    chapterName: null,
                    chapterNumber: null,
                    chapterSortOrder: null,
                    description: null,
                    difficultyLevel: r[1].description,
                    difficultyLevelId: r[1].id,
                    isActive: !0,
                    isMapped: !1,
                    languageId: 1,
                    mcqSubject: {
                        id: t.id,
                        name: t.name,
                        description: t.description,
                        sortOrder: t.sortOrder
                    },
                    numericalRoundedAnswer: null,
                    questionType: s[0].value,
                    solution: null,
                    storeId: e.ownerStoreId,
                    subjectId: t.id,
                    topicId: null,
                    topicName: null,
                    topicNumber: null,
                    topicSortOrder: null,
                    options: i.options
                }
            },
            createEmptyQuestion: function(e, t, s, r) {
                i.showCreateSheet = !0,
                i.forReset.user = e,
                i.forReset.subject = t,
                i.subject && i.subject.id === t.id || (i.subject = t,
                i.selectedChapter = null,
                i.selectedTopic = null,
                i.chapters = t.chapters,
                i.questionTypes = s,
                i.selectedQuestionType = s[0],
                i.difficultyLevels = r,
                i.selectedDifficultyLevel = r[1],
                i.question = i.getEmptyQuestion(e, t, s, r))
            },
            editQuestion: function(e, t, s, r, n) {
                i.showCreateSheet = !0,
                i.forReset.user = e,
                i.forReset.subject = t,
                i.subject && i.subject.id === t.id || (i.subject = t,
                i.selectedChapter = null,
                i.selectedTopic = null,
                i.chapters = t.chapters,
                i.questionTypes = s,
                i.selectedQuestionType = o.apply(".{.value === $value}", s, {
                    value: n.questionType
                })[0],
                i.difficultyLevels = r,
                i.selectedDifficultyLevel = o.apply(".{.id === $id}", r, {
                    id: n.difficultyLevelId
                })[0],
                i.question = n,
                i.validForm = !0)
            }
        };
        return i
    }
    ])
}(window.angular, window.JSPath, window),
function(h, v) {
    "use strict";
    h.module("erudex.v2App").controller("QuestionsSearchController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "teacherAssessmentPlugin", "AssessmentSharedService", "locker", "APP_CONFIG", "STORAGE_KEYS", "OWNER", function(s, e, t, r, n, i, o, a, c, u, l, d, m) {
        function p() {
            s.search.pagination.pageIndex = 0,
            s.getQuestions()
        }
        h.extend(s, {
            assessmentSharedService: c,
            isSelectable: !0,
            questionTypes: l.QUESTION_TYPES,
            difficultyLevels: l.QUESTION_DIFFICULTY_LEVELS,
            questions: [],
            showNoDataMessage: !1,
            totalQuestions: 0,
            totalPages: 0,
            showSolution: !1,
            ownerStoreId: s.user.ownerStoreId,
            storeIds: s.user.storeIds,
            isOrgUser: o.isOrgUser(),
            search: {
                chapter: null,
                topic: null,
                questionType: null,
                difficultyLevel: null,
                pagination: {
                    pageIndex: 0,
                    pageSize: 10,
                    jumpToPageNum: 1
                }
            }
        }),
        s.goToPage = function(e) {
            s.search.pagination.pageIndex = e - 1,
            s.getQuestions()
        }
        ,
        s.clearFilterSelection = function(e, t) {
            e.stopPropagation(),
            s.search[t] = null,
            p()
        }
        ,
        s.onChangePageSize = function() {
            p()
        }
        ,
        s.onChangeChapter = function(e) {
            p()
        }
        ,
        s.onChangeTopic = function(e) {
            p()
        }
        ,
        s.onChangeQuestionType = function(e) {
            p()
        }
        ,
        s.onChangeDifficultyLevel = function(e) {
            p()
        }
        ,
        s.getQuestions = function() {
            s.totalQuestions = 0,
            s.totalPages = 0,
            s.questions = [];
            var t = []
              , e = (s.assessmentSharedService.scope.assessment && _.map(s.assessmentSharedService.scope.assessment.mcqs, function(e) {
                t.push(e.id)
            }),
            s.search.pagination.jumpToPageNum = s.search.pagination.pageIndex + 1,
            {
                type: "questions",
                roleId: s.user.roles[0].id,
                storeIds: s.user.storeIds,
                ids: [],
                excludeIds: t,
                subjectId: s.assessmentSharedService.scope.selectedSubject.id,
                chapterId: s.search.chapter ? s.search.chapter.id : null,
                topicId: s.search.topic ? s.search.topic.id : null,
                questionType: s.search.questionType ? s.search.questionType.value : null,
                difficultyLevelId: s.search.difficultyLevel ? s.search.difficultyLevel.id : null,
                pageSize: s.search.pagination.pageSize,
                pageNum: s.search.pagination.pageIndex + 1
            });
            console.time("searchQuestions"),
            i.blockUiStart(s),
            a.searchQuestions(e, function(e) {
                i.blockUiStop(s),
                e.result ? (s.questions = e.values[0].data,
                0 < e.values[0].metadata.length && (s.totalQuestions = e.values[0].metadata[0].total,
                s.totalPages = Math.ceil(s.totalQuestions / s.search.pagination.pageSize)),
                console.timeEnd("searchQuestions")) : i.$toastr.error("Unable to find questions", e.errorMessage)
            }, function(e) {
                i.$toastr.error("Unable to find questions", e.errorMessage),
                i.blockUiStop(s)
            })
        }
        ,
        s.selectQuestion = function(e) {
            s.assessmentSharedService.selectQuestion(e)
        }
        ,
        i.checkUserLoaded(s, function() {}),
        s.$watch("assessmentSharedService.triggerSearch", function() {
            s.assessmentSharedService.triggerSearch && (s.assessmentSharedService.triggerSearch = !1,
            s.getQuestions())
        })
    }
    ]).controller("QuestionsListController", ["$scope", "$rootScope", "$controller", "$state", "$stateParams", "UtilService", "userPlugin", "teacherAssessmentPlugin", "QuestionsSharedService", "locker", "APP_CONFIG", "STORAGE_KEYS", "OWNER", function(i, e, t, s, r, o, n, a, c, u, l, d, m) {
        h.extend(this, t("BaseCurriculumViewCtrl", {
            $scope: i,
            utilService: o
        })),
        h.extend(i, {
            isSelectable: !1,
            sharedService: c,
            questionTypes: l.QUESTION_TYPES,
            difficultyLevels: l.QUESTION_DIFFICULTY_LEVELS,
            questions: [],
            showNoDataMessage: !1,
            totalQuestions: 0,
            totalPages: 0,
            showSolution: !1,
            ownerStoreId: i.user.ownerStoreId,
            storeIds: i.user.storeIds,
            isOrgUser: n.isOrgUser(),
            search: {
                chapter: null,
                topic: null,
                questionType: null,
                difficultyLevel: null,
                pagination: {
                    pageIndex: 0,
                    pageSize: 10,
                    jumpToPageNum: 1
                }
            }
        });
        var p = this
          , g = null;
        function S() {
            e.selectedCourseGrade = v.apply(".{.gradeId == $gradeId}", e.courseGrades, {
                gradeId: e.selectedGradeId
            })[0],
            o.finishLoadSuccess(i)
        }
        function f() {
            i.search.pagination.pageIndex = 0,
            i.getQuestions()
        }
        i.storeSelections = function() {
            g && o.$storageService.setUserPref(d.REMEMBER_SELECT_CURRICULUM, g)
        }
        ,
        i.onCreateQuestion = function() {
            i.sharedService.createEmptyQuestion(i.user, i.subject, l.QUESTION_TYPES, l.QUESTION_DIFFICULTY_LEVELS)
        }
        ,
        i.onEditQuestion = function(e) {
            i.sharedService.editQuestion(i.user, i.subject, l.QUESTION_TYPES, l.QUESTION_DIFFICULTY_LEVELS, e)
        }
        ,
        i.goToPage = function(e) {
            i.search.pagination.pageIndex = e - 1,
            i.getQuestions()
        }
        ,
        i.clearFilterSelection = function(e, t) {
            e.stopPropagation(),
            i.search[t] = null,
            f()
        }
        ,
        i.onChangePageSize = function() {
            f()
        }
        ,
        i.onChangeChapter = function(e) {
            f()
        }
        ,
        i.onChangeTopic = function(e) {
            f()
        }
        ,
        i.onChangeQuestionType = function(e) {
            f()
        }
        ,
        i.onChangeDifficultyLevel = function(e) {
            f()
        }
        ,
        i.getQuestions = function() {
            i.search.pagination.jumpToPageNum = i.search.pagination.pageIndex + 1;
            var e = {
                type: "questions",
                roleId: i.user.roles[0].id,
                storeIds: i.user.storeIds,
                ids: [],
                excludeIds: [],
                subjectId: i.subject.id,
                chapterId: i.search.chapter ? i.search.chapter.id : null,
                topicId: i.search.topic ? i.search.topic.id : null,
                questionType: i.search.questionType ? i.search.questionType.value : null,
                difficultyLevelId: i.search.difficultyLevel ? i.search.difficultyLevel.id : null,
                pageSize: i.search.pagination.pageSize,
                pageNum: i.search.pagination.pageIndex + 1
            };
            console.time("searchQuestions"),
            o.blockUiStart(i),
            a.searchQuestions(e, function(e) {
                o.blockUiStop(i),
                e.result ? (i.questions = e.values[0].data,
                i.totalQuestions = 0,
                (i.totalPages = 0) < e.values[0].metadata.length && (i.totalQuestions = e.values[0].metadata[0].total,
                i.totalPages = Math.ceil(i.totalQuestions / i.search.pagination.pageSize)),
                console.timeEnd("searchQuestions")) : o.$toastr.error("Unable to find questions", e.errorMessage)
            }, function(e) {
                o.$toastr.error("Unable to find questions", e.errorMessage),
                o.blockUiStop(i)
            })
        }
        ,
        o.checkUserLoaded(i, function() {
            i.user.id,
            i.user.institution.organization.id,
            o.getUserCurriculum(function(e) {
                g = o.$storageService.getUserPref(d.REMEMBER_SELECT_CURRICULUM, {});
                var t = v.apply(".grade", i.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(i, t, e, p.onSubjectsLoaded, g),
                S()
            }, function(e) {
                S()
            })
        }),
        i.$watch("subject", function() {
            i.subject && i.subject.id && 0 < i.subject.id && o.safeApply(i, function() {
                i.questions = [],
                i.getQuestions()
            })
        }),
        i.$on("$stateChangeStart", function(e, t, s, r, n) {
            i.sharedService.showCreateSheet && (i.sharedService.closeCreateSheet(),
            o.finishLoadSuccess(i),
            e.preventDefault())
        })
    }
    ])
}(window.angular, window.JSPath, window),
function(m) {
    "use strict";
    m.module("erudex.v2App").controller("QuestionUpsertController", ["$scope", "$rootScope", "$state", "$stateParams", "$timeout", "Upload", "UtilService", "OWNER", "APP_CONFIG", "userPlugin", "v2CommonPlugin", "QuestionsSharedService", function(r, e, t, s, n, i, o, a, c, u, l, d) {
        u.getUserInfo();
        r.ckEditorOptions = m.copy(c.CKEDITOR_CONFIG),
        r.sharedService = d,
        r.sharedService.validForm = !1,
        r.onChangeChapter = function(e) {
            r.sharedService.question.chapterId = e.id,
            r.sharedService.question.chapterNumber = e.number,
            r.sharedService.question.chapterName = e.name,
            r.sharedService.question.chapterSortOrder = e.sortOrder,
            r.validateForm()
        }
        ,
        r.onChangeTopic = function(e) {
            r.sharedService.question.topicId = e.id,
            r.sharedService.question.topicNumber = e.number,
            r.sharedService.question.topicName = e.name,
            r.sharedService.question.topicSortOrder = e.sortOrder,
            r.validateForm()
        }
        ,
        r.onChangeQuestionType = function(e) {
            e === c.QUESTION_TYPE.NUMERICAL_VALUE.value ? r.sharedService.question.options = [] : r.sharedService.question.options = r.sharedService.options,
            r.validateForm()
        }
        ,
        r.onChangeDifficultyLevel = function(e) {
            r.sharedService.question.difficultyLevelId = e.id,
            r.sharedService.question.difficultyLevel = e.description,
            r.validateForm()
        }
        ,
        r.validateForm = function() {
            return r.sharedService.question.chapterId && r.sharedService.question.difficultyLevelId && r.sharedService.question.questionType && r.sharedService.question.description && r.sharedService.question.answer ? (r.sharedService.validForm = !0,
            r.sharedService.questionquestionType !== c.QUESTION_TYPE.NUMERICAL_VALUE.value && m.forEach(r.sharedService.question.options, function(e) {
                r.sharedService.validForm && !e.optionText && (r.sharedService.validForm = !1)
            })) : r.sharedService.validForm = !1,
            !0
        }
        ,
        r.setMcqMultiAnswer = function(e, t) {
            var s = r.sharedService.question.answer || "";
            e.target.checked ? s += t : s = s.replace(t, ""),
            r.sharedService.question.answer = s.split("").sort().join(""),
            r.validateForm()
        }
        ,
        r.onSave = function(t) {
            o.blockUiStart(r),
            l.saveMcq(r.sharedService.question, function(e) {
                o.blockUiStop(r),
                e.result ? (o.$toastr.info("Question saved successfully with ID: " + e.value.id),
                t ? r.sharedService.closeCreateSheet() : r.sharedService.resetForNextQuestion()) : o.$toastr.error("Error while saving question.")
            }, function(e) {
                o.$toastr.error("Error while saving question."),
                o.blockUiStop(r)
            })
        }
        ,
        o.checkUserLoaded(r, function() {})
    }
    ])
}(window.angular, (window.JSPath,
window)),
function(g, S, f) {
    "use strict";
    g.module("erudex.v2App").controller("AugmentedResources", ["$scope", "$rootScope", "$controller", "$state", "$timeout", "$stateParams", "UtilService", "v2CommonPlugin", "userPlugin", "STORAGE_KEYS", function(s, t, e, r, n, i, o, a, c, u) {
        g.extend(this, e("BaseCurriculumViewCtrl", {
            $scope: s,
            utilService: o
        }));
        var l = this
          , d = null;
        function m() {
            t.selectedCourseGrade = S.apply(".{.gradeId == $gradeId}", t.courseGrades, {
                gradeId: t.selectedGradeId
            })[0],
            o.finishLoadSuccess(s)
        }
        function p(e) {
            a.getARContent({
                gradeNumber: e
            }, function(e) {
                e.result ? n(function() {
                    s.arResourcesList = e.values
                }) : o.$toastr.error("Error while retrieving assignments.")
            }, function(e) {
                o.$toastr.error("Error while retrieving assignments.")
            })
        }
        s.storeSelections = function() {
            d && o.$storageService.setUserPref(u.REMEMBER_SELECT_CURRICULUM, d)
        }
        ,
        s.viewARContent = function(e) {
            t.isApk ? f.open(e, "_blank") : o.$toastr.info("Augmented Reality feature is not available in browser.")
        }
        ,
        s.getARThumbnailUri = function(e) {
            return t.isApk ? "https://app.erudex.com/thumb/ar/" + e.thumbnailUri : "../thumb/ar/" + e.thumbnailUri
        }
        ,
        o.checkUserLoaded(s, function() {
            s.user,
            s.user.id,
            s.user.institution.id,
            s.user.institution.organization.id,
            p(s.defaultGradeNumber),
            o.getUserCurriculum(function(e) {
                d = o.$storageService.getUserPref(u.REMEMBER_SELECT_CURRICULUM, {});
                var t = S.apply(".grade", s.user.userGrades).sort(o.sortGrades);
                o.buildStudentCurriculumGradeSelect(s, t, e, l.onSubjectsLoaded, d),
                m()
            }, function(e) {
                m()
            })
        }),
        s.$watch("selectedCourseGrade", function() {
            s.selectedCourseGrade && p(s.selectedCourseGrade.gradeNumber)
        })
    }
    ])
}(window.angular, window.JSPath, window);
