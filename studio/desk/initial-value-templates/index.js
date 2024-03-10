import T from "@sanity/base/initial-value-template-builder";
import { OLD_PAGE_ID_LIST } from "./helper/defaults";
export const getPageId = (new_id) => OLD_PAGE_ID_LIST[new_id] ?? new_id;
export const InitialValueTemplates = {
  AUTHOR_SECTION: getPageId("author_section"),
  BLOG_DETAIL_SIDE_CONTENT: getPageId("blog_detail_side_content"),
  COMPARE_FRAMEWORKS_SECTION:getPageId("compare_frameworks_section"),
  CATEGORY: getPageId("category"),
  SETTING: getPageId("setting"),
  CHOOSE_JAMSTACKY_SECTION: getPageId("choose_jamstacky_section"),
  COMPARISION_TEMPLATE: getPageId("comparision_template"),
  FOOTER: getPageId("footer"),
  FRAMEWORK: getPageId("framework"),
  FRAMEWORK_TYPE: getPageId("framework_type"),
  HEADER: getPageId("header"),
  HIRING_REQUEST: getPageId("hiring_request"),
  TESTIMONIAL_REQUEST: getPageId("testimonial_request"),
  MESSAGE_SEND_REQUEST: getPageId("message_send_request"),
  NEWS_LETTER: getPageId("news_letter"),
  PACKAGE: getPageId("package"),
  PLAN: getPageId("plan"),
  PRICE_SECTION: getPageId("price_section"),
  ALL_PAGE: getPageId("all_page"),
  BLOG_PAGE: getPageId("blog_page"),
  BLOG_DETAIL_PAGE: getPageId("blog_detail_page"),
  CASE_STUDY_DETAIL_PAGE: getPageId("case_study_detail_page"),
  CASE_STUDY_PAGE: getPageId("case_study_page"),
  ESTIMATE_PAGE: getPageId("estimatePage"),
  FOUR_O_FOUR_PAGE: getPageId("four_o_four_page"),
  HIRE_DEDICATED_PAGE: getPageId("hireDedicatedPage"),
  HOME: getPageId("home"),
  PAGESPEED: getPageId("pagespeed"),
  PRIVACY_POLICY: getPageId("privacy_policy"),
  THANK_YOU_PAGE: getPageId("thank_you_page"),
  PLAN_SERVICES_TEMPLATE: getPageId("plan_services_template"),
  BOOK_CONSULTATION_PAGE: getPageId("book_consultation_page"),
  TESTIMONIAL: getPageId("testimonial"),
  CLIENT: getPageId("client"),
  COMPARISION_DETAILS: getPageId("comparision_details_page"),
  SECTION: getPageId("section"),
  STAFF: getPageId("staff"),
  COMPARISION_MAIN_PAGE : getPageId("comparision_main_page"),
};

