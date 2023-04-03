import axios from "axios"
const tstdanielsavingdAPI = axios.create({
  baseURL: "https://tst-daniel-saving-d-70244-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return tstdanielsavingdAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tstdanielsavingdAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return tstdanielsavingdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstdanielsavingdAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tstdanielsavingdAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tstdanielsavingdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tstdanielsavingdAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tstdanielsavingdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstdanielsavingdAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return tstdanielsavingdAPI.post(`/rest-auth/registration/`, payload.data)
}
function modules_articles_article_list(payload) {
  return tstdanielsavingdAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return tstdanielsavingdAPI.post(`/modules/articles/article/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tstdanielsavingdAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tstdanielsavingdAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_articles_article_retrieve(payload) {
  return tstdanielsavingdAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return tstdanielsavingdAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_partial_update(payload) {
  return tstdanielsavingdAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_destroy(payload) {
  return tstdanielsavingdAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstdanielsavingdAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tstdanielsavingdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  modules_articles_article_list,
  modules_articles_article_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
