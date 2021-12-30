
var consts={

    //main server constant result codes
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
    },

    //convertor server constant result codes
    CSC:{
        "SUCCESS":5000,
        "INVALID_TOKEN":5001,
        "INVALID_UPLOAD_KEY":5002,
        "INVALID_TENANT":5003,
        "SIZES_NOT_EQUAL":5003,
        "FILE_NOT_FOUND":5004,
        "RESPONSE_ARRAY":5005,
        "PENDING":5100,
        "UPLOAD_REJECT":5200,
        "SERVER_ERROR":5300,
    },

    //edit course parameters
    EP:{
        EDIT_PARAM_LOGO : "ep_logo",
        EDIT_PARAM_COVER : "ep_cover",
        EDIT_PARAM_TITLE : "ep_title",
        EDIT_PARAM_DURATION : "ep_duration",
        EDIT_PARAM_PRICE : "ep_price",
        EDIT_PARAM_SUGGESTED_COURSES : "ep_suggested_courses",
        EDIT_PARAM_SUGGESTED_POSTS : "ep_suggested_posts",
        EDIT_PARAM_HOLDING_STATUS : "ep_holding_status",
        EDIT_PARAM_SHORT_DESC : "ep_short_desc",
        EDIT_PARAM_LONG_DESC : "ep_long_desc",
        EDIT_PARAM_RELEASE_DATE : "ep_release_date",
        EDIT_PARAM_COMMENTS_AVAILABILITY : "ep_comments_availability",
        EDIT_PARAM_COMMENTS_VALIDITY : "ep_comments_validity",
        EDIT_PARAM_SUBJECTS : "ep_subjects",
        EDIT_PARAM_REQUIREMENT : "ep_requirement",
        EDIT_PARAM_CONTENT_HIERARCHY : "ep_content_hierarchy",
        EDIT_PARAM_COURSE_EDUCATORS : "ep_course_educators",
        EDIT_PARAM_POST_WRITERS : "ep_post_writers",
        EDIT_PARAM_GROUPS : "ep_groups",
        EDIT_PARAM_TAGS : "ep_tags",
        EDIT_PARAM_CONTENT_VIDEO_ADD : "ep_content_video_add",
        EDIT_PARAM_CONTENT_VIDEO_UPDATE : "ep_content_video_update",
        EDIT_PARAM_CONTENT_VIDEO_DELETE : "ep_content_video_delete",
        EDIT_PARAM_CONTENT_DOCUMENT_ADD : "ep_content_document_add",
        EDIT_PARAM_CONTENT_DOCUMENT_UPDATE : "ep_content_document_update",
        EDIT_PARAM_CONTENT_DOCUMENT_DELETE : "ep_content_document_delete",
        EDIT_PARAM_CONTENT_VOICE_ADD : "ep_content_voice_add",
        EDIT_PARAM_CONTENT_VOICE_UPDATE : "ep_content_voice_update",
        EDIT_PARAM_CONTENT_VOICE_DELETE : "ep_content_voice_delete",
        EDIT_PARAM_CONTENT_SLIDER_ADD : "ep_content_slider_add",
        EDIT_PARAM_CONTENT_SLIDER_UPDATE : "ep_content_slider_update",
        EDIT_PARAM_CONTENT_SLIDER_DELETE : "ep_content_slider_delete",
        EDIT_PARAM_CONTENT_TEXT_ADD : "ep_content_text_add",
        EDIT_PARAM_CONTENT_TEXT_UPDATE : "ep_content_text_update",
        EDIT_PARAM_CONTENT_TEXT_DELETE : "ep_content_text_delete",
        EDIT_PARAM_CONTENT_IMAGE_ADD : "ep_content_image_add",
        EDIT_PARAM_CONTENT_IMAGE_UPDATE : "ep_content_image_update",
        EDIT_PARAM_CONTENT_IMAGE_DELETE : "ep_content_image_delete",
        EDIT_PARAM_COURSE_INTRO_VIDEO_ADD : "ep_intro_video_add",
        EDIT_PARAM_COURSE_INTRO_VIDEO_UPDATE : "ep_intro_video_update",
        EDIT_PARAM_COURSE_INTRO_VIDEO_DELETE : "ep_intro_video_delete",
        EDIT_PARAM_COURSE_HEADING_ADD : "ep_course_heading_add",
        EDIT_PARAM_COURSE_HEADING_UPDATE : "ep_course_heading_update",
        EDIT_PARAM_COURSE_HEADING_DELETE : "ep_course_heading_delete",
        EDIT_PARAM_STORE_OPEN : "ep_param_store_open",
        EDIT_PARAM_BLOG_OPEN : "ep_param_blog_open",
        EDIT_PARAM_BANNER_COVER : "ep_banner_cover",
        EDIT_PARAM_BANNER_LINK : "ep_banner_link",
        EDIT_PARAM_BANNER_TEXT : "ep_banner_text",
        EDIT_PARAM_BANNER_STATUS : "ep_banner_status",
        EDIT_PARAM_FOOTER_LINKS : "ep_footer_links",
        EDIT_PARAM_COURSE_LIST_ADD : "ep_content_course_list_add",
        EDIT_PARAM_COURSE_LIST_UPDATE : "ep_content_course_list_update",
        EDIT_PARAM_COURSE_LIST_DELETE : "ep_content_course_list_delete",
        EDIT_PARAM_POST_LIST_ADD : "ep_content_post_list_add",
        EDIT_PARAM_POST_LIST_UPDATE : "ep_content_post_list_update",
        EDIT_PARAM_POST_LIST_DELETE : "ep_content_post_list_delete",
        EDIT_PARAM_MAIN_FORM_ADD : "ep_content_main_form_add",
        EDIT_PARAM_MAIN_FORM_UPDATE : "ep_content_main_form_update",
        EDIT_PARAM_MAIN_FORM_DELETE : "ep_content_main_form_delete",
        EDIT_PARAM_POST_FORM_ADD : "ep_content_post_form_add",
        EDIT_PARAM_POST_FORM_UPDATE : "ep_content_post_form_update",
        EDIT_PARAM_POST_FORM_DELETE : "ep_content_post_form_delete",
    },

    //uploading file types
    UT:{
        UPLOAD_TYPE_WRITER_IMAGE: "ut_writer_image",
        UPLOAD_TYPE_EDUCATOR_IMAGE: "ut_educator_image",

        UPLOAD_TYPE_MAIN_PAGE_LOGO: "ut_main_page_logo",
        UPLOAD_TYPE_MAIN_PAGE_COVER: "ut_main_page_cover",
        UPLOAD_TYPE_BANNER_COVER: "ut_banner_cover",
        UPLOAD_TYPE_MAIN_PAGE_VIDEO: "ut_main_page_video",
        UPLOAD_TYPE_MAIN_PAGE_VOICE: "ut_main_page_voice",
        UPLOAD_TYPE_MAIN_PAGE_IMAGE: "ut_main_page_image",
        UPLOAD_TYPE_MAIN_PAGE_SLIDER_IMAGE: "ut_main_page_slider_image",
        UPLOAD_TYPE_COURSE_VIDEO_INTRODUCTION: "ut_course_video_introduction",

        UPLOAD_TYPE_COURSE_LOGO: "ut_course_logo",
        UPLOAD_TYPE_COURSE_COVER: "ut_course_cover",
        UPLOAD_TYPE_COURSE_VIDEO: "ut_course_video",
        UPLOAD_TYPE_COURSE_DOCUMENT: "ut_course_document",
        UPLOAD_TYPE_COURSE_VOICE: "ut_course_voice",
        UPLOAD_TYPE_COURSE_VIDEO_FREE: "ut_course_video_free",
        UPLOAD_TYPE_COURSE_DOCUMENT_FREE: "ut_course_document_free",
        UPLOAD_TYPE_COURSE_VOICE_FREE: "ut_course_voice_free",
    },

    //content types
    CT:{
        CONTENT_TYPE_VIDEO: "ct_video",
        CONTENT_TYPE_IMAGE: "ct_image",
        CONTENT_TYPE_DOCUMENT: "ct_document",
        CONTENT_TYPE_VOICE: "ct_voice",
        CONTENT_TYPE_TEXT: "ct_text",
        CONTENT_TYPE_SLIDER: "ct_slider",
    }
}