// new Date().toISOString(),
export const templateBuilders = [
  {
    id: InitialValueTemplates.AUTHOR_SECTION,
    title: "Author Section",
    schemaType: "author_section",
    value: {
      type: "author_section",
    },
  },
  {
    id: InitialValueTemplates.BLOG_DETAIL_SIDE_CONTENT,
    title: "Blog Detail Side Content",
    schemaType: "blog_detail_side_content",
    value: {
      type: "blog_detail_side_content",
    },
  },
  {
    id: InitialValueTemplates.CATEGORY,
    title: "Category",
    schemaType: "category",
    value: {},
  },
  {
    id: InitialValueTemplates.CHOOSE_JAMSTACKY_SECTION,
    title: "Choose Jamstacky Section",
    schemaType: "choose_jamstacky_section",
    value: {},
  },
  {
    id: InitialValueTemplates.COMPARISION_TEMPLATE,
    title: "Comparision Template",
    schemaType: "comparision_template",
    value: {},
  },
  {
    id: InitialValueTemplates.FOOTER,
    title: "Footer",
    schemaType: "footer",
    value: {},
  },
  {
    id: InitialValueTemplates.FRAMEWORK,
    title: "Framework",
    schemaType: "framework",
    value: {},
  },
  {
    id: InitialValueTemplates.FRAMEWORK_TYPE,
    title: "Framework Type",
    schemaType: "framework_type",
    value: {},
  },
  {
    id: InitialValueTemplates.HEADER,
    title: "Header",
    schemaType: "header",
    value: {},
  },
  {
    id: InitialValueTemplates.HIRING_REQUEST,
    title: "Hiring Request",
    schemaType: "hiring_request",
    value: {},
  },
  {
    id: InitialValueTemplates.TESTIMONIAL_REQUEST,
    title: "Testimonial Request",
    schemaType: "testimonial_request",
    value: {},
  },
  {
    id: InitialValueTemplates.MESSAGE_SEND_REQUEST,
    title: "MESSAGE SEND REQUEST",
    schemaType: "message_send_request",
    value: {},
  },
  {
    id: InitialValueTemplates.NEWS_LETTER,
    title: "News Letter",
    schemaType: "news_letter",
    value: {},
  },
  {
    id: InitialValueTemplates.PACKAGE,
    title: "Package",
    schemaType: "package",
    value: {},
  },
  {
    id: InitialValueTemplates.PLAN,
    title: "Plan",
    schemaType: "plan",
    value: {},
  },
  {
    id: InitialValueTemplates.PRICE_SECTION,
    title: "Price Section",
    schemaType: "price_section",
    value: {},
  },
  {
    id: InitialValueTemplates.ALL_PAGE,
    title: "ALL PAGE",
    schemaType: "all_page",
    value: {},
  },
  {
    id: InitialValueTemplates.BLOG_PAGE,
    title: "BLOG PAGE",
    schemaType: "blog_page",
    value: {},
  },
  {
    id: InitialValueTemplates.BLOG_DETAIL_PAGE,
    title: "BLOG DETAIL PAGE",
    schemaType: "blog_detail_page",
    value: {},
  },
  {
    id: InitialValueTemplates.CASE_STUDY_DETAIL_PAGE,
    title: "CASE STUDY DETAIL PAGE",
    schemaType: "case_study_detail_page",
    value: {},
  },
  {
    id: InitialValueTemplates.CASE_STUDY_PAGE,
    title: "CASE STUDY PAGE",
    schemaType: "case_study_page",
    value: {},
  },

  {
    id: InitialValueTemplates.COMPARISION_MAIN_PAGE,
    title: "COMPARISION_MAIN_PAGE",
    schemaType: "comparision_main_page",
    value: {},
  },
  {
    id: InitialValueTemplates.ESTIMATE_PAGE,
    title: "ESTIMATE PAGE",
    schemaType: "estimatePage",
    value: {},
  },
  {
    id: InitialValueTemplates.FOUR_O_FOUR_PAGE,
    title: "FOUR O FOUR PAGE",
    schemaType: "four_o_four_page",
    value: {},
  },
  {
    id: InitialValueTemplates.HIRE_DEDICATED_PAGE,
    title: "HIRE DEDICATED PAGE",
    schemaType: "hireDedicatedPage",
    value: {},
  },
  {
    id: InitialValueTemplates.HOME,
    title: "HOME",
    schemaType: "home",
    value: {},
  },
  {
    id: InitialValueTemplates.PAGESPEED,
    title: "PAGESPEED",
    schemaType: "pagespeed",
    value: {},
  },
  {
    id: InitialValueTemplates.PRIVACY_POLICY,
    title: "PRIVACY POLICY",
    schemaType: "privacy_policy",
    value: {},
  },
  {
    id: InitialValueTemplates.THANK_YOU_PAGE,
    title: "THANK YOU PAGE",
    schemaType: "thank_you_page",
    value: {},
  },
  {
    id: InitialValueTemplates.PLAN_SERVICES_TEMPLATE,
    title: "PLAN SERVICES TEMPLATE",
    schemaType: "plan_services_template",
    value: {},
  },
  {
    id: InitialValueTemplates.BOOK_CONSULTATION_PAGE,
    title: "BOOK CONSULTATION PAGE",
    schemaType: "book_consultation_page",
    value: {},
  },
  {
    id: InitialValueTemplates.TESTIMONIAL,
    title: "TESTIMONIAL",
    schemaType: "testimonial",
    value: {},
  },
  {
    id: InitialValueTemplates.CLIENT,
    title: "CLIENT",
    schemaType: "client",
    value: {},
  },
  {
    id: InitialValueTemplates.COMPARISION_DETAILS,
    title: "COMPARISION_DETAILS",
    schemaType: "comparision_details_page",
    value: {},
  },
  {
    id: InitialValueTemplates.SECTION,
    title: "SECTION",
    schemaType: "section",
    value: {},
  },
  {
    id: InitialValueTemplates.STAFF,
    title: "STAFF",
    schemaType: "staff",
    value: {},
  },
  {
    id: InitialValueTemplates.COMPARE_FRAMEWORKS_SECTION,
    title: "Compare Frameworks Section",
    schemaType: "compare_frameworks_section",
    value: {},
  },
];

export default [
  //...T.defaults(),
  ...templateBuilders.map((template) => T.template(template)),
];