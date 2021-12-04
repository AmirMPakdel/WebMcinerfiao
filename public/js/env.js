

var env = {

    ENVIRONMENT_MODE: "dev",

    MOCKING_SERVER: false,

    FILL_FAKE_DATA: true,

    SMS_TIMER: 120,

    TOKEN_KEY: "__mgnftk",

    DOMAIN: "http://tootifa.ir",

    MEDIA_PREFIX: "http://dltest.tootifa.ir",

    VERIFICATION_CODE_LENGTH : 4,

    LIMITS:{
        TOTAL_EDUCATOR_LIMIT: 100,
    },

    STORAGE_KEYS:{

        PHONE_NUMBER:"phone_number",
    },

    PATHS:{
        USER_AUTHENTICATION: "/minfo/auth",
        CHANGE_PASSWORD_PAGE: "/minfo/changePassword",
        MINFO_TERMS: "/minfo/terms",
        MINFO_PRIVACY: "/minfo/privacy",
        USER_DASHBOARD: "/dashboard",
    },

    PRIFIXES:{
        MA : "api/main",
        UTA : "api/tenant/user",
        PTA : "api/tenant/public",
        PSTA : "api/tenant/student/public",
        STA : "api/tenant/student",
        AA : "api/app",
    },

    SC:{
        SUCCESS : 1000,
        INVALID_PHONE_NUMBER : 1101,
        INVALID_PASSWORD : 1102,
        INVALID_TOKEN : 1103,
        REPETITIVE_NATIONAL_CODE : 1107,
        REPETITIVE_PHONE_NUMBER : 1108,
        INVALID_VERIFICATION_CODE : 1109,
        INVALID_REQUEST : 1112,
        INVALID_EMAIL : 1113,
        INVALID_FILE : 1114,
        SERVER_ISSUE : 1115,
        SERVER_NOT_AVAILABLE : 1119,
        INVALID_ID : 1120,
        VIDEO_UNAVAILABLE : 1121,
        SMS_NOT_SENT : 1122,
        PLAN_NOT_FREE : 1123,
        INVALID_INSTALLMENT_ID : 1124,
        DOWNLOAD_UNAVAILABLE : 1125,
        USER_ALREADY_VERIFIED : 1126,
        INVALID_GROUP_HIERARCHY : 1127,
        REPETITIVE_TITLE : 1128,
        FILE_SIZE_LIMIT_EXCEEDED : 1129,
        INVALID_VALUE : 1130,
        INVALID_EDIT_TYPE : 1131,
        GROUP_NOT_EXISTS : 1132,
        RELATED_ENTITIES : 1133,
        COMMENTS_NOT_OPEN : 1134,
        NO_DATA : 1135,
        USER_NOT_FOUND : 1136,
        PASSWORD_RESET_REQUEST_LIMIT_ERROR : 1137,
        PASSWORD_RESET_VALID_LIMIT_ERROR : 1138,
        STUDENT_NOT_FOUND : 1139,
        DEVICE_LIMIT : 1140,
        LISCENSE_KEY_NOT_FOUND : 1141,
        INVALID_UPLOAD_KEY : 1142,
        NOT_REGISTERED_IN_COURSE : 1143,
        NO_ACCESS_TO_COURSE : 1144,
        COURSE_NOT_FOUND : 1145,
        POST_NOT_FOUND : 1146,
        NO_FILE_STATE : 1147,
        INVALID_OLD_UPLOAD_KEY : 1148,
        CONVERTOR_SERVER_ISSUE_MOVING_FILE : 1149,
        CONVERTOR_SERVER_ISSUE_DELETING_FILE : 1150,
        CONTENT_NOT_FOUND : 1151,
        REPETITIVE_USERNAME : 1152,
        TAG_NOT_EXIST : 1153,
    }
}