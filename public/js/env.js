

var env = {

    ENVIRONMENT_MODE: "dev",

    SMS_TIMER: 120,

    TOKEN_KEY: "__mgnftk",

    DOMAIN: "http://tootifa.ir",

    MEDIA_PREFIX: "http://dltest.tootifa.ir",

    VERIFICATION_CODE_LENGTH : 4,

    LIMITS:{
        TOTAL_EDUCATOR_LIMIT: 100,
    },

    SC:{
        SUCCESS:1000,
        REPETITIVE_PHONE_NUMBER: 2005,
        USER_ALREADY_VERIFIED: 2006,
        INVALID_VERIFICATION_CODE : 2007,
        REPETITIVE_USERNAME : 2008,

    },

    PATHS:{
        USER_AUTHENTICATION: "/minfo/auth",
        MINFO_TERMS: "/minfo/terms",
        MINFO_PRIVACY: "/minfo/privacy",
        USER_DASHBOARD: "/dashboard",
    }

